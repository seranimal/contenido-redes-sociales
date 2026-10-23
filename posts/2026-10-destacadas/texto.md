# Destacadas del perfil · tapas

Nueve tapas con el mismo sistema: fondo verde Ser Animal `#9ECA1B` y todo en blanco. En las de marcas va el logo oficial en blanco; en Sucursales, el logo de Ser Animal; en las de temas, el ícono de línea grueso de `marca/elementos/`. Vista previa: `portada.jpg`.

| # | Destacada | Qué muestra | Archivo |
|---|---|---|---|
| 1 | Sucursales | Logo de Ser Animal en blanco: los locales son la marca | `destacada-01-sucursales.jpg` |
| 2 | Clientes | Ícono «personas» | `destacada-02-clientes.jpg` |
| 3 | Eventos | Ícono «calendario» | `destacada-03-eventos.jpg` |
| 4 | Consejos | Ícono «bombilla» | `destacada-04-consejos.jpg` |
| 5 | Brit | Logo oficial de Brit, en blanco | `destacada-05-brit.jpg` |
| 6 | Kong | Logo oficial de KONG, en blanco | `destacada-06-kong.jpg` |
| 7 | Benebone | Logo oficial de Benebone, en blanco | `destacada-07-benebone.jpg` |
| 8 | Carnilove | Logo oficial de Carnilove, en blanco | `destacada-08-carnilove.jpg` |
| 9 | Adopciones | Ícono «adopción» | `destacada-09-adopciones.jpg` |

- **En la raíz:** cada tapa en 1080×1920, para subirla como historia.
- **En `cuadradas/`:** la misma tapa en 1080×1080, para elegirla desde la galería (la más cómoda).

Las destacadas de marcas son el único lugar del perfil con logos de otras marcas. Se usan mientras Ser Animal venda esas marcas; si una marca pide bajar su logo, se saca. Los logos van en blanco, todos iguales, para que ninguna marca pese más que la tienda.

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

## Fuentes y cómo se rehacen

- Logos originales en `fuente/logos/` (sitios oficiales de Brit, Benebone y Carnilove; el de KONG, vectorial, de su distribuidor). Las versiones blancas se generan con `python3 fuente/logos-blancos.py`.
- Íconos: `marca/elementos/svg/icono-*-blanco-grueso.svg`.
- Render: `cd posts/2026-10-destacadas && NODE_PATH=$(npm root -g) node fuente/render.js .`
