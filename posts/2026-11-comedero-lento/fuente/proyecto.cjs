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
  lento: { tema: "comedero lento", slides: [
    s({ tipo: "foto-panel", fondo: "verde", titulo: "¿Tu perro come muy rápido?", texto: "Mirá cómo ayudarlo", foto: local('lento-portada.jpg'), fotoY: 60 }),
    ficha({ titulo: "Comedero lento", foto: local('lento-ficha.jpg'),
      texto: "Con relieve de huellas que lo hace comer más despacio.\nLo entretiene mientras come\nAyuda a limpiar dientes y lengua\nPara perros" }),
    s({ tipo: "foto-titulo-arriba", etiqueta: "", titulo: "Más tiempo para *disfrutar cada bocado*", texto: "Guardalo y compartilo", foto: foto("photo-1695023265600-07f536e8ca4c", "Gayatri Malhotra"), fotoY: 55 }),
  ], caption: "", hashtags: [] },
};
