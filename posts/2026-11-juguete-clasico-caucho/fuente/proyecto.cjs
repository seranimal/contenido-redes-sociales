// 5 carruseles de producto: portada editorial (Higgsfield) + ficha + slide editorial con foto real de Unsplash.
const fs = require('fs');
const C = __dirname + '/assets/';
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
const local = (f) => { const src = 'data:image/jpeg;base64,' + fs.readFileSync(C + f).toString('base64'); return { src, thumb: src }; };
let n = 0;
const s = (o) => ({ id: "c" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "foto", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const ficha = (o) => s({ tipo: "producto-ficha", fondo: "verde", etiqueta: "en-la-tienda", ...o });
module.exports = {
  kong: { tema: "kong classic", slides: [
    s({ tipo: "foto-titulo-arriba", etiqueta: "en-la-tienda", titulo: "El clásico que *nunca falla*", texto: "Hace más de 40 años", foto: local('kong-portada.jpg') }),
    ficha({ titulo: "Juguete clásico de caucho", foto: local('kong-ficha.jpg'),
      texto: "Caucho natural que rebota y aguanta mordidas.\nPara perros que muerden\nReferente hace más de 40 años\nTalles S a XXL" }),
    s({ tipo: "foto-cita", titulo: "Morder es parte de ser perro. Mejor que sea algo suyo.", texto: "Guardalo y compartilo", foto: foto("photo-1715033749994-55f16a83c236", "Ben Griffiths"), fotoY: 60 }),
  ], caption: "", hashtags: [] },
};
