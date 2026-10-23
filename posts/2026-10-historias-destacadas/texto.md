# Historias para las destacadas · Brit, Kong, Benebone, Carnilove y Sucursales

30 historias de 1080×1920 para llenar las destacadas de marcas y la de Sucursales. Se suben como historias y, antes de que pasen las 24 horas, se guardan en la destacada que corresponde (o directamente desde el archivo de historias).

Todos los datos de productos salen de las fichas de seranimal.com.uy; las fotos de producto son las de la tienda. Sin precios. En las historias de una marca sí aparece el logo y el envase de esa marca: es la única excepción a la regla de «sin marcas», igual que en las tapas.

## Qué hay en cada carpeta

| Carpeta | Historias | Orden |
|---|---|---|
| `brit/` | 5 | Portada · Líneas (Premium by Nature, Care, Veterinary, Animals, snacks) · Brit Care Grain-Free Adulto · Brit Premium Gato · Cierre |
| `kong/` | 5 | Portada · ¿Cuál es para tu perro? (Puppy, Classic, Extreme, Kitty, pelotas) · Kong Extreme · Consejo «Rellenalo y congelalo» · Cierre |
| `benebone/` | 5 | Portada · Elegí por forma (Wishbone, Maplestick y Zaggler, Dental Chew, Puppy, Rubber) · Wishbone · Consejo «Cambialo cada mes» · Cierre |
| `carnilove/` | 5 | Portada · Elegí por sabor y etapa · True Fresh Turkey Adult · True Fresh Cat Chicken · Cierre |
| `sucursales/` | 10 | Portada «7 locales» · ¿Cuál te queda más cerca? · Una por local (Punta Gorda, Malvín, Jacinto Vera, Parque Miramar, San José de Carrasco, Solymar, Vista Linda) · Cierre «Te lo llevamos a tu casa» |

Cada cierre repite los textos fijos: envío gratis a todo el país desde $1.500 y pedido programado.

## Sucursales: qué falta confirmar

Las ubicaciones salen del mapa de Google de la web (7 puntos) y los barrios y calles, del mapa de OpenStreetMap. Por eso las historias dicen el barrio y la calle, pero **no el número ni el horario**: para no publicar un dato equivocado, cada historia de local lleva la frase «Dirección exacta, horarios y cómo llegar: tocá el link» y se publica con el **sticker de link** apuntando al mapa de sucursales (`https://www.google.com/maps/d/u/0/edit?mid=1LcwP2u5xiolyL25ncTrTm82LUiGByWQ&usp=sharing`) o a la ficha de Google de ese local.

Cuando tengas la lista de direcciones exactas y horarios, se agregan a `fuente/index.html` (campo `calle` y uno nuevo de `horario`) y se vuelven a generar. Lo mismo si hay una foto linda de cada fachada: se reemplaza el ícono por la foto.

## Al subirlas

- Historias de marca: sticker de link a la categoría de esa marca en la web, si existe, o nada.
- Historias de local: sticker de link al mapa o a la ficha de Google del local; opcional, sticker de ubicación.
- Después de publicarlas, agregarlas a la destacada correspondiente y revisar que queden en el orden de la tabla (en las destacadas, la más nueva queda primera: conviene subirlas en orden inverso, del cierre a la portada).

## Para volver a generarlas

`cd posts/2026-10-historias-destacadas && NODE_PATH=$(npm root -g) node fuente/render.js .` (con `--guia` marca las zonas que tapa Instagram).
