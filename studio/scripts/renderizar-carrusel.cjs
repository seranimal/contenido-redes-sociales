// Renderiza carruseles en HD con las plantillas del Studio, sin pasar por la web a mano.
// Carga cada proyecto en el Studio (localStorage «seranimal-studio-proyecto»), aprieta
// «Descargar todo (ZIP)» y descomprime las slides (1080×1350, dibujadas al doble).
// Uso: con el Studio en modo demo en localhost:4173 (VITE_DEMO=1 npx vite build && npx vite preview --port 4173),
// node studio/scripts/renderizar-carrusel.cjs <salida-dir> <proyectos.cjs> [clave1 clave2 ...]
// donde proyectos.cjs exporta { clave: proyecto }, o un solo proyecto (fuente/proyecto.cjs).
// Sin claves, renderiza todos. Cada uno queda en <salida-dir>/<clave>/slide-0N.jpg.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const OUT = process.argv[2];
const cargado = require(path.resolve(process.argv[3]));
const posts = cargado.slides ? { proyecto: cargado } : cargado;
const claves = process.argv.length > 4 ? process.argv.slice(4) : Object.keys(posts);

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true });
  const pg = await ctx.newPage();
  for (const clave of claves) {
    await pg.goto('http://localhost:4173/');
    await pg.evaluate((proj) => { localStorage.clear(); localStorage.setItem('seranimal-studio-proyecto', JSON.stringify(proj)); }, posts[clave]);
    await pg.reload();
    await pg.waitForLoadState('networkidle');
    await pg.waitForTimeout(1500);
    const [dl] = await Promise.all([pg.waitForEvent('download'), pg.click('text=Descargar todo (ZIP)')]);
    const dir = path.join(OUT, clave);
    fs.mkdirSync(dir, { recursive: true });
    const zip = path.join(OUT, clave + '.zip');
    await dl.saveAs(zip);
    execFileSync('unzip', ['-o', '-q', zip, '-d', dir]);
    fs.unlinkSync(zip);
    console.log(clave, fs.readdirSync(dir).join(' '));
  }
  await b.close();
})();
