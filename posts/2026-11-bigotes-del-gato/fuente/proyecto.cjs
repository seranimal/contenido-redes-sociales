// Proyecto del Ser Animal Studio para «3 cosas que no sabías de sus bigotes». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "bigotes del gato",
  "slides": [
    {
      "id": "l44",
      "tipo": "portada-numero",
      "numero": 3,
      "titulo": "cosas que no sabías de sus bigotes",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1767607514538-2d9d4baa956f?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1767607514538-2d9d4baa956f?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Nima Ghazaei",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 35,
      "fotoZoom": 1
    },
    {
      "id": "n19",
      "tipo": "dato",
      "numero": 1,
      "titulo": "Miden espacios",
      "texto": "Lo ayudan a saber si entra por un lugar.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1701642321998-eb0b3bf460e0?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1701642321998-eb0b3bf460e0?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Ghessyka Schmidt",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "n20",
      "tipo": "panel-foto",
      "numero": 2,
      "titulo": "Sienten *el aire*",
      "texto": "Notan movimientos mínimos a su alrededor.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1616058106290-8ec871aef47d?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1616058106290-8ec871aef47d?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Sven Mieke",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "n21",
      "tipo": "dato",
      "numero": 3,
      "titulo": "No se cortan nunca",
      "texto": "Son parte de cómo percibe el mundo.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1780759791909-28547ceb56af?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1780759791909-28547ceb56af?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Massimiliano Morosinotto",
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
