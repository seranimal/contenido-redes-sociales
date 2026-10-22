"""Genera los elementos gráficos de Ser Animal en SVG (letras convertidas a trazos).

Uso, desde la raíz del repo:
    pip install fonttools brotli potracer pillow numpy
    python3 marca/elementos/generar.py
    NODE_PATH=$(npm root -g) node marca/elementos/exportar-png.cjs   # PNG y catálogo

Para cambiar un elemento, editá este archivo y volvé a correrlo: así todos
los posts usan exactamente las mismas piezas.
"""

import math
from pathlib import Path

import numpy as np
import potrace
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw

RAIZ = Path(__file__).resolve().parents[2]
SALIDA = RAIZ / "marca" / "elementos" / "svg"
LOGOS = RAIZ / "marca" / "logo"
FUENTES = RAIZ / "marca" / "fuentes"

VERDE = "#9ECA1B"
VERDE_CLARO = "#CADC8A"
TEXTO = "#253027"
BORDE = "#E5E9DE"
BLANCO = "#FFFFFF"
ESPECIES = {
    "perros": ("Perros", "#8B6A55"),
    "gatos": ("Gatos", "#B8702F"),
    "roedores": ("Roedores", "#8A63B8"),
    "pajaros": ("Pájaros", "#D5202E"),
    "peces": ("Peces", "#2F7FD0"),
}
SOMBRA = '<filter id="sombra" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity=".35"/></filter>'


class Fuente:
    def __init__(self, archivo: str):
        self.font = TTFont(FUENTES / archivo)
        self.glifos = self.font.getGlyphSet()
        self.cmap = self.font.getBestCmap()
        self.upm = self.font["head"].unitsPerEm
        self.hmtx = self.font["hmtx"]

    def _glifo(self, ch: str):
        nombre = self.cmap[ord(ch)]
        return nombre, self.hmtx[nombre][0]

    def ancho(self, texto: str, tam: float, espaciado: float = 0) -> float:
        k = tam / self.upm
        return sum(self._glifo(c)[1] for c in texto) * k + espaciado * (len(texto) - 1)

    def _trazar(self, nombre: str, transformacion) -> str:
        pen = SVGPathPen(self.glifos)
        self.glifos[nombre].draw(TransformPen(pen, transformacion))
        return pen.getCommands()

    def alto_mayuscula(self, texto: str, tam: float) -> tuple[float, float]:
        """Devuelve (arriba, abajo) de los glifos respecto de la línea base, en píxeles (y hacia abajo)."""
        k = tam / self.upm
        arriba, abajo = 0.0, 0.0
        for c in texto:
            pen = BoundsPen(self.glifos)
            self.glifos[self._glifo(c)[0]].draw(pen)
            if pen.bounds:
                arriba = max(arriba, pen.bounds[3] * k)
                abajo = max(abajo, -pen.bounds[1] * k)
        return arriba, abajo

    def texto(self, texto: str, tam: float, x: float, y: float, alineacion: str = "inicio", espaciado: float = 0) -> str:
        k = tam / self.upm
        ancho = self.ancho(texto, tam, espaciado)
        cx = x - {"inicio": 0, "centro": ancho / 2, "fin": ancho}[alineacion]
        d = []
        for c in texto:
            nombre, avance = self._glifo(c)
            d.append(self._trazar(nombre, (k, 0, 0, -k, cx, y)))
            cx += avance * k + espaciado
        return "".join(d)

    def arco(self, texto: str, tam: float, cx: float, cy: float, radio: float, centro_grados: float, espaciado: float = 0) -> str:
        """Texto sobre un círculo, leído en sentido horario, con la base sobre el radio."""
        k = tam / self.upm
        total = self.ancho(texto, tam, espaciado)
        actual = -total / 2
        d = []
        for c in texto:
            nombre, avance = self._glifo(c)
            medio = actual + avance * k / 2
            ang = math.radians(centro_grados) + medio / radio
            tx, ty = -math.sin(ang), math.cos(ang)  # tangente
            ox, oy = math.cos(ang), math.sin(ang)  # hacia afuera
            px, py = cx + radio * ox, cy + radio * oy
            dx = px - avance * k / 2 * tx
            dy = py - avance * k / 2 * ty
            d.append(self._trazar(nombre, (k * tx, k * ty, k * ox, k * oy, dx, dy)))
            actual += avance * k + espaciado
        return "".join(d)


NUNITO = Fuente("nunito-latin-900-normal.woff")
DMSANS_B = Fuente("dm-sans-latin-700-normal.woff")


def svg(nombre: str, ancho: float, alto: float, cuerpo: str, carpeta: Path = SALIDA, defs: str = "") -> None:
    carpeta.mkdir(parents=True, exist_ok=True)
    defs = f"<defs>{defs}</defs>" if defs else ""
    (carpeta / f"{nombre}.svg").write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{ancho:g}" height="{alto:g}" viewBox="0 0 {ancho:g} {alto:g}">{defs}{cuerpo}</svg>\n',
        encoding="utf-8",
    )


# --- Logo e isotipo vectorizados -------------------------------------------------

def vectorizar(png: Path, escala: int) -> tuple[str, int, int]:
    """Calca la silueta de un PNG transparente. Devuelve (path, ancho, alto) en coordenadas ×escala."""
    img = Image.open(png).convert("RGBA")
    ancho, alto = img.size
    alfa = img.getchannel("A").resize((ancho * escala, alto * escala), Image.LANCZOS)
    # potracer calca las zonas en False: se le pasa la máscara invertida.
    mapa = np.asarray(alfa) <= 127
    curvas = potrace.Bitmap(mapa).trace(turdsize=4 * escala, alphamax=1.0, opticurve=True, opttolerance=0.2)
    d = []
    for curva in curvas:
        d.append(f"M{curva.start_point.x:.1f},{curva.start_point.y:.1f}")
        for s in curva.segments:
            if s.is_corner:
                d.append(f"L{s.c.x:.1f},{s.c.y:.1f}L{s.end_point.x:.1f},{s.end_point.y:.1f}")
            else:
                d.append(f"C{s.c1.x:.1f},{s.c1.y:.1f} {s.c2.x:.1f},{s.c2.y:.1f} {s.end_point.x:.1f},{s.end_point.y:.1f}")
        d.append("Z")
    return "".join(d), ancho, alto


ISO_D, ISO_W, ISO_H = vectorizar(LOGOS / "isotipo-blanco.png", 4)
LOGO_D, LOGO_W, LOGO_H = vectorizar(LOGOS / "logo-blanco-transparente.png", 2)


def isotipo(x: float, y: float, ancho: float, color: str) -> str:
    s = ancho / (ISO_W * 4)
    return f'<path transform="translate({x:.2f},{y:.2f}) scale({s:.5f})" fill="{color}" fill-rule="evenodd" d="{ISO_D}"/>'


def logos() -> None:
    for nombre, color in (("blanco", BLANCO), ("verde", VERDE)):
        svg(f"isotipo-{nombre}", ISO_W, ISO_H, isotipo(0, 0, ISO_W, color), LOGOS)
        s = 1 / 2
        svg(f"logo-{nombre}", LOGO_W, LOGO_H, f'<path transform="scale({s})" fill="{color}" fill-rule="evenodd" d="{LOGO_D}"/>', LOGOS)


# --- Elementos ------------------------------------------------------------------

def deslizar() -> None:
    """Sticker «Deslizá»: va en la primera slide de todo carrusel, abajo a la derecha (170 px)."""
    for nombre, color in (("blanco", BLANCO), ("verde", VERDE), ("oscuro", TEXTO)):
        texto = NUNITO.arco("DESLIZÁ", 26, 85, 88, 56, -90, espaciado=4)
        flecha = (
            f'<g fill="none" stroke="{color}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">'
            '<path d="M54 108 H114"/><path d="M98 92 L114 108 L98 124"/></g>'
        )
        filtro = ' filter="url(#sombra)"' if nombre == "blanco" else ""
        svg(f"deslizar-{nombre}", 170, 170, f'<g{filtro}><path fill="{color}" d="{texto}"/>{flecha}</g>', defs=SOMBRA if filtro else "")


def lineas() -> None:
    """Línea separadora de 4 px, de borde a borde (estilo número grande)."""
    for nombre, color in (("blanca", BLANCO), ("verde", VERDE)):
        svg(f"linea-{nombre}", 1080, 4, f'<rect width="1080" height="4" fill="{color}"/>')


def pestana() -> None:
    """Pestaña verde con isotipo, arriba a la izquierda (x 70, y 0)."""
    forma = f'<path fill="{VERDE}" d="M0 0H150V148Q150 170 128 170H22Q0 170 0 148Z"/>'
    alto_iso = ISO_H * 96 / ISO_W
    svg("pestana-isotipo", 150, 170, forma + isotipo(27, 170 - 26 - alto_iso, 96, BLANCO))


def marco() -> None:
    """Marco redondeado de la portada «pregunta enmarcada» (lienzo completo 1080×1350)."""
    cuerpo = (
        f'<rect x="75" y="75" width="930" height="1112" rx="53" fill="none" stroke="{VERDE}" stroke-width="6"/>'
        + isotipo(540 - 52, 108, 104, VERDE)
    )
    svg("marco-pregunta", 1080, 1350, cuerpo)


def insignias() -> None:
    """Número en círculo (92 px) para las slides de datos."""
    for variante, fondo, color in (("verde", VERDE, BLANCO), ("oscura", TEXTO, VERDE)):
        for n in range(1, 10):
            arriba, abajo = NUNITO.alto_mayuscula(str(n), 58)
            base = 46 + (arriba - abajo) / 2
            d = NUNITO.texto(str(n), 58, 46, base, "centro")
            svg(f"insignia-{variante}-{n}", 92, 92, f'<circle cx="46" cy="46" r="46" fill="{fondo}"/><path fill="{color}" d="{d}"/>')


def callouts() -> None:
    """Línea con punto para señalar partes de un producto (estilo ficha)."""
    for nombre, color in (("blanco", BLANCO), ("oscuro", TEXTO)):
        svg(f"callout-vertical-{nombre}", 20, 230, f'<rect x="8.5" y="0" width="3" height="216" fill="{color}"/><circle cx="10" cy="216" r="7" fill="{color}"/>')
        svg(f"callout-horizontal-{nombre}", 230, 20, f'<rect x="0" y="8.5" width="216" height="3" fill="{color}"/><circle cx="216" cy="10" r="7" fill="{color}"/>')


def sellos() -> None:
    """Sello circular para destacar un producto (producto héroe)."""
    for nombre, texto in (("nuevo", "NUEVO"), ("edicion-limitada", "EDICIÓN LIMITADA")):
        tam = 26
        while NUNITO.ancho(texto, tam, 3) > math.pi * 84 * 0.95:
            tam -= 1
        arco = NUNITO.arco(texto, tam, 120, 120, 80, -90, espaciado=3)
        cuerpo = (
            f'<circle cx="120" cy="120" r="110" fill="{VERDE}" stroke="{BLANCO}" stroke-width="7"/>'
            f'<path fill="{BLANCO}" d="{arco}"/>' + isotipo(120 - 42, 120 - 42 * ISO_H / ISO_W + 8, 84, BLANCO)
        )
        svg(f"sello-{nombre}", 240, 240, cuerpo)


def pastilla(nombre: str, texto: str, fuente: Fuente, tam: float, fondo: str, color: str, borde: str | None = None, pad: float = 30, alto: float = 64) -> None:
    ancho = fuente.ancho(texto, tam) + pad * 2
    arriba, abajo = fuente.alto_mayuscula("Hx", tam)
    base = alto / 2 + (arriba - abajo) / 2
    trazo = f' stroke="{borde}" stroke-width="2"' if borde else ""
    inset = 1 if borde else 0
    cuerpo = (
        f'<rect x="{inset}" y="{inset}" width="{ancho - 2 * inset:.1f}" height="{alto - 2 * inset}" rx="{alto / 2 - inset}" fill="{fondo}"{trazo}/>'
        f'<path fill="{color}" d="{fuente.texto(texto, tam, ancho / 2, base, "centro")}"/>'
    )
    svg(nombre, round(ancho, 1), alto, cuerpo)


def pastillas() -> None:
    for clave, (texto, color) in ESPECIES.items():
        pastilla(f"chip-{clave}", texto, DMSANS_B, 28, BLANCO, color, BORDE, pad=26, alto=56)
    pastilla("pastilla-seranimal", "@seranimal", NUNITO, 44, TEXTO, BLANCO, pad=52, alto=96)
    pastilla("pastilla-whatsapp", "Pedidos y envíos: 091 380 000", DMSANS_B, 32, TEXTO, BLANCO, pad=40, alto=80)
    pastilla("pastilla-pedilo", "Pedilo por WhatsApp", NUNITO, 38, VERDE, TEXTO, pad=44, alto=84)
    pastilla("pastilla-atencion", "Atención al cliente: 092 121 212", DMSANS_B, 32, TEXTO, BLANCO, pad=40, alto=80)
    # Etiquetas para el estilo «aviso» (solo texto sobre fondo claro o verde).
    pastilla("etiqueta-aviso", "Aviso", NUNITO, 36, TEXTO, VERDE, pad=40, alto=72)
    pastilla("etiqueta-novedad", "Novedad", NUNITO, 36, TEXTO, VERDE, pad=40, alto=72)


def asistente() -> None:
    """Perrito asistente en círculo con borde verde (atención al cliente)."""
    k = 4
    tam = 240 * k
    base = Image.new("RGBA", (tam, tam), (0, 0, 0, 0))
    cara = Image.open(RAIZ / "marca" / "ilustraciones" / "asistente.png").convert("RGBA").resize((tam, tam), Image.LANCZOS)
    mascara = Image.new("L", (tam, tam), 0)
    ImageDraw.Draw(mascara).ellipse((0, 0, tam - 1, tam - 1), fill=255)
    base.paste(cara, (0, 0), mascara)
    ImageDraw.Draw(base).ellipse((4 * k, 4 * k, tam - 4 * k, tam - 4 * k), outline=VERDE, width=8 * k)
    destino = RAIZ / "marca" / "elementos" / "png"
    destino.mkdir(parents=True, exist_ok=True)
    base.resize((480, 480), Image.LANCZOS).save(destino / "asistente-circulo.png")


if __name__ == "__main__":
    logos()
    deslizar()
    lineas()
    pestana()
    marco()
    insignias()
    callouts()
    sellos()
    pastillas()
    asistente()
    print("Listo:", len(list(SALIDA.glob("*.svg"))), "elementos en", SALIDA)
