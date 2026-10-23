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
      "id": "n28",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Para *el viaje*",
      "texto": "escudo: Siempre sujeto\nreloj: Paradas cada 2 horas\ngota: Agua para el camino\ncasa: Nunca solo en el auto",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1706666940503-1334dfdd5216?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1706666940503-1334dfdd5216?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Audri Van Gores",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n29",
      "tipo": "tarjetas",
      "numero": 0,
      "titulo": "Dos reglas *de oro*",
      "texto": "Siempre sujeto\nArnés y cinturón, o transportadora\nEs lo más seguro para los dos.\n\nNunca solo en el auto\nAunque sea un rato\nAdentro el calor sube muy rápido.",
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
