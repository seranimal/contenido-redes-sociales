// Renderiza las historias animadas de Brit (bolsas que caen) a MP4 1080×1920, 30 fps.
// Cada cuadro se captura al doble (2160×3840) y ffmpeg lo reduce con lanczos.
// Uso: node animar.js <carpeta-de-salida> <seq: premium|care> [check]
//   check: exporta solo unos cuadros PNG para revisar, sin armar el video.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFileSync } = require('child_process');
(async () => {
  const [, , out, seq = 'premium', modo = 'video'] = process.argv;
  const fps = 30;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), `brit-${seq}-`));
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: modo === 'check' ? 1 : 2 });
  await pg.goto('file://' + path.join(__dirname, 'animado.html') + '?seq=' + seq);
  await pg.evaluate(() => document.fonts.ready);
  // Precarga las bolsas para que no aparezcan en blanco en su primer cuadro.
  await pg.evaluate(async () => {
    const seqs = Object.values(SECUENCIAS).flatMap((s) => s.bolsas.map((bb) => bb[0]));
    await Promise.all(seqs.map((a) => new Promise((r) => { const im = new Image(); im.onload = r; im.onerror = r; im.src = `bolsas/${a}.png`; })));
  });
  const dur = await pg.evaluate(() => window.DUR);
  // En control: la intro, cada bolsa ya apoyada con su dato, y el cierre.
  const n = await pg.evaluate(() => S.bolsas.length);
  const tiempos = modo === 'check'
    ? [0.8, ...[...Array(n).keys()].map((i) => 1.6 + i * 1.9 + 1.2), dur - 0.5]
    : [...Array(Math.round(dur * fps)).keys()].map((i) => i / fps);
  const st = await pg.$('#stage');
  for (let i = 0; i < tiempos.length; i++) {
    await pg.evaluate((t) => window.render(t), tiempos[i]);
    const f = path.join(modo === 'check' ? out : tmp, `f${String(i).padStart(4, '0')}.${modo === 'check' ? 'png' : 'jpg'}`);
    await st.screenshot({ path: f, ...(modo === 'check' ? {} : { type: 'jpeg', quality: 95 }) });
  }
  await b.close();
  if (modo === 'check') { console.log('cuadros de control en', out); return; }
  const mp4 = path.join(out, `brit-${seq}-animado.mp4`);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', path.join(tmp, 'f%04d.jpg'),
    '-vf', 'scale=1080:1920:flags=lanczos,format=yuv420p', '-c:v', 'libx264', '-crf', '18', '-preset', 'slow', '-movflags', '+faststart', mp4]);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(mp4, `${dur.toFixed(1)} s`);
})();
