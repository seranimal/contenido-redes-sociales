# Elementos gráficos · Ser Animal

Piezas fijas para que todos los posts usen exactamente los mismos recursos. Ver `catalogo.png`.

- `svg/`: archivo vectorial, con las letras convertidas en trazos (se ve igual en cualquier programa: Canva, Figma, Illustrator, la web).
- `png/`: el mismo elemento en PNG ×2 con fondo transparente, para apps que no aceptan SVG.
- Tamaños pensados para el lienzo de 1080×1350; en PNG están al doble.

| Elemento | Archivos | Dónde va |
|---|---|---|
| Sticker «Deslizá» | `deslizar-blanco`, `deslizar-verde`, `deslizar-oscuro` | Primera slide de todo carrusel, abajo a la derecha (170 px, a 56 px del borde). Blanco sobre foto; verde u oscuro sobre fondo claro. |
| Línea separadora | `linea-blanca`, `linea-verde` | Estilo número grande: de borde a borde, separando el título de la foto. |
| Pestaña con isotipo | `pestana-isotipo` | Arriba a la izquierda (x 70, y 0) en portadas con foto. |
| Marco de pregunta | `marco-pregunta` | Lienzo completo, sobre la foto del estilo «pregunta enmarcada». |
| Insignias | `insignia-verde-1…9`, `insignia-oscura-1…9` | Número de cada idea en las slides de datos. Verde sobre fondo blanco; oscura sobre fondo verde. |
| Sellos | `sello-nuevo`, `sello-edicion-limitada` | Producto héroe, cerca del producto (240 px). |
| Callouts | `callout-vertical-*`, `callout-horizontal-*` | Ficha de producto: el punto toca el producto. Blanco sobre verde; oscuro sobre blanco. Se pueden rotar. Máximo 3 por slide. |
| Chips de especie | `chip-perros`, `chip-gatos`, `chip-roedores`, `chip-pajaros`, `chip-peces` | Para indicar la especie del post. Es el único lugar donde van los colores de especie. |
| Pastillas | `pastilla-seranimal`, `pastilla-whatsapp`, `pastilla-pedilo`, `pastilla-atencion` | Cierres y llamados a la acción. «Pedilo por WhatsApp» va en el producto sobre fondo claro (en redes nunca hay precios). |
| Etiquetas | `etiqueta-aviso`, `etiqueta-novedad`, `etiqueta-sabias-que`, `etiqueta-consejos`, `etiqueta-familia` | Etiqueta de serie (una por pilar), arriba del título o arriba a la izquierda. Sirven sobre blanco, verde y foto. |
| Flechas | `flecha-circulo-blanco`, `-verde`, `-oscuro`, `-contorno`; `flecha-linea-oscura`, `-blanca` | Círculo: avanzar (estilo «foto con panel», en el borde entre foto y panel). Línea: solo en piezas sueltas sin «Deslizá» (nunca las dos indicaciones juntas). |
| Personajes | `png/personaje-perro`, `-gato`, `-roedor`, `-pajaro`, `-pez` | Cabezas de las ilustraciones de especie, recortadas. Se asoman detrás de los globos de texto o van arriba en el texto editorial. Son PNG (ilustración a color). |
| Asistente | `png/asistente-circulo.png` | Atención al cliente: siempre en círculo con borde verde. |

Logos e isotipos vectoriales: `marca/logo/logo-blanco.svg`, `logo-verde.svg`, `isotipo-blanco.svg`, `isotipo-verde.svg`.
Animaciones de especies: `marca/animaciones/`.
Fuentes: `marca/fuentes/` (Nunito y DM Sans, licencia libre).

## Efectos que no son archivos

| Efecto | Cómo se hace |
|---|---|
| Sombra de texto sobre foto | `text-shadow: 0 4px 18px rgba(0,0,0,.35)` |
| Banda esmerilada (estilo número abajo) | 300 px de alto abajo, `background: rgba(255,255,255,.14)` + `backdrop-filter: blur(20px)`, con la línea blanca arriba |
| Degradado para texto sobre foto | `linear-gradient(180deg, transparent 45%, rgba(37,48,39,.78) 100%)` |
| Fondo verde de producto | `radial-gradient(circle at 50% 62%, #CADC8A 0%, #9ECA1B 70%)` |
| Fondo claro de producto | `radial-gradient(circle at 50% 62%, #FFFFFF 0%, #F8FAF4 62%)`, con la foto del producto en `mix-blend-mode: multiply` para que su fondo blanco desaparezca |
| Destacado en avisos | Palabras clave en verde hoja `#4C7300` sobre blanco, o `#253027` sobre verde |

## Cambiar o sumar un elemento

1. Editar `generar.py` (ahí está el dibujo de cada pieza).
2. `python3 marca/elementos/generar.py` (necesita `pip install fonttools brotli potracer pillow numpy`).
3. `NODE_PATH=$(npm root -g) node marca/elementos/exportar-png.cjs` para los PNG y el catálogo.
4. Subir los cambios. Ser Animal Studio copia `svg/` al compilar, así que la web se actualiza sola.
