# Ser Animal · contenido para redes

Repositorio de contenido de Ser Animal, tienda especializada en productos para mascotas en Uruguay. Todo post debe respetar `marca/brand-board-ser-animal.pdf` y los archivos de `lineamientos/`.

## Marca (resumen del brand board)

- **Colores:** un solo acento, el verde.
  - Verde Ser Animal `#9ECA1B`: acentos, botones, fondos de marca.
  - Verde claro `#CADC8A`: bordes suaves y detalles.
  - Verde hoja `#4C7300`: textos verdes sobre fondo claro.
  - Texto `#253027`: textos y fondos oscuros (verde casi negro, nunca negro puro).
  - Superficie `#F8FAF4`, Borde `#E5E9DE`, Gris oscuro `#444D45`.
  - Oferta `#B4321F`: solo ofertas (en la web; en redes no se publican precios).
  - Especies (solo en nombres de especie): Perros `#8B6A55`, Gatos `#B8702F`, Roedores `#8A63B8`, Pájaros `#D5202E`, Peces `#2F7FD0`.
- **Tipografía:** Nunito 800 para títulos y destacados; DM Sans 400–700 para textos, precios y botones.
- **Logo:** verde sobre fondos blancos, claros u oscuros, o blanco sobre el verde Ser Animal. Dejar aire alrededor. No estirarlo, rotarlo, recolorearlo ni ponerle sombras o bordes. No ponerlo sobre fotos recargadas.
- **Asistente:** el perrito con auriculares (`marca/ilustraciones/asistente.png`) es la cara de la atención al cliente; va siempre en círculo con borde verde.
- **Formas:** botones y chips en forma de pastilla; bordes redondeados de 10, 16 y 28 px; sombras suaves con el tono del texto.
- **Fotografía:** mascotas reales, buena calidad, caras a la vista. Nunca textos ni logos tapando a los animales.

## Redes sociales

Seguir siempre `lineamientos/estilos-de-post.md`. Resumen:

- **Imágenes reales o que luzcan reales.** Se puede usar IA (Higgsfield u otra) con aspecto fotográfico; el producto tiene que ser idéntico al real.
- **Fondos:** solo foto real, verde Ser Animal o blanco, alternándolos.
- **Tipografías en redes:** solo dos. Nunito 900 como principal (todos los títulos, números y productos) y DM Sans como secundaria (textos chicos). No usar Lobster ni Montserrat.
- **Carrusel por defecto:** slide 1 con imagen real; después el producto sobre verde o blanco.
- **Estilos de portada:** título con profundidad, título verde, número grande, pregunta enmarcada, producto héroe (cada tanto), foto limpia, ficha con callouts, producto sobre fondo claro, aviso solo texto, y los editoriales al estilo de Petz: título editorial sobre foto (arriba o abajo), pregunta en globos, foto con panel, texto editorial, foto enmarcada, retrato con nombre, cita sobre foto y mosaico de palabras. Más personas con sus mascotas en las fotos. Análisis completo en `lineamientos/referencias/petz-analisis.md`. Cada pilar tiene su etiqueta de serie.
- **Animaciones:** a la marca le gustan mucho; se ofrecen versiones animadas de los mismos estilos.

## Elementos gráficos (regla fija)

- Usar siempre los elementos de `marca/elementos/` (deslizá, líneas, pestaña, marco, insignias, sellos, callouts, chips, pastillas) y los logos vectoriales de `marca/logo/`. No redibujarlos a mano en cada post. Catálogo: `marca/elementos/catalogo.png`.
- Si un post necesita un elemento nuevo, sumarlo a `marca/elementos/generar.py`, regenerar SVG/PNG/catálogo y documentarlo en `marca/elementos/README.md`, para que quede disponible para siempre.
- Todo recurso gráfico que mande el usuario (ilustraciones, animaciones, fotos de marca) se guarda en `marca/` y se sube al repo.

## Tono de voz

- Cercano, claro y concreto, como hablaría alguien del local.
- Español rioplatense con voseo: «elegí», «buscá», «sumate».
- Mayúscula solo al principio de títulos y botones.
- Decir qué es, para quién es y cómo llega.
- **Nunca se publican precios** de productos en redes (ni en la imagen ni en el posteo). El llamado es a pedir por WhatsApp. Los únicos montos permitidos son los de los textos fijos de envíos y pedido programado.
- No inventar descuentos, plazos ni datos. Sin exclamaciones de más ni frases vacías.

## Textos que siempre se escriben igual

- **Envíos:** Envío gratis a todo el país desde $1.500. En compras menores, $200. Nunca «zonas de reparto».
- **Pedido programado:** Te avisamos cuando toque reponer. 5% de descuento desde el 2.º pedido.
- **WhatsApp:** Pedidos y envíos: 091 380 000. Atención al cliente: 092 121 212.
- **Redes:** @seranimal en Instagram, Facebook y TikTok.

## Formatos

- Feed de Instagram: 1080×1350 (4:5). Reels e historias: 1080×1920 (9:16).
- Cada post nuevo va en `posts/AAAA-MM-nombre-del-post/` con archivo final, `portada.jpg`, `texto.md` y `fuente/`.
- Las animaciones se arman en HTML y se renderizan a MP4 con Playwright + ffmpeg; ver `posts/2026-10-post-animado-marca/fuente/` como ejemplo.

## Ser Animal Studio (`studio/`)

Web propia para crear carruseles con IA (React + Vite en Cloudflare Pages; funciones en `studio/functions/`). Las plantillas de slide están en `studio/src/SlideView.tsx` y `studio/src/plantillas.css`, y las reglas que recibe Claude en `studio/functions/api/generate.ts`: si cambian los lineamientos de marca, actualizar también esos archivos. Antes de subir cambios, correr `npm run build && npm run typecheck` dentro de `studio/`.
