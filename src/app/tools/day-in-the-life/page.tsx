import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { DayClient } from "./DayClient";

const tool = getTool("day-in-the-life")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function DayInLifePage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-4xl">
            <DayClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Curious what your day could look like?"
        title="Your young adult's day will look nothing like this — and that's the point."
        description="Every FFI day is built around the individual: their goals, their routines, their strengths. Let's talk about what theirs would feel like."
        primary={{ label: "Tell us about them", href: "/contact" }}
        secondary={{ label: "Take the service-fit quiz", href: "/tools/service-fit-quiz" }}
      />
    </>
  );
}
