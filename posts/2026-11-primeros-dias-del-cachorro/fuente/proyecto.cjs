// Proyecto del Ser Animal Studio para «Los primeros días de tu cachorro». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "cachorro en casa",
  "slides": [
    {
      "id": "l48",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "Los primeros días *de tu cachorro*",
      "texto": "Lo que más lo ayuda a adaptarse",
      "busqueda_foto": "",
      "fondo": "foto",
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
      "fotoY": 55,
      "fotoZoom": 1
    },
    {
      "id": "l49",
      "tipo": "dato",
      "numero": 1,
      "titulo": "Un lugar propio",
      "texto": "Una cama tranquila, lejos del paso.",
      "busqueda_foto": "",
      "fondo": "verde",
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
      "id": "l50",
      "tipo": "dato",
      "numero": 2,
      "titulo": "Muchas siestas",
      "texto": "Los cachorros duermen gran parte del día: dejalo descansar.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1760615303589-299e2a87c4fa?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1760615303589-299e2a87c4fa?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Florian Schindler",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l51",
      "tipo": "dato",
      "numero": 3,
      "titulo": "Rutinas simples",
      "texto": "Mismos horarios para comer, salir y dormir.",
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
      "id": "l52",
      "tipo": "texto",
      "numero": 4,
      "titulo": "Visita al veterinario",
      "texto": "En los primeros días, para organizar vacunas y desparasitación.",
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
