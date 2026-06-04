import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { CareerPathClient } from "./CareerPathClient";

const tool = getTool("career-path")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function CareerPathPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-6xl">
            <CareerPathClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Ready to start?"
        title="Apply now — start where you are."
        description="Most of our leaders started as DSPs. The work is real and the path is real. We'd love to see your application."
        primary={{ label: "Apply to FFI", href: "/careers" }}
        secondary={{ label: "Take the DSP fit check", href: "/tools/dsp-fit" }}
      />
    </>
  );
}
