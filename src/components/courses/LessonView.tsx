"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Clock,
  HeartHandshake,
  Sparkles,
  Target,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ArticleBody } from "@/components/article/ArticleBody";
import { LessonCheck } from "@/components/courses/LessonCheck";
import { SaveProgressPrompt } from "@/components/courses/SaveProgressPrompt";
import { cn } from "@/lib/cn";
import { useCourseProgress } from "@/lib/useCourseProgress";
import type { Lesson } from "@/content/courses";

type Props = {
  courseSlug: string;
  courseTitle: string;
  moduleTitle: string;
  lesson: Lesson;
  lessonNumber: number;
  totalLessons: number;
  prevSlug: string | null;
  nextSlug: string | null;
};

export function LessonView({
  courseSlug,
  courseTitle,
  moduleTitle,
  lesson,
  lessonNumber,
  totalLessons,
  prevSlug,
  nextSlug,
}: Props) {
  const router = useRouter();
  const { isComplete, markComplete, hydrated } = useCourseProgress(courseSlug);
  const done = hydrated && isComplete(lesson.slug);

  const courseHref = `/courses/${courseSlug}`;
  const nextHref = nextSlug ? `/courses/${courseSlug}/${nextSlug}` : courseHref;
  const prevHref = prevSlug ? `/courses/${courseSlug}/${prevSlug}` : courseHref;
  const isLast = !nextSlug;

  const completeAndContinue = () => {
    markComplete(lesson.slug);
    router.push(nextHref);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container size="md" className="relative">
          <div className="py-12 lg:py-16">
            <Link
              href={courseHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> {courseTitle}
            </Link>

            {/* Course progress bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-ink-subtle">
                <span>
                  Lesson {lessonNumber} of {totalLessons} · {moduleTitle}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {lesson.minutes}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-100">
                <div
                  className="h-full bg-brand-700 transition-all"
                  style={{ width: `${Math.round((lessonNumber / totalLessons) * 100)}%` }}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <h1 className="text-display-md font-semibold sm:text-display-lg">
                {lesson.title}
              </h1>
              {done ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> Done
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lesson.intro}</p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container size="md">
          {/* What you'll learn */}
          {lesson.objectives.length ? (
            <div className="mb-12 rounded-2xl border border-brand-100 bg-brand-50/40 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-brand-700">
                <Target className="h-5 w-5" aria-hidden />
                <h2 className="font-display text-base font-semibold text-ink">
                  In this lesson
                </h2>
              </div>
              <ul className="mt-3 space-y-2">
                {lesson.objectives.map((o, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                    <span className="leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <article>
            <ArticleBody sections={lesson.sections} />
          </article>

          {/* Supporter note */}
          {lesson.supporterNote ? (
            <aside className="mt-12 overflow-hidden rounded-2xl border border-brand-200 bg-white p-5 shadow-soft sm:p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-brand-50 p-2 text-brand-700">
                  <HeartHandshake className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h2 className="font-display text-base font-semibold text-ink">
                    For families &amp; support staff
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {lesson.supporterNote}
                  </p>
                </div>
              </div>
            </aside>
          ) : null}

          {/* Knowledge check */}
          {lesson.check?.length ? <LessonCheck questions={lesson.check} /> : null}

          {/* Footer nav */}
          <div className="mt-12 border-t border-brand-100 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={prevHref}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-300 hover:bg-brand-50"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                {prevSlug ? "Previous lesson" : "Course home"}
              </Link>

              <button
                type="button"
                onClick={completeAndContinue}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-soft transition",
                  "bg-brand-700 hover:bg-brand-800"
                )}
              >
                {done && isLast
                  ? "Back to course"
                  : isLast
                    ? "Finish course"
                    : done
                      ? "Next lesson"
                      : "Mark done & continue"}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <SaveProgressPrompt variant="compact" />
          </div>
        </Container>
      </section>
    </>
  );
}
