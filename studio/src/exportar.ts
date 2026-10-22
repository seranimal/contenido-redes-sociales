import { toCanvas } from "html-to-image";
import JSZip from "jszip";

// Medida final de Instagram (feed 4:5). Se dibuja al doble y se reduce con suavizado de alta calidad:
// así las fotos y los bordes del texto quedan nítidos (supermuestreo).
const ANCHO = 1080;
const ALTO = 1350;
const CALIDAD = 0.97;

export async function slideAJpeg(nodo: HTMLElement): Promise<string> {
  await document.fonts.ready;
  const grande = await toCanvas(nodo, { width: ANCHO, height: ALTO, pixelRatio: 2 });
  const final = document.createElement("canvas");
  final.width = ANCHO;
  final.height = ALTO;
  const ctx = final.getContext("2d")!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(grande, 0, 0, ANCHO, ALTO);
  return final.toDataURL("image/jpeg", CALIDAD);
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
