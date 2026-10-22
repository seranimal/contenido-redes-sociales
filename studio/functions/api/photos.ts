// Busca fotos en Unsplash (GET /api/photos?q=...&page=1) y registra su uso (POST /api/photos).
// La clave de Unsplash queda del lado del servidor.

interface Env {
  UNSPLASH_ACCESS_KEY?: string;
}

interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  width: number;
  height: number;
  urls: { regular: string; small: string; full: string };
  links: { html: string; download_location: string };
  user: { name: string; links: { html: string } };
}

const UTM = "utm_source=ser_animal_studio&utm_medium=referral";

function sinClave() {
  return Response.json({ error: "Falta configurar UNSPLASH_ACCESS_KEY en Cloudflare." }, { status: 500 });
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.UNSPLASH_ACCESS_KEY) return sinClave();
  const url = new URL(request.url);
  const q = url.searchParams.get("q")?.trim();
  if (!q) return Response.json({ fotos: [] });
  const page = url.searchParams.get("page") ?? "1";

  const api = new URL("https://api.unsplash.com/search/photos");
  api.searchParams.set("query", q);
  api.searchParams.set("page", page);
  api.searchParams.set("per_page", "18");
  api.searchParams.set("content_filter", "high");

  const res = await fetch(api, {
    headers: { Authorization: `Client-ID ${env.UNSPLASH_ACCESS_KEY}`, "Accept-Version": "v1" },
  });
  if (!res.ok) {
    return Response.json({ error: `Unsplash respondió ${res.status}.` }, { status: 502 });
  }
  const data = (await res.json()) as { results: UnsplashPhoto[] };

  const fotos = data.results.map((p) => ({
    id: p.id,
    alt: p.alt_description ?? "",
    src: `${p.urls.full}&w=1600&q=85`,
    thumb: p.urls.small,
    ancho: p.width,
    alto: p.height,
    autor: p.user.name,
    autorUrl: `${p.user.links.html}?${UTM}`,
    fotoUrl: `${p.links.html}?${UTM}`,
    downloadLocation: p.links.download_location,
  }));
  return Response.json({ fotos });
};

// Unsplash pide avisar cada vez que una foto se usa en un diseño.
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.UNSPLASH_ACCESS_KEY) return sinClave();
  const body = (await request.json().catch(() => null)) as { downloadLocation?: string } | null;
  const location = body?.downloadLocation;
  if (!location?.startsWith("https://api.unsplash.com/")) {
    return Response.json({ error: "Foto inválida." }, { status: 400 });
  }
  await fetch(location, { headers: { Authorization: `Client-ID ${env.UNSPLASH_ACCESS_KEY}` } });
  return Response.json({ ok: true });
};
