// Proyecto del Ser Animal Studio para «En verano, llevá agua al paseo». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "paseos de verano",
  "slides": [
    {
      "id": "l15",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "En verano, *llevá agua* al paseo",
      "texto": "Tres ideas para salir con calor",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1695415551808-97dad3373425?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1695415551808-97dad3373425?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "sander traa",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n6",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Para salir *con calor*",
      "texto": "sol: Temprano o al atardecer\ncasa: Paradas a la sombra\ngota: Agua seguido\nreloj: Paseos más cortos",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1690651448851-8039da15934d?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1690651448851-8039da15934d?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Lala Azizli",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n7",
      "tipo": "panel-foto",
      "numero": 0,
      "titulo": "Atento a *las señales*",
      "texto": "Si jadea mucho o se echa a descansar, es momento de volver.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1634752341102-11a36c972b16?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1634752341102-11a36c972b16?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Mauro Lima",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n8",
      "tipo": "lista-linea",
      "numero": 0,
      "titulo": "Qué llevar *al paseo*",
      "texto": "Agua fresca\nUn bebedero portátil\nBolsitas\nSu chapita con tu teléfono",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": null,
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l19",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Bebedero portátil",
      "texto": "Botella fina con bebedero: toma ahí mismo.\nCabe en la mochila\nCon tira para la muñeca\nNo gotea\nColores según stock",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-bebedero-ficha.jpg"),
        "thumb": local("lote-bebedero-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
