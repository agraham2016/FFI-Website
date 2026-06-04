import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-soft mask-fade-b opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[460px] w-[460px] rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent-100/60 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Built for transition-age young adults with developmental disabilities
            </Badge>
            <h1 className="mt-6 text-display-xl font-semibold text-ink">
              When school ends, the journey to{" "}
              <span className="text-brand-700">independence</span> is just beginning.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Foundation for Independence offers person-centered Supported Living and
              Employment Services that help transition-age young adults and adults with
              intellectual and developmental disabilities continue building skills,
              confidence, and meaningful adult lives — across Arizona.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Start the conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore our services
              </Button>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-brand-100 pt-6">
              {[
                { value: "Person-centered", label: "Strengths-based supports" },
                { value: "DDD-authorized", label: "HCBS-aligned services" },
                { value: "Across Arizona", label: "Pinal • Maricopa • Navajo • Apache" },
              ].map((stat) => (
                <div key={stat.value}>
                  <dt className="font-display text-base font-semibold text-brand-800">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-ink-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-accent-200/70 blur-xl" />
              <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-3xl bg-brand-300/40 blur-2xl" />

              <div className="relative grid gap-4">
                <FloatingCard
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Safe & respectful"
                  body="Reliable supports that families can count on, every day."
                  className="rotate-[-2deg]"
                />
                <FloatingCard
                  icon={<HeartHandshake className="h-5 w-5" />}
                  title="Person-centered"
                  body="Goals shaped by each individual's strengths and preferences."
                  className="ml-8 rotate-[1.5deg]"
                />
                <FloatingCard
                  icon={<Sparkles className="h-5 w-5" />}
                  title="Skill-building"
                  body="Real progress in daily living, work readiness, and self-direction."
                  className="rotate-[-1deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatingCard({
  icon,
  title,
  body,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-brand-100 bg-white/90 p-5 shadow-lift backdrop-blur ${className ?? ""}`}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-brand-50 p-2 text-brand-700">{icon}</div>
        <div>
          <div className="font-display text-base font-semibold text-ink">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{body}</p>
        </div>
      </div>
    </div>
  );
}
