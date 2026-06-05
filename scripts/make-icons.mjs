import sharp from "sharp";
import path from "node:path";

const LOGO = path.resolve("public/logo.png");
const APP = path.resolve("src/app");

// 1) Favicon — center emblem cropped from the badge so it reads at 16px.
//    The source is 500x500; the scenic emblem sits in the middle.
const emblem = await sharp(LOGO)
  .extract({ left: 116, top: 116, width: 268, height: 268 })
  .resize(512, 512)
  .png()
  .toBuffer();

await sharp(emblem).toFile(path.join(APP, "icon.png"));

// 2) Apple touch icon — emblem on a solid white tile with padding.
const tile = 180;
const inner = 148;
const innerLogo = await sharp(emblem).resize(inner, inner).toBuffer();
await sharp({
  create: {
    width: tile,
    height: tile,
    channels: 4,
    background: "#ffffff",
  },
})
  .composite([
    { input: innerLogo, top: (tile - inner) / 2, left: (tile - inner) / 2 },
  ])
  .png()
  .toFile(path.join(APP, "apple-icon.png"));

// 3) Social share image (Open Graph) — 1200x630, branded.
const W = 1200;
const H = 630;
const bg = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f1f8f6"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <rect x="0" y="0" width="${W}" height="14" fill="#0f766e"/>
    <text x="470" y="270" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700" fill="#0f3d39">Foundation for</text>
    <text x="470" y="345" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700" fill="#0f3d39">Independence</text>
    <text x="472" y="405" font-family="Arial, sans-serif" font-size="26" letter-spacing="3" fill="#0f766e">SUPPORTED LIVING &amp; EMPLOYMENT &#183; ARIZONA</text>
  </svg>`
);
const ogLogo = await sharp(LOGO).resize(360, 360).toBuffer();
const og = await sharp(bg)
  .composite([{ input: ogLogo, top: 135, left: 70 }])
  .png()
  .toBuffer();
await sharp(og).toFile(path.join(APP, "opengraph-image.png"));
await sharp(og).toFile(path.join(APP, "twitter-image.png"));

console.log("Wrote icon.png, apple-icon.png, opengraph-image.png, twitter-image.png");
