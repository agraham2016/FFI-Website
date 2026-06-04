import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTA } from "@/components/sections/CTA";
import { Card, CardBody, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { values } from "@/content/values";
import {
  GraduationCap,
  School,
  Briefcase,
  Heart,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Foundation for Independence is a person-centered Supported Living and Employment Services provider serving transition-age young adults with developmental disabilities in Arizona.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
        <Container className="relative">
          <div className="max-w-3xl py-20 lg:py-28">
            <Badge>About FFI</Badge>
            <h1 className="mt-5 text-display-xl font-semibold">
              A new path for young adults with developmental disabilities.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              Foundation for Independence (FFI) is an Arizona-based provider of
              person-centered Supported Living and Employment Services. We were created
              to address the gap that opens when young adults with intellectual and
              developmental disabilities exit school-based services — and to help them
              keep building skills, confidence, and a meaningful adult life.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">Mission</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Our mission
              </h2>
            </div>
            <div className="prose-ffi lg:col-span-8">
              <p>
                To support young adults and other individuals with intellectual and
                developmental disabilities in building independence, stability, and
                meaningful participation in daily life — through Supported Living and
                Employment Services delivered with consistency, dignity, and care.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">Vision</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                Our vision
              </h2>
            </div>
            <div className="prose-ffi lg:col-span-8">
              <p>
                A future where every young adult with developmental disabilities in
                Arizona has access to the consistent, individualized supports they need
                to grow into a stable, independent, and meaningful adult life — at
                home, at work, and in their community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why we exist */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeading
            eyebrow="Why we exist"
            title="The transition gap is one of Arizona's most urgent — and most underserved — service needs."
            description="When school-based services end between ages 18 and 22, families often experience a sudden loss of supports, daily routines, and structured services. We exist to help young adults keep moving forward."
          />

          <div className="prose-ffi mt-12 max-w-3xl">
            <p>
              In Arizona — particularly in rural and underserved communities — there
              are limited providers offering structured, community-based Supported
              Living and Employment Services for transition-age young adults with
              developmental disabilities. Without consistent support during early
              adulthood, individuals can experience regression, isolation, behavioral
              health crises, and long-term reliance on higher-cost services.
            </p>
            <p>
              Foundation for Independence delivers community-based services aligned
              with Home and Community-Based Services (HCBS) principles and the
              Division of Developmental Disabilities (DDD). We focus on skill
              development, employment readiness, and increased independence — helping
              young adults continue building the lives they&apos;re working toward,
              rather than &ldquo;falling off the cliff&rdquo; when school ends.
            </p>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section id="approach" className="section">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our approach"
            title="Person-centered. Strengths-based. HCBS-aligned."
            description="Independence looks different for every individual. Our supports are shaped by each member's Individual Support Plan (ISP), strengths, and goals — and gradually fade as confidence and skills grow."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="flex h-full flex-col">
                  <CardEyebrow>
                    <Icon className="h-5 w-5" aria-hidden />
                  </CardEyebrow>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardBody>{value.description}</CardBody>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 grid gap-8 rounded-3xl border border-brand-100 bg-surface-alt/60 p-8 lg:grid-cols-3 lg:p-12">
            {[
              {
                title: "Choice & self-determination",
                body: "Members are actively involved in decisions about their daily routines, supports, employment, and goals.",
              },
              {
                title: "Real-world skill building",
                body: "Skills are taught and reinforced where they're used — at home, in the community, and in workplaces.",
              },
              {
                title: "Faded supports over time",
                body: "Supports gradually reduce as members gain confidence and independence — not the other way around.",
              },
            ].map((item) => (
              <div key={item.title}>
                <CheckCircle2 className="h-6 w-6 text-brand-700" aria-hidden />
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section id="founder" className="section bg-surface-alt">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <span className="eyebrow">Leadership</span>
              <h2 className="mt-3 text-display-md font-semibold">Meet the founder.</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                    <span className="font-display text-2xl font-semibold">AG</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      Alex Graham
                    </h3>
                    <p className="text-sm font-medium text-brand-700">
                      Founder &amp; CEO · Authorized Signatory
                    </p>
                    <p className="prose-ffi mt-4">
                      Alex is an Arizona-based educator and entrepreneur with more than
                      two decades of experience supporting children, transition-age
                      youth, and young adults with intellectual and developmental
                      disabilities. His work spans direct support, behavioral coaching,
                      workforce supervision, private-school leadership, and the design
                      of structured transition-age programs.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 border-t border-brand-100 pt-6 sm:grid-cols-2">
                  <Highlight
                    icon={<Briefcase className="h-5 w-5" />}
                    title="7+ years of organizational leadership"
                    body="Owner, CEO, and founder of multiple education and service-based organizations."
                  />
                  <Highlight
                    icon={<School className="h-5 w-5" />}
                    title="Co-founder, Community Schoolhouse"
                    body="Helped build a private educational program now serving 30+ students with diverse learning needs across multiple campuses."
                  />
                  <Highlight
                    icon={<GraduationCap className="h-5 w-5" />}
                    title="20+ years working with I/DD"
                    body="Direct experience supporting individuals with autism, intellectual disability, ADHD, and other developmental needs since 2005."
                  />
                  <Highlight
                    icon={<Heart className="h-5 w-5" />}
                    title="Faith- and family-rooted"
                    body="Believes independence looks different for every individual — and that every young adult deserves the chance to grow at their own pace."
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to talk about how we can help?"
        description="Whether you're a family member, a guardian, a Support Coordinator, or an individual exploring services — we'd love to hear from you."
        primary={{ label: "Contact our team", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}

function Highlight({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-brand-50 p-2 text-brand-700">{icon}</div>
      <div>
        <div className="font-display text-base font-semibold text-ink">{title}</div>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{body}</p>
      </div>
    </div>
  );
}
