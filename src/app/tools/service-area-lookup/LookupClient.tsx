"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MapPinned, Search, XCircle } from "lucide-react";
import { servedZips } from "@/content/serviceAreaZips";
import { Button } from "@/components/ui/Button";

type Result =
  | { kind: "idle" }
  | { kind: "served"; zip: string; city: string; county: string }
  | { kind: "city-match"; matches: { zip: string; city: string; county: string }[] }
  | { kind: "not-served"; zip: string }
  | { kind: "invalid" };

export function LookupClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Result>({ kind: "idle" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    if (/^\d{5}$/.test(value)) {
      const match = servedZips.find((z) => z.zip === value);
      if (match) {
        setResult({
          kind: "served",
          zip: match.zip,
          city: match.city,
          county: match.county,
        });
      } else {
        setResult({ kind: "not-served", zip: value });
      }
      return;
    }

    if (/^\d/.test(value)) {
      setResult({ kind: "invalid" });
      return;
    }

    const lower = value.toLowerCase();
    const matches = servedZips.filter(
      (z) => z.city.toLowerCase() === lower || z.city.toLowerCase().startsWith(lower)
    );
    if (matches.length > 0) {
      setResult({ kind: "city-match", matches: matches.slice(0, 6) });
    } else {
      setResult({ kind: "invalid" });
    }
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft sm:p-6"
        noValidate
      >
        <label htmlFor="lookup-input" className="block text-sm font-medium text-ink">
          Enter your ZIP code or city
        </label>
        <p className="mt-1 text-xs text-ink-subtle">
          We’ll check it against FFI’s currently-served areas in Pinal, Maricopa,
          Navajo, and Apache counties.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle"
              aria-hidden
            />
            <input
              id="lookup-input"
              type="text"
              inputMode="search"
              autoComplete="postal-code"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. 85208 or Mesa"
              className="block w-full rounded-xl border border-brand-200 bg-white py-3 pl-10 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            />
          </div>
          <Button type="submit" size="md">
            Check coverage
          </Button>
        </div>
      </form>

      <div aria-live="polite" className="space-y-4">
        {result.kind === "served" ? (
          <ResultCard tone="positive" title={`Yes — FFI serves ${result.city}, AZ.`}>
            <p>
              ZIP <strong>{result.zip}</strong> is in{" "}
              <strong>{result.county} County</strong>, one of FFI’s current
              service areas. The next step is a quick conversation with our
              team.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact">Start the conversation</Button>
              <Button href="/services" variant="outline">
                See our services
              </Button>
            </div>
          </ResultCard>
        ) : null}

        {result.kind === "city-match" ? (
          <ResultCard
            tone="positive"
            title={`Yes — FFI serves areas in ${result.matches[0].city}.`}
          >
            <p>
              We currently serve these ZIP codes in {result.matches[0].city} and
              nearby:
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-ink-muted sm:grid-cols-3">
              {result.matches.map((m) => (
                <li key={m.zip}>
                  <strong className="font-semibold text-ink">{m.zip}</strong>{" "}
                  <span className="text-ink-subtle">— {m.city}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact">Start the conversation</Button>
              <Button href="/services" variant="outline">
                See our services
              </Button>
            </div>
          </ResultCard>
        ) : null}

        {result.kind === "not-served" ? (
          <ResultCard
            tone="neutral"
            title={`ZIP ${result.zip} isn't in our current footprint — but please reach out.`}
          >
            <p>
              FFI is actively expanding. If you’re just outside our current
              service areas, we may still be able to help — or refer you to
              another trusted DDD provider near you.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/contact">Tell us where you are</Button>
              <Button href="/service-areas" variant="outline">
                See full service map
              </Button>
            </div>
          </ResultCard>
        ) : null}

        {result.kind === "invalid" ? (
          <ResultCard
            tone="neutral"
            title="We couldn't match that input."
          >
            <p>
              Try entering a 5-digit Arizona ZIP code (like <code>85208</code>)
              or an Arizona city name (like <code>Mesa</code>).
            </p>
          </ResultCard>
        ) : null}

        {result.kind === "idle" ? (
          <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/30 p-5 text-sm text-ink-muted">
            <div className="flex items-center gap-2 text-brand-800">
              <MapPinned className="h-4 w-4" aria-hidden />
              <strong className="font-semibold">Tip</strong>
            </div>
            <p className="mt-2">
              You can also browse our full service area page if you’d rather
              just see the map.{" "}
              <Link
                href="/service-areas"
                className="text-brand-700 underline underline-offset-2"
              >
                Open service areas
              </Link>
              .
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ResultCard({
  tone,
  title,
  children,
}: {
  tone: "positive" | "neutral";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        tone === "positive"
          ? "rounded-2xl border border-brand-200 bg-brand-50/40 p-6 shadow-soft"
          : "rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"
      }
    >
      <div className="flex items-start gap-3">
        {tone === "positive" ? (
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
            aria-hidden
          />
        ) : (
          <XCircle
            className="mt-0.5 h-5 w-5 shrink-0 text-ink-subtle"
            aria-hidden
          />
        )}
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
          <div className="mt-2 text-sm leading-relaxed text-ink-muted">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
