// Protege todas las rutas /api/* con la contraseña de la app (variable APP_PASSWORD).

interface Env {
  APP_PASSWORD?: string;
}

export const onRequest: PagesFunction<Env> = async ({ request, env, next }) => {
  if (!env.APP_PASSWORD) {
    return Response.json({ error: "Falta configurar APP_PASSWORD en Cloudflare." }, { status: 500 });
  }
  if (request.headers.get("x-app-password") !== env.APP_PASSWORD) {
    return Response.json({ error: "Contraseña incorrecta." }, { status: 401 });
  }
  return next();
};
