// 5 carruseles de producto: portada editorial (Higgsfield) + ficha + slide editorial con foto real de Unsplash.
const fs = require('fs');
const C = __dirname + '/assets/';
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
const local = (f) => { const src = 'data:image/jpeg;base64,' + fs.readFileSync(C + f).toString('base64'); return { src, thumb: src }; };
let n = 0;
const s = (o) => ({ id: "c" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "foto", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const ficha = (o) => s({ tipo: "producto-ficha", fondo: "verde", ...o });
module.exports = {
  rascador: { tema: "rascador torre", slides: [
    s({ tipo: "portada-globos", especie: "gato", titulo: "Para trepar,\njugar y\ndescansar\nen altura", foto: local('rascador-portada.jpg') }),
    ficha({ titulo: "Rascador torre 7 niveles", foto: local('rascador-ficha.jpg'),
      texto: "Miradores, cápsulas transparentes y casita.\nMadera resistente\n7 niveles\n50 × 60 × 147 cm" }),
    s({ tipo: "foto-titulo-abajo", etiqueta: "sabias-que", titulo: "A los gatos les gusta mirar todo *desde arriba*", texto: "Por eso buscan siempre el lugar más alto", foto: foto("photo-1722698494928-f9398860a415", "Madalyn Cox"), fotoY: 40 }),
  ], caption: "", hashtags: [] },
};
