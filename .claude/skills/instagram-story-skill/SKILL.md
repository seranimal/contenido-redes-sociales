---
name: instagram-story-skill
description: Planifica y produce historias de Instagram de Ser Animal (1080×1920): mensajes, consejos cortos, encuestas, quiz, cajas de preguntas y producto en uso, con su plan de stickers. Usar cuando pidan «historias», «stories», «una encuesta en historias» o «historias para esta semana».
---

# Historias de Instagram · Ser Animal

Escrita para Ser Animal. La skill del registro ClaudSkills era de otra empresa (African Data Layer), con otra marca y en inglés y francés, así que se tomaron solo sus buenas prácticas generales.

## Antes de empezar
Leer:
- `CLAUDE.md`;
- la sección «Historias» de `lineamientos/guia-instagram/index.html`;
- las plantillas `posts/2026-11-historias-consejos/fuente/` (mensajes) y `posts/2026-11-historias/fuente/` (encuesta, quiz, caja de preguntas, producto en uso, envíos).

## Tipos de historia
- **Mensaje:** el vínculo con su mascota, siempre en positivo («Ellos siempre te esperan»).
- **Consejo de un vistazo:** agua, paseos, uñas, chapita, pirotecnia. Una frase y, como mucho, una línea más.
- **Para conversar:** encuesta (Sí/No), quiz (con la respuesta correcta anotada), caja de preguntas.
- **Producto en uso:** con mención o enlace al post del producto. Sin precio.
- **Servicio:** los textos fijos de envíos y pedido programado, escritos siempre igual.

## Reglas
- **Medida:** 1080×1920. El texto va entre los 250 px de arriba y los 300 px de abajo, que tapa Instagram.
- **Stickers:** dejar libre la zona donde va el sticker (unos 320 px de alto) y marcarla en la versión `--guia`.
- **Primer segundo y medio:** la frase y la foto se entienden de un vistazo.
- **Texto:** Nunito 900 para el título y DM Sans para el texto; una palabra subrayada en verde.
- **Tamaño:** cuerpo de texto de 40 px como mínimo.
- **Fotos:** reales de Unsplash en HD (se registra la descarga) o de Nano Banana Pro con el producto idéntico.
- **Prohibido:** etiquetas, precios, marcas, WhatsApp o «pedilo» en la imagen.
- **Caras:** que no las tape nada.
- **Logo:** solo donde hay aire, nunca sobre caras ni fotos recargadas.
- **Idioma:** español rioplatense con voseo, sin traducción.

## Cómo se hacen
1. Copiar la carpeta `fuente/` de una de las plantillas a `posts/AAAA-MM-historias-<tema>/fuente/`.
2. Cargar las fotos en `fuente/assets/` (JPEG de 2400 px como máximo).
3. Editar la lista de historias en `index.html`: foto, estilo (`arriba`, `abajo`, `panel`, `claro`), título, texto y encuadre.
4. Renderizar: `node fuente/render.js .` y `node fuente/render.js . --guia` (la guía muestra las zonas tapadas y las de stickers; no se publica).
5. Revisar en una hoja de miniaturas que nada tape caras y que el texto se lea.
6. Escribir `texto.md` con:
   - una tabla con cada historia, su sticker (si lleva) y el crédito de la foto;
   - cuándo conviene usarla;
   - «Antes de publicar»: «Contenido de IA» si corresponde.
7. Hacer el commit y mandar un ZIP en HD desde `descargas/`.
