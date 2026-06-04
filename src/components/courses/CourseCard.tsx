import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { lessonCount, trackLabels, type Course } from "@/content/courses";

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  const count = lessonCount(course);
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center justify-center rounded-xl bg-brand-50 p-2.5 text-brand-700">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700/80">
          {trackLabels[course.track]}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {course.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4 text-xs text-ink-subtle">
        <span className="flex items-center gap-1.5">
          <BookOpen className="h-3.5 w-3.5" aria-hidden />
          {count} {count === 1 ? "lesson" : "lessons"}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 transition group-hover:gap-1.5">
          Start
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
