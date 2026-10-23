// Proyecto del Ser Animal Studio para «Los primeros días de tu cachorro». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "cachorro en casa",
  "slides": [
    {
      "id": "m5",
      "tipo": "portada-texto",
      "numero": 0,
      "titulo": "Los primeros días de tu cachorro *marcan la diferencia*.",
      "texto": "Te contamos cómo ayudarlo",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "perro",
      "colores": "",
      "foto": null,
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "m6",
      "tipo": "marco-redondo",
      "numero": 0,
      "titulo": "Un lugar *propio*",
      "texto": "Una cama tranquila, lejos del paso, donde pueda descansar.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1675543912618-fe14f5995279?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1675543912618-fe14f5995279?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Viktoria Lavrynenko",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "m7",
      "tipo": "tarjetas",
      "numero": 0,
      "titulo": "",
      "texto": "Muchas siestas\nDormir es parte de crecer\nLos cachorros duermen gran parte del día: dejalo descansar.\n\nRutinas simples\nSiempre a la misma hora\nComer, salir y dormir con horarios fijos le da seguridad.",
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
      "id": "m8",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Lo que necesita *desde el día uno*",
      "texto": "casa: Un lugar propio\nplato: Su comedero\ngota: Agua fresca\npelota: Sus juguetes",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1553736026-ff14d158d222?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1553736026-ff14d158d222?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Amy Humphries",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 60,
      "fotoZoom": 1
    },
    {
      "id": "m9",
      "tipo": "panel-foto",
      "numero": 0,
      "titulo": "Juego y mimos, *de a poco*",
      "texto": "Ratos cortos de juego lo ayudan a conocerte y a sentirse en casa.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1699725647409-4720951be3b6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1699725647409-4720951be3b6?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Janosch Jost",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "m10",
      "tipo": "lista-linea",
      "numero": 0,
      "titulo": "En la *primera semana*",
      "texto": "Visita al veterinario\nPlan de vacunas\nDesparasitación\nChapita con tu teléfono",
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
