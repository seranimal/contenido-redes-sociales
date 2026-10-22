import { toJpeg } from "html-to-image";
import JSZip from "jszip";

const OPCIONES = { width: 1080, height: 1350, pixelRatio: 1, quality: 0.95 };

export async function slideAJpeg(nodo: HTMLElement): Promise<string> {
  await document.fonts.ready;
  return toJpeg(nodo, OPCIONES);
}

function descargar(url: string, nombre: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  a.click();
}

export const nombreArchivo = (tema: string) =>
  tema
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 50) || "carrusel";

export async function descargarSlide(nodo: HTMLElement, nombre: string) {
  descargar(await slideAJpeg(nodo), nombre);
}

export async function descargarZip(nodos: HTMLElement[], tema: string, caption: string) {
  const zip = new JSZip();
  for (let i = 0; i < nodos.length; i++) {
    const data = await slideAJpeg(nodos[i]);
    zip.file(`slide-${String(i + 1).padStart(2, "0")}.jpg`, data.split(",")[1], { base64: true });
  }
  zip.file("texto.txt", caption);
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  descargar(url, `${nombreArchivo(tema)}.zip`);
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
