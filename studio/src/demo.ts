// Datos de ejemplo para el modo demo (VITE_DEMO=1), sin llamar a Claude ni a Unsplash.
import type { CarruselSpec } from "./spec";
import type { Foto } from "./tipos";

export const CARRUSEL_DEMO: CarruselSpec = {
  tema: "3 cosas que no sabías de los cobayos",
  slides: [
    { tipo: "portada-numero", numero: 3, titulo: "cosas que no sabías de los cobayos", texto: "", busqueda_foto: "guinea pig close up", fondo: "foto" },
    { tipo: "dato", numero: 1, titulo: "No producen vitamina C", texto: "Igual que nosotros, la tienen que recibir todos los días: con su alimento y con verduras frescas, como el morrón.", busqueda_foto: "guinea pig eating vegetables", fondo: "blanco" },
    { tipo: "dato", numero: 2, titulo: "Sus dientes nunca dejan de crecer", texto: "Por eso necesitan heno todos los días: masticarlo los desgasta de forma natural.", busqueda_foto: "guinea pig hay", fondo: "verde" },
    { tipo: "dato", numero: 3, titulo: "Saltan de felicidad", texto: "Cuando están contentos dan saltitos en el aire, como un pororó. Por eso se le dice «popcorning».", busqueda_foto: "two guinea pigs", fondo: "blanco" },
    { tipo: "cierre", numero: 0, titulo: "¿Tenés un cobayo?", texto: "Contanos cómo se llama en los comentarios.", busqueda_foto: "", fondo: "verde" },
  ],
  caption: "3 cosas que no sabías de los cobayos 🐹\n\n1. No producen vitamina C: la necesitan todos los días.\n2. Sus dientes nunca dejan de crecer: el heno los mantiene sanos.\n3. Cuando están felices, saltan como un pororó.\n\n¿Tenés un cobayo? Contanos cómo se llama 👇",
  hashtags: ["cobayos", "cobayo", "roedores", "mascotas", "uruguay"],
};

// En demo se usa la foto de estudio de la marca como reemplazo.
export function fotosDemo(q: string): Foto[] {
  return Array.from({ length: 6 }, (_, i) => ({
    src: "/brand/demo-foto.jpg",
    thumb: "/brand/demo-foto.jpg",
    autor: `Demo ${i + 1}`,
    autorUrl: "#",
    fotoUrl: "#",
    downloadLocation: `demo:${q}:${i}`,
  }));
}
