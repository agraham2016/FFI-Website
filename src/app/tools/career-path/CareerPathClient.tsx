"use client";

import { useState } from "react";
import { ArrowUpRight, Briefcase, ChevronRight } from "lucide-react";
import { careerNodes, type CareerNode } from "@/content/careerPath";
import { cn } from "@/lib/cn";

const levelLabels: Record<CareerNode["level"], string> = {
  1: "Foundation",
  2: "Specialist",
  3: "Lead",
  4: "Director",
};

export function CareerPathClient() {
  const [activeId, setActiveId] = useState<string>("dsp");
  const active = careerNodes.find((n) => n.id === activeId)!;
  const nextRoles = active.growthInto
    .map((id) => careerNodes.find((n) => n.id === id))
    .filter(Boolean) as CareerNode[];

  const byLevel = (level: CareerNode["level"]) =>
    careerNodes.filter((n) => n.level === level);

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          Map view
        </div>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          Tap a role to see what it involves and where it can lead. Most paths
          have multiple branches — there’s no single “next step.”
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {([1, 2, 3, 4] as CareerNode["level"][]).map((level) => (
            <div key={level}>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                Level {level} · {levelLabels[level]}
              </div>
              <ul className="mt-2 space-y-2">
                {byLevel(level).map((node) => {
                  const isActive = node.id === activeId;
                  return (
                    <li key={node.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(node.id)}
                        aria-pressed={isActive}
                        className={cn(
                          "group flex w-full items-start gap-2 rounded-2xl border p-3 text-left text-sm transition",
                          isActive
                            ? "border-brand-700 bg-brand-50/80 text-ink shadow-soft"
                            : "border-brand-100 bg-white text-ink-muted hover:border-brand-300 hover:bg-brand-50/40"
                        )}
                      >
                        <Briefcase
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isActive ? "text-brand-700" : "text-ink-subtle"
                          )}
                          aria-hidden
                        />
                        <span className="flex-1 font-medium leading-snug">
                          {node.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <article
        className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8"
        aria-live="polite"
      >
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
          <span>Level {active.level} · {levelLabels[active.level]}</span>
          {active.typicalTimeline ? (
            <>
              <span aria-hidden className="h-1 w-1 rounded-full bg-brand-300" />
              <span className="text-ink-subtle">{active.typicalTimeline}</span>
            </>
          ) : null}
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {active.title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
          {active.oneLine}
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-base font-semibold text-ink">
              What you do
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-muted">
              {active.responsibilities.map((r) => (
                <li key={r} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          {active.prerequisites && active.prerequisites.length > 0 ? (
            <div>
              <h3 className="font-display text-base font-semibold text-ink">
                What you bring
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-muted">
                {active.prerequisites.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {nextRoles.length > 0 ? (
          <div className="mt-8 border-t border-brand-100 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Where this can lead
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {nextRoles.map((next) => (
                <button
                  key={next.id}
                  type="button"
                  onClick={() => setActiveId(next.id)}
                  className="group flex items-start gap-3 rounded-2xl border border-brand-200 bg-white p-4 text-left transition hover:border-brand-300 hover:bg-brand-50/30"
                >
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-700"
                    aria-hidden
                  />
                  <div>
                    <div className="font-display text-base font-semibold text-ink">
                      {next.title}
                    </div>
                    <div className="mt-1 text-xs text-ink-muted">
                      {next.oneLine}
                    </div>
                  </div>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-ink-subtle transition group-hover:text-brand-700"
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-accent-200 bg-accent-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-800">
              At the top
            </div>
            <p className="mt-2 text-sm text-ink">
              This is one of FFI’s most senior roles today — but FFI is growing,
              and roles will keep expanding. The best path forward is the one
              you help define.
            </p>
          </div>
        )}
      </article>
    </div>
  );
}
