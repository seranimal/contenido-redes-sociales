// Proyecto del Ser Animal Studio para «Adoptar cambia dos vidas». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "adoptar",
  "slides": [
    {
      "id": "l81",
      "tipo": "foto-cita",
      "numero": 0,
      "titulo": "Adoptar cambia dos vidas: la suya y la tuya.",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1610708990659-f18171d1d8a5?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1610708990659-f18171d1d8a5?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Patrick Decker",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l82",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "Le das *un hogar*",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1534243510675-3c687393caff?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1534243510675-3c687393caff?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Susn Matthiessen",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "n40",
      "tipo": "marco-redondo",
      "numero": 0,
      "titulo": "Y te da *compañía de verdad*",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1697854516918-924bcfa1b484?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1697854516918-924bcfa1b484?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Alla Kemelmakher",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "l84",
      "tipo": "cierre",
      "numero": 0,
      "titulo": "¿Tu compañero es adoptado?",
      "texto": "Contanos su historia en los comentarios.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1717328056825-0319d8e69cdd?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1717328056825-0319d8e69cdd?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Julia Vivcharyk",
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
