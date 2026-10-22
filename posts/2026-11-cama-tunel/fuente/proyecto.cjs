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
  tunel: { tema: "cama tunnel tube", slides: [
    s({ tipo: "foto-enmarcada", fondo: "verde", titulo: "Para esconderse, jugar y dormir", foto: local('tunel-portada.jpg') }),
    ficha({ titulo: "Cama Tunnel Tube", colores: "Crema, Gris, Marrón", foto: local('tunel-ficha.jpg'),
      texto: "Túnel para explorar y cama para descansar.\nMaterial suave y resistente\nSe dobla para guardar\n85 × 55 cm" }),
    s({ tipo: "foto-titulo-abajo", etiqueta: "sabias-que", titulo: "Un rincón para esconderse *le da tranquilidad*", texto: "Los gatos buscan lugares cerrados para descansar", foto: foto("photo-1605190096176-a3a0b04a3b57", "Elena Kloppenburg"), fotoY: 35 }),
  ], caption: "", hashtags: [] },
};
