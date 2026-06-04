import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { FlowClient } from "./FlowClient";

const tool = getTool("ddd-funding-flow")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function FundingFlowPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-4xl">
            <FlowClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Stuck mid-process?"
        title="We can help you figure out what comes next."
        description="Whether you're at step 1 or step 7, we'll walk through your situation with you — no pressure, no fees."
        primary={{ label: "Talk with our team", href: "/contact" }}
        secondary={{ label: "Open the DDD glossary", href: "/tools/glossary" }}
      />
    </>
  );
}
