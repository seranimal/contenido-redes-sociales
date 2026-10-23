// Proyecto del Ser Animal Studio para «Olfatear lo cansa y lo relaja». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "olfatear",
  "slides": [
    {
      "id": "m0",
      "tipo": "foto-panel",
      "numero": 0,
      "titulo": "Olfatear lo cansa y lo relaja",
      "texto": "Te contamos por qué",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1613478304725-0fcde78f4bcb?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1613478304725-0fcde78f4bcb?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Mathias Reding",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 75,
      "fotoZoom": 1
    },
    {
      "id": "m1",
      "tipo": "iconos-foto",
      "numero": 0,
      "titulo": "Lo que le da *usar la nariz*",
      "texto": "lupa: Usa su mejor sentido\ncorazon: Lo ayuda a calmarse\nreloj: Come más despacio\npelota: Juega sin salir",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1533489642645-6500674bff13?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1533489642645-6500674bff13?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Beer Drinker",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 55,
      "fotoZoom": 1
    },
    {
      "id": "m2",
      "tipo": "tarjetas",
      "numero": 0,
      "titulo": "Un juego de olfato *en casa*",
      "texto": "Empezá fácil\nCon los premios a la vista\nEscondé unos premios donde los vea, para que entienda el juego.\n\nSubí la dificultad\nDe a poco\nCuando los encuentre rápido, escondelos debajo de una manta.\n\nQue siempre gane\nY terminá ahí\nCortá el juego con ganas: así lo espera la próxima vez.",
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
      "id": "m3",
      "tipo": "panel-foto",
      "numero": 0,
      "titulo": "Ideal para los que *comen rápido*",
      "texto": "Esconder su alimento entre los pétalos hace que coma más despacio y se entretenga mientras come.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1634840459492-47e67b9ae3d5?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1634840459492-47e67b9ae3d5?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Silvan Schuppisser",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "m4",
      "tipo": "lista-linea",
      "numero": 0,
      "titulo": "Alfombra *de olfateo*",
      "texto": "Pétalos para esconder premios\nPara perros y gatos\n45 × 45 cm\nSe pliega y se lava fácil\nNo se desliza",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-alfombra-ficha.jpg"),
        "thumb": local("lote-alfombra-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
