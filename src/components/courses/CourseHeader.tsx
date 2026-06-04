import Link from "next/link";
import { ArrowLeft, BookOpen, GraduationCap, Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { lessonCount, trackLabels, type Course } from "@/content/courses";

export function CourseHeader({ course }: { course: Course }) {
  const count = lessonCount(course);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
      <Container className="relative">
        <div className="max-w-3xl py-16 lg:py-20">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> All courses
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge>{trackLabels[course.track]}</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-subtle">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden />
              {course.level}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-subtle">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              {count} {count === 1 ? "lesson" : "lessons"}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-subtle">
              <Layers className="h-3.5 w-3.5" aria-hidden />
              Free · no sign-up
            </span>
          </div>

          <h1 className="mt-5 text-display-lg font-semibold">{course.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">{course.intro}</p>

          <p className="mt-4 text-sm text-ink-subtle">{course.readingLevel}</p>
        </div>
      </Container>
    </section>
  );
}
