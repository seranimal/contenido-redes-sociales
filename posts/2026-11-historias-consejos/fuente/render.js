// Exporta cada historia a JPG 1080×1920 en HD: se captura al doble (2160×3840)
// y se reduce con ffmpeg (lanczos). Con --guia exporta además una versión que marca
// dónde va cada sticker y las zonas que tapa Instagram.
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
  await pg.waitForTimeout(800);
  const historias = await pg.$$('.story');
  for (let i = 0; i < historias.length; i++) {
    const nombre = `${guia ? 'guia-' : ''}historia-${String(i + 1).padStart(2, '0')}`;
    const grande = path.join(out, `${nombre}@2x.png`);
    await historias[i].screenshot({ path: grande });
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', grande, '-vf', 'scale=1080:1920:flags=lanczos', '-q:v', '1', path.join(out, `${nombre}.jpg`)]);
    fs.unlinkSync(grande);
  }
  await b.close();
})();
