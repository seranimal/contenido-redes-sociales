// Proyecto del Ser Animal Studio para «Bandeja y platos de bambú». Se carga en localStorage («seranimal-studio-proyecto»).
const fs = require('fs'), path = require('path');
const local = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
module.exports = {
  "tema": "platos de bambú",
  "slides": [
    {
      "id": "l29",
      "tipo": "foto-enmarcada",
      "numero": 0,
      "titulo": "Platos de bambú para la hora de comer",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "blanco",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-bambu-portada.jpg"),
        "thumb": local("lote-bambu-portada.jpg")
      },
      "fotoX": 50,
      "fotoY": 60,
      "fotoZoom": 1
    },
    {
      "id": "l30",
      "tipo": "producto-ficha",
      "numero": 0,
      "titulo": "Bandeja y platos de bambú",
      "texto": "Bandeja con dos platos de 14 cm.\nPara gatos y perros chicos\nBase antideslizante\nSe limpia con un paño húmedo",
      "busqueda_foto": "",
      "fondo": "verde",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": local("lote-bambu-ficha.jpg"),
        "thumb": local("lote-bambu-ficha.jpg")
      },
      "fotoX": 50,
      "fotoY": 50,
      "fotoZoom": 1
    },
    {
      "id": "l31",
      "tipo": "foto-titulo-abajo",
      "numero": 0,
      "titulo": "¿Ya es la hora *de comer*?",
      "texto": "",
      "busqueda_foto": "",
      "fondo": "foto",
      "etiqueta": "",
      "especie": "",
      "colores": "",
      "foto": {
        "src": "https://images.unsplash.com/photo-1581562324420-eff2f5aaa4b5?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "thumb": "https://images.unsplash.com/photo-1581562324420-eff2f5aaa4b5?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400",
        "autor": "Cole Wyland",
        "downloadLocation": "registrada"
      },
      "fotoX": 50,
      "fotoY": 40,
      "fotoZoom": 1
    }
  ],
  "caption": "",
  "hashtags": []
};
