// 5 carruseles con fotos reales de Unsplash, sin etiquetas: portada = foto + texto claro.
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
let n = 0;
const s = (o) => ({ id: "r" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "blanco", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const cajas = foto("photo-1692382496182-05f3984391fc", "Oli Zubenko");
const evitar = foto("photo-1789916978458-d07c22cc0987", "Caroline Badran");
module.exports = {
  juntos: { tema: "planes juntos", slides: [
    s({ tipo: "foto-cita", fondo: "foto", titulo: "Los mejores planes son los que hacemos juntos.", texto: "Contanos el suyo", foto: foto("photo-1682532339427-7804e24b88f1", "Anastasiya Badun"), fotoY: 50 }),
    s({ tipo: "foto-titulo-abajo", fondo: "foto", titulo: "Un rato *en el sillón*", foto: foto("photo-1668656379942-920e753667b3", "Phil Desforges"), fotoY: 45 }),
    s({ tipo: "foto-titulo-abajo", fondo: "foto", titulo: "Una siesta *compartida*", foto: foto("photo-1768225315185-3ce5b65e61dc", "phoebe lynch"), fotoY: 10 }),
    s({ tipo: "cierre", fondo: "verde", titulo: "¿Cuál es su plan favorito?", texto: "Contanos en los comentarios.", foto: foto("photo-1682532339427-7804e24b88f1", "Anastasiya Badun") }),
  ], caption: "", hashtags: [] },
};
