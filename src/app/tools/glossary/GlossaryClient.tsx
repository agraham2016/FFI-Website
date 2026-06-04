"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { glossary, glossaryCategories, type GlossaryEntry } from "@/content/glossary";
import { cn } from "@/lib/cn";

type Filter = "All" | GlossaryEntry["category"];

export function GlossaryClient() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const sorted = useMemo(
    () => [...glossary].sort((a, b) => a.term.localeCompare(b.term)),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((entry) => {
      if (filter !== "All" && entry.category !== filter) return false;
      if (!q) return true;
      const hay = [
        entry.term,
        entry.full ?? "",
        entry.short,
        entry.long,
        ...(entry.related ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [filter, query, sorted]);

  const filters: Filter[] = ["All", ...glossaryCategories];

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-soft sm:p-5">
        <label htmlFor="glossary-search" className="sr-only">
          Search the glossary
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle"
            aria-hidden
          />
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a term, acronym, or topic — e.g. HASL, ISP, ALTCS"
            className="block w-full rounded-xl border border-brand-200 bg-white py-3 pl-10 pr-10 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-ink-subtle hover:bg-brand-50 hover:text-brand-700"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                filter === f
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-brand-200 bg-white text-ink-muted hover:border-brand-300 hover:text-brand-800"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div
        aria-live="polite"
        className="text-sm text-ink-subtle"
      >
        {filtered.length === 0
          ? "No matches yet — try a different word or clear the filter."
          : `Showing ${filtered.length} of ${glossary.length} terms`}
      </div>

      <div className="grid gap-4">
        {filtered.map((entry) => (
          <article
            key={entry.term}
            id={`term-${entry.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-semibold text-ink">
                {entry.term}
              </h3>
              {entry.full ? (
                <span className="text-sm text-ink-muted">{entry.full}</span>
              ) : null}
              <span className="rounded-full border border-brand-200 bg-brand-50/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                {entry.category}
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-brand-900">{entry.short}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {entry.long}
            </p>
            {entry.related && entry.related.length > 0 ? (
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-brand-100 pt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                  Related
                </span>
                {entry.related.map((rel) => (
                  <button
                    key={rel}
                    type="button"
                    onClick={() => setQuery(rel)}
                    className="rounded-full border border-brand-200 bg-white px-2.5 py-1 text-xs text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
                  >
                    {rel}
                  </button>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
