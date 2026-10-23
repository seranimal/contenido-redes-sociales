// 5 carruseles con fotos reales de Unsplash, sin etiquetas: portada = foto + texto claro.
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
let n = 0;
const s = (o) => ({ id: "r" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "blanco", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const cajas = foto("photo-1692382496182-05f3984391fc", "Oli Zubenko");
const evitar = foto("photo-1789916978458-d07c22cc0987", "Caroline Badran");
module.exports = {
  mayor: { tema: "perro mayor", slides: [
    s({ tipo: "foto-enmarcada", fondo: "blanco", titulo: "Un perro mayor también necesita moverse", foto: foto("photo-1619590694371-7eed5838e880", "Reba Spike") }),
    s({ numero: 1, fondo: "verde", titulo: "Paseos más cortos", texto: "Mejor varias salidas cortas que una larga: a su ritmo y sin apuro.", foto: foto("photo-1654410364338-b7453647a5f5", "Janosch Jost"), fotoY: 45 }),
    s({ numero: 2, fondo: "blanco", titulo: "Que pueda olfatear", texto: "Oler el pasto lo entretiene y lo cansa sin exigir sus articulaciones.", foto: foto("photo-1775421263234-ee24d0817eba", "Kamil Klyta"), fotoY: 55 }),
    s({ numero: 3, fondo: "verde", titulo: "Preguntá a tu veterinario", texto: "Te dice cuánto ejercicio le conviene según su edad y su salud.", foto: foto("photo-1768676758483-ff1d62798ab9", "Regard Vrai IDF"), fotoY: 50 }),
  ], caption: "", hashtags: [] },
};
