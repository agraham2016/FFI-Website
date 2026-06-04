"use client";

import { useMemo, useRef, useState } from "react";
import { Download, RefreshCw, Sparkles } from "lucide-react";
import { articles } from "@/content/articles";
import { cn } from "@/lib/cn";

type Theme = {
  id: string;
  name: string;
  bg: string;
  bgGradient?: { from: string; to: string };
  text: string;
  accent: string;
  border: string;
};

const themes: Theme[] = [
  {
    id: "calm",
    name: "Calm",
    bg: "#F2F8F8",
    bgGradient: { from: "#EAF4F4", to: "#FFFFFF" },
    text: "#0D2A2D",
    accent: "#28666D",
    border: "#C9E1E1",
  },
  {
    id: "deep",
    name: "Deep",
    bg: "#0D2A2D",
    bgGradient: { from: "#0D2A2D", to: "#28666D" },
    text: "#F2F8F8",
    accent: "#DC9D52",
    border: "#28666D",
  },
  {
    id: "warm",
    name: "Warm",
    bg: "#FAF3E8",
    bgGradient: { from: "#FBEFD6", to: "#FAF3E8" },
    text: "#3B2A12",
    accent: "#B57521",
    border: "#E9D8B7",
  },
];

type Source = { id: string; quote: string; attribution?: string };

const missionQuotes: Source[] = [
  {
    id: "mission",
    quote:
      "When school ends, the journey to independence is just beginning.",
    attribution: "Foundation for Independence",
  },
  {
    id: "person-first",
    quote:
      "We start with the person — not the disability. Everything else is built around that.",
    attribution: "FFI core values",
  },
  {
    id: "small-wins",
    quote:
      "Independence isn't a finish line. It's a thousand quiet wins, repeated.",
    attribution: "Foundation for Independence",
  },
  {
    id: "real-life",
    quote:
      "Real lives are built in real homes, real workplaces, and real communities.",
    attribution: "FFI core values",
  },
];

const articleQuotes: Source[] = articles.flatMap((a) =>
  a.takeaways.slice(0, 2).map((q, i) => ({
    id: `${a.slug}-${i}`,
    quote: q,
    attribution: `From "${a.title}"`,
  }))
);

const allQuotes = [...missionQuotes, ...articleQuotes];

export function GeneratorClient() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [customQuote, setCustomQuote] = useState("");
  const [customAttr, setCustomAttr] = useState("");
  const [themeId, setThemeId] = useState(themes[0].id);
  const [useCustom, setUseCustom] = useState(false);

  const theme = themes.find((t) => t.id === themeId) ?? themes[0];

  const source = useCustom
    ? { id: "custom", quote: customQuote.trim(), attribution: customAttr.trim() }
    : allQuotes[quoteIndex];

  const text = source.quote || "Your shareable card preview will appear here.";
  const attribution = source.attribution || "";

  const svgRef = useRef<SVGSVGElement | null>(null);
  const svgString = useMemo(
    () => buildSvgString({ text, attribution, theme }),
    [text, attribution, theme]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-brand-100 bg-surface-alt p-4 shadow-soft sm:p-6">
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-card">
            <svg
              ref={svgRef}
              viewBox="0 0 1080 1080"
              role="img"
              aria-label={`Quote card: ${text}`}
              className="h-full w-full"
              dangerouslySetInnerHTML={{
                __html: buildSvgInner({ text, attribution, theme }),
              }}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => downloadSvg(svgString, source.id)}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
          >
            Download SVG
          </button>
          <button
            type="button"
            onClick={() => downloadPng(svgString, source.id)}
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download PNG
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <fieldset className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft">
          <legend className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Theme
          </legend>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setThemeId(t.id)}
                aria-pressed={themeId === t.id}
                className={cn(
                  "rounded-2xl border p-3 text-left transition",
                  themeId === t.id
                    ? "border-brand-700 ring-2 ring-brand-200"
                    : "border-brand-200 hover:border-brand-300"
                )}
              >
                <div
                  className="h-10 rounded-lg border"
                  style={{
                    background: t.bgGradient
                      ? `linear-gradient(135deg, ${t.bgGradient.from}, ${t.bgGradient.to})`
                      : t.bg,
                    borderColor: t.border,
                  }}
                />
                <div className="mt-2 text-xs font-semibold text-ink">{t.name}</div>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft">
          <legend className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Source
          </legend>
          <div className="mt-3 inline-flex rounded-full border border-brand-200 bg-brand-50/40 p-1">
            <button
              type="button"
              onClick={() => setUseCustom(false)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                !useCustom
                  ? "bg-brand-700 text-white"
                  : "text-ink-muted hover:text-brand-800"
              )}
            >
              FFI library
            </button>
            <button
              type="button"
              onClick={() => setUseCustom(true)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                useCustom
                  ? "bg-brand-700 text-white"
                  : "text-ink-muted hover:text-brand-800"
              )}
            >
              Write your own
            </button>
          </div>

          {!useCustom ? (
            <div className="mt-4 space-y-3">
              <label htmlFor="quote-pick" className="block text-xs text-ink-subtle">
                Pick a takeaway
              </label>
              <select
                id="quote-pick"
                value={quoteIndex}
                onChange={(e) => setQuoteIndex(Number(e.target.value))}
                className="block w-full rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              >
                {allQuotes.map((q, i) => (
                  <option key={q.id} value={i}>
                    {q.quote.length > 80 ? `${q.quote.slice(0, 80)}…` : q.quote}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() =>
                  setQuoteIndex(() => Math.floor(Math.random() * allQuotes.length))
                }
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-700 hover:text-brand-800"
              >
                <RefreshCw className="h-3 w-3" aria-hidden />
                Surprise me
              </button>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              <div>
                <label
                  htmlFor="custom-quote"
                  className="block text-xs text-ink-subtle"
                >
                  Your quote
                </label>
                <textarea
                  id="custom-quote"
                  value={customQuote}
                  onChange={(e) => setCustomQuote(e.target.value.slice(0, 220))}
                  rows={4}
                  placeholder="Write something short and shareable. (Max 220 characters.)"
                  className="mt-1 block w-full rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                />
                <div className="mt-1 text-right text-[10px] text-ink-subtle">
                  {customQuote.length}/220
                </div>
              </div>
              <div>
                <label
                  htmlFor="custom-attr"
                  className="block text-xs text-ink-subtle"
                >
                  Attribution (optional)
                </label>
                <input
                  id="custom-attr"
                  type="text"
                  value={customAttr}
                  onChange={(e) => setCustomAttr(e.target.value.slice(0, 60))}
                  placeholder="— A parent in Mesa"
                  className="mt-1 block w-full rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                />
              </div>
            </div>
          )}
        </fieldset>

        <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/30 p-4 text-xs text-ink-muted">
          <div className="flex items-center gap-2 text-brand-800">
            <Sparkles className="h-4 w-4" aria-hidden />
            <strong className="font-semibold">Why a card?</strong>
          </div>
          <p className="mt-2">
            Cards are easy to share — Instagram, a family group text, a
            classroom wall. Every card credits FFI without a sales pitch.
          </p>
        </div>
      </div>
    </div>
  );
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    if ((current + " " + w).trim().length > maxChars) {
      if (current) lines.push(current);
      current = w;
    } else {
      current = (current ? current + " " : "") + w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

type CardArgs = {
  text: string;
  attribution: string;
  theme: Theme;
};

function buildSvgInner({ text, attribution, theme }: CardArgs): string {
  // Choose font size based on length. Longer quotes get smaller text.
  const len = text.length;
  const fontSize = len < 80 ? 64 : len < 140 ? 56 : len < 200 ? 48 : 42;
  const lineHeight = Math.round(fontSize * 1.25);
  const charsPerLine = Math.max(18, Math.floor(36 - fontSize / 8));
  const lines = wrapText(text, charsPerLine);
  const totalTextHeight = lines.length * lineHeight;
  const startY = 540 - totalTextHeight / 2 + lineHeight / 2 - 20;

  const bgFill = theme.bgGradient
    ? "url(#bgGrad)"
    : theme.bg;

  return `
    <defs>
      ${
        theme.bgGradient
          ? `<linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${theme.bgGradient.from}" />
              <stop offset="100%" stop-color="${theme.bgGradient.to}" />
            </linearGradient>`
          : ""
      }
    </defs>
    <rect width="1080" height="1080" fill="${bgFill}" />
    <rect x="60" y="60" width="960" height="960" rx="48" fill="none" stroke="${theme.border}" stroke-width="2" />

    <!-- FFI mark (stylized landscape) -->
    <g transform="translate(120 132)">
      <circle cx="20" cy="20" r="20" fill="${theme.accent}" />
      <path d="M0 30 L14 12 L24 22 L36 6 L48 24 L48 40 L0 40 Z" fill="${theme.accent}" opacity="0.85" />
    </g>
    <text x="190" y="155" font-family="Inter, -apple-system, sans-serif" font-size="22" font-weight="700" fill="${theme.text}" letter-spacing="0.02em">
      Foundation for Independence
    </text>
    <text x="190" y="184" font-family="Inter, -apple-system, sans-serif" font-size="14" font-weight="600" fill="${theme.accent}" letter-spacing="0.18em">
      ARIZONA
    </text>

    <!-- Quote text -->
    ${lines
      .map(
        (line, i) =>
          `<text x="540" y="${startY + i * lineHeight}" text-anchor="middle" font-family="Source Serif 4, Georgia, serif" font-size="${fontSize}" font-weight="600" fill="${theme.text}">${escapeXml(line)}</text>`
      )
      .join("")}

    ${
      attribution
        ? `<text x="540" y="900" text-anchor="middle" font-family="Inter, sans-serif" font-size="22" font-weight="500" fill="${theme.text}" opacity="0.7">— ${escapeXml(attribution)}</text>`
        : ""
    }

    <text x="540" y="980" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="${theme.accent}" letter-spacing="0.16em">
      ffiaz.info
    </text>
  `;
}

function buildSvgString(args: CardArgs): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">${buildSvgInner(
    args
  )}</svg>`;
}

function downloadSvg(svg: string, slug: string) {
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  triggerDownload(URL.createObjectURL(blob), `ffi-card-${slug}.svg`);
}

function downloadPng(svg: string, slug: string) {
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, 1080, 1080);
    URL.revokeObjectURL(url);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const pngUrl = URL.createObjectURL(blob);
      triggerDownload(pngUrl, `ffi-card-${slug}.png`);
    }, "image/png");
  };
  img.onerror = () => URL.revokeObjectURL(url);
  img.src = url;
}

function triggerDownload(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(href), 5000);
}
