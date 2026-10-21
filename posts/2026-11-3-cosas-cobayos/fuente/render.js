// Exporta cada slide del carrusel a JPG 1080×1350.
// Uso: node render.js <carpeta-de-salida>
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const out = process.argv[2] || '..';
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await pg.goto('file://' + path.join(__dirname, 'index.html') + '?render');
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(500);
  const slides = await pg.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    await slides[i].screenshot({ path: path.join(out, `slide-${String(i + 1).padStart(2, '0')}.jpg`), type: 'jpeg', quality: 95 });
  }
  await b.close();
})();
