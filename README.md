# Voxel World

Juego voxel tipo Minecraft que corre íntegramente en el navegador (Three.js +
JavaScript vanilla), servido desde la raíz del proyecto Next.js.

## Cómo se sirve

- El juego es un documento HTML autocontenido: `public/voxel-game.html`.
- `next.config.ts` usa un *rewrite* para que la raíz (`/`) muestre directamente
  ese archivo, sin cambiar la URL.

## Ponerlo en marcha

```bash
npm install
npm run dev
```

Abre la URL del entorno (o `http://localhost:3000` en local) y verás el juego.

## Controles

- **WASD** — moverse · **Ratón** — mirar · **Espacio** — saltar
- **Click izquierdo** — romper · **Click derecho** — colocar
- **Teclas 1-7 / rueda** — elegir bloque
- **F** — modo vuelo · **Shift/Ctrl** — bajar (volando)
- Corazones de vida: daño por caída y por ahogamiento; al morir reapareces
  en el punto de inicio.

## Detalles técnicos

- Mundo procedural con ruido Simplex (semilla fija): colinas, valles, playas,
  cuevas, lagos y árboles.
- Chunks de 16×16×16 con generación infinita por streaming.
- Face culling + geometría indexada fusionada por chunk (1–2 meshes por chunk).
- Física AABB con gravedad, salto, agua y modo vuelo.
- Raycast voxel DDA para romper/colocar bloques.
- Texturas procedurales en atlas (sin assets externos); solo Three.js se carga
  desde CDN.
