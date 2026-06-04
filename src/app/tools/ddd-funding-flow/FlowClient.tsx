"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Check } from "lucide-react";
import { fundingFlow } from "@/content/fundingFlow";
import { cn } from "@/lib/cn";

export function FlowClient() {
  const [index, setIndex] = useState(0);
  const total = fundingFlow.length;
  const current = fundingFlow[index];
  const progress = ((index + 1) / total) * 100;

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(total - 1, i + 1));

  return (
    <div className="space-y-8">
      {/* Mini stepper */}
      <ol className="hidden flex-wrap items-center gap-2 lg:flex">
        {fundingFlow.map((step, i) => {
          const state =
            i === index ? "active" : i < index ? "done" : "upcoming";
          return (
            <li key={step.id} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition",
                  state === "active" && "bg-brand-700 text-white shadow-soft",
                  state === "done" &&
                    "bg-brand-100 text-brand-800 hover:bg-brand-200",
                  state === "upcoming" &&
                    "border border-brand-200 bg-white text-ink-subtle hover:border-brand-300 hover:text-brand-800"
                )}
                aria-label={`Step ${i + 1}: ${step.title}`}
                aria-current={state === "active" ? "step" : undefined}
              >
                {state === "done" ? (
                  <Check className="h-3.5 w-3.5" aria-hidden />
                ) : (
                  i + 1
                )}
              </button>
              {i < total - 1 ? (
                <span
                  aria-hidden
                  className={cn(
                    "h-px w-6",
                    i < index ? "bg-brand-300" : "bg-brand-100"
                  )}
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      {/* Progress bar (mobile) */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between text-xs text-ink-subtle">
          <span>
            Step {index + 1} of {total}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-100">
          <div
            className="h-full bg-brand-700 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <article
        key={current.id}
        className="rounded-3xl border border-brand-100 bg-white p-6 shadow-card sm:p-10"
        aria-live="polite"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-display text-4xl font-semibold text-brand-200 sm:text-5xl">
            {current.step}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Step {index + 1} of {total}
          </span>
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {current.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {current.body}
        </p>

        {current.bullets ? (
          <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-ink-muted">
            {current.bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <Check
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-700"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {current.tip ? (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-4">
            <Lightbulb
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-700"
              aria-hidden
            />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-800">
                Family tip
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink">
                {current.tip}
              </p>
            </div>
          </div>
        ) : null}
      </article>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Back
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={index === total - 1}
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next step
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
