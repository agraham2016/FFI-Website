import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { DspFitClient } from "./Client";

const tool = getTool("dsp-fit")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function DspFitPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-sm text-ink-muted">
              Honest answers help everyone. There’s no right answer — only
              answers that match your strengths and your season of life. We’d
              rather you find out now than three months in.
            </p>
            <DspFitClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Curious what's possible?"
        title="See where this role can grow."
        description="A DSP role at FFI isn't a dead end — it can grow into specialist, lead, and management roles. The Career Path Visualizer shows the steps."
        primary={{ label: "Open the Career Path Visualizer", href: "/tools/career-path" }}
        secondary={{ label: "Apply to FFI", href: "/careers" }}
      />
    </>
  );
}
