import type { SlideSpec } from "./spec";

export interface Foto {
  src: string;
  thumb: string;
  /** Datos de Unsplash; vacíos si la foto la subió el usuario. */
  autor?: string;
  autorUrl?: string;
  fotoUrl?: string;
  downloadLocation?: string;
}

export interface Slide extends SlideSpec {
  id: string;
  foto: Foto | null;
  /** Encuadre de la foto: posición en % y zoom (1 = sin zoom). */
  fotoX: number;
  fotoY: number;
  fotoZoom: number;
  /** Recorte del sujeto (PNG sin fondo, mismo tamaño que la foto) para el título con profundidad. */
  recorte?: string | null;
}

export interface Proyecto {
  tema: string;
  slides: Slide[];
  caption: string;
  hashtags: string[];
}

export const nuevoId = () => Math.random().toString(36).slice(2, 10);

export function slideVacio(parcial: Partial<Slide> = {}): Slide {
  return {
    id: nuevoId(),
    tipo: "dato",
    numero: 0,
    titulo: "",
    texto: "",
    busqueda_foto: "",
    fondo: "blanco",
    etiqueta: "",
    especie: "",
    colores: "",
    foto: null,
    fotoX: 50,
    fotoY: 50,
    fotoZoom: 1,
    ...parcial,
  };
}
