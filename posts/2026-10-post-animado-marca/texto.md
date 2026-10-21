# Post animado de marca

- **Formato:** video MP4, 1080×1350 (4:5), 17 s, sin audio (sumar música desde Instagram).
- **Escenas:** apertura con logo → especies → productos (DUCK, collar WAUDOG, pañales, mochila Chongke) → envíos → cierre con @seranimal y WhatsApp.

## Texto del posteo

Integrantes de la familia, merecen lo mejor 💚
Juguetes, collares, higiene y accesorios para perros, gatos, roedores, pájaros y peces.
Envío gratis a todo el país desde $1.500. Pedidos y envíos por WhatsApp: 091 380 000.

## Cómo volver a renderizarlo

Desde `fuente/`:

```bash
mkdir -p frames && node render.js full frames
ffmpeg -framerate 30 -i frames/f%04d.jpg -c:v libx264 -pix_fmt yuv420p -crf 18 -movflags +faststart video.mp4
```

Abrir `fuente/index.html` en el navegador muestra la animación en bucle.
