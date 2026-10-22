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
      <div className="cierre-wa">Pedidos y envíos por WhatsApp: <b>091 380 000</b></div>
    </div>
  );
});
