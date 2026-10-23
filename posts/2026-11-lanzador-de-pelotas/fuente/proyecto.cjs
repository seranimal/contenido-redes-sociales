// Proyecto del Ser Animal Studio para «Lanzador de pelotas automático». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "lanzador de pelotas",
  "slides": [
    {
      "id": "l23",
      "tipo": "foto-titulo-arriba",
      "numero": 0,
      "titulo": "Tirale la pelota *sin cansarte*",
      "texto": "A 3, 6 o 9 metros",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-lanzador-portada.jpg"),
        "thumb": local("lote-lanzador-portada.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l24",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Lanzador de pelotas automático",
      "texto": "Elegís la distancia, ponés la pelota y la lanza solo.\nPara perros chicos\nA 3, 6 o 9 metros\nIncluye 3 pelotitas",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-lanzador-ficha.jpg"),
        "thumb": local("lote-lanzador-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l25",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "Jugar todos los días *lo mantiene activo*",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1717443746314-4d165ef862f0?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1717443746314-4d165ef862f0?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Barnabas Davoti",
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
