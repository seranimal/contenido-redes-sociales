# Destacadas del perfil · tapas

Nueve tapas con el mismo sistema, el «anillo»: anillo verde Ser Animal `#9ECA1B` de borde a borde y disco blanco adentro. En el disco va el logo oficial de la marca o una foto real con una insignia verde con el ícono de línea de `marca/elementos/`. Vista previa: `portada.jpg`.

| # | Destacada | Qué muestra | Archivo |
|---|---|---|---|
| 1 | Sucursales | Logo de Ser Animal: los locales son la marca | `destacada-01-sucursales.jpg` |
| 2 | Clientes | Foto real (persona con su perro) + insignia «personas» | `destacada-02-clientes.jpg` |
| 3 | Eventos | Foto real (encuentro de perros con gente) + insignia «calendario» | `destacada-03-eventos.jpg` |
| 4 | Consejos | Foto real (perro tomando agua de la mano) + insignia «bombilla» | `destacada-04-consejos.jpg` |
| 5 | Brit | Logo oficial de Brit | `destacada-05-brit.jpg` |
| 6 | Kong | Logo oficial de KONG | `destacada-06-kong.jpg` |
| 7 | Benebone | Logo oficial de Benebone | `destacada-07-benebone.jpg` |
| 8 | Carnilove | Logo oficial de Carnilove | `destacada-08-carnilove.jpg` |
| 9 | Adopciones | Foto real (perro de refugio) + insignia «adopción» | `destacada-09-adopciones.jpg` |

- **En la raíz:** cada tapa en 1080×1920, para subirla como historia.
- **En `cuadradas/`:** la misma tapa en 1080×1080, para elegirla desde la galería (la más cómoda).

Las destacadas de marcas son el único lugar del perfil con logos de otras marcas. Se usan mientras Ser Animal venda esas marcas; si una marca pide bajar su logo, se saca. Sucursales lleva el logo de Ser Animal porque ninguna foto de banco muestra nuestros locales. Cuando haya una foto linda de la fachada, se guarda como `fuente/fotos/sucursales.jpg`, se cambia la entrada en `fuente/index.html` por `{ foto, icono: 'tienda' }` y se vuelve a generar.

## Cómo ponerlas

1. Entrar a la destacada (o crearla con una historia) y tocar **Editar destacada**.
2. Tocar **Editar portada** y luego el ícono de galería.
3. Elegir la versión de `cuadradas/` y dejarla centrada.
4. Escribir el nombre tal cual figura en la tabla.

## Qué va en cada una

- **Sucursales:** foto de cada local, dirección, horario y cómo llegar.
- **Clientes:** fotos y videos que mandan los clientes con sus mascotas, siempre con su permiso.
- **Eventos:** jornadas, ferias y actividades de la tienda, antes y después.
- **Consejos:** las historias de `posts/2026-11-historias-consejos/`, agrupadas por tema.
- **Brit, Kong, Benebone y Carnilove:** los productos de cada marca en uso, para qué mascota son y qué variedades hay. Sin precios.
- **Adopciones:** perros y gatos en adopción junto a los refugios con los que trabajamos.

Lo que va adentro se renueva cada tres meses.

## Fuentes

- Logos: sitios oficiales de cada marca (`fuente/logos/`). El de KONG se vectorizó a partir del logo del sitio oficial.
- Fotos (Unsplash, descarga registrada): Martin Vysoudil (clientes), Judy Beth Morris (eventos), T / tanyabarrow (consejos), Madeline Bowen (adopciones). Están en `fuente/fotos/`.

## Para volver a generarlas

`cd posts/2026-10-destacadas && NODE_PATH=$(npm root -g) node fuente/render.js .`
