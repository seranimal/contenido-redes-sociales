// Proyecto del Ser Animal Studio para «¿Por qué los perros comen pasto?». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "perros y pasto",
  "slides": [
    {
      "id": "l40",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "¿Por qué los perros *comen pasto*?",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1775826476140-c3b8b87cb480?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1775826476140-c3b8b87cb480?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Shivansh Upadhyay",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n17",
      "tipo": "marco-redondo",
      "numero": 0,
      "titulo": "Porque *les gusta*",
      "texto": "A muchos les atrae el sabor o la textura.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1759704900691-616e8674b65a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1759704900691-616e8674b65a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Laura Roberts",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n18",
      "tipo": "tarjetas",
      "numero": 0,
      "titulo": "Otras *razones*",
      "texto": "Por aburrimiento\nMás juego, menos pasto\nMás paseos y juegos pueden ayudar.\n\nSi vomita seguido\nO come mucho de golpe\nConsultá a tu veterinario.",
      "busqueda_foto": "",
      "fondo": "blanco",
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
