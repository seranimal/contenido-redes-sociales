// 5 carruseles con fotos reales de Unsplash, sin etiquetas: portada = foto + texto claro.
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
let n = 0;
const s = (o) => ({ id: "r" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "blanco", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const cajas = foto("photo-1692382496182-05f3984391fc", "Oli Zubenko");
const evitar = foto("photo-1789916978458-d07c22cc0987", "Caroline Badran");
module.exports = {
  agua: { tema: "agua", slides: [
    s({ tipo: "foto-panel", fondo: "verde", titulo: "¿Tu perro toma suficiente agua?", texto: "Mirá cómo darte cuenta", foto: foto("photo-1663501258049-77f9638cbaea", "Isaac Guardiola"), fotoY: 45 }),
    s({ numero: 1, fondo: "blanco", titulo: "Agua fresca, siempre", texto: "Cambiala todos los días y lavá el bebedero seguido.", foto: foto("photo-1782909800977-401f7d7dbadc", "Marine Vec"), fotoY: 55 }),
    s({ numero: 2, fondo: "verde", titulo: "Después de jugar, más", texto: "Con calor o después de correr necesita tomar más: llevá agua en los paseos.", foto: foto("photo-1616887446499-27116f0e3b05", "Isaac Mehegan"), fotoY: 40 }),
    s({ numero: 3, fondo: "blanco", titulo: "Fijate en las señales", texto: "Encías secas u ojos hundidos pueden indicar que le falta agua. Ante la duda, consultá a tu veterinario.", foto: foto("photo-1547525623-c7d42c20284c", "Jay Wennington"), fotoY: 40 }),
  ], caption: "", hashtags: [] },
};
