// Exporta cada SVG de marca/elementos/svg a PNG ×2 (fondo transparente) y arma catalogo.png.
// Uso, desde la raíz del repo: NODE_PATH=$(npm root -g) node marca/elementos/exportar-png.cjs
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const SVG = path.join(DIR, "svg");
const PNG = path.join(DIR, "png");
const RAIZ = path.resolve(DIR, "../..");

// En qué fondo se muestra cada elemento en el catálogo.
function fondo(nombre) {
  if (/blanc|pestana|deslizar-blanco|linea-blanca|marco|sello/.test(nombre)) return "foto";
  if (/oscur|deslizar-verde|linea-verde/.test(nombre)) return "claro";
  return "claro";
}

(async () => {
  fs.mkdirSync(PNG, { recursive: true });
  const archivos = fs.readdirSync(SVG).filter((f) => f.endsWith(".svg")).sort();
  const b = await chromium.launch();
  const pg = await b.newPage();

  for (const f of archivos) {
    const contenido = fs.readFileSync(path.join(SVG, f), "utf8");
    const [, w, h] = contenido.match(/width="([\d.]+)" height="([\d.]+)"/);
    const W = Math.ceil(Number(w) * 2), H = Math.ceil(Number(h) * 2);
    await pg.setViewportSize({ width: W, height: H });
    await pg.setContent(`<html><body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${Buffer.from(contenido).toString("base64")}" style="width:${W}px;height:${H}px;display:block"></body></html>`);
    await pg.screenshot({ path: path.join(PNG, f.replace(".svg", ".png")), omitBackground: true });
  }

  // Catálogo
  const foto = "data:image/png;base64," + fs.readFileSync(path.join(RAIZ, "marca/fotos/estudio-perro-gato.png")).toString("base64");
  const grupos = [
    ["Deslizá", /^deslizar/],
    ["Pestaña, marco y líneas", /^(pestana|marco|linea)/],
    ["Insignias numéricas", /^insignia-(verde|oscura)-[1-5]/],
    ["Sellos", /^sello/],
    ["Callouts", /^callout/],
    ["Chips de especie", /^chip/],
    ["Pastillas", /^pastilla/],
    ["Etiquetas", /^etiqueta/],
    ["Flechas", /^flecha/],
  ];
  let html = `<html><head><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Nunito:wght@900&display=block" rel="stylesheet"><style>
    body{margin:0;padding:48px;background:#F8FAF4;font-family:'DM Sans';color:#253027;width:1600px}
    h1{font:900 44px Nunito;margin:0 0 6px} p.sub{margin:0 0 30px;color:#444D45;font-size:20px}
    h2{font:900 26px Nunito;margin:34px 0 14px}
    .fila{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start}
    .t{border-radius:16px;overflow:hidden;border:1px solid #E5E9DE;background:#fff}
    .c{display:flex;align-items:center;justify-content:center;padding:18px;min-width:120px;min-height:110px}
    .c.foto{background:url(${foto}) center/cover}
    .c.verde{background:#9ECA1B}
    .c.claro{background:#fff}
    .n{font-size:13px;padding:6px 10px;border-top:1px solid #E5E9DE;color:#444D45}
  </style></head><body><h1>Elementos gráficos · Ser Animal</h1><p class="sub">marca/elementos/ · SVG (vectorial) y PNG ×2 · tamaños pensados para el lienzo de 1080×1350</p>`;
  for (const [titulo, re] of grupos) {
    html += `<h2>${titulo}</h2><div class="fila">`;
    for (const f of archivos.filter((a) => re.test(a))) {
      const nombre = f.replace(".svg", "");
      const contenido = fs.readFileSync(path.join(SVG, f), "utf8");
      const [, w, h] = contenido.match(/width="([\d.]+)" height="([\d.]+)"/);
      const escala = Math.min(1, 300 / Number(w), 260 / Number(h));
      const src = "data:image/svg+xml;base64," + Buffer.from(contenido).toString("base64");
      const bg = /^marco/.test(nombre) || /blanc|contorno/.test(nombre) || /^pestana|^sello/.test(nombre) ? "foto" : /oscur/.test(nombre) ? "claro" : "claro";
      html += `<div class="t"><div class="c ${bg}"><img src="${src}" style="width:${Number(w) * escala}px;height:${Number(h) * escala}px"></div><div class="n">${nombre}</div></div>`;
    }
    html += `</div>`;
  }
  // Personajes (PNG recortados de las ilustraciones de especie)
  html += `<h2>Personajes</h2><div class="fila">`;
  for (const f of fs.readdirSync(PNG).filter((a) => a.startsWith("personaje-")).sort()) {
    const src = "data:image/png;base64," + fs.readFileSync(path.join(PNG, f)).toString("base64");
    html += `<div class="t"><div class="c foto"><img src="${src}" style="height:150px"></div><div class="n">${f.replace(".png", "")}</div></div>`;
  }
  html += `</div></body></html>`;
  await pg.setViewportSize({ width: 1696, height: 900 });
  await pg.setContent(html);
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(500);
  await pg.screenshot({ path: path.join(DIR, "catalogo.png"), fullPage: true });
  await b.close();
  console.log(`${archivos.length} PNG en ${PNG} y catalogo.png`);
})();
