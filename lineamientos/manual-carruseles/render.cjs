// Exporta el manual a PDF A4 con Playwright (Chromium). Uso: node render.cjs [salida.pdf]
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const salida = process.argv[2] || path.join(__dirname, '..', 'manual-carruseles-ser-animal.pdf');
  const b = await chromium.launch();
  const pg = await b.newPage();
  await pg.goto('file://' + path.join(__dirname, 'index.html'));
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(800);
  await pg.pdf({ path: salida, preferCSSPageSize: true, printBackground: true });
  await b.close();
  console.log('PDF:', salida);
})();
