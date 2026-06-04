import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60" />
      <Container size="sm" className="relative">
        <div className="flex min-h-[70vh] flex-col items-center justify-center py-16">
          <Link href="/" className="mb-8 flex items-center gap-2.5" aria-label="Home">
            <Logo className="h-9 w-9 text-brand-600" />
            <span className="font-display text-base font-semibold text-ink">
              Foundation for Independence
            </span>
          </Link>

          <div className="w-full max-w-md rounded-3xl border border-brand-100 bg-white p-7 shadow-card sm:p-9">
            <h1 className="font-display text-2xl font-semibold text-ink">{title}</h1>
            {subtitle ? (
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{subtitle}</p>
            ) : null}
            <div className="mt-6">{children}</div>
          </div>

          {footer ? (
            <div className="mt-6 text-center text-sm text-ink-muted">{footer}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** Shared field styles for the auth forms. */
export const fieldClass =
  "mt-1.5 block w-full rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200";

export const labelClass = "block text-sm font-medium text-ink";

export const primaryBtnClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60";
