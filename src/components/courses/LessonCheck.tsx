"use client";

import { useState } from "react";
import { Check, HelpCircle, X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CheckQuestion } from "@/content/courses";

function Question({ q, index }: { q: CheckQuestion; index: number }) {
  const [picked, setPicked] = useState<string | null>(null);
  const answered = picked !== null;
  const pickedOption = q.options.find((o) => o.id === picked);
  const pickedCorrect = Boolean(pickedOption?.correct);

  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft sm:p-6">
      <p className="font-display text-base font-semibold text-ink">
        {index + 1}. {q.prompt}
      </p>

      <ul className="mt-4 space-y-2.5" role="radiogroup" aria-label={q.prompt}>
        {q.options.map((opt) => {
          const isPicked = picked === opt.id;
          const showCorrect = answered && opt.correct;
          const showWrong = answered && isPicked && !opt.correct;
          return (
            <li key={opt.id}>
              <button
                type="button"
                onClick={() => !answered && setPicked(opt.id)}
                disabled={answered}
                aria-pressed={isPicked}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition",
                  !answered &&
                    "border-brand-200 bg-white text-ink-soft hover:border-brand-300 hover:bg-brand-50/50",
                  showCorrect && "border-green-300 bg-green-50 text-ink",
                  showWrong && "border-red-300 bg-red-50 text-ink",
                  answered && !showCorrect && !showWrong && "border-brand-100 bg-white text-ink-subtle"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                    showCorrect && "border-green-500 bg-green-500 text-white",
                    showWrong && "border-red-500 bg-red-500 text-white",
                    !showCorrect && !showWrong && "border-brand-300 bg-white"
                  )}
                >
                  {showCorrect ? <Check className="h-3 w-3" /> : null}
                  {showWrong ? <X className="h-3 w-3" /> : null}
                </span>
                <span className="leading-relaxed">{opt.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {answered ? (
        <div
          className={cn(
            "mt-4 rounded-xl p-4 text-sm leading-relaxed",
            pickedCorrect ? "bg-green-50 text-green-900" : "bg-brand-50 text-ink-soft"
          )}
          role="status"
        >
          <p className="font-semibold">
            {pickedCorrect ? "That's right!" : "Good try — here's the answer:"}
          </p>
          <p className="mt-1">{q.explanation}</p>
        </div>
      ) : null}
    </div>
  );
}

export function LessonCheck({ questions }: { questions: CheckQuestion[] }) {
  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 text-brand-700">
        <HelpCircle className="h-5 w-5" aria-hidden />
        <h2 className="font-display text-xl font-semibold text-ink">
          Quick check
        </h2>
      </div>
      <p className="mt-1.5 text-sm text-ink-muted">
        Try these to see what you remember. There are no grades — pick an answer
        to see how you did.
      </p>
      <div className="mt-5 space-y-4">
        {questions.map((q, i) => (
          <Question key={i} q={q} index={i} />
        ))}
      </div>
    </section>
  );
}
