// Proyecto del Ser Animal Studio para «Que tu gato de interior no se aburra». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "gatos de interior",
  "slides": [
    {
      "id": "l10",
      "tipo": "foto-titulo-arriba",
      "numero": 0,
      "titulo": "Que tu gato de interior *no se aburra*",
      "texto": "Ideas simples para todos los días",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1781497181951-1e2cad205acf?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1781497181951-1e2cad205acf?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "ello",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 60,
      "fotoZoom": 1
    },
    {
      "id": "l11",
      "tipo": "dato",
      "numero": 1,
      "titulo": "Un rato de juego por día",
      "texto": "Imitá una presa: que corra, salte y atrape.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1768604238681-f307ced0a861?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1768604238681-f307ced0a861?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Avi Varma",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 35,
      "fotoZoom": 1
    },
    {
      "id": "l12",
      "tipo": "dato",
      "numero": 2,
      "titulo": "Lugares altos",
      "texto": "Les gusta mirar todo desde arriba.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1759568572643-a1f0e4656a0d?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1759568572643-a1f0e4656a0d?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Eduard Delputte",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "l13",
      "tipo": "dato",
      "numero": 3,
      "titulo": "Que la comida sea un juego",
      "texto": "Buscar y ganarse la comida lo entretiene.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1787129398822-72025bee8294?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1787129398822-72025bee8294?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Mikhail Volkov",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l14",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Juguete dispensador para gatos",
      "texto": "Con un empujoncito suelta su comida de a poco.\nDos pelotitas que giran en la pista\nOrificios regulables\nFácil de cargar",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "Rosa",
      "foto": {
        "src": local("lote-dispensador-ficha.jpg"),
        "thumb": local("lote-dispensador-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
