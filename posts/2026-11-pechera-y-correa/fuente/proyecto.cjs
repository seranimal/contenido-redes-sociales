const fs = require('fs');
const R = __dirname + '/assets/';
const data = (f, tipo) => `data:${tipo};base64,` + fs.readFileSync(R + f).toString('base64');
const subida = (f) => { const src = data(f, 'image/jpeg'); return { src, thumb: src }; };
let n = 0;
const s = (o) => ({ id: "p" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "foto", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
module.exports = {
  pechera: { tema: "pechera y correa", slides: [
    s({ tipo: "foto-titulo-arriba", titulo: "Pechera *y correa*", texto: "Disponible en 3 talles", foto: subida('husky.jpg') }),
    s({ tipo: "producto-ficha", fondo: "verde", etiqueta: "en-la-tienda", titulo: "Pechera y correa", colores: "Turquesa, Negro, Naranja",
        texto: "Distribuye mejor la fuerza al caminar.\nTalles mini, medio y grande\nMaterial resistente\nFácil de ajustar\nColores según stock",
        foto: subida('conj-familia.jpg') }),
  ], caption: "", hashtags: [] },
};
