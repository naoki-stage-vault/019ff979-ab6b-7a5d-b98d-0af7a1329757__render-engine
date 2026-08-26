import { readFile } from "node:fs/promises";
import path from "node:path";

// El home (/) sirve directamente el juego voxel (public/voxel-game.html).
// Un route handler devuelve el HTML tal cual: el juego es un documento
// autocontenido (Three.js por CDN + JS vanilla) que no necesita el layout
// de React ni nada del template de Next.
export async function GET() {
  const file = path.join(process.cwd(), "public", "voxel-game.html");
  const html = await readFile(file, "utf8");
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
