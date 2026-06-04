import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTA } from "@/components/sections/CTA";
import { CourseHeader } from "@/components/courses/CourseHeader";
import { CourseOutline, type OutlineModule } from "@/components/courses/CourseOutline";
import {
  courses,
  getCourse,
  lessonCount,
  trackServiceHref,
  trackLabels,
} from "@/content/courses";

type RouteParams = { course: string };

export function generateStaticParams(): RouteParams[] {
  return courses.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "website",
    },
  };
}

export default async function CourseOverviewPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  let n = 0;
  const outlineModules: OutlineModule[] = course.modules.map((m) => ({
    title: m.title,
    summary: m.summary,
    lessons: m.lessons.map((l) => {
      n += 1;
      return {
        slug: l.slug,
        title: l.title,
        minutes: l.minutes,
        summary: l.summary,
        number: n,
      };
    }),
  }));

  return (
    <>
      <CourseHeader course={course} />

      <section className="section">
        <Container size="md">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">What you&apos;ll learn</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                By the end, you&apos;ll be able to:
              </h2>
              <ul className="mt-5 space-y-3">
                {course.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden />
                    <span className="text-sm leading-relaxed text-ink-soft">{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/40 p-5 text-sm leading-relaxed text-ink-soft">
                <p className="font-semibold text-ink">Who it&apos;s for</p>
                <p className="mt-1.5">{course.audience}</p>
                <p className="mt-4">
                  This course goes along with our{" "}
                  <a
                    href={trackServiceHref[course.track]}
                    className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
                  >
                    {trackLabels[course.track]} services
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <CourseOutline
                courseSlug={course.slug}
                modules={outlineModules}
                totalLessons={lessonCount(course)}
              />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Questions about this course or our services?"
        description="These courses are free for everyone. If you'd like to talk about how our services can support you or your family, we're here."
        primary={{ label: "Contact our team", href: "/contact" }}
        secondary={{ label: "More free courses", href: "/courses" }}
      />
    </>
  );
}
