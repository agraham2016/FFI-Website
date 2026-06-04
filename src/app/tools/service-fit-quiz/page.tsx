import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { ServiceFitQuizClient } from "./Client";

const tool = getTool("service-fit-quiz")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function ServiceFitQuizPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-sm text-ink-muted">
              This is a guide, not a verdict. Most families end up combining
              services — and the right answer evolves over time. Use it to
              start the conversation with your Support Coordinator.
            </p>
            <ServiceFitQuizClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Take it further"
        title="Let's match this to a real plan."
        description="Once you've seen what fits in theory, we can talk through what fits in practice — based on the person, the ISP, and the team around them."
        primary={{ label: "Talk with our team", href: "/contact" }}
        secondary={{ label: "Open the readiness self-assessment", href: "/tools/transition-readiness" }}
      />
    </>
  );
}
