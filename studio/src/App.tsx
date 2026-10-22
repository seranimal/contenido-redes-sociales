import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { borrarClave, buscarFotos, ErrorApi, generarCarrusel, guardarClave, leerClave, probarClave, registrarUso } from "./api";
import { Escala } from "./Escala";
import { descargarSlide, descargarZip, nombreArchivo } from "./exportar";
import { Inspector } from "./Inspector";
import { SlideView } from "./SlideView";
import { slideVacio, type Foto, type Proyecto, type Slide } from "./tipos";

const GUARDADO = "seranimal-studio-proyecto";

function cargarProyecto(): Proyecto | null {
  try {
    const texto = localStorage.getItem(GUARDADO);
    return texto ? (JSON.parse(texto) as Proyecto) : null;
  } catch {
    return null;
  }
}

const PROYECTO_EN_BLANCO = (): Proyecto => ({
  tema: "Carrusel nuevo",
  slides: [
    slideVacio({ tipo: "portada-numero", numero: 3, titulo: "cosas que no sabías de…", fondo: "foto" }),
    slideVacio({ tipo: "dato", numero: 1, titulo: "Primera idea", texto: "Contala en una o dos oraciones.", fondo: "blanco" }),
    slideVacio({ tipo: "cierre", titulo: "¿Te sirvió?", texto: "Guardalo para tenerlo a mano.", fondo: "verde" }),
  ],
  caption: "",
  hashtags: [],
});

function Login({ onEntrar }: { onEntrar: () => void }) {
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function entrar(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError("");
    guardarClave(clave);
    try {
      await probarClave();
      onEntrar();
    } catch (err) {
      borrarClave();
      setError(err instanceof ErrorApi && err.status === 401 ? "Contraseña incorrecta." : err instanceof Error ? err.message : "No se pudo entrar.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="login">
      <form onSubmit={entrar}>
        <img src="/brand/logo-verde.png" alt="Ser Animal" />
        <h1>Studio</h1>
        <input type="password" placeholder="Contraseña" value={clave} onChange={(e) => setClave(e.target.value)} autoFocus />
        <button type="submit" disabled={!clave || cargando}>{cargando ? "Entrando…" : "Entrar"}</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default function App() {
  const [logueado, setLogueado] = useState(() => import.meta.env.VITE_DEMO === "1" || Boolean(leerClave()));
  const [proyecto, setProyecto] = useState<Proyecto>(() => cargarProyecto() ?? PROYECTO_EN_BLANCO());
  const [actual, setActual] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [cantidad, setCantidad] = useState(5);
  const [generando, setGenerando] = useState(false);
  const [exportando, setExportando] = useState(false);
  const [error, setError] = useState("");
  const [resultados, setResultados] = useState<Record<string, Foto[]>>({});
  const [copiado, setCopiado] = useState(false);
  const nodos = useRef<Record<string, HTMLDivElement | null>>({});
  const zona = useRef<HTMLDivElement>(null);
  const [anchoVista, setAnchoVista] = useState(440);

  useEffect(() => {
    try {
      localStorage.setItem(GUARDADO, JSON.stringify(proyecto));
    } catch {
      // Si las fotos subidas no entran en el almacenamiento del navegador, no se guarda el borrador.
    }
  }, [proyecto]);

  useLayoutEffect(() => {
    const el = zona.current;
    if (!el) return;
    const medir = () => {
      const { width, height } = el.getBoundingClientRect();
      setAnchoVista(Math.max(240, Math.min(width - 32, ((height - 32) * 1080) / 1350, 620)));
    };
    medir();
    const obs = new ResizeObserver(medir);
    obs.observe(el);
    return () => obs.disconnect();
  }, [logueado]);

  if (!logueado) return <Login onEntrar={() => setLogueado(true)} />;

  const slides = proyecto.slides;
  const indice = Math.min(actual, slides.length - 1);
  const slide = slides[indice];
  const fotoPortada = slides[0]?.foto ?? null;
  const texto = [proyecto.caption, proyecto.hashtags.map((h) => `#${h.replace(/^#/, "")}`).join(" ")].filter(Boolean).join("\n\n");

  const cambiarSlide = (id: string, cambios: Partial<Slide>) =>
    setProyecto((p) => ({ ...p, slides: p.slides.map((s) => (s.id === id ? { ...s, ...cambios } : s)) }));

  function manejarError(err: unknown) {
    if (err instanceof ErrorApi && err.status === 401) {
      borrarClave();
      setLogueado(false);
      return;
    }
    setError(err instanceof Error ? err.message : "Algo salió mal.");
  }

  async function generar(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim()) return;
    setGenerando(true);
    setError("");
    try {
      const spec = await generarCarrusel(prompt.trim(), cantidad);
      const nuevos = spec.slides.map((s) => slideVacio(s));
      setProyecto({ tema: spec.tema, slides: nuevos, caption: spec.caption, hashtags: spec.hashtags });
      setActual(0);
      setResultados({});
      // Primera foto de Unsplash para cada slide que la necesita.
      await Promise.all(
        nuevos
          .filter((s) => s.busqueda_foto && s.tipo !== "texto" && s.tipo !== "producto")
          .map(async (s) => {
            try {
              const fotos = await buscarFotos(s.busqueda_foto);
              setResultados((r) => ({ ...r, [s.id]: fotos }));
              if (fotos[0]) cambiarSlide(s.id, { foto: fotos[0] });
            } catch (err) {
              manejarError(err);
            }
          }),
      );
    } catch (err) {
      manejarError(err);
    } finally {
      setGenerando(false);
    }
  }

  async function exportarTodo() {
    setExportando(true);
    setError("");
    try {
      const usadas = new Map(slides.filter((s) => s.foto?.downloadLocation).map((s) => [s.foto!.downloadLocation, s.foto!]));
      usadas.forEach((f) => void registrarUso(f));
      await descargarZip(slides.map((s) => nodos.current[s.id]!).filter(Boolean), proyecto.tema, texto);
    } catch (err) {
      setError(err instanceof Error ? `No se pudo exportar: ${err.message}` : "No se pudo exportar.");
    } finally {
      setExportando(false);
    }
  }

  async function exportarActual() {
    const nodo = nodos.current[slide.id];
    if (!nodo) return;
    setExportando(true);
    try {
      if (slide.foto) void registrarUso(slide.foto);
      await descargarSlide(nodo, `${nombreArchivo(proyecto.tema)}-${String(indice + 1).padStart(2, "0")}.jpg`);
    } catch (err) {
      setError(err instanceof Error ? `No se pudo exportar: ${err.message}` : "No se pudo exportar.");
    } finally {
      setExportando(false);
    }
  }

  function mover(direccion: -1 | 1) {
    const destino = indice + direccion;
    if (destino < 0 || destino >= slides.length) return;
    const copia = [...slides];
    [copia[indice], copia[destino]] = [copia[destino], copia[indice]];
    setProyecto({ ...proyecto, slides: copia });
    setActual(destino);
  }

  function insertar(nuevo: Slide) {
    const copia = [...slides];
    copia.splice(indice + 1, 0, nuevo);
    setProyecto({ ...proyecto, slides: copia });
    setActual(indice + 1);
  }

  async function copiar() {
    await navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  }

  return (
    <div className="app">
      <header className="barra">
        <img className="marca" src="/brand/logo-blanco.png" alt="Ser Animal" />
        <form className="pedido" onSubmit={generar}>
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="¿De qué querés el carrusel? Ej.: 3 cosas que no sabías de los gatos"
            disabled={generando}
          />
          <select value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} disabled={generando} title="Cantidad de slides">
            {[3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} slides</option>
            ))}
          </select>
          <button type="submit" disabled={generando || !prompt.trim()}>{generando ? "Creando…" : "Crear carrusel"}</button>
        </form>
        <div className="acciones">
          <button type="button" className="fantasma" onClick={() => { setProyecto(PROYECTO_EN_BLANCO()); setActual(0); setResultados({}); }}>
            En blanco
          </button>
          {import.meta.env.VITE_DEMO !== "1" && (
            <button type="button" className="fantasma" onClick={() => { borrarClave(); setLogueado(false); }}>Salir</button>
          )}
        </div>
      </header>

      {error && (
        <div className="aviso" role="alert">
          {error} <button type="button" className="link" onClick={() => setError("")}>Cerrar</button>
        </div>
      )}

      <main className="cuerpo">
        <nav className="tira" aria-label="Slides">
          {slides.map((s, i) => (
            <button type="button" key={s.id} className={`miniatura${i === indice ? " activa" : ""}`} onClick={() => setActual(i)}>
              <Escala ancho={132}>
                <SlideView ref={(el) => { nodos.current[s.id] = el; }} slide={s} fotoPortada={fotoPortada} conDeslizar={i === 0 && slides.length > 1} />
              </Escala>
              <span>{i + 1}</span>
            </button>
          ))}
        </nav>

        <section className="vista" ref={zona}>
          {generando ? (
            <div className="cargando" style={{ width: anchoVista, height: (anchoVista * 1350) / 1080 }}>
              <div className="spinner" />
              <p>Armando el carrusel…</p>
            </div>
          ) : (
            <Escala ancho={anchoVista}>
              <SlideView slide={slide} fotoPortada={fotoPortada} conDeslizar={indice === 0 && slides.length > 1} />
            </Escala>
          )}
          <div className="descargas">
            <button type="button" className="secundario" onClick={exportarActual} disabled={exportando || generando}>Descargar esta slide</button>
            <button type="button" onClick={exportarTodo} disabled={exportando || generando}>{exportando ? "Preparando…" : "Descargar todo (ZIP)"}</button>
          </div>
        </section>

        <div className="lateral">
          <Inspector
            key={slide.id}
            slide={slide}
            posicion={indice}
            total={slides.length}
            resultados={resultados[slide.id] ?? []}
            onCambiar={(c) => cambiarSlide(slide.id, c)}
            onResultados={(f) => setResultados((r) => ({ ...r, [slide.id]: f }))}
            onMover={mover}
            onDuplicar={() => insertar({ ...slide, id: slideVacio().id })}
            onEliminar={() => {
              setProyecto({ ...proyecto, slides: slides.filter((s) => s.id !== slide.id) });
              setActual(Math.max(0, indice - 1));
            }}
            onAgregar={() => insertar(slideVacio({ fondo: slide.fondo === "blanco" ? "verde" : "blanco" }))}
          />

          <section className="posteo">
            <h2>Texto del posteo</h2>
            <textarea rows={7} value={proyecto.caption} onChange={(e) => setProyecto({ ...proyecto, caption: e.target.value })} />
            <label className="campo">
              <span>Hashtags (separados por espacio)</span>
              <input
                value={proyecto.hashtags.map((h) => `#${h}`).join(" ")}
                onChange={(e) => setProyecto({ ...proyecto, hashtags: e.target.value.split(/\s+/).map((h) => h.replace(/^#/, "")).filter(Boolean) })}
              />
            </label>
            <button type="button" className="secundario ancho" onClick={copiar}>{copiado ? "Copiado" : "Copiar texto y hashtags"}</button>
          </section>
        </div>
      </main>
    </div>
  );
}
