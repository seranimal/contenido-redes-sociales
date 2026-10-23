// Proyecto del Ser Animal Studio para «Si le asustan los fuegos artificiales». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "pirotecnia",
  "slides": [
    {
      "id": "l58",
      "tipo": "foto-titulo-arriba",
      "numero": 0,
      "titulo": "Si le asustan *los fuegos artificiales*",
      "texto": "Cómo acompañarlo",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1785293220841-92878c63bf79?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1785293220841-92878c63bf79?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Ivett M",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 60,
      "fotoZoom": 1
    },
    {
      "id": "n25",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Cómo *acompañarlo*",
      "texto": "casa: Un rincón tranquilo\nluna: Cortinas cerradas\ncorazon: Vos cerca, con calma\nescudo: Su chapita puesta",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1787011427020-b3ea9ef86418?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1787011427020-b3ea9ef86418?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "John Rodriguez",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n26",
      "tipo": "panel-foto",
      "numero": 0,
      "titulo": "Quedate cerca, *con calma*",
      "texto": "Hablale tranquilo y dejalo esconderse si quiere: tu calma lo ayuda.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1579549653905-093738b1f6a1?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1579549653905-093738b1f6a1?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Daniel Lincoln",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "n27",
      "tipo": "lista-linea",
      "numero": 0,
      "titulo": "Para tener *en cuenta*",
      "texto": "Cerrá ventanas y cortinas\nNo lo saques de su escondite\nChapita con tu teléfono\nSi el miedo es mucho, consultá a tu veterinario",
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
