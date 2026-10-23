---
name: brand-guidelines
description: Aplica los colores, las tipografías y las reglas de marca de Ser Animal a cualquier pieza (posts, historias, páginas, documentos, presentaciones, mails). Usar cuando se hable de colores de marca, tipografías, estilo visual, identidad o «que se vea como Ser Animal».
license: Adaptada de anthropics/skills (brand-guidelines), Apache 2.0. Ver LICENSE.txt.
---

# Marca Ser Animal

Adaptada de la skill `brand-guidelines` de Anthropic: en lugar de la marca de Anthropic, aplica la de Ser Animal.
La fuente de verdad es `marca/brand-board-ser-animal.pdf` y `CLAUDE.md`. Si algo de acá no coincide con ellos, mandan ellos.

## Colores

Un solo acento: el verde.

| Uso | Color |
|---|---|
| Verde Ser Animal: acentos, botones, fondos de marca | `#9ECA1B` |
| Verde claro: bordes suaves y detalles | `#CADC8A` |
| Verde hoja: textos verdes sobre fondo claro | `#4C7300` |
| Texto y fondos oscuros (nunca negro puro) | `#253027` |
| Superficie | `#F8FAF4` |
| Borde | `#E5E9DE` |
| Gris oscuro | `#444D45` |
| Oferta: solo en la web, nunca en redes | `#B4321F` |

**Especies** (solo en nombres de especie):

| Especie | Color |
|---|---|
| Perros | `#8B6A55` |
| Gatos | `#B8702F` |
| Roedores | `#8A63B8` |
| Pájaros | `#D5202E` |
| Peces | `#2F7FD0` |

En redes, los fondos son solo foto real, verde Ser Animal o blanco.

## Tipografía

- **Títulos, números y productos:** Nunito 800–900.
- **Textos y botones:** DM Sans 400–700.
- **Nunca:** Lobster ni Montserrat.
- En redes, solo esas dos tipografías.

## Logo y elementos

- **Logo:** verde sobre fondos blancos, claros u oscuros, o blanco sobre el verde Ser Animal. Siempre con aire alrededor.
  - No estirarlo, rotarlo, recolorearlo ni ponerle sombras o bordes.
  - No ponerlo sobre fotos recargadas.
  - Archivos en `marca/logo/`.
- **Elementos gráficos** (deslizá, pestaña, marco, insignias, sellos, chips): usar siempre los de `marca/elementos/`, sin redibujarlos.
- **Asistente:** el perrito con auriculares (`marca/ilustraciones/asistente.png`). Va siempre en círculo con borde verde.
- **Formas:** botones y chips en forma de pastilla, bordes redondeados de 10, 16 y 28 px, y sombras suaves con el tono del texto.

## Fotografía

- Mascotas reales, buena calidad y caras a la vista.
- Nunca textos ni logos tapando a los animales.
- Sin marcas de otras empresas a la vista.

## Al aplicar la marca a una pieza

- Títulos en Nunito, texto en DM Sans y el verde como único acento.
- Colores definidos como variables en un solo lugar (por ejemplo, en `:root`).
- Contraste legible: texto `#253027` sobre claro y blanco sobre verde u oscuro.
- Tono: español rioplatense con voseo, cercano y concreto, sin precios en redes.
