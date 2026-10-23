// Proyecto del Ser Animal Studio para «Cómo presentar un gato nuevo en casa». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "gato nuevo",
  "slides": [
    {
      "id": "l53",
      "tipo": "foto-enmarcada",
      "numero": 0,
      "titulo": "Cómo presentar un gato nuevo en casa",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1603104010974-de673b7c5674?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1603104010974-de673b7c5674?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Fuu J",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n22",
      "tipo": "panel-foto",
      "numero": 1,
      "titulo": "Un cuarto propio *al principio*",
      "texto": "Con comida, agua, arenero y un lugar para esconderse.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1732656977385-4866d99c308e?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1732656977385-4866d99c308e?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Hassan Sirah",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "n23",
      "tipo": "tarjetas",
      "numero": 0,
      "titulo": "Después, *de a poco*",
      "texto": "Que se conozcan por el olor\nAntes de verse\nIntercambiá mantas entre los dos.\n\nSin apuro\nCada gato tiene sus tiempos\nPuede llevar días o semanas.",
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
      "id": "n24",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "Con paciencia, *se hacen amigos*",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1669564005730-3a45fb7899ea?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1669564005730-3a45fb7899ea?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Tracy Anderson",
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
