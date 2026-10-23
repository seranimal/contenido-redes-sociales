"""Genera las versiones blancas de los logos oficiales (fuente/logos/*-blanco.*).

Los SVG se pasan a blanco reemplazando cada color de relleno; el PNG de Benebone
se pinta de blanco conservando la transparencia. Se corre desde esta carpeta:
    python3 logos-blancos.py
"""
import re
from pathlib import Path

from PIL import Image

LOGOS = Path(__file__).parent / "logos"
BLANCO = "#FFFFFF"


def svg_a_blanco(origen: str, destino: str) -> None:
    s = (LOGOS / origen).read_text()
    s = re.sub(r'fill="(?!none)[^"]*"', f'fill="{BLANCO}"', s)
    s = re.sub(r"fill:\s*(?!none)[^;\"}]+", f"fill:{BLANCO}", s)
    s = re.sub(r'stroke="(?!none)[^"]*"', f'stroke="{BLANCO}"', s)
    (LOGOS / destino).write_text(s)


def png_a_blanco(origen: str, destino: str) -> None:
    im = Image.open(LOGOS / origen).convert("RGBA")
    blanco = Image.new("RGBA", im.size, (255, 255, 255, 255))
    blanco.putalpha(im.getchannel("A"))
    blanco.save(LOGOS / destino)


if __name__ == "__main__":
    svg_a_blanco("brit.svg", "brit-blanco.svg")
    svg_a_blanco("kong.svg", "kong-blanco.svg")
    svg_a_blanco("carnilove.svg", "carnilove-blanco.svg")
    png_a_blanco("benebone.png", "benebone-blanco.png")
    print("Listo:", sorted(p.name for p in LOGOS.glob("*-blanco.*")))
