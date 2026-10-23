// Proyecto del Ser Animal Studio para «¿Cada cuánto cepillar a tu gato?». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "cepillar al gato",
  "slides": [
    {
      "id": "l0",
      "tipo": "portada-pregunta",
      "numero": 0,
      "titulo": "¿Cada cuánto cepillar a tu gato?",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1618141364643-4eeadab92902?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1618141364643-4eeadab92902?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Margarita Zueva",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "n0",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Lo que le da *el cepillado*",
      "texto": "pata: Saca el pelo suelto\ncasa: Menos pelo en casa\nescudo: Menos bolas de pelo\ncorazon: Un rato juntos",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1629693764609-3553bac0b01b?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1629693764609-3553bac0b01b?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "noelle",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 35,
      "fotoZoom": 1
    },
    {
      "id": "n1",
      "tipo": "tarjetas",
      "numero": 0,
      "titulo": "¿Cada *cuánto*?",
      "texto": "Pelo corto\nUna vez por semana\nAlcanza para sacarle el pelo suelto y ayudarlo con su higiene.\n\nPelo largo\nCasi todos los días\nAsí no se le forman nudos.",
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
      "id": "n2",
      "tipo": "panel-foto",
      "numero": 0,
      "titulo": "Menos *bolas de pelo*",
      "texto": "Si lo cepillás seguido, traga menos pelo cuando se lame.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1568051131683-700fd7420b5a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1568051131683-700fd7420b5a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Joyful",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "l4",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Peine con botón de autolimpieza",
      "texto": "Saca el pelo suelto y, con un botón, se limpia solo.\nPara gatos y perros\nCerdas finas\nSe limpia en un segundo",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-peine-ficha.jpg"),
        "thumb": local("lote-peine-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
