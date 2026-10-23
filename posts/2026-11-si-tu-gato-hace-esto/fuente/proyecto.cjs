// Proyecto del Ser Animal Studio para «Si tu gato hace esto, te quiere». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "señales de cariño del gato",
  "slides": [
    {
      "id": "l76",
      "tipo": "texto-editorial",
      "numero": 0,
      "titulo": "Si tu gato hace esto, *te quiere*.",
      "texto": "Fijate cuál hace el tuyo",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "gato",
      "colores": "",
      "foto": null,
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n37",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "Te mira y *parpadea lento*",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1779104200801-db38a7f3adc6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1779104200801-db38a7f3adc6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Windah Limbai",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "n38",
      "tipo": "marco-redondo",
      "numero": 0,
      "titulo": "Duerme *pegado a vos*",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Chris Abney",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "n39",
      "tipo": "panel-foto",
      "numero": 0,
      "titulo": "Te muestra *la panza*",
      "texto": "Es una señal de que se siente seguro con vos.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1533723522262-1c3e074d3dac?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1533723522262-1c3e074d3dac?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Mathias Reding",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "l80",
      "tipo": "cierre",
      "numero": 0,
      "titulo": "¿Cuál hace el tuyo?",
      "texto": "Contanos en los comentarios.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1779104200801-db38a7f3adc6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1779104200801-db38a7f3adc6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Windah Limbai",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
