"""Recorta las bolsas de Brit: saca el fondo (rembg si hace falta), ajusta al contorno y
deja un PNG transparente de 1400 px de alto como máximo en esta carpeta.
Uso: python3 recortar.py   (lee original/, escribe <clave>.png)"""
from pathlib import Path

import numpy as np
from PIL import Image

AQUI = Path(__file__).parent
ALTO = 1400


def tiene_transparencia(im: Image.Image) -> bool:
    if im.mode != "RGBA":
        return False
    a = np.asarray(im.getchannel("A"))
    return (a < 250).mean() > 0.05


def alfa_solida(a: Image.Image) -> Image.Image:
    """La bolsa es opaca: rellena los huecos y semitransparencias del recorte y suaviza el borde."""
    from PIL import ImageFilter
    from scipy.ndimage import binary_fill_holes

    mascara = binary_fill_holes(np.asarray(a) > 40)
    return Image.fromarray((mascara * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))


def main() -> None:
    from rembg import new_session, remove

    sesion = None
    for f in sorted((AQUI / "original").iterdir()):
        im = Image.open(f)
        im = im.convert("RGBA")
        if tiene_transparencia(im):
            alfa = im.getchannel("A")
        else:
            # Del recorte se usa solo la silueta: los colores salen de la foto original.
            sesion = sesion or new_session("isnet-general-use")
            alfa = remove(im, session=sesion).getchannel("A")
        im.putalpha(alfa_solida(alfa))
        caja = im.getchannel("A").point(lambda v: 255 if v > 24 else 0).getbbox()
        im = im.crop(caja)
        if im.height > ALTO:
            im = im.resize((round(im.width * ALTO / im.height), ALTO), Image.LANCZOS)
        im.save(AQUI / f"{f.stem}.png")
        print(f.stem, im.size)


if __name__ == "__main__":
    main()
