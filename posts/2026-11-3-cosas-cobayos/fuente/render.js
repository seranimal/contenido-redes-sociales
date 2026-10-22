// Exporta cada slide del carrusel a JPG 1080×1350 en HD: se captura al doble (2160×2700)
// y se reduce con ffmpeg (lanczos), para que fotos y textos queden nítidos.
// Uso: node render.js <carpeta-de-salida>
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
(async () => {
  const out = process.argv[2] || '..';
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
  await pg.goto('file://' + path.join(__dirname, 'index.html') + '?render');
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(500);
  const slides = await pg.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const nombre = `slide-${String(i + 1).padStart(2, '0')}`;
    const grande = path.join(out, `${nombre}@2x.png`);
    await slides[i].screenshot({ path: grande });
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', grande, '-vf', 'scale=1080:1350:flags=lanczos', '-q:v', '1', path.join(out, `${nombre}.jpg`)]);
    fs.unlinkSync(grande);
  }
  await b.close();
})();
