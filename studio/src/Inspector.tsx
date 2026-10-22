import { useState } from "react";
import { buscarFotos } from "./api";
import { NOMBRE_TIPO, TIPOS_SLIDE, type TipoSlide } from "./spec";
import type { Foto, Slide } from "./tipos";

const CON_NUMERO: TipoSlide[] = ["portada-numero", "dato", "texto"];
const CON_FONDO: TipoSlide[] = ["dato", "texto", "producto", "aviso"];
// Fotos de producto: las sube el usuario, no se buscan en Unsplash.
const DE_PRODUCTO: TipoSlide[] = ["producto", "producto-claro"];
const SIN_TEXTO: TipoSlide[] = ["portada-foto"];

const ETIQUETA_TEXTO: Partial<Record<TipoSlide, string>> = {
  "portada-titulo": "Línea de abajo (opcional)",
  "portada-titulo-verde": "Línea de abajo (opcional)",
  producto: "Bajada",
  "producto-claro": "Bajada (opcional)",
  aviso: "Texto (opcional)",
};

const ETIQUETA_TITULO: Partial<Record<TipoSlide, string>> = {
  "producto-claro": "Nombre del producto",
  aviso: "Título (lo que va entre *asteriscos* se destaca en verde)",
};

interface Props {
  slide: Slide;
  posicion: number;
  total: number;
  resultados: Foto[];
  onCambiar: (cambios: Partial<Slide>) => void;
  onResultados: (fotos: Foto[]) => void;
  onMover: (direccion: -1 | 1) => void;
  onDuplicar: () => void;
  onEliminar: () => void;
  onAgregar: () => void;
}

export function Inspector({ slide, posicion, total, resultados, onCambiar, onResultados, onMover, onDuplicar, onEliminar, onAgregar }: Props) {
  const [busqueda, setBusqueda] = useState(slide.busqueda_foto);
  const [buscando, setBuscando] = useState(false);
  const [error, setError] = useState("");
  const usaFoto = slide.tipo !== "texto" && slide.tipo !== "aviso";
  const deProducto = DE_PRODUCTO.includes(slide.tipo);

  async function buscar(e?: React.FormEvent) {
    e?.preventDefault();
    if (!busqueda.trim()) return;
    setBuscando(true);
    setError("");
    try {
      onResultados(await buscarFotos(busqueda.trim()));
      onCambiar({ busqueda_foto: busqueda.trim() });
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo buscar.");
    } finally {
      setBuscando(false);
    }
  }

  function subir(e: React.ChangeEvent<HTMLInputElement>) {
    const archivo = e.target.files?.[0];
    if (!archivo) return;
    const lector = new FileReader();
    lector.onload = () => {
      const src = String(lector.result);
      onCambiar({ foto: { src, thumb: src }, fotoX: 50, fotoY: 50, fotoZoom: 1 });
    };
    lector.readAsDataURL(archivo);
    e.target.value = "";
  }

  return (
    <aside className="inspector">
      <div className="inspector-cabecera">
        <h2>Slide {posicion + 1} de {total}</h2>
        <div className="botonera">
          <button type="button" onClick={() => onMover(-1)} disabled={posicion === 0} title="Mover antes">↑</button>
          <button type="button" onClick={() => onMover(1)} disabled={posicion === total - 1} title="Mover después">↓</button>
          <button type="button" onClick={onDuplicar} title="Duplicar">Duplicar</button>
          <button type="button" onClick={onEliminar} disabled={total === 1} title="Eliminar">Eliminar</button>
        </div>
      </div>

      <label className="campo">
        <span>Tipo de slide</span>
        <select value={slide.tipo} onChange={(e) => onCambiar({ tipo: e.target.value as TipoSlide })}>
          {TIPOS_SLIDE.map((t) => (
            <option key={t} value={t}>{NOMBRE_TIPO[t]}</option>
          ))}
        </select>
      </label>

      {CON_FONDO.includes(slide.tipo) && (
        <div className="campo">
          <span>Fondo</span>
          <div className="pastillas">
            {(["blanco", "verde"] as const).map((f) => (
              <button type="button" key={f} className={slide.fondo === f ? "activa" : ""} onClick={() => onCambiar({ fondo: f })}>
                {f === "blanco" ? "Blanco" : "Verde"}
              </button>
            ))}
          </div>
        </div>
      )}

      {CON_NUMERO.includes(slide.tipo) && (
        <label className="campo">
          <span>Número (0 = sin número)</span>
          <input type="number" min={0} max={99} value={slide.numero} onChange={(e) => onCambiar({ numero: Number(e.target.value) || 0 })} />
        </label>
      )}

      {!SIN_TEXTO.includes(slide.tipo) && (
        <>
          <label className="campo">
            <span>{ETIQUETA_TITULO[slide.tipo] ?? "Título"}</span>
            <textarea rows={2} value={slide.titulo} onChange={(e) => onCambiar({ titulo: e.target.value })} />
          </label>
          {slide.tipo !== "portada-numero" && slide.tipo !== "portada-pregunta" && (
            <label className="campo">
              <span>{ETIQUETA_TEXTO[slide.tipo] ?? "Texto"}</span>
              <textarea rows={3} value={slide.texto} onChange={(e) => onCambiar({ texto: e.target.value })} />
            </label>
          )}
        </>
      )}

      {usaFoto && (
        <div className="campo">
          <span>{deProducto ? "Foto del producto (subí la foto real, mejor con fondo blanco)" : "Foto"}</span>
          {slide.foto && (
            <div className="foto-actual">
              <img src={slide.foto.thumb} alt="" />
              <div>
                {slide.foto.autor ? (
                  <small>
                    Foto de <a href={slide.foto.autorUrl} target="_blank" rel="noreferrer">{slide.foto.autor}</a> en{" "}
                    <a href={slide.foto.fotoUrl} target="_blank" rel="noreferrer">Unsplash</a>
                  </small>
                ) : (
                  <small>Foto subida</small>
                )}
                <button type="button" className="link" onClick={() => onCambiar({ foto: null })}>Quitar foto</button>
              </div>
            </div>
          )}

          {!deProducto && (
            <form className="buscador" onSubmit={buscar}>
              <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar en Unsplash (en inglés: guinea pig…)" />
              <button type="submit" disabled={buscando}>{buscando ? "…" : "Buscar"}</button>
            </form>
          )}
          {error && <p className="error">{error}</p>}
          {resultados.length > 0 && !deProducto && (
            <div className="grilla-fotos">
              {resultados.map((f, i) => (
                <button
                  type="button"
                  key={`${f.downloadLocation}-${i}`}
                  className={slide.foto?.src === f.src ? "elegida" : ""}
                  onClick={() => onCambiar({ foto: f, fotoX: 50, fotoY: 50, fotoZoom: 1 })}
                  title={f.autor}
                >
                  <img src={f.thumb} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
          <label className="subir">
            <input type="file" accept="image/*" onChange={subir} />
            Subir foto propia
          </label>

          {slide.foto && (
            <div className="encuadre">
              <label>Horizontal <input type="range" min={0} max={100} value={slide.fotoX} onChange={(e) => onCambiar({ fotoX: Number(e.target.value) })} /></label>
              <label>Vertical <input type="range" min={0} max={100} value={slide.fotoY} onChange={(e) => onCambiar({ fotoY: Number(e.target.value) })} /></label>
              <label>Zoom <input type="range" min={1} max={2.5} step={0.05} value={slide.fotoZoom} onChange={(e) => onCambiar({ fotoZoom: Number(e.target.value) })} /></label>
            </div>
          )}
        </div>
      )}

      <button type="button" className="secundario ancho" onClick={onAgregar}>+ Agregar slide después de esta</button>
    </aside>
  );
}
