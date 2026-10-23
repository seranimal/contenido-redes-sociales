# Destacadas del perfil · tapas

Nueve tapas, todas iguales en estilo: ícono de línea blanco sobre verde Ser Animal `#9ECA1B`. Los íconos son los de `marca/elementos/` (`icono-*-blanco.svg`). Vista previa: `portada.jpg`.

| # | Destacada | Ícono | Archivo |
|---|---|---|---|
| 1 | Sucursales | Local | `destacada-01-sucursales.jpg` |
| 2 | Clientes | Personas | `destacada-02-clientes.jpg` |
| 3 | Eventos | Calendario con corazón | `destacada-03-eventos.jpg` |
| 4 | Consejos | Lamparita | `destacada-04-consejos.jpg` |
| 5 | Brit | Bolsa de alimento con huella | `destacada-05-brit.jpg` |
| 6 | Kong | Juguete rellenable | `destacada-06-kong.jpg` |
| 7 | Benebone | Hueso | `destacada-07-benebone.jpg` |
| 8 | Carnilove | Plato con alimento | `destacada-08-carnilove.jpg` |
| 9 | Adopciones | Casa con corazón | `destacada-09-adopciones.jpg` |

- **En la raíz:** cada tapa en 1080×1920, para subirla como historia.
- **En `cuadradas/`:** la misma tapa en 1080×1080, para elegirla desde la galería.

Las tapas de marcas no llevan el logo de la marca: el nombre lo dice el título de la destacada y la imagen muestra qué producto es. Así el perfil sigue la regla de no mostrar logos de otras marcas.

## Cómo ponerlas

1. Entrar a la destacada (o crearla con una historia) y tocar **Editar destacada**.
2. Tocar **Editar portada** y luego el ícono de galería.
3. Elegir la versión de `cuadradas/` y dejar el ícono centrado.
4. Escribir el nombre tal cual figura en la tabla.

## Qué va en cada una

- **Sucursales:** foto de cada local, dirección, horario y cómo llegar.
- **Clientes:** fotos y videos que mandan los clientes con sus mascotas, siempre con su permiso.
- **Eventos:** jornadas, ferias y actividades de la tienda.
- **Consejos:** las historias de `posts/2026-11-historias-consejos/`.
- **Brit, Kong, Benebone y Carnilove:** los productos de cada marca en uso, para qué mascota son y qué variedades hay. Sin precios.
- **Adopciones:** perros y gatos en adopción junto a los refugios con los que trabajamos.

## Para volver a generarlas

`cd posts/2026-10-destacadas && NODE_PATH=$(npm root -g) node fuente/render.js .`
