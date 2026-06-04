import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition hover:shadow-card",
        className
      )}
      {...props}
    />
  );
}

export function CardEyebrow({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-brand-50 p-2.5 text-brand-700",
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("mt-4 font-display text-xl font-semibold text-ink", className)}
      {...props}
    />
  );
}

export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-2 text-sm leading-relaxed text-ink-muted", className)} {...props} />
  );
}
