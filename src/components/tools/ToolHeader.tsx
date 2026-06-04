import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Clock, Users } from "lucide-react";
import type { Tool } from "@/content/tools";

type Props = {
  tool: Tool;
  children?: React.ReactNode;
};

export function ToolHeader({ tool, children }: Props) {
  const Icon = tool.icon;
  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60"
      />
      <Container className="relative">
        <div className="grid items-start gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Free FFI tool
              </Badge>
              <Badge>{tool.category}</Badge>
            </div>
            <h1 className="mt-5 text-display-lg font-semibold text-ink">
              {tool.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {tool.longBlurb}
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-700" aria-hidden />
                <dt className="sr-only">Estimated time</dt>
                <dd>{tool.minutes}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-700" aria-hidden />
                <dt className="sr-only">Audience</dt>
                <dd>{tool.audience}</dd>
              </div>
            </dl>
          </div>
          <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
            <div
              aria-hidden
              className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-lift ring-1 ring-brand-100"
            >
              <Icon className="h-14 w-14 text-brand-700" />
            </div>
          </div>
        </div>
        {children ? <div className="pb-6">{children}</div> : null}
      </Container>
    </section>
  );
}
