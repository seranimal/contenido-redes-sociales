// Proyecto del Ser Animal Studio para «Lo que te dice su cola». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "la cola del perro",
  "slides": [
    {
      "id": "l32",
      "tipo": "foto-titulo-arriba",
      "numero": 0,
      "titulo": "Lo que te dice *su cola*",
      "texto": "Aprendé a leerla",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1791037081989-28a53f02abab?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1791037081989-28a53f02abab?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Barnabas Davoti",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 60,
      "fotoZoom": 1
    },
    {
      "id": "n11",
      "tipo": "panel-foto",
      "numero": 0,
      "titulo": "Suelta y *moviéndose*",
      "texto": "Está contento y relajado.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1509393011839-182e9b61f10f?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1509393011839-182e9b61f10f?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Roberto Nickson",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "n12",
      "tipo": "marco-redondo",
      "numero": 0,
      "titulo": "Alta y *quieta*",
      "texto": "Algo le llamó la atención: está atento.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1725221683109-cba7953bfc6a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1725221683109-cba7953bfc6a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "roma",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n13",
      "tipo": "texto",
      "numero": 3,
      "titulo": "Baja o entre las patas",
      "texto": "Puede tener miedo o sentirse inseguro. Dale espacio y calma.",
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
