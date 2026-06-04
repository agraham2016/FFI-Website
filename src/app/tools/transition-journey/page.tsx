import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { JourneyClient } from "./JourneyClient";

const tool = getTool("transition-journey")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function TransitionJourneyPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-6xl">
            <JourneyClient />
          </div>
        </Container>
      </section>

      <CTA
        title="Where are you in the journey?"
        description="Tell us where things stand. We'll meet you where you are — whether you're three years out, three weeks out, or already mid-transition."
        primary={{ label: "Talk with our team", href: "/contact" }}
        secondary={{ label: "Take the readiness self-assessment", href: "/tools/transition-readiness" }}
      />
    </>
  );
}
