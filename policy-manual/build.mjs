/**
 * Builds the FFI Qualified Vendor Policy Manual.
 *
 * Reads markdown policy sources from ./policies, composes a single branded
 * HTML document (cover, agency profile, TOC, policies), and prints it to a
 * paginated PDF with Puppeteer.
 *
 * Usage:
 *   node build.mjs             -> dist/FFI-Policy-Manual.pdf + dist/manual.html
 *   node build.mjs --html-only -> dist/manual.html only (no Chromium needed)
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const POLICIES_DIR = join(__dirname, "policies");
const FRONT_DIR = join(__dirname, "front-matter");
const DIST = join(__dirname, "dist");
const LOGO_PATH = join(__dirname, "..", "public", "logo.png");

const agency = JSON.parse(readFileSync(join(__dirname, "agency.json"), "utf8"));

marked.setOptions({ gfm: true });

/** Parse a simple `key: value` front matter block delimited by --- lines. */
function parseFrontMatter(raw) {
  const meta = {};
  let body = raw;
  if (raw.startsWith("---")) {
    const end = raw.indexOf("\n---", 3);
    const block = raw.slice(3, end).trim();
    body = raw.slice(end + 4).replace(/^\s*\n/, "");
    for (const line of block.split("\n")) {
      const i = line.indexOf(":");
      if (i === -1) continue;
      meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return { meta, body };
}

function loadPolicies() {
  return readdirSync(POLICIES_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const { meta, body } = parseFrontMatter(readFileSync(join(POLICIES_DIR, f), "utf8"));
      if (!meta.number || !meta.title) throw new Error(`Missing front matter in ${f}`);
      return { file: f, meta, html: marked.parse(body) };
    });
}

function loadFront(name) {
  const { body } = parseFrontMatter(readFileSync(join(FRONT_DIR, name), "utf8"));
  return marked.parse(body);
}

function logoDataUri() {
  if (!existsSync(LOGO_PATH)) return "";
  return `data:image/png;base64,${readFileSync(LOGO_PATH).toString("base64")}`;
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function policyHeaderBlock(meta) {
  const rows = [
    ["Document Number", meta.number],
    ["Policy Owner", meta.owner],
    ["Effective Date", meta.effective],
    ["Last Reviewed", meta.reviewed || meta.effective],
    ["Applies To", meta.appliesTo],
    ["DDD PDT Checklist", meta.pdt ? `DDD-2051A &sect; ${esc(meta.pdt)}` : "—"],
  ];
  return `
  <table class="meta-table">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><th>${k}</th><td>${k === "DDD PDT Checklist" ? v : esc(v ?? "—")}</td></tr>`
      )
      .join("\n")}
  </table>`;
}

function buildHtml() {
  const policies = loadPolicies();
  const logo = logoDataUri();
  const css = readFileSync(join(__dirname, "styles.css"), "utf8");

  const groups = [];
  for (const p of policies) {
    const g = p.meta.section || "Policies";
    let group = groups.find((x) => x.name === g);
    if (!group) groups.push((group = { name: g, items: [] }));
    group.items.push(p);
  }

  const toc = groups
    .map(
      (g) => `
      <li class="toc-section">${esc(g.name)}
        <ul>
          ${g.items
            .map(
              (p) =>
                `<li><a href="#${p.meta.number}"><span class="toc-num">${esc(
                  p.meta.number
                )}</span> ${esc(p.meta.title)}</a></li>`
            )
            .join("\n")}
        </ul>
      </li>`
    )
    .join("\n");

  const policyPages = groups
    .map(
      (g) => `
      <section class="section-divider page">
        <div class="divider-inner">
          ${logo ? `<img class="divider-logo" src="${logo}" alt="" />` : ""}
          <h1>${esc(g.name)}</h1>
        </div>
      </section>
      ${g.items
        .map(
          (p) => `
        <article class="policy page" id="${p.meta.number}">
          <header class="policy-head">
            <div class="policy-head-row">
              ${logo ? `<img class="policy-logo" src="${logo}" alt="FFI logo" />` : ""}
              <div>
                <div class="policy-kicker">${esc(agency.legalName)} &mdash; Qualified Vendor Policy Manual</div>
                <h1>${esc(p.meta.number)}: ${esc(p.meta.title)}</h1>
              </div>
            </div>
            ${policyHeaderBlock(p.meta)}
          </header>
          <div class="policy-body">${p.html}</div>
        </article>`
        )
        .join("\n")}`
    )
    .join("\n");

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(agency.legalName)} — Qualified Vendor Policy Manual</title>
<style>${css}</style>
</head>
<body>

<section class="cover page">
  <div class="cover-band"></div>
  <div class="cover-inner">
    ${logo ? `<img class="cover-logo" src="${logo}" alt="Foundation for Independence logo" />` : ""}
    <h1>Qualified Vendor<br/>Policy Manual</h1>
    <p class="cover-sub">Policies and procedures for services delivered under the Arizona
    Department of Economic Security, Division of Developmental Disabilities (DDD)
    Qualified Vendor Agreement.</p>
    <div class="cover-meta">
      <div><span>Agency</span>${esc(agency.legalName)}</div>
      <div><span>DBA</span>${esc(agency.dba)}</div>
      <div><span>Address</span>${esc(agency.address)}</div>
      <div><span>Approved Services</span>${esc(agency.services.map((s) => s.code).join(", "))}</div>
      <div><span>Version</span>${esc(agency.manualVersion)} &middot; ${today}</div>
    </div>
  </div>
</section>

<section class="front page">
  ${loadFront("01-agency-profile.md").replace("{{SERVICES_TABLE}}", servicesTable())}
</section>

<section class="front page">
  ${loadFront("02-how-to-use.md")}
</section>

<section class="toc page">
  <h1>Table of Contents</h1>
  <ul class="toc-list">${toc}</ul>
</section>

${policyPages}

</body>
</html>`;
}

function servicesTable() {
  return `<table class="services-table">
    <thead><tr><th>Service</th><th>DDD Code</th><th>Category</th></tr></thead>
    <tbody>
    ${agency.services
      .map((s) => `<tr><td>${esc(s.name)}</td><td>${esc(s.code)}</td><td>${esc(s.category)}</td></tr>`)
      .join("\n")}
    </tbody>
  </table>`;
}

async function toPdf(htmlPath, pdfPath) {
  const { default: puppeteer } = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });
  await page.pdf({
    path: pdfPath,
    format: "Letter",
    printBackground: true,
    displayHeaderFooter: true,
    margin: { top: "0.75in", bottom: "0.85in", left: "0.75in", right: "0.75in" },
    headerTemplate: `<div></div>`,
    footerTemplate: `
      <div style="width:100%; font-size:8px; font-family: Helvetica, Arial, sans-serif; color:#4b5563;
                  padding: 0 0.75in; display:flex; justify-content:space-between; align-items:center;">
        <span>${agency.dba} &mdash; Qualified Vendor Policy Manual (v${agency.manualVersion})</span>
        <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
      </div>`,
  });
  await browser.close();
}

async function main() {
  mkdirSync(DIST, { recursive: true });
  const html = buildHtml();
  const htmlPath = join(DIST, "manual.html");
  writeFileSync(htmlPath, html);
  console.log(`Wrote ${htmlPath}`);
  if (process.argv.includes("--html-only")) return;
  const pdfPath = join(DIST, "FFI-Policy-Manual.pdf");
  await toPdf(htmlPath, pdfPath);
  console.log(`Wrote ${pdfPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
