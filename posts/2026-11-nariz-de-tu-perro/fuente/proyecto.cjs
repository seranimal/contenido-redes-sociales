const fs = require('fs');
const C = __dirname + '/assets/';
const U = (p) => `https://images.unsplash.com/${p}?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`;
const foto = (p, autor) => ({ src: U(p), thumb: U(p), autor, downloadLocation: "registrada" });
const local = (f) => { const src = 'data:image/jpeg;base64,' + fs.readFileSync(C + f).toString('base64'); return { src, thumb: src }; };
let n = 0;
const s = (o) => ({ id: "t" + n++, tipo: "dato", numero: 0, titulo: "", texto: "", busqueda_foto: "", fondo: "blanco", etiqueta: "", especie: "", colores: "", foto: null, fotoX: 50, fotoY: 50, fotoZoom: 1, ...o });
const calorFoto = foto("photo-1714595746401-4fccbf3ca37e", "Karan Mridha");
const narizFoto = foto("photo-1698522372694-7bf8500a5b63", "Megan Dujardin");
module.exports = {
  calor: { tema: "calor y paseos", slides: [
    s({ tipo: "portada-pregunta", fondo: "foto", titulo: "¿Hace demasiado calor para pasear?", foto: calorFoto, fotoY: 55 }),
    s({ tipo: "texto-editorial", fondo: "blanco", etiqueta: "", especie: "perro", titulo: "Apoyá la mano en el piso *7 segundos*: si te quema a vos, *le quema a él*.", texto: "La prueba de los 7 segundos" }),
    s({ tipo: "dato", numero: 2, fondo: "verde", titulo: "Elegí bien el horario", texto: "Temprano en la mañana o después del atardecer, por la sombra y con agua fresca.", foto: foto("photo-1637441607612-43944d988e5b", "Rafael Hoyos Weht") }),
    s({ tipo: "dato", numero: 3, fondo: "blanco", titulo: "Atento a las señales", texto: "Si jadea mucho, babea de más o está débil: sombra, agua y consultá a tu veterinario.", foto: foto("photo-1597098764494-3b6f9099d00b", "Paul Johnston") }),
    s({ tipo: "cierre", fondo: "verde", titulo: "Guardalo para el verano", texto: "Y compartilo con quien pasea a su perro.", foto: calorFoto }),
  ], caption: "", hashtags: [] },
  nariz: { tema: "la nariz de tu perro", slides: [
    s({ tipo: "portada-numero", fondo: "foto", numero: 3, titulo: "cosas que no sabías sobre la nariz de tu perro", foto: narizFoto, fotoY: 45 }),
    s({ tipo: "dato", numero: 1, fondo: "blanco", titulo: "Es única", texto: "Las marcas de su nariz son como nuestra huella digital: no hay dos iguales.", foto: foto("photo-1583490479820-71cb243eec29", "Delia Giandeini"), fotoY: 35 }),
    s({ tipo: "dato", numero: 2, fondo: "verde", titulo: "Huele muchísimo más que vos", texto: "Su olfato es miles de veces más sensible que el nuestro.", foto: foto("photo-1715033812966-12418510f9ab", "Ben Griffiths"), fotoY: 60 }),
    s({ tipo: "dato", numero: 3, fondo: "blanco", titulo: "Por eso necesita olfatear", texto: "Oler en el paseo o con juguetes de olfato lo cansa y lo relaja.", foto: foto("photo-1672323471009-74ff6ff4035d", "Ayla Verschueren") }),
    s({ tipo: "cierre", fondo: "verde", titulo: "¿Cuál no sabías?", texto: "Contanos en los comentarios.", foto: narizFoto }),
  ], caption: "", hashtags: [] },
  cama: { tema: "cama cuddlar", slides: [
    s({ tipo: "portada-titulo-verde", fondo: "foto", titulo: "Su lugar favorito", texto: "DISPONIBLE EN 3 TAMAÑOS", foto: local('cama-portada.jpg') }),
    s({ tipo: "producto-ficha", fondo: "verde", titulo: "Cama Cuddlar", colores: "Gris, Negro, Marrón, Beige",
        texto: "Suave, acolchonada y con base antideslizante.\nFunda removible y lavable\nPara perros y gatos\nTamaños small, medium y large",
        foto: local('cama-ficha.jpg') }),
  ], caption: "", hashtags: [] },
};
