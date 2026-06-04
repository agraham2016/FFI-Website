import type { Metadata } from "next";
import { Home as HomeIcon, Briefcase } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { CourseCard } from "@/components/courses/CourseCard";
import { courses, getCoursesByTrack, type CourseTrack } from "@/content/courses";

export const metadata: Metadata = {
  title: "Free Courses",
  description:
    "Free, plain-language courses from Foundation for Independence — step-by-step living skills and work skills for young adults with developmental disabilities. No sign-up, no cost.",
};

const trackSections: {
  track: CourseTrack;
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof HomeIcon;
}[] = [
  {
    track: "supported-living",
    eyebrow: "Living Skills",
    title: "Skills for everyday independence",
    description:
      "Practical, step-by-step courses that go along with our Supported Living (HASL) services — routines, self-care, money, getting around, and more.",
    icon: HomeIcon,
  },
  {
    track: "employment",
    eyebrow: "Work Skills",
    title: "Getting ready for work",
    description:
      "Courses that go along with our Employment Services — finding a job, applying, interviewing, and succeeding once you're hired.",
    icon: Briefcase,
  },
];

export default function CoursesIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-16 sm:py-20 lg:py-24">
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              FFI Courses
            </Badge>
            <h1 className="mt-5 text-display-xl font-semibold text-ink">
              Free courses to build{" "}
              <span className="text-brand-700">real-life skills</span>.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Short, plain-language courses that go step by step — for living
              more independently and getting ready for work. They&apos;re
              completely free, work on your phone, and never need a sign-up. Go
              at your own pace; your progress is saved on your device.
            </p>
          </div>
        </Container>
      </section>

      {trackSections.map((section) => {
        const items = getCoursesByTrack(section.track);
        if (!items.length) return null;
        const Icon = section.icon;
        return (
          <section key={section.track} className="border-t border-brand-100 py-16 first:border-0 sm:py-20">
            <Container>
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-brand-50 p-3 text-brand-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-700/80">
                    {section.eyebrow}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {section.description}
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                  {items.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <CTA
        eyebrow="More on the way"
        title="New courses are being added."
        description="We're building free courses to go along with every service we offer. Have an idea for one your family would use? Tell us — the most-requested topics come first."
        primary={{ label: "Suggest a course", href: "/contact" }}
        secondary={{ label: "Browse resource guides", href: "/resources" }}
      />

      {courses.length === 0 ? (
        <Container>
          <p className="py-20 text-center text-ink-muted">Courses coming soon.</p>
        </Container>
      ) : null}
    </>
  );
}
