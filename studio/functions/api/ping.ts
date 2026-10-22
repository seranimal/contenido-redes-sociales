// Sirve para comprobar la contraseña al entrar (el middleware ya la validó).
export const onRequestGet: PagesFunction = async () => Response.json({ ok: true });
