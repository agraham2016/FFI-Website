"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  PartyPopper,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useCourseProgress } from "@/lib/useCourseProgress";
import { SaveProgressPrompt } from "./SaveProgressPrompt";

export type OutlineLesson = {
  slug: string;
  title: string;
  minutes: string;
  summary: string;
  number: number;
};

export type OutlineModule = {
  title: string;
  summary: string;
  lessons: OutlineLesson[];
};

type Props = {
  courseSlug: string;
  modules: OutlineModule[];
  totalLessons: number;
};

export function CourseOutline({ courseSlug, modules, totalLessons }: Props) {
  const { isComplete, completedCount, hydrated, reset } =
    useCourseProgress(courseSlug);

  const orderedSlugs = modules.flatMap((m) => m.lessons.map((l) => l.slug));
  const firstIncomplete = orderedSlugs.find((s) => !isComplete(s));
  const allDone = hydrated && completedCount >= totalLessons;
  const started = hydrated && completedCount > 0;

  const resumeSlug = firstIncomplete ?? orderedSlugs[0];
  const pct = hydrated
    ? Math.round((Math.min(completedCount, totalLessons) / totalLessons) * 100)
    : 0;

  return (
    <div className="space-y-8">
      {/* Progress + resume */}
      <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display text-base font-semibold text-ink">
              Your progress
            </p>
            <p className="mt-0.5 text-sm text-ink-muted" aria-live="polite">
              {hydrated
                ? `${Math.min(completedCount, totalLessons)} of ${totalLessons} lessons done`
                : `${totalLessons} lessons`}
            </p>
          </div>
          <Link
            href={`/courses/${courseSlug}/${resumeSlug}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
          >
            {allDone ? "Review course" : started ? "Resume" : "Start course"}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-brand-100">
          <div
            className="h-full bg-brand-700 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>

        {allDone ? (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-accent-200 bg-accent-50/60 p-4">
            <p className="flex items-center gap-2 text-sm font-medium text-ink">
              <PartyPopper className="h-4 w-4 text-accent-700" aria-hidden />
              You finished the whole course. Nice work!
            </p>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              Start over
            </button>
          </div>
        ) : null}
      </div>

      {/* Save-progress nudge for signed-out learners */}
      <SaveProgressPrompt />

      {/* Modules */}
      {modules.map((mod, mi) => (
        <div key={mod.title}>
          <div className="flex items-baseline gap-3">
            <span className="eyebrow">Part {mi + 1}</span>
            <span className="h-px flex-1 bg-brand-100" />
          </div>
          <h2 className="mt-3 font-display text-xl font-semibold text-ink sm:text-2xl">
            {mod.title}
          </h2>
          <p className="mt-1.5 text-sm text-ink-muted">{mod.summary}</p>

          <ol className="mt-5 space-y-3">
            {mod.lessons.map((lesson) => {
              const done = hydrated && isComplete(lesson.slug);
              return (
                <li key={lesson.slug}>
                  <Link
                    href={`/courses/${courseSlug}/${lesson.slug}`}
                    className={cn(
                      "group flex items-start gap-4 rounded-2xl border bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card sm:p-5",
                      done ? "border-brand-200" : "border-brand-100 hover:border-brand-200"
                    )}
                  >
                    <span className="mt-0.5 shrink-0">
                      {done ? (
                        <CheckCircle2 className="h-6 w-6 text-brand-700" aria-hidden />
                      ) : (
                        <Circle className="h-6 w-6 text-brand-200" aria-hidden />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-xs font-semibold text-brand-700/80">
                          Lesson {lesson.number}
                        </span>
                        {done ? (
                          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-700">
                            Done
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-0.5 block font-display text-base font-semibold text-ink">
                        {lesson.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-muted">
                        {lesson.summary}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink-subtle">
                        <Clock className="h-3.5 w-3.5" aria-hidden />
                        {lesson.minutes}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-1 h-4 w-4 shrink-0 text-brand-400 transition group-hover:translate-x-0.5 group-hover:text-brand-700"
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
