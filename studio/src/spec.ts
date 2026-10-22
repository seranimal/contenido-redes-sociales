// Esquema del carrusel que devuelve Claude. Lo comparten la web (src/) y las funciones (functions/).
import { z } from "zod";

export const TIPOS_SLIDE = [
  "portada-numero",
  "portada-titulo",
  "portada-titulo-verde",
  "portada-pregunta",
  "portada-foto",
  "dato",
  "texto",
  "producto",
  "cierre",
] as const;

export type TipoSlide = (typeof TIPOS_SLIDE)[number];

export const NOMBRE_TIPO: Record<TipoSlide, string> = {
  "portada-numero": "Portada · número grande",
  "portada-titulo": "Portada · título blanco",
  "portada-titulo-verde": "Portada · título verde",
  "portada-pregunta": "Portada · pregunta enmarcada",
  "portada-foto": "Portada · foto limpia",
  dato: "Dato con foto",
  texto: "Solo texto",
  producto: "Producto",
  cierre: "Cierre",
};

export const SlideSpec = z.object({
  tipo: z.enum(TIPOS_SLIDE),
  numero: z.number().int(),
  titulo: z.string(),
  texto: z.string(),
  busqueda_foto: z.string(),
  fondo: z.enum(["foto", "verde", "blanco"]),
});

export const CarruselSpec = z.object({
  tema: z.string(),
  slides: z.array(SlideSpec),
  caption: z.string(),
  hashtags: z.array(z.string()),
});

export type SlideSpec = z.infer<typeof SlideSpec>;
export type CarruselSpec = z.infer<typeof CarruselSpec>;
