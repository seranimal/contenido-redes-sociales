---
name: ser-animal-posts
description: |
  Arma posts de Instagram de Ser Animal de punta a punta: carruseles con las plantillas del
  Ser Animal Studio, fotos reales de Unsplash, fotos de producto con Nano Banana Pro,
  portadas animadas (MP4), historias 1080×1920 y la carpeta final en posts/ con texto.md.
  Usar cuando pidan «creame posts», «un carrusel de…», «historias», «animalo»,
  «un post de este producto», «pasámelos en HD», o un lote de contenido para el feed.
---

# Posts de Ser Animal

Antes de todo, leer `CLAUDE.md`, `lineamientos/estilos-de-post.md` y la guía `lineamientos/guia-instagram/`.
Hablarle siempre al usuario en español rioplatense con voseo: no habla inglés.

## Reglas que no se rompen

- Portada = foto real (o realista) + un texto claro. **Sin etiquetas** de serie en ninguna imagen.
- **Sin precios**, ni en la imagen ni en el posteo. **Sin marcas** a la vista: logos y textos ajenos se borran con IA, y el producto se nombra por lo que es.
- **Sin WhatsApp ni «pedilo»** en las imágenes: solo en el texto del posteo.
- **Nunca juzgar al dueño.** Los consejos van en positivo.
- **Caras a la vista:** ni el título ni los elementos (globos, personaje, logo) tapan la cara de animales ni personas.
- Todo en HD. Una sola indicación para deslizar.
- Variar categorías y estilos. Nunca dos portadas seguidas con el mismo estilo. Más personas con sus mascotas.

## 1 · Fotos

**Reales (Unsplash):** buscar con la herramienta de Unsplash (`per_page` 3 a 5, porque las respuestas son enormes), mirar miniaturas antes de elegir y **registrar cada foto usada con `download_asset`**. En el proyecto se usan así:
`https://images.unsplash.com/<photo-…>?ixlib=rb-4.1.0&q=90&fm=jpg&crop=entropy&cs=srgb&w=2400`, con el autor para los créditos.

**De producto (Nano Banana Pro, Higgsfield):** elegir productos lindos de seranimal.com.uy y tomar los datos de su ficha.
- Ficha sobre blanco:
  `higgsfield generate create nano_banana_pro --resolution 2k --aspect_ratio 1:1 --image <foto-real> --prompt "Clean e-commerce packshot of this exact same product on a pure white seamless background, soft natural studio light, gentle soft shadow, sharp focus. Keep the product identical in shape, color, material and proportions. Remove any logo, brand name, printed text, labels or watermark. No animals, no people, no text. Product: …" --wait`
- Portada en uso (4:5): «Photorealistic editorial lifestyle photograph, one single continuous seamless scene, natural light… The product must be identical to the reference image… No logos, no text… Camera slightly further back so there is plain soft wall space above the subject.» y la escena (mascota, casa luminosa, una persona cuando se pueda).
- Revisar siempre que el producto quede idéntico (ej.: las orejitas del comedero) y que no aparezcan costuras ni bandas raras. Si sale mal, regenerar (cuesta 2 créditos en 2k).
- Pasar todo a JPEG q92 de 2000 px como máximo. Más grande, el Studio se queda sin espacio (localStorage).

## 2 · Armar y renderizar con el Studio

1. Levantar el Studio en modo demo:
   `cd studio && npm install && VITE_DEMO=1 npx vite build && (nohup npx vite preview --port 4173 --strictPort > /tmp/preview.log 2>&1 &)`.
   Comprobar con `curl localhost:4173`.
2. Escribir un archivo de proyectos (ej. `posts-lote.cjs`) que exporte `{ clave: { tema, slides, caption: "", hashtags: [] } }`. Cada slide lleva:
   `{ id, tipo, numero, titulo, texto, busqueda_foto: "", fondo: "foto"|"verde"|"blanco", etiqueta: "", especie, colores, foto: { src, thumb, autor, downloadLocation }, fotoX: 50, fotoY: 50, fotoZoom: 1 }`.
   - Las imágenes locales van como `data:image/jpeg;base64,…`.
   - `*palabra*` en el título se subraya en verde.
3. Tipos de slide (`studio/src/SlideView.tsx`):
   - **Portadas sobre foto:** `foto-titulo-arriba`, `foto-titulo-abajo`, `portada-globos` (con `especie` para el personaje), `foto-panel`, `foto-enmarcada`, `foto-cita`, `portada-numero` (`numero`), `portada-pregunta`, `portada-titulo`, `retrato`.
   - **Sin foto:** `mosaico`, `texto-editorial`.
   - **Interiores:** `dato` (foto en tarjeta + número), `texto` (número grande), `producto-ficha` (con `colores` para las muestras), `cierre`.
4. Renderizar: `NODE_PATH=$(npm root -g) node studio/scripts/renderizar-carrusel.cjs <salida> <posts.cjs> [claves]`.
5. **Revisar cada slide** en tiras de miniaturas (ffmpeg `hstack`):
   - caras tapadas;
   - personaje de los globos pegado a la cabeza;
   - títulos ilegibles sobre fondos claros o recargados;
   - marcas en juguetes o ropa;
   - números de las slides en orden.
   `fotoY` mueve el encuadre de fotos altas: un valor más bajo muestra más de arriba y baja al sujeto.

## 3 · Animados (reels)

`NODE_PATH=$(npm root -g) node studio/scripts/animar-portada.cjs <salida> <posts.cjs> clave …`

Anima la portada real (8 s, 30 fps, 1080×1350, H.264) con las mismas plantillas:
- el título sube y el subrayado se dibuja;
- los globos salen de a uno;
- el panel sube y las esquinas del marco se dibujan;
- la foto hace un acercamiento lento;
- el «Deslizá» aparece al final.

Revisar cuadros en 0,5, 1,3 y 6 s.

## 4 · Historias (1080×1920)

Copiar `posts/2026-11-historias-consejos/fuente/` como plantilla.
- **Estilos:** `arriba`, `abajo`, `panel` (verde arriba y foto abajo) y `claro`.
- **Zona segura:** el texto va entre los 250 px de arriba y los 300 px de abajo.
- **Logo:** solo donde hay aire.
- **Renderizar:** `node fuente/render.js .` (y `--guia` para ver las zonas que tapa Instagram).

## 5 · Carpeta final y texto del posteo

Cada post va en `posts/AAAA-MM-nombre/`:
- `slide-0N.jpg` y `portada.jpg` (la copia de la slide 1);
- `animada.mp4`, si tiene animación;
- `texto.md`;
- `fuente/proyecto.cjs`, con las fotos locales en `fuente/assets/`.

`texto.md`:
- **Encabezado:** título, pilar, formato, una lista de slides con estilo y crédito de cada foto, y el producto con sus datos.
- **«## Texto del posteo»:**
  - primera línea con el tema, como lo buscaría alguien;
  - qué es, para quién es y para qué sirve;
  - una invitación a guardar o a mandarlo;
  - en posts de producto, el texto fijo de envíos y el WhatsApp de pedidos;
  - de 3 a 5 hashtags, siempre con #seranimal.
- **«## Antes de publicar»:**
  - etiqueta «Contenido de IA» si hay fotos generadas;
  - confirmar stock;
  - que un veterinario lea los consejos de salud.

Después:
1. Actualizar la planificación en `planificacion/` con el orden sugerido de publicación, sin repetir estilos seguidos y alternando fotos reales y productos.
2. Hacer el commit con el autor `seranimal`.
3. Mandar al usuario ZIPs en HD desde `descargas/` (no se suben al repo) y una vista de la grilla.
