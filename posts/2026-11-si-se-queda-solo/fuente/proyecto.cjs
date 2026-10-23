// Proyecto del Ser Animal Studio para «Si se queda solo en casa». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "solo en casa",
  "slides": [
    {
      "id": "l67",
      "tipo": "foto-panel",
      "numero": 0,
      "titulo": "Si se queda solo en casa",
      "texto": "Ideas para que lo pase mejor",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1762957044542-583a86b753a3?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1762957044542-583a86b753a3?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Daniel J. Schwarz",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n30",
      "tipo": "marco-redondo",
      "numero": 0,
      "titulo": "Un paseo *antes de salir*",
      "texto": "Cansado y con sus necesidades hechas, descansa mejor.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1717443746288-2143a9698215?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1717443746288-2143a9698215?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Barnabas Davoti",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n31",
      "tipo": "tarjetas",
      "numero": 0,
      "titulo": "Mientras *no estás*",
      "texto": "Algo para hacer\nUn juguete rellenable\nLo mantiene ocupado un buen rato.\n\nDespedidas cortas\nSalir y volver con calma\nLe enseña que no pasa nada.",
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
      "id": "n32",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "Ellos siempre *te esperan*",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1694467648694-0c0d5eeeb43e?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1694467648694-0c0d5eeeb43e?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Lesli Whitecotton",
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
