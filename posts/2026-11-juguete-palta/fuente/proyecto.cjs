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
  palta: { tema: "juguete palta", slides: [
    s({ tipo: "foto-titulo-abajo", titulo: "Una palta *para tu gato*", texto: "Con bola de catnip natural", foto: local('palta-portada.jpg'), fotoY: 45 }),
    ficha({ titulo: "Juguete palta con catnip", foto: local('palta-ficha.jpg'),
      texto: "Bola de catnip natural que gira 360°.\nSe pega en superficies lisas\nBola reemplazable\nDesde los 3 meses" }),
    s({ tipo: "foto-titulo-arriba", etiqueta: "", titulo: "El catnip *no le hace efecto* a todos los gatos", texto: "¿Al tuyo sí? Contanos", foto: foto("photo-1787043572457-3df0a6249c11", "Mikhail Volkov"), fotoY: 55 }),
  ], caption: "", hashtags: [] },
};
