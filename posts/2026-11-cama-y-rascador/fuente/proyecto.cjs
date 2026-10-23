// Proyecto del Ser Animal Studio para «Cama y rascador de madera XL». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "cama y rascador",
  "slides": [
    {
      "id": "l20",
      "tipo": "foto-titulo-arriba",
      "numero": 0,
      "titulo": "Para dormir, *rascar y jugar*",
      "texto": "Cama y rascador en uno",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-camarasc-portada.jpg"),
        "thumb": local("lote-camarasc-portada.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l21",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Cama y rascador de madera XL",
      "texto": "Arriba, cartón para rascar o descansar. Abajo, una cueva con juguetes colgantes.\nEstructura firme de madera\nCuida tus muebles\n51 × 33 × 26 cm",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-camarasc-ficha.jpg"),
        "thumb": local("lote-camarasc-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n9",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Todo *en uno*",
      "texto": "luna: Para dormir\npata: Para rascar\npelota: Para jugar\ncasa: Cuida tus muebles",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1768658298729-7af6fa6eca05?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1768658298729-7af6fa6eca05?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Sandesh Nayak",
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
