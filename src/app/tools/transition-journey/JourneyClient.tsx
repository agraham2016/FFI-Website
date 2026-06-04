"use client";

import { useState } from "react";
import { Check, ChevronRight, MapPin } from "lucide-react";
import { journeyStages } from "@/content/transitionJourney";
import { cn } from "@/lib/cn";

export function JourneyClient() {
  const [activeId, setActiveId] = useState(journeyStages[0].id);
  const active = journeyStages.find((s) => s.id === activeId) ?? journeyStages[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <ol className="lg:col-span-4 space-y-2" aria-label="Transition stages">
        {journeyStages.map((stage, idx) => {
          const isActive = stage.id === activeId;
          return (
            <li key={stage.id}>
              <button
                type="button"
                onClick={() => setActiveId(stage.id)}
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "group flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition",
                  isActive
                    ? "border-brand-200 bg-brand-50/60 shadow-soft"
                    : "border-brand-100 bg-white hover:border-brand-200 hover:bg-brand-50/30"
                )}
              >
                <div
                  className={cn(
                    "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                    isActive
                      ? "bg-brand-700 text-white"
                      : "bg-brand-100 text-brand-800 group-hover:bg-brand-200"
                  )}
                >
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                    {stage.ageRange}
                  </div>
                  <div className="mt-1 font-display text-base font-semibold text-ink">
                    {stage.title}
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "mt-2 h-4 w-4 shrink-0 transition",
                    isActive ? "text-brand-700" : "text-ink-subtle"
                  )}
                  aria-hidden
                />
              </button>
            </li>
          );
        })}
      </ol>

      <article
        className="lg:col-span-8 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8"
        aria-live="polite"
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {active.ageRange}
        </div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {active.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          {active.oneLiner}
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-base font-semibold text-ink">
              What happens
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-muted">
              {active.whatHappens.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-700"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-ink">
              What families focus on
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-muted">
              {active.familyFocus.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-700"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {active.ffiFit ? (
          <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/40 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              How FFI fits
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              {active.ffiFit}
            </p>
          </div>
        ) : null}
      </article>
    </div>
  );
}
