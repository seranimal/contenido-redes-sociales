// Copia la biblioteca de elementos gráficos (marca/elementos/svg) a public/elementos,
// para que la web use exactamente los mismos archivos que los posts.
import { cpSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const origen = join(aqui, "../../marca/elementos/svg");
const destino = join(aqui, "../public/elementos");
mkdirSync(destino, { recursive: true });
cpSync(origen, destino, { recursive: true });
// Los personajes de especie son PNG (ilustraciones a color).
const png = join(aqui, "../../marca/elementos/png");
for (const f of readdirSync(png).filter((f) => f.startsWith("personaje-"))) cpSync(join(png, f), join(destino, f));
console.log("Elementos gráficos copiados a public/elementos");
