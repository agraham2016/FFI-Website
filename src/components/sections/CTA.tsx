import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTA({
  eyebrow = "Ready when you are",
  title,
  description,
  primary = { label: "Contact our team", href: "/contact" },
  secondary,
}: Props) {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-6 py-14 text-white sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(220, 157, 82, 0.5), transparent 60%), radial-gradient(ellipse at bottom left, rgba(126, 187, 192, 0.5), transparent 55%)",
            }}
          />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              {eyebrow ? (
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-200">
                  {eyebrow}
                </div>
              ) : null}
              <h2 className="mt-3 text-display-md font-semibold text-white">{title}</h2>
              {description ? (
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href={primary.href} size="lg" variant="secondary">
                {primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              {secondary ? (
                <Button
                  href={secondary.href}
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
