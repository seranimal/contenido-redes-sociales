// Proyecto del Ser Animal Studio para «De viaje con tu perro». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "viajar en auto",
  "slides": [
    {
      "id": "l63",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "De viaje *con tu perro*",
      "texto": "Para que el viaje sea tranquilo",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1649190130708-040272fe0a70?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1649190130708-040272fe0a70?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Lorren & Loki",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "l64",
      "tipo": "texto",
      "numero": 1,
      "titulo": "Siempre sujeto",
      "texto": "Con arnés y cinturón para perros, o en transportadora: es lo más seguro para los dos.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": null,
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l65",
      "tipo": "dato",
      "numero": 2,
      "titulo": "Paradas cada dos horas",
      "texto": "Para tomar agua, estirar las patas y hacer pis.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1777846800364-46561e1c19ef?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1777846800364-46561e1c19ef?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Florian Hahn",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l66",
      "tipo": "texto",
      "numero": 3,
      "titulo": "Nunca solo en el auto",
      "texto": "Aunque sea un rato: adentro el calor sube muy rápido.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": null,
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
