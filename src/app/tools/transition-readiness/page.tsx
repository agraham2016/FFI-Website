import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { TransitionReadinessClient } from "./Client";

const tool = getTool("transition-readiness")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function TransitionReadinessPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-sm text-ink-muted">
              Twelve questions, no judgment. There are no wrong answers — and a
              low score now just means there’s room for the supports we offer
              to make the biggest difference.
            </p>
            <TransitionReadinessClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Want to talk through your result?"
        title="One conversation can save a year of guessing."
        description="If your score surprised you — in either direction — we're glad to help you make sense of what comes next."
        primary={{ label: "Reach out", href: "/contact" }}
        secondary={{ label: "Open the Transition Journey Map", href: "/tools/transition-journey" }}
      />
    </>
  );
}
