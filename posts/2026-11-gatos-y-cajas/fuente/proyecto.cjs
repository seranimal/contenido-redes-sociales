// 5 carruseles con fotos reales de Unsplash, sin etiquetas: portada = foto + texto claro.
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
let n = 0;
const s = (o) => ({ id: "r" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "blanco", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const cajas = foto("photo-1692382496182-05f3984391fc", "Oli Zubenko");
const evitar = foto("photo-1789916978458-d07c22cc0987", "Caroline Badran");
module.exports = {
  gatos: { tema: "gatos y cajas", slides: [
    s({ tipo: "portada-globos", fondo: "foto", especie: "gato", titulo: "¿Por qué a\nlos gatos les\nencantan\nlas cajas?", foto: cajas, fotoY: 25 }),
    s({ numero: 1, fondo: "blanco", titulo: "Se sienten seguros", texto: "Un lugar cerrado les da resguardo: desde ahí ven todo sin que los vean.", foto: foto("photo-1654947315162-e474e8de7710", "Christian Lendl"), fotoY: 40 }),
    s({ numero: 2, fondo: "verde", titulo: "Les gusta el calor", texto: "El cartón guarda el calor, y los gatos están cómodos con más temperatura que nosotros.", foto: foto("photo-1549545931-59bf067af9ab", "Biel Morro"), fotoY: 45 }),
    s({ tipo: "cierre", fondo: "verde", titulo: "¿Al tuyo también le pasa?", texto: "Contanos en los comentarios.", foto: cajas }),
  ], caption: "", hashtags: [] },
};
