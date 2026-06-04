"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { Quiz, QuizScores } from "./types";

type Props = {
  quiz: Quiz;
};

export function QuizEngine({ quiz }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const total = quiz.questions.length;
  const current = quiz.questions[index];
  const answered = Object.keys(answers).length;
  const progressPct = Math.round((answered / total) * 100);
  const currentAnswer = answers[current?.id];

  const scores: QuizScores = useMemo(() => {
    const acc: QuizScores = {};
    for (const q of quiz.questions) {
      const choiceId = answers[q.id];
      if (!choiceId) continue;
      const opt = q.options.find((o) => o.id === choiceId);
      if (!opt) continue;
      for (const [bucket, points] of Object.entries(opt.scores)) {
        acc[bucket] = (acc[bucket] ?? 0) + points;
      }
    }
    return acc;
  }, [answers, quiz.questions]);

  const allAnswered = answered === total;

  const choose = (qId: string, optionId: string) => {
    setAnswers((a) => ({ ...a, [qId]: optionId }));
  };

  const next = () => {
    if (index < total - 1) {
      setIndex((i) => i + 1);
    } else if (allAnswered) {
      setShowResult(true);
    }
  };

  const prev = () => setIndex((i) => Math.max(0, i - 1));

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setShowResult(false);
  };

  if (showResult) {
    const result = quiz.computeResult(scores);
    return (
      <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-card sm:p-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {result.eyebrow ?? "Your result"}
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          {result.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
          {result.body}
        </p>

        {result.highlights && result.highlights.length > 0 ? (
          <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-ink-muted">
            {result.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {result.next && result.next.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {result.next.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
                  i === 0
                    ? "bg-brand-700 text-white shadow-soft hover:bg-brand-800"
                    : "border border-brand-200 bg-white text-brand-800 hover:border-brand-300 hover:bg-brand-50"
                )}
              >
                {n.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-ink-muted transition hover:border-brand-300 hover:text-brand-800"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between text-xs text-ink-subtle">
          <span>
            Question {index + 1} of {total}
          </span>
          <span>{progressPct}% complete</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-100">
          <div
            className="h-full bg-brand-700 transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft sm:p-10">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {current.prompt}
        </h2>
        {current.helper ? (
          <p className="mt-2 text-sm text-ink-muted">{current.helper}</p>
        ) : null}

        <ul className="mt-6 space-y-3" role="radiogroup" aria-label={current.prompt}>
          {current.options.map((opt) => {
            const isActive = currentAnswer === opt.id;
            return (
              <li key={opt.id}>
                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-sm transition",
                    isActive
                      ? "border-brand-700 bg-brand-50/80 text-ink shadow-soft"
                      : "border-brand-200 bg-white text-ink-muted hover:border-brand-300 hover:bg-brand-50/40"
                  )}
                >
                  <input
                    type="radio"
                    name={current.id}
                    value={opt.id}
                    checked={isActive}
                    onChange={() => choose(current.id, opt.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
                      isActive
                        ? "border-brand-700 bg-brand-700"
                        : "border-brand-300 bg-white"
                    )}
                  >
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    ) : null}
                  </span>
                  <span className="leading-relaxed">{opt.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Back
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!currentAnswer}
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {index === total - 1 ? "See result" : "Next"}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
