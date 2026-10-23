// 5 carruseles con fotos reales de Unsplash, sin etiquetas: portada = foto + texto claro.
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
let n = 0;
const s = (o) => ({ id: "r" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "blanco", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const cajas = foto("photo-1692382496182-05f3984391fc", "Oli Zubenko");
const evitar = foto("photo-1789916978458-d07c22cc0987", "Caroline Badran");
module.exports = {
  alimentos: { tema: "alimentos que no puede comer", slides: [
    s({ tipo: "foto-titulo-arriba", fondo: "foto", titulo: "Alimentos que tu perro *no puede comer*", texto: "Guardalo para tenerlo a mano", foto: evitar, fotoY: 40 }),
    s({ numero: 1, fondo: "blanco", titulo: "Chocolate", texto: "Tiene teobromina, que es tóxica para los perros. Cuanto más amargo, más peligroso.", foto: foto("photo-1623660053975-cf75a8be0908", "Tetiana Bykovets"), fotoY: 50 }),
    s({ numero: 2, fondo: "verde", titulo: "Uvas y pasas", texto: "Aunque sean pocas, pueden dañar sus riñones.", foto: foto("photo-1596363505729-4190a9506133", "Andrey Haimin"), fotoY: 50 }),
    s({ numero: 3, fondo: "blanco", titulo: "Cebolla y ajo", texto: "Crudos, cocidos o en polvo: dañan sus glóbulos rojos.", foto: foto("photo-1703870174946-dce31d8f2c45", "Amadeus Moga"), fotoY: 40 }),
    s({ tipo: "cierre", fondo: "verde", titulo: "Si come algo de esto", texto: "Llamá a tu veterinario enseguida, aunque todavía se vea bien.", foto: evitar }),
  ], caption: "", hashtags: [] },
};
