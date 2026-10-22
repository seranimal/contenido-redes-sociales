# Ser Animal Studio

Web para crear carruseles de Instagram con la identidad de Ser Animal: escribís un pedido («3 cosas que no sabías de los gatos»), Claude arma los textos, se buscan fotos reales en Unsplash y se aplican las plantillas de `lineamientos/estilos-de-post.md`. Después se editan textos, fotos, encuadre y fondos, y se descarga todo en un ZIP (slides JPG 1080×1350 + texto del posteo).

## Cómo está armada

| Parte | Qué hace |
|---|---|
| `src/` | La web (React + Vite): editor, plantillas (`SlideView.tsx`, `plantillas.css`) y exportación a JPG. |
| `functions/api/generate.ts` | Llama a Claude (Opus 5.5) con las reglas de la marca y devuelve el carrusel en JSON. |
| `functions/api/photos.ts` | Busca fotos en Unsplash y avisa a Unsplash cuando una foto se usa. |
| `functions/api/_middleware.ts` | Pide la contraseña de la app en todas las rutas `/api`. |
| `src/spec.ts` | Esquema del carrusel, compartido por la web y las funciones. |

Las claves quedan del lado del servidor (Cloudflare); el navegador nunca las ve.

## Publicarla en Cloudflare Pages (gratis)

1. **Clave de Claude:** en https://console.anthropic.com creá una API key y cargá saldo (cada carrusel cuesta unos centavos de dólar). Conviene ponerle un límite de gasto mensual.
2. **Clave de Unsplash:** en https://unsplash.com/developers creá una app («New Application») y copiá el **Access Key**. Arranca en modo demo (50 búsquedas por hora); cuando la app esté andando, pedí el paso a producción desde el mismo panel para tener 5.000 por hora.
3. **Cloudflare:** en https://dash.cloudflare.com → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* y elegí el repositorio `seranimal/contenido-redes-sociales`.
   - **Production branch:** `main`
   - **Root directory:** `studio`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. En *Settings → Variables and Secrets* agregá, como **Secret**:
   - `ANTHROPIC_API_KEY`
   - `UNSPLASH_ACCESS_KEY`
   - `APP_PASSWORD` (la contraseña para entrar a la web)
5. Volvé a desplegar (*Deployments → Retry deployment*). La web queda en `https://<nombre>.pages.dev`.

Cada vez que se sube un cambio a `main`, Cloudflare la vuelve a publicar sola.

## Desarrollo local

```bash
npm install
cp .dev.vars.example .dev.vars   # completar las claves
npm run build && npx wrangler pages dev dist   # web + funciones en http://localhost:8788
```

Para probar solo el diseño, sin claves: `VITE_DEMO=1 npm run dev` (usa un carrusel de ejemplo y una foto de la marca).

## Límites conocidos

- La versión animada (MP4) todavía no está en la web; se hace desde el chat con Claude Code.
- El efecto de texto por detrás del sujeto (estilo 1 de la guía) todavía no está automatizado.
- En las slides de producto, la foto la sube el usuario: la web no busca productos en Unsplash, para no mostrar un producto que no es el real.
