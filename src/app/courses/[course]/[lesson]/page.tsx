import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonView } from "@/components/courses/LessonView";
import {
  courses,
  flattenLessons,
  getLesson,
  lessonCount,
} from "@/content/courses";

type RouteParams = { course: string; lesson: string };

export function generateStaticParams(): RouteParams[] {
  return courses.flatMap((c) =>
    flattenLessons(c).map((f) => ({ course: c.slug, lesson: f.lesson.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { course: courseSlug, lesson: lessonSlug } = await params;
  const found = getLesson(courseSlug, lessonSlug);
  if (!found) return { title: "Lesson not found" };
  const { course, flat } = found;
  return {
    title: `${flat.lesson.title} · ${course.title}`,
    description: flat.lesson.summary,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { course: courseSlug, lesson: lessonSlug } = await params;
  const found = getLesson(courseSlug, lessonSlug);
  if (!found) notFound();

  const { course, flat, prev, next } = found;

  return (
    <LessonView
      courseSlug={course.slug}
      courseTitle={course.shortTitle}
      moduleTitle={flat.moduleTitle}
      lesson={flat.lesson}
      lessonNumber={flat.number}
      totalLessons={lessonCount(course)}
      prevSlug={prev?.lesson.slug ?? null}
      nextSlug={next?.lesson.slug ?? null}
    />
  );
}
