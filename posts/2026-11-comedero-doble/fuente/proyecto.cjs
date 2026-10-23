// Proyecto del Ser Animal Studio para «Comedero doble con orejitas». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "comedero doble",
  "slides": [
    {
      "id": "l26",
      "tipo": "foto-panel",
      "numero": 0,
      "titulo": "Comida y agua, cada una en su lugar",
      "texto": "Con orejitas de gato",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-comedero-portada.jpg"),
        "thumb": local("lote-comedero-portada.jpg")
      },
      "fotoX": 50,
      "fotoY": 55,
      "fotoZoom": 1
    },
    {
      "id": "l27",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Comedero doble con orejitas",
      "texto": "Base de madera con dos platos de acero.\nNo se desliza ni se vuelca\nFácil de limpiar\n30 × 15 × 5,5 cm",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-comedero-ficha.jpg"),
        "thumb": local("lote-comedero-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l28",
      "tipo": "texto-editorial",
      "numero": 0,
      "titulo": "Cambiale el agua *todos los días*.",
      "texto": "Fresca y limpia, toma más",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "gato",
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
