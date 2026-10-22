// Esquema del carrusel que devuelve Claude. Lo comparten la web (src/) y las funciones (functions/).
import { z } from "zod";

export const TIPOS_SLIDE = [
  "portada-numero",
  "portada-titulo",
  "portada-profundidad",
  "portada-titulo-verde",
  "portada-pregunta",
  "portada-foto",
  "portada-globos",
  "foto-titulo-arriba",
  "foto-titulo-abajo",
  "foto-cita",
  "foto-panel",
  "texto-editorial",
  "mosaico",
  "foto-enmarcada",
  "retrato",
  "dato",
  "texto",
  "producto",
  "producto-claro",
  "producto-ficha",
  "aviso",
  "cierre",
] as const;

export type TipoSlide = (typeof TIPOS_SLIDE)[number];

export const NOMBRE_TIPO: Record<TipoSlide, string> = {
  "portada-numero": "Portada · número grande",
  "portada-titulo": "Portada · título blanco",
  "portada-profundidad": "Portada · título con profundidad",
  "portada-titulo-verde": "Portada · título verde",
  "portada-pregunta": "Portada · pregunta enmarcada",
  "portada-foto": "Portada · foto limpia",
  "portada-globos": "Portada · pregunta en globos",
  "foto-titulo-arriba": "Foto · título editorial arriba",
  "foto-titulo-abajo": "Foto · título editorial abajo",
  "foto-cita": "Foto · cita",
  mosaico: "Mosaico de palabras",
  "foto-panel": "Foto con panel",
  "texto-editorial": "Texto editorial",
  "foto-enmarcada": "Foto enmarcada",
  retrato: "Retrato con nombre",
  dato: "Dato con foto",
  texto: "Solo texto",
  producto: "Producto",
  "producto-claro": "Producto · fondo claro",
  "producto-ficha": "Producto · ficha con info",
  aviso: "Aviso · solo texto",
  cierre: "Cierre",
};

// Etiqueta de serie (pilar de contenido) y personaje de especie: los dos son opcionales ("").
export const ETIQUETAS = ["", "aviso", "novedad", "sabias-que", "cuidalo-mejor", "en-la-tienda", "familia"] as const;
export const NOMBRE_ETIQUETA: Record<(typeof ETIQUETAS)[number], string> = {
  "": "Sin etiqueta",
  aviso: "Aviso",
  novedad: "Novedad",
  "sabias-que": "¿Sabías que…?",
  "cuidalo-mejor": "Cuidalo mejor",
  "en-la-tienda": "En la tienda",
  familia: "La familia Ser Animal",
};
export const ESPECIES = ["", "perro", "gato", "roedor", "pajaro", "pez"] as const;
export const NOMBRE_ESPECIE: Record<(typeof ESPECIES)[number], string> = {
  "": "Sin personaje",
  perro: "Perro",
  gato: "Gato",
  roedor: "Roedor",
  pajaro: "Pájaro",
  pez: "Pez",
};

export const SlideSpec = z.object({
  tipo: z.enum(TIPOS_SLIDE),
  numero: z.number().int(),
  titulo: z.string(),
  texto: z.string(),
  busqueda_foto: z.string(),
  fondo: z.enum(["foto", "verde", "blanco"]),
  etiqueta: z.enum(ETIQUETAS),
  especie: z.enum(ESPECIES),
  /** Colores del producto separados por coma (ej. «Negro, Turquesa»), solo en la ficha. */
  colores: z.string(),
});

export const CarruselSpec = z.object({
  tema: z.string(),
  slides: z.array(SlideSpec),
  caption: z.string(),
  hashtags: z.array(z.string()),
});

export type SlideSpec = z.infer<typeof SlideSpec>;
export type CarruselSpec = z.infer<typeof CarruselSpec>;
