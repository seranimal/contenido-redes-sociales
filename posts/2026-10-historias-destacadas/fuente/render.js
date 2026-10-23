// Exporta cada historia a JPG 1080×1920 en HD: se captura al doble (2160×3840)
// y se reduce con ffmpeg (lanczos). Las historias salen en carpetas por destacada
// (brit/, kong/, benebone/, carnilove/, sucursales/). Con --guia marca las zonas que tapa Instagram.
// Uso: node render.js <carpeta-de-salida> [--guia]
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
(async () => {
  const out = process.argv[2] || '..';
  const guia = process.argv.includes('--guia');
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 2 });
  await pg.goto('file://' + path.join(__dirname, 'index.html') + '?render' + (guia ? '&guia' : ''));
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(1200);
  const historias = await pg.$$('.story');
  for (const st of historias) {
    const nombre = await st.getAttribute('data-nombre');
    const carpeta = path.join(out, nombre.split('-')[0]);
    fs.mkdirSync(carpeta, { recursive: true });
    const grande = path.join(carpeta, `${guia ? 'guia-' : ''}${nombre}@2x.png`);
    await st.screenshot({ path: grande });
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', grande, '-vf', 'scale=1080:1920:flags=lanczos', '-q:v', '1', path.join(carpeta, `${guia ? 'guia-' : ''}${nombre}.jpg`)]);
    fs.unlinkSync(grande);
  }
  await b.close();
  console.log(historias.length, 'historias en', out);
})();
