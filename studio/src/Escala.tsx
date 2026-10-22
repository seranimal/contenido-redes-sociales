import type { ReactNode } from "react";

/** Muestra un contenido de 1080×1350 achicado a `ancho` píxeles, sin cambiar su tamaño real. */
export function Escala({ ancho, children }: { ancho: number; children: ReactNode }) {
  const s = ancho / 1080;
  return (
    <div className="escala" style={{ width: ancho, height: 1350 * s }}>
      <div style={{ width: 1080, height: 1350, transform: `scale(${s})`, transformOrigin: "top left" }}>{children}</div>
    </div>
  );
}
