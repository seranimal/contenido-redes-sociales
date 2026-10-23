// Exporta las tapas de destacadas en HD: se captura al doble y se reduce con ffmpeg (lanczos).
// Cada tapa sale en 1080×1920 (para subirla como historia) y en 1080×1080 (cuadradas/, para
// elegirla desde la galería como portada). Además arma portada.jpg con la vista previa del perfil.
// Uso: node render.js <carpeta-de-salida>
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');
(async () => {
  const out = process.argv[2] || '..';
  fs.mkdirSync(path.join(out, 'cuadradas'), { recursive: true });
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 2 });
  await pg.goto('file://' + path.join(__dirname, 'index.html') + '?render');
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(800);
  const ffmpeg = (entrada, filtro, salida) =>
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', entrada, '-vf', filtro, '-q:v', '1', salida]);
  const tapas = await pg.$$('.tapa');
  for (let i = 0; i < tapas.length; i++) {
    const clave = await tapas[i].getAttribute('data-clave');
    const nombre = `destacada-${String(i + 1).padStart(2, '0')}-${clave}`;
    const grande = path.join(out, `${nombre}@2x.png`);
    await tapas[i].screenshot({ path: grande });
    ffmpeg(grande, 'scale=1080:1920:flags=lanczos', path.join(out, `${nombre}.jpg`));
    ffmpeg(grande, 'crop=2160:2160:0:840,scale=1080:1080:flags=lanczos', path.join(out, 'cuadradas', `${nombre}.jpg`));
    fs.unlinkSync(grande);
  }
  const grande = path.join(out, 'portada@2x.png');
  await (await pg.$('.vista')).screenshot({ path: grande });
  ffmpeg(grande, 'scale=1080:1350:flags=lanczos', path.join(out, 'portada.jpg'));
  fs.unlinkSync(grande);
  await b.close();
})();
