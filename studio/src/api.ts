import type { CarruselSpec } from "./spec";
import type { Foto } from "./tipos";
import { CARRUSEL_DEMO, fotosDemo } from "./demo";

// Con VITE_DEMO=1 la app funciona sin claves (para probar el diseño).
const DEMO = import.meta.env.VITE_DEMO === "1";
const CLAVE = "seranimal-studio-clave";

export const leerClave = () => localStorage.getItem(CLAVE) ?? "";
export const guardarClave = (clave: string) => localStorage.setItem(CLAVE, clave);
export const borrarClave = () => localStorage.removeItem(CLAVE);

export class ErrorApi extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

async function pedir<T>(ruta: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(ruta, {
    ...init,
    headers: { "content-type": "application/json", "x-app-password": leerClave(), ...init.headers },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ErrorApi((data as { error?: string }).error ?? `Error ${res.status}`, res.status);
  return data as T;
}

export async function probarClave(): Promise<void> {
  if (DEMO) return;
  await pedir("/api/ping");
}

export async function generarCarrusel(prompt: string, cantidad: number): Promise<CarruselSpec> {
  if (DEMO) {
    await new Promise((r) => setTimeout(r, 600));
    return CARRUSEL_DEMO;
  }
  return pedir<CarruselSpec>("/api/generate", { method: "POST", body: JSON.stringify({ prompt, cantidad }) });
}

export async function buscarFotos(q: string, page = 1): Promise<Foto[]> {
  if (DEMO) return fotosDemo(q);
  const data = await pedir<{ fotos: Foto[] }>(`/api/photos?q=${encodeURIComponent(q)}&page=${page}`);
  return data.fotos;
}

/** Avisa a Unsplash que la foto se usó (lo piden sus reglas de la API). */
export async function registrarUso(foto: Foto): Promise<void> {
  if (DEMO || !foto.downloadLocation) return;
  await pedir("/api/photos", { method: "POST", body: JSON.stringify({ downloadLocation: foto.downloadLocation }) }).catch(() => {});
}
