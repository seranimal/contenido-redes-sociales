// Proyecto del Ser Animal Studio para «¿Por qué ronronean los gatos?». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "ronroneo",
  "slides": [
    {
      "id": "l36",
      "tipo": "portada-globos",
      "numero": 0,
      "titulo": "¿Por qué\nronronean\nlos gatos?",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "gato",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1762534883024-981d0cc58643?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1762534883024-981d0cc58643?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Esra Afşar",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 0,
      "fotoZoom": 1
    },
    {
      "id": "n14",
      "tipo": "dato",
      "numero": 1,
      "titulo": "Cuando están a gusto",
      "texto": "Es lo más común: tranquilos, cómodos y cerca tuyo.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1599400845745-0e828dc77c06?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1599400845745-0e828dc77c06?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Remy Gieling",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "n15",
      "tipo": "panel-foto",
      "numero": 2,
      "titulo": "Para *pedirte algo*",
      "texto": "Algunos ronronean distinto cuando quieren comida o mimos.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1753415189478-e00bf057036a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1753415189478-e00bf057036a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Super Tseng",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 30,
      "fotoZoom": 1
    },
    {
      "id": "n16",
      "tipo": "marco-redondo",
      "numero": 0,
      "titulo": "También para *calmarse*",
      "texto": "Si están nerviosos o doloridos, ronronear los ayuda. Ante la duda, consultá a tu veterinario.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1620928157900-20e6954ec4f7?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1620928157900-20e6954ec4f7?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Roy K",
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
