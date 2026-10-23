// Proyecto del Ser Animal Studio para «Olfatear lo cansa y lo relaja». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "olfatear",
  "slides": [
    {
      "id": "l5",
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
      "id": "l6",
      "tipo": "dato",
      "numero": 1,
      "titulo": "Usa su mejor sentido",
      "texto": "Oler es su forma de conocer el mundo: lo entretiene y lo cansa.",
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
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l7",
      "tipo": "dato",
      "numero": 2,
      "titulo": "Lo ayuda a calmarse",
      "texto": "Buscar con la nariz lo concentra y le baja la ansiedad.",
      "busqueda_foto": "",
      "fondo": "verde",
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
      "id": "l8",
      "tipo": "texto-editorial",
      "numero": 0,
      "titulo": "Esconderle premios en casa es un *juego de olfato*.",
      "texto": "Y también una forma de que coma más despacio",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "perro",
      "colores": "",
      "foto": null,
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l9",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Alfombra de olfateo",
      "texto": "Pétalos de tela para esconder premios o su alimento.\nPara perros y gatos\n45 × 45 cm\nSe pliega y se lava fácil",
      "busqueda_foto": "",
      "fondo": "verde",
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
