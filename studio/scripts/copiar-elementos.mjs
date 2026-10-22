// Copia la biblioteca de elementos gráficos (marca/elementos/svg) a public/elementos,
// para que la web use exactamente los mismos archivos que los posts.
import { cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const origen = join(aqui, "../../marca/elementos/svg");
const destino = join(aqui, "../public/elementos");
mkdirSync(destino, { recursive: true });
cpSync(origen, destino, { recursive: true });
console.log("Elementos gráficos copiados a public/elementos");
