import sharp from "sharp";
import path from "node:path";

const SRC =
  process.argv[2] ??
  "C:\\Users\\AGrah\\.cursor\\projects\\c-Users-AGrah-ffi-website\\assets\\c__Users_AGrah_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Foundation_for-4380813e-9120-44bd-93b2-206a892f899d.png";
const OUT = process.argv[3] ?? path.resolve("public/logo.png");

// Pixels brighter than this on every channel are treated as background.
const WHITE = 228;
// Light pixels near an edge get feathered to reduce a white halo.
const LIGHT = 200;

const img = sharp(SRC).ensureAlpha();
const { data, info } = await img
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const idx = (x, y) => (y * width + x) * channels;

const isWhite = (i) =>
  data[i] >= WHITE && data[i + 1] >= WHITE && data[i + 2] >= WHITE;

// Flood fill from every border pixel; clear alpha on connected near-white.
const cleared = new Uint8Array(width * height);
const stack = [];
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (cleared[p]) return;
  if (!isWhite(idx(x, y))) return;
  cleared[p] = 1;
  data[idx(x, y) + 3] = 0;
  stack.push(x, y);
};
for (let x = 0; x < width; x++) {
  push(x, 0);
  push(x, height - 1);
}
for (let y = 0; y < height; y++) {
  push(0, y);
  push(width - 1, y);
}
while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  push(x + 1, y);
  push(x - 1, y);
  push(x, y + 1);
  push(x, y - 1);
}

// Feather: light pixels touching a transparent pixel fade toward transparent.
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const p = y * width + x;
    if (cleared[p]) continue;
    const i = idx(x, y);
    const min = Math.min(data[i], data[i + 1], data[i + 2]);
    if (min < LIGHT) continue;
    let touchesClear = false;
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      if (cleared[ny * width + nx]) {
        touchesClear = true;
        break;
      }
    }
    if (!touchesClear) continue;
    // Map brightness LIGHT..255 -> alpha 255..0
    const a = Math.round((255 - min) * (255 / (255 - LIGHT)));
    data[i + 3] = Math.max(0, Math.min(255, a));
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(OUT);

console.log(`Wrote ${OUT} (${width}x${height})`);
