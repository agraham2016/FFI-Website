import { Container } from "@/components/layout/Container";
import { SectionHeading } from "./SectionHeading";

const stats = [
  {
    value: "1 in 36",
    label: "U.S. children diagnosed with autism",
    source: "CDC",
  },
  {
    value: "18–22",
    label: "Transition-age window when school-based supports end",
  },
  {
    value: "Limited",
    label: "Adult providers serving transition-age young adults in Arizona",
  },
];

export function TransitionGap() {
  return (
    <section className="section bg-surface-alt">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why this matters"
              title="The transition out of school is a critical moment — and one that's often unsupported."
            />
          </div>
          <div className="prose-ffi lg:col-span-7">
            <p>
              Many families describe the end of high school as &ldquo;falling off the
              cliff.&rdquo; When school-based services end between ages 18 and 22, the
              coordinated supports that shaped a young adult&apos;s entire childhood
              suddenly disappear.
            </p>
            <p>
              In Arizona — particularly in rural and underserved communities — there
              are limited providers offering structured, community-based Supported
              Living and Employment Services for transition-age young adults with
              intellectual and developmental disabilities. Without consistent support
              during this window, individuals can experience regression, isolation, and
              long-term reliance on higher-cost services.
            </p>
            <p>
              Foundation for Independence exists to fill that gap. By providing
              consistent, individualized supports during early adulthood, we help
              individuals continue building skills, stability, and meaningful adult
              roles in their communities.
            </p>
          </div>
        </div>

        <dl className="mt-14 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft"
            >
              <dt className="font-display text-3xl font-semibold text-brand-800">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm text-ink-soft">
                {stat.label}
                {stat.source ? (
                  <span className="ml-1 text-ink-subtle">— {stat.source}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
