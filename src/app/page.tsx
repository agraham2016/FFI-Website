import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TransitionGap } from "@/components/sections/TransitionGap";
import { ServiceAreasMini } from "@/components/sections/ServiceAreasMini";
import { Card, CardBody, CardEyebrow, CardTitle } from "@/components/ui/Card";
import { services } from "@/content/services";
import { values } from "@/content/values";
import { stories } from "@/content/stories";
import { ToolCard } from "@/components/tools/ToolCard";
import { featuredTools } from "@/content/tools";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Mission */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="eyebrow">Our mission</span>
              <h2 className="mt-3 text-display-md font-semibold">
                Helping young adults build the skills, confidence, and routines for a
                meaningful adult life.
              </h2>
            </div>
            <div className="prose-ffi lg:col-span-6">
              <p>
                Foundation for Independence (FFI) provides Supported Living and
                Employment Services that help individuals with intellectual and
                developmental disabilities build practical life skills, increase
                independence, and engage meaningfully in their communities.
              </p>
              <p>
                Our work focuses on the transition into adulthood and beyond — daily
                living skills, community integration, employment readiness, and
                self-direction — while offering families and guardians peace of mind
                through structured, person-centered supports.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <TransitionGap />

      {/* Services */}
      <section className="section">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Two services. One mission: lasting independence."
              description="DDD-authorized Supported Living and a continuum of Employment Services — tailored to each individual's strengths, goals, and Individual Support Plan (ISP)."
            />
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <Card className="flex h-full flex-col p-7 group-hover:border-brand-200 group-hover:shadow-card">
                    <CardEyebrow>
                      <Icon className="h-5 w-5" aria-hidden />
                    </CardEyebrow>
                    <CardTitle className="text-2xl">
                      {service.shortName}
                      {service.acronym ? (
                        <span className="ml-2 text-sm font-medium text-brand-700">
                          {service.acronym}
                        </span>
                      ) : null}
                    </CardTitle>
                    <CardBody className="text-base">{service.tagline}</CardBody>
                    <ul className="mt-5 space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature.title}
                          className="flex items-start gap-2 text-sm text-ink-soft"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {feature.title}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5">
                      Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Values / Approach */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our approach"
            title="Person-centered. Strengths-based. Built to last."
            description="Independence looks different for every individual — and we shape services around the people we serve."
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
        </Container>
      </section>

      <ServiceAreasMini />

      {/* Free tools */}
      <section className="section">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Free tools"
              title="Tools we built for your family."
              description="Plain-language tools to help you plan, decide, and learn — whether or not you ever become an FFI client."
            />
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              All tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {/* Stories */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeading
            eyebrow="Stories"
            title="Real progress, in everyday moments."
            description="Independence isn't a single milestone — it's a series of small, meaningful wins. A few stories from our community."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <figure
                key={story.attribution + story.quote.slice(0, 24)}
                className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-7 shadow-soft"
              >
                <svg
                  aria-hidden
                  className="h-8 w-8 text-brand-200"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M9.5 22h-4l3-12h5l-2 6c2 0 3 1 3 3v3h-5Zm14 0h-4l3-12h5l-2 6c2 0 3 1 3 3v3h-5Z" />
                </svg>
                <blockquote className="mt-3 flex-1 font-display text-lg leading-relaxed text-ink">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-brand-50 pt-4 text-sm">
                  <div className="font-semibold text-ink">{story.attribution}</div>
                  <div className="text-ink-muted">{story.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/stories"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Read more stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CTA
        title="Building a future of greater independence."
        description="Whether you're an individual, a family member, a guardian, or a DDD Support Coordinator — we'd love to start a conversation."
        primary={{ label: "Contact our team", href: "/contact" }}
        secondary={{ label: "Browse services", href: "/services" }}
      />
    </>
  );
}
