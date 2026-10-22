const fs = require('fs');
const R = __dirname + '/assets/';
const data = (f, tipo) => `data:${tipo};base64,` + fs.readFileSync(R + f).toString('base64');
const subida = (f) => { const src = data(f, 'image/jpeg'); return { src, thumb: src }; };
let n = 0;
const s = (o) => ({ id: "p" + n++, tipo: "dato", numero: 205, titulo: "", texto: "", busqueda_foto: "", fondo: "foto", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
module.exports = {
  pechera: { tema: "pechera y correa", slides: [
    s({ tipo: "portada-profundidad", titulo: "Pechera y correa", texto: "DISPONIBLE EN 3 TALLES", numero: 205, foto: subida('husky.jpg'), recorte: data('husky-sujeto.png', 'image/png') }),
    s({ tipo: "producto-ficha", fondo: "verde", titulo: "Pechera y correa", colores: "Turquesa, Negro, Naranja",
        texto: "Distribuye mejor la fuerza al caminar y evita molestias. Material resistente, correa liviana y fácil de colocar y ajustar.\nTalles mini, medio y grande. Colores surtidos, según stock.",
        foto: subida('beagle-blanco.jpg') }),
  ], caption: "", hashtags: [] },
};
