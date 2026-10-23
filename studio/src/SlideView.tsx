import { forwardRef, type CSSProperties } from "react";
import type { Foto, Slide } from "./tipos";

// Achica el título cuando es largo, para que no se salga de la zona prevista.
function tam(texto: string, base: number, largo: number) {
  if (texto.length <= largo) return base;
  return Math.max(Math.round(base * 0.62), Math.round((base * largo) / texto.length));
}

function FotoEncuadrada({ foto, slide, estilo }: { foto: Foto | null; slide: Slide; estilo?: CSSProperties }) {
  if (!foto) return <div className="vacio-foto">Elegí una foto</div>;
  return (
    <img
      src={foto.src}
      crossOrigin={foto.downloadLocation ? "anonymous" : undefined}
      alt=""
      style={{
        objectPosition: `${slide.fotoX}% ${slide.fotoY}%`,
        transform: `scale(${slide.fotoZoom})`,
        ...estilo,
      }}
    />
  );
}

// Sticker de la biblioteca de marca (marca/elementos/), copiado a /elementos al compilar.
function Deslizar({ verde = false }: { verde?: boolean }) {
  return <img className={`deslizar${verde ? " verde" : ""}`} src={`/elementos/deslizar-${verde ? "verde" : "blanco"}.svg`} alt="" />;
}

// Las palabras entre *asteriscos* se destacan en otro color.
function Destacado({ texto }: { texto: string }) {
  return (
    <>
      {texto.split(/(\*[^*]+\*)/).map((parte, i) =>
        parte.startsWith("*") && parte.endsWith("*") && parte.length > 2 ? <em key={i}>{parte.slice(1, -1)}</em> : parte,
      )}
    </>
  );
}

// Etiqueta de serie (pilar) de la biblioteca de elementos. Puede faltar en proyectos viejos.
function Etiqueta({ slide, clase, porDefecto = "" }: { slide: Slide; clase: string; porDefecto?: string }) {
  const etiqueta = slide.etiqueta || porDefecto;
  if (!etiqueta) return null;
  return <img className={clase} src={`/elementos/etiqueta-${etiqueta}.svg`} alt="" />;
}

// Muestra de color para la ficha de producto. Nombres en minúscula, sin tildes.
const MUESTRAS: Record<string, string> = {
  negro: "#1f1f1f", blanco: "#ffffff", gris: "#9a9a9a", azul: "#2f6fd0", celeste: "#6ec6e6", turquesa: "#3cc4bf",
  verde: "#4caf50", rojo: "#d5202e", naranja: "#f26b21", rosa: "#f28ab2", fucsia: "#e0218a", violeta: "#8a63b8",
  lila: "#b39ddb", amarillo: "#f6c945", marron: "#8b5a3c", beige: "#d9c4a3", bordo: "#7b1e2b",
};
function muestra(nombre: string) {
  const clave = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(" ")[0];
  return MUESTRAS[clave] ?? "#cccccc";
}

// Cada renglón del título va en su propio globo. Se corta con Enter; si no, cada ~16 letras.
function renglones(titulo: string) {
  if (titulo.includes("\n")) return titulo.split("\n").map((r) => r.trim()).filter(Boolean);
  const salida: string[] = [];
  for (const palabra of titulo.split(/\s+/).filter(Boolean)) {
    const ultimo = salida[salida.length - 1];
    if (ultimo && (ultimo + " " + palabra).length <= 16) salida[salida.length - 1] = ultimo + " " + palabra;
    else salida.push(palabra);
  }
  return salida;
}

interface Props {
  slide: Slide;
  /** Foto de la portada, para reutilizarla en el cierre si este no tiene una propia. */
  fotoPortada: Foto | null;
  /** Mostrar el sticker «Deslizá» (solo en la portada de carruseles de más de una slide). */
  conDeslizar: boolean;
}

export const SlideView = forwardRef<HTMLDivElement, Props>(function SlideView({ slide, fotoPortada, conDeslizar }, ref) {
  const { tipo } = slide;
  const fondo = slide.fondo === "verde" ? "bg-verde" : "bg-blanco";

  if (tipo === "portada-numero") {
    return (
      <div ref={ref} className="slide">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <img className="pestana" src="/elementos/pestana-isotipo.svg" alt="" />
        {conDeslizar && <div style={{ position: "absolute", right: 0, bottom: 280 }}><Deslizar /></div>}
        <div className="banda" />
        <div className="portada-num">
          {slide.numero > 0 && <div className="h n sombra">{slide.numero}</div>}
          <div className="h t sombra" style={{ fontSize: tam(slide.titulo, 66, 40) }}>{slide.titulo}</div>
        </div>
      </div>
    );
  }

  if (tipo === "portada-titulo" || tipo === "portada-titulo-verde") {
    const verde = tipo === "portada-titulo-verde";
    return (
      <div ref={ref} className="slide">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className={`h titulo-arriba${verde ? " verde" : " sombra"}`} style={{ fontSize: tam(slide.titulo, verde ? 108 : 94, 18) }}>
          {slide.titulo}
        </div>
        {slide.texto && <div className="h linea-abajo sombra">{slide.texto}</div>}
        {conDeslizar && (slide.texto ? <div style={{ position: "absolute", right: 0, bottom: 130 }}><Deslizar /></div> : <Deslizar />)}
      </div>
    );
  }

  if (tipo === "portada-profundidad") {
    // Estilo 1: el título pasa por detrás del sujeto. El recorte se dibuja encima con el mismo encuadre que la foto.
    return (
      <div ref={ref} className="slide">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className="h titulo-arriba profundo sombra" style={{ fontSize: tam(slide.titulo, 100, 16), top: slide.numero > 0 ? slide.numero : undefined }}>{slide.titulo}</div>
        {slide.recorte && (
          <div className="marco-foto">
            <img src={slide.recorte} alt="" style={{ objectPosition: `${slide.fotoX}% ${slide.fotoY}%`, transform: `scale(${slide.fotoZoom})` }} />
          </div>
        )}
        {slide.texto && <div className="h linea-abajo sombra">{slide.texto}</div>}
        {conDeslizar && (slide.texto ? <div style={{ position: "absolute", right: 0, bottom: 130 }}><Deslizar /></div> : <Deslizar />)}
      </div>
    );
  }

  if (tipo === "portada-pregunta") {
    return (
      <div ref={ref} className="slide">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className="degradado" />
        <div className="marco">
          <img className="iso" src="/brand/isotipo-verde.png" alt="" />
          <div className="h pregunta sombra" style={{ fontSize: tam(slide.titulo, 70, 40) }}>{slide.titulo}</div>
        </div>
        {conDeslizar && <Deslizar verde />}
      </div>
    );
  }

  if (tipo === "portada-foto") {
    return (
      <div ref={ref} className="slide">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        {conDeslizar && <Deslizar />}
      </div>
    );
  }

  if (tipo === "portada-globos") {
    const lineas = renglones(slide.titulo);
    return (
      <div ref={ref} className="slide">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className="globos" style={{ fontSize: lineas.length > 4 ? 50 : 58 }}>
          {lineas.map((linea, i) => (
            <div key={i} className="h globo" style={{ marginLeft: i % 2 ? 56 : 0 }}>
              {linea}
              {i === lineas.length - 1 && slide.especie && <img className="asoma" src={`/elementos/personaje-${slide.especie}.png`} alt="" />}
            </div>
          ))}
        </div>
        {conDeslizar && <Deslizar />}
      </div>
    );
  }

  if (tipo === "foto-titulo-arriba" || tipo === "foto-titulo-abajo") {
    const abajo = tipo === "foto-titulo-abajo";
    return (
      <div ref={ref} className={`slide titulo-foto${abajo ? " abajo" : ""}`}>
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className="tf-velo" />
        {abajo && <Etiqueta slide={slide} clase="tf-etiqueta arriba" />}
        <div className="tf-bloque">
          {!abajo && <Etiqueta slide={slide} clase="tf-etiqueta" />}
          <div className="h tf-t" style={{ fontSize: tam(slide.titulo, 76, 46) }}><Destacado texto={slide.titulo} /></div>
          {abajo && slide.texto && <div className="tf-x">{slide.texto}</div>}
        </div>
        {!abajo && slide.texto && (
          <div className="tf-pie">
            <div>{slide.texto}</div>
          </div>
        )}
        {conDeslizar && <Deslizar />}
      </div>
    );
  }

  if (tipo === "foto-cita") {
    return (
      <div ref={ref} className="slide titulo-foto cita">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className="tf-velo" />
        <div className="tf-bloque">
          <div className="h cita-comillas">“</div>
          <div className="h tf-t" style={{ fontSize: tam(slide.titulo, 74, 56) }}>{slide.titulo}</div>
        </div>
        {slide.texto && (
          <div className="tf-pie">
            <div>{slide.texto}</div>
          </div>
        )}
        {conDeslizar && <Deslizar />}
      </div>
    );
  }

  if (tipo === "mosaico") {
    const palabras = slide.titulo.split(/\s+/).filter(Boolean);
    return (
      <div ref={ref} className="slide mosaico bg-blanco">
        <img className="mo-logo" src="/brand/logo-verde.png" alt="Ser Animal" />
        <div className="mo-grilla" style={{ fontSize: palabras.length > 9 ? 76 : 92 }}>
          {palabras.map((p, i) => (
            <div key={i} className="h mo-ficha">{p}</div>
          ))}
          {slide.especie && (
            <div className="mo-ficha personaje"><img src={`/elementos/personaje-${slide.especie}.png`} alt="" /></div>
          )}
        </div>
        {slide.texto && <div className="mo-x">{slide.texto}</div>}
        {conDeslizar && <img className="deslizar" src="/elementos/deslizar-verde.svg" alt="" />}
      </div>
    );
  }

  if (tipo === "foto-panel") {
    const verde = slide.fondo === "verde";
    return (
      <div ref={ref} className={`slide ${fondo}`}>
        <div className="fp-foto"><div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div></div>
        <img className="pestana" src="/elementos/pestana-isotipo.svg" alt="" />
        <div className="fp-panel">
          <Etiqueta slide={slide} clase="fp-etiqueta" />
          <div className="h fp-t" style={{ fontSize: tam(slide.titulo, 66, 44) }}>{slide.titulo}</div>
          {slide.texto && <div className="fp-x">{slide.texto}</div>}
        </div>
        {/* En este estilo la flecha cumple la función del «Deslizá». */}
        <img className="fp-flecha" src={`/elementos/flecha-circulo-${verde ? "oscuro" : "verde"}.svg`} alt="" />
      </div>
    );
  }

  if (tipo === "texto-editorial") {
    // Sin flecha: el «Deslizá» ya indica que hay más (no se repite la indicación).
    const pie = slide.texto;
    return (
      <div ref={ref} className={`slide editorial ${fondo}`}>
        {slide.especie ? (
          <img className="ed-icono personaje" src={`/elementos/personaje-${slide.especie}.png`} alt="" />
        ) : (
          <img className="ed-icono" src={slide.fondo === "verde" ? "/brand/isotipo-blanco.png" : "/brand/isotipo-verde.png"} alt="" />
        )}
        <div className="ed-cuerpo">
          <Etiqueta slide={slide} clase="ed-etiqueta" />
          <div className="h ed-t" style={{ fontSize: tam(slide.titulo, 92, 60) }}><Destacado texto={slide.titulo} /></div>
        </div>
        {pie && (
          <div className="ed-pie">
            <div>{pie}</div>
          </div>
        )}
        {conDeslizar && <img className="deslizar" src={`/elementos/deslizar-${slide.fondo === "verde" ? "blanco" : "verde"}.svg`} alt="" />}
      </div>
    );
  }

  if (tipo === "foto-enmarcada") {
    const verde = slide.fondo === "verde";
    return (
      <div ref={ref} className={`slide enmarcada ${fondo}`}>
        <div className="fe-arriba">
          <Etiqueta slide={slide} clase="fe-etiqueta" />
          <div className="h fe-t" style={{ fontSize: tam(slide.titulo, 68, 44) }}>{slide.titulo}</div>
        </div>
        <div className="fe-foto"><div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div></div>
        <div className="fe-esquina a" /><div className="fe-esquina b" /><div className="fe-esquina c" /><div className="fe-esquina d" />
        <img className="fe-logo" src={verde ? "/brand/logo-blanco.png" : "/brand/logo-verde.png"} alt="Ser Animal" />
        {conDeslizar && <img className="deslizar" src={`/elementos/deslizar-${verde ? "blanco" : "verde"}.svg`} alt="" />}
      </div>
    );
  }

  if (tipo === "retrato") {
    // Pastilla de nombres en dos tonos: «Sofía *y Tango*» → [Sofía][y Tango]
    const nombres = slide.titulo.split(/(\*[^*]+\*)/).map((p) => p.trim()).filter(Boolean);
    return (
      <div ref={ref} className="slide retrato">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className="rt-velo" />
        <div className="rt-linea" />
        <Etiqueta slide={slide} clase="rt-etiqueta" />
        {slide.texto && (
          <div className="rt-cita-caja">
            {/* El personaje va antes que el globo para quedar detrás de él */}
            {slide.especie && <img className="asoma" src={`/elementos/personaje-${slide.especie}.png`} alt="" />}
            <div className="rt-cita">{slide.texto}</div>
          </div>
        )}
        {nombres.length > 0 && (
          <div className="h rt-nombre">
            {nombres.map((p, i) => (
              <div key={i} className={p.startsWith("*") ? "b" : "a"}>{p.replace(/\*/g, "")}</div>
            ))}
          </div>
        )}
        {conDeslizar && <img className="deslizar rt-deslizar" src="/elementos/deslizar-blanco.svg" alt="" />}
      </div>
    );
  }

  // --- Armados modulares (lógica Petz): un mismo sistema, un armado distinto en cada slide ---

  if (tipo === "portada-texto") {
    // Solo texto en una tarjeta, con el personaje (o el isotipo) y una flecha fina que invita a deslizar.
    const verde = slide.fondo === "verde";
    return (
      <div ref={ref} className={`slide ptx ${fondo}`}>
        <div className="ptx-tarjeta">
          {slide.especie ? (
            <img className="ptx-icono personaje" src={`/elementos/personaje-${slide.especie}.png`} alt="" />
          ) : (
            <img className="ptx-icono" src="/brand/isotipo-verde.png" alt="" />
          )}
          <div className="h ptx-t" style={{ fontSize: tam(slide.titulo, 104, 44) }}><Destacado texto={slide.titulo} /></div>
          <div className="ptx-pie">
            <span>{slide.texto}</span>
            <img src="/elementos/flecha-linea-oscura.svg" alt="" />
          </div>
        </div>
        {!verde && <img className="ptx-logo" src="/brand/logo-verde.png" alt="Ser Animal" />}
      </div>
    );
  }

  if (tipo === "foto-tarjeta") {
    // Foto a sangre con una tarjeta clara abajo (título + bajada). La flecha en círculo hace de «Deslizá».
    return (
      <div ref={ref} className="slide ftj">
        <div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div>
        <div className="ftj-tarjeta">
          <div className="h ftj-t" style={{ fontSize: tam(slide.titulo, 58, 40) }}><Destacado texto={slide.titulo} /></div>
          {slide.texto && <div className="ftj-x">{slide.texto}</div>}
          {conDeslizar && <img className="ftj-flecha" src="/elementos/flecha-circulo-verde.svg" alt="" />}
        </div>
      </div>
    );
  }

  if (tipo === "panel-foto") {
    // Panel de texto arriba (título + párrafo) y la foto a sangre abajo.
    return (
      <div ref={ref} className={`slide pnf ${fondo}`}>
        <div className="pnf-panel">
          <div className="pnf-cab">
            {slide.numero > 0 && <div className="h insignia pnf-num">{slide.numero}</div>}
            <div className="h pnf-t" style={{ fontSize: tam(slide.titulo, 68, 32) }}><Destacado texto={slide.titulo} /></div>
          </div>
          {slide.texto && <div className="pnf-x">{slide.texto}</div>}
        </div>
        <div className="pnf-foto"><div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div></div>
        {conDeslizar && <img className="pnf-flecha" src="/elementos/flecha-circulo-verde.svg" alt="" />}
      </div>
    );
  }

  if (tipo === "marco-redondo") {
    // Fondo de marca, título grande con bajada y la foto enmarcada con bordes redondeados.
    return (
      <div ref={ref} className={`slide mrd ${fondo}`}>
        <div className="mrd-texto">
          <div className="h mrd-t" style={{ fontSize: tam(slide.titulo, 76, 40) }}><Destacado texto={slide.titulo} /></div>
          {slide.texto && <div className="mrd-x">{slide.texto}</div>}
        </div>
        <div className="mrd-foto"><div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div></div>
        {conDeslizar && <img className="mrd-flecha" src={`/elementos/flecha-circulo-${slide.fondo === "verde" ? "oscuro" : "verde"}.svg`} alt="" />}
      </div>
    );
  }

  if (tipo === "tarjetas") {
    // Tarjetas apiladas. Cada bloque del texto (separados por una línea en blanco): título, bajada y párrafo.
    const bloques = slide.texto
      .split(/\n\s*\n/)
      .map((b) => b.split("\n").map((r) => r.trim()).filter(Boolean))
      .filter((b) => b.length > 0)
      .slice(0, 3);
    const chica = bloques.length > 2;
    return (
      <div ref={ref} className={`slide tjs ${fondo}${chica ? " chica" : ""}`}>
        {slide.titulo && <div className="h tjs-t" style={{ fontSize: tam(slide.titulo, 72, 30) }}><Destacado texto={slide.titulo} /></div>}
        <div className="tjs-lista">
          {bloques.map(([titulo, bajada, ...parrafo], i) => (
            <div key={i} className="tjs-tarjeta">
              <div className="tjs-cab">
                <div className="h insignia tjs-num">{i + 1}</div>
                <div className="h tjs-tt">{titulo}</div>
              </div>
              {bajada && <div className="tjs-bajada">{bajada}</div>}
              {parrafo.length > 0 && <div className="tjs-p">{parrafo.join(" ")}</div>}
            </div>
          ))}
        </div>
        {conDeslizar && <img className="deslizar" src={`/elementos/deslizar-${slide.fondo === "verde" ? "blanco" : "verde"}.svg`} alt="" />}
      </div>
    );
  }

  if (tipo === "iconos-foto") {
    // Banda con una fila de íconos de la biblioteca (renglones «icono: etiqueta») y la foto abajo.
    const items = slide.texto
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => {
        const [icono, ...resto] = r.split(":");
        return { icono: icono.trim().toLowerCase(), etiqueta: resto.join(":").trim() };
      })
      .slice(0, 4);
    return (
      <div ref={ref} className={`slide icf ${fondo}`}>
        <div className="icf-banda">
          {slide.titulo && <div className="h icf-t" style={{ fontSize: tam(slide.titulo, 54, 36) }}><Destacado texto={slide.titulo} /></div>}
          <div className="icf-fila" style={{ gridTemplateColumns: `repeat(${Math.max(items.length, 1)}, 1fr)` }}>
            {items.map((it) => (
              <div key={it.icono + it.etiqueta} className="icf-item">
                <img src={`/elementos/icono-${it.icono}-oscuro.svg`} alt="" />
                <div className="h">{it.etiqueta}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="icf-foto"><div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div></div>
      </div>
    );
  }

  if (tipo === "lista-linea") {
    // Título, foto del producto (opcional) y una lista con puntos unidos por una línea.
    const items = slide.texto.split("\n").map((r) => r.trim()).filter(Boolean).slice(0, 6);
    return (
      <div ref={ref} className={`slide lsl ${fondo}${slide.foto ? " con-foto" : ""}`}>
        <div className="h lsl-t" style={{ fontSize: tam(slide.titulo, 72, 40) }}><Destacado texto={slide.titulo} /></div>
        <div className="lsl-cuerpo">
          <ul className="lsl-lista">
            {items.map((it) => <li key={it}>{it}</li>)}
          </ul>
          {slide.foto && (
            <div className="lsl-foto">
              <img src={slide.foto.src} alt="" style={{ transform: `scale(${slide.fotoZoom})`, objectPosition: `${slide.fotoX}% ${slide.fotoY}%` }} />
            </div>
          )}
        </div>
        <img className="iso-esquina" src={slide.fondo === "verde" ? "/brand/isotipo-blanco.png" : "/brand/isotipo-verde.png"} alt="" />
      </div>
    );
  }

  if (tipo === "dato") {
    return (
      <div ref={ref} className={`slide ${fondo}`}>
        <div className="tarjeta"><div className="marco-foto"><FotoEncuadrada foto={slide.foto} slide={slide} /></div></div>
        {slide.numero > 0 && <div className="h insignia">{slide.numero}</div>}
        <div className="bloque" style={{ top: slide.numero > 0 ? 960 : 850 }}>
          <div className="h tt" style={{ fontSize: tam(slide.titulo, 64, 28) }}>{slide.titulo}</div>
          <div className="tx">{slide.texto}</div>
        </div>
        <img className="iso-esquina" src={slide.fondo === "verde" ? "/brand/isotipo-blanco.png" : "/brand/isotipo-verde.png"} alt="" />
      </div>
    );
  }

  if (tipo === "texto") {
    return (
      <div ref={ref} className={`slide ${fondo}`}>
        {slide.numero > 0 && <div className="h num-gigante">{slide.numero}</div>}
        <div className="bloque" style={{ top: slide.numero > 0 ? 470 : 300 }}>
          <div className="h tt" style={{ fontSize: tam(slide.titulo, 92, 24) }}>{slide.titulo}</div>
          <div className="tx" style={{ fontSize: 44 }}>{slide.texto}</div>
        </div>
        <img className="iso-esquina" src={slide.fondo === "verde" ? "/brand/isotipo-blanco.png" : "/brand/isotipo-verde.png"} alt="" />
      </div>
    );
  }

  if (tipo === "producto") {
    return (
      <div ref={ref} className={`slide producto ${fondo}`}>
        <div className="prod-texto">
          <div className="h" style={{ fontSize: tam(slide.titulo, 92, 22) }}>{slide.titulo}</div>
          {slide.texto && <div className="h" style={{ fontSize: 50, marginTop: 18, fontWeight: 800 }}>{slide.texto}</div>}
        </div>
        <div className="prod-foto">
          {slide.foto ? (
            <img src={slide.foto.src} alt="" style={{ transform: `scale(${slide.fotoZoom})`, objectPosition: `${slide.fotoX}% ${slide.fotoY}%` }} />
          ) : (
            <div className="vacio-foto" style={{ borderRadius: 28 }}>Subí la foto del producto</div>
          )}
        </div>
        <img className="iso-esquina" src={slide.fondo === "verde" ? "/brand/isotipo-blanco.png" : "/brand/isotipo-verde.png"} alt="" />
      </div>
    );
  }

  if (tipo === "producto-claro") {
    return (
      <div ref={ref} className="slide producto-claro">
        <div className="pc-texto">
          <Etiqueta slide={slide} clase="pc-etiqueta" />
          <div className="h" style={{ fontSize: tam(slide.titulo, 84, 24) }}>{slide.titulo}</div>
          {slide.texto && <div className="pc-bajada">{slide.texto}</div>}
        </div>
        <div className="pc-foto">
          {slide.foto ? (
            <img src={slide.foto.src} alt="" style={{ transform: `scale(${slide.fotoZoom})`, objectPosition: `${slide.fotoX}% ${slide.fotoY}%` }} />
          ) : (
            <div className="vacio-foto" style={{ borderRadius: 28 }}>Subí la foto del producto</div>
          )}
        </div>
        {conDeslizar ? (
          <img className="deslizar" src="/elementos/deslizar-verde.svg" alt="" />
        ) : (
          <img className="iso-esquina" src="/brand/isotipo-verde.png" alt="" />
        )}
      </div>
    );
  }

  if (tipo === "producto-ficha") {
    const colores = (slide.colores ?? "").split(",").map((c) => c.trim()).filter(Boolean);
    // Primer renglón del texto: descripción corta. Los demás: datos clave en pastillas.
    const [descripcion, ...datos] = slide.texto.split("\n").map((r) => r.trim()).filter(Boolean);
    return (
      <div ref={ref} className="slide ficha">
        <div className="fi-tarjeta">
          <Etiqueta slide={slide} clase="fi-etiqueta" />
          <div className="fi-foto">
            {slide.foto ? (
              <img src={slide.foto.src} alt="" style={{ transform: `scale(${slide.fotoZoom})`, objectPosition: `${slide.fotoX}% ${slide.fotoY}%` }} />
            ) : (
              <div className="vacio-foto" style={{ borderRadius: 28 }}>Subí la foto del producto</div>
            )}
          </div>
          {colores.length > 0 && (
            <div className="fi-colores">
              {colores.map((c) => (
                <div key={c} className="fi-color">
                  <div className="fi-punto" style={{ background: muestra(c) }} />
                  <div>{c}</div>
                </div>
              ))}
            </div>
          )}
          <div className="h fi-t" style={{ fontSize: tam(slide.titulo, 72, 22) }}>{slide.titulo}</div>
          {descripcion && <div className="fi-x">{descripcion}</div>}
          {datos.length > 0 && (
            <div className="fi-datos">
              {datos.map((d) => <div key={d} className="fi-dato">{d}</div>)}
            </div>
          )}
        </div>
        {conDeslizar && <img className="deslizar" src="/elementos/deslizar-blanco.svg" alt="" />}
      </div>
    );
  }

  if (tipo === "aviso") {
    const verde = slide.fondo === "verde";
    return (
      <div ref={ref} className={`slide aviso ${fondo}`}>
        <img className="aviso-logo" src={verde ? "/brand/logo-blanco.png" : "/brand/logo-verde.png"} alt="Ser Animal" />
        <div className="aviso-cuerpo">
          <Etiqueta slide={slide} clase="aviso-etiqueta" porDefecto="aviso" />
          <div className="h aviso-t" style={{ fontSize: tam(slide.titulo, 100, 34) }}><Destacado texto={slide.titulo} /></div>
          {slide.texto && <div className="aviso-x">{slide.texto}</div>}
        </div>
        {conDeslizar && <img className="deslizar" src={`/elementos/deslizar-${verde ? "blanco" : "verde"}.svg`} alt="" />}
      </div>
    );
  }

  // Cierre
  const fotoCierre = slide.foto ?? fotoPortada;
  return (
    <div ref={ref} className="slide bg-verde">
      <img className="cierre-logo" src="/brand/logo-blanco.png" alt="Ser Animal" />
      <div className="h cierre-t" style={{ fontSize: tam(slide.titulo, 96, 18) }}>{slide.titulo}</div>
      <div className="cierre-x">{slide.texto}</div>
      {fotoCierre && (
        <div className="cierre-foto">
          <div className="marco-foto"><FotoEncuadrada foto={fotoCierre} slide={slide.foto ? slide : { ...slide, fotoX: 50, fotoY: 50, fotoZoom: 1 }} /></div>
        </div>
      )}
    </div>
  );
});
