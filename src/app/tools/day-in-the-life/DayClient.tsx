"use client";

import { useState } from "react";
import { Sun } from "lucide-react";
import { scheduleTracks } from "@/content/dailySchedule";
import { cn } from "@/lib/cn";

type TrackId = "hasl" | "step";

export function DayClient() {
  const [trackId, setTrackId] = useState<TrackId>("hasl");
  const track = scheduleTracks.find((t) => t.id === trackId)!;

  return (
    <div className="space-y-8">
      <div
        role="tablist"
        aria-label="Choose a service"
        className="inline-flex rounded-full border border-brand-200 bg-white p-1 shadow-soft"
      >
        {scheduleTracks.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={trackId === t.id}
            onClick={() => setTrackId(t.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              trackId === t.id
                ? "bg-brand-700 text-white shadow-soft"
                : "text-ink-muted hover:text-brand-800"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
        {track.oneLine}
      </p>

      <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft sm:p-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          <Sun className="h-3.5 w-3.5" aria-hidden />A weekday with FFI
        </div>

        <ol className="mt-8 space-y-6">
          {track.entries.map((entry, idx) => (
            <li key={`${trackId}-${entry.time}`} className="relative pl-10 sm:pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold uppercase tracking-wider text-brand-800 ring-2 ring-white sm:left-1"
              >
                {idx + 1}
              </span>
              {idx < track.entries.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-[13px] top-9 bottom-[-1.5rem] w-px bg-brand-100 sm:left-[17px]"
                />
              ) : null}
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-700">
                {entry.time}
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {entry.body}
              </p>
              <dl className="mt-3 grid gap-3 text-xs sm:grid-cols-2">
                <div className="rounded-xl border border-brand-100 bg-brand-50/40 p-3">
                  <dt className="font-semibold uppercase tracking-[0.14em] text-brand-700">
                    What we’re doing
                  </dt>
                  <dd className="mt-1 text-ink">{entry.doing}</dd>
                </div>
                <div className="rounded-xl border border-accent-100 bg-accent-50/60 p-3">
                  <dt className="font-semibold uppercase tracking-[0.14em] text-accent-700">
                    What we’re building
                  </dt>
                  <dd className="mt-1 text-ink">{entry.building}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
