// Proyecto del Ser Animal Studio para «¿Cada cuánto cepillar a tu gato?». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "cepillar al gato",
  "slides": [
    {
      "id": "l0",
      "tipo": "portada-pregunta",
      "numero": 0,
      "titulo": "¿Cada cuánto cepillar a tu gato?",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1618141364643-4eeadab92902?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1618141364643-4eeadab92902?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Margarita Zueva",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    },
    {
      "id": "l1",
      "tipo": "dato",
      "numero": 1,
      "titulo": "Pelo corto: una vez por semana",
      "texto": "Le saca el pelo suelto y lo ayuda con su higiene.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1629693764609-3553bac0b01b?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1629693764609-3553bac0b01b?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "noelle",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 35,
      "fotoZoom": 1
    },
    {
      "id": "l2",
      "tipo": "dato",
      "numero": 2,
      "titulo": "Pelo largo: casi todos los días",
      "texto": "Así no se le forman nudos.",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1723028075357-a2ce23ce6505?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1723028075357-a2ce23ce6505?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Mikhail Blinov",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 35,
      "fotoZoom": 1
    },
    {
      "id": "l3",
      "tipo": "dato",
      "numero": 3,
      "titulo": "Menos pelo en casa",
      "texto": "Y menos bolas de pelo, porque traga menos cuando se lame.",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1568051131683-700fd7420b5a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1568051131683-700fd7420b5a?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Joyful",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 45,
      "fotoZoom": 1
    },
    {
      "id": "l4",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Peine con botón de autolimpieza",
      "texto": "Saca el pelo suelto y, con un botón, se limpia solo.\nPara gatos y perros\nCerdas finas\nSe limpia en un segundo",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-peine-ficha.jpg"),
        "thumb": local("lote-peine-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
