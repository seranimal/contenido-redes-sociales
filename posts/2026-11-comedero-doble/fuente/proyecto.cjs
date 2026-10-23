// Proyecto del Ser Animal Studio para «Comedero doble con orejitas». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "comedero doble",
  "slides": [
    {
      "id": "m11",
      "tipo": "foto-tarjeta",
      "numero": 0,
      "titulo": "Comida y agua, *cada una en su lugar*",
      "texto": "Comedero doble con orejitas de gato",
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
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "m12",
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
      "id": "m13",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Pensado para *todos los días*",
      "texto": "plato: Dos platos de acero\nescudo: No se vuelca\ngota: Comida y agua\nhoja: Base de madera",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1779104200801-db38a7f3adc6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1779104200801-db38a7f3adc6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Windah Limbai",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
