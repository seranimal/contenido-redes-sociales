// Versión animada de la portada de un carrusel, con la misma plantilla del Studio.
// Carga el proyecto en el Studio, clona la slide real a tamaño completo, le aplica animaciones
// (Web Animations API, en pausa) y captura cuadro por cuadro al doble; ffmpeg reduce y arma el MP4.
// Uso: con el Studio en modo demo en localhost:4173 (VITE_DEMO=1 npx vite build && npx vite preview --port 4173),
// node studio/scripts/animar-portada.cjs <salida-dir> <proyectos.cjs> clave1 [clave2 ...]
// donde proyectos.cjs exporta { clave: proyecto }. Con un solo proyecto (fuente/proyecto.cjs) se usa la clave «proyecto».
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const OUT = process.argv[2];
const cargado = require(path.resolve(process.argv[3]));
const posts = cargado.slides ? { proyecto: cargado } : cargado;
const claves = process.argv.slice(4);
const FPS = 30, DUR = 8;

function animaciones() {
  const nodo = document.querySelector('#anim .slide');
  const anims = [];
  const A = (el, kf, o) => { const a = el.animate(kf, { fill: 'both', easing: 'cubic-bezier(.2,.8,.2,1)', ...o }); a.pause(); anims.push(a); };
  const todos = (sel) => [...nodo.querySelectorAll(sel)];
  // Foto: acercamiento lento durante todo el video.
  todos('.marco-foto img').forEach((el) => A(el, [{ scale: '1.1' }, { scale: '1' }], { duration: DUR * 1000, easing: 'ease-out' }));
  todos('.tf-velo, .degradado, .rt-velo').forEach((el) => A(el, [{ opacity: 0 }, { opacity: 1 }], { duration: 700 }));
  // Panel que sube y foto enmarcada que aparece.
  todos('.fp-panel').forEach((el) => A(el, [{ translate: '0 100%' }, { translate: '0 0' }], { duration: 900 }));
  todos('.fe-foto').forEach((el) => A(el, [{ opacity: 0, scale: '.94' }, { opacity: 1, scale: '1' }], { delay: 200, duration: 900 }));
  todos('.fe-esquina').forEach((el, i) => A(el, [{ opacity: 0, scale: '0' }, { opacity: 1, scale: '1' }], { delay: 900 + i * 120, duration: 500 }));
  // Títulos: suben y aparecen; después se dibuja el subrayado.
  todos('.tf-t, .titulo-arriba, .fp-t, .fe-t, .pregunta, .ed-t, .portada-num .t, .portada-num .n').forEach((el) =>
    A(el, [{ opacity: 0, translate: '0 50px' }, { opacity: 1, translate: '0 0' }], { delay: 350, duration: 900 }));
  todos('em').forEach((el) => A(el, [{ textDecorationColor: 'rgba(158,202,27,0)' }, { textDecorationColor: 'rgba(158,202,27,1)' }], { delay: 1250, duration: 500, easing: 'linear' }));
  todos('.tf-pie, .tf-x, .fp-x, .linea-abajo, .ed-pie').forEach((el) =>
    A(el, [{ opacity: 0, translate: '0 24px' }, { opacity: 1, translate: '0 0' }], { delay: 1400, duration: 700 }));
  // Comillas de la cita.
  todos('.cita-comillas').forEach((el) => A(el, [{ opacity: 0, scale: '0' }, { opacity: 1, scale: '1.15', offset: .7 }, { opacity: 1, scale: '1' }], { delay: 150, duration: 650 }));
  // Globos de a uno y el personaje al final.
  const globos = todos('.globo');
  globos.forEach((el, i) => A(el, [{ opacity: 0, scale: '.5' }, { opacity: 1, scale: '1.08', offset: .7 }, { opacity: 1, scale: '1' }], { delay: 350 + i * 320, duration: 520 }));
  todos('.globo .asoma').forEach((el) => A(el, [{ opacity: 0, scale: '0' }, { opacity: 1, scale: '1.12', offset: .7 }, { opacity: 1, scale: '1' }], { delay: 350 + globos.length * 320 + 250, duration: 600 }));
  // Logo, pestaña y flecha.
  todos('.pestana, .fe-logo, .iso, .iso-esquina, .mo-logo').forEach((el) => A(el, [{ opacity: 0 }, { opacity: 1 }], { delay: 1500, duration: 600 }));
  todos('.fp-flecha').forEach((el) => A(el, [{ opacity: 0, scale: '.4' }, { opacity: 1, scale: '1' }], { delay: 1900, duration: 500 }));
  // «Deslizá»: aparece y después hace un empujoncito suave cada tanto.
  todos('.deslizar').forEach((el) => {
    A(el, [{ opacity: 0, scale: '.6' }, { opacity: 1, scale: '1' }], { delay: 2200, duration: 500 });
    A(el, [{ translate: '0 0' }, { translate: '-16px 0', offset: .35 }, { translate: '0 0', offset: .7 }, { translate: '0 0' }], { delay: 3000, duration: 1400, iterations: Infinity, easing: 'ease-in-out' });
  });
  window.__anims = anims;
}

(async () => {
  const b = await chromium.launch();
  for (const clave of claves) {
    const ctx = await b.newContext({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });
    const pg = await ctx.newPage();
    await pg.goto('http://localhost:4173/');
    await pg.evaluate((proj) => { localStorage.clear(); localStorage.setItem('seranimal-studio-proyecto', JSON.stringify(proj)); }, posts[clave]);
    await pg.reload();
    await pg.waitForLoadState('networkidle');
    await pg.evaluate(() => document.fonts.ready);
    await pg.waitForTimeout(1200);
    await pg.evaluate(async () => {
      const original = document.querySelector('.slide');
      const caja = document.createElement('div');
      caja.id = 'anim';
      caja.style.cssText = 'position:fixed;left:0;top:0;width:1080px;height:1350px;overflow:hidden;z-index:99999;background:#fff';
      caja.appendChild(original.cloneNode(true));
      document.body.appendChild(caja);
      document.getElementById('root').style.display = 'none';
      document.body.style.overflow = 'hidden';
      await Promise.all([...caja.querySelectorAll('img')].map((i) => i.complete ? i.decode().catch(() => {}) : new Promise((r) => { i.onload = r; i.onerror = r; })));
    });
    await pg.evaluate(animaciones.toString().replace('function animaciones() {', '(() => { const DUR = ' + DUR + ';').replace(/}\s*$/, '})()'));
    const dir = path.join(OUT, clave + '-cuadros');
    fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
    for (let f = 0; f < FPS * DUR; f++) {
      await pg.evaluate((ms) => { for (const a of window.__anims) a.currentTime = ms; }, (f * 1000) / FPS);
      await pg.screenshot({ path: path.join(dir, `f${String(f).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 95, clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    }
    const mp4 = path.join(OUT, clave + '.mp4');
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(dir, 'f%04d.jpg'),
      '-vf', 'scale=1080:1350:flags=lanczos', '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4]);
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(clave, 'listo');
    await ctx.close();
  }
  await b.close();
})();
