import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Label = ({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={cn("block text-sm font-medium text-ink", className)}
    {...props}
  />
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "block w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-subtle transition focus:outline-none focus:ring-2 focus:ring-brand-500/40",
        invalid
          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
          : "border-brand-200 focus:border-brand-500",
        className
      )}
      {...props}
    />
  );
});

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, invalid, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "block w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-subtle transition focus:outline-none focus:ring-2 focus:ring-brand-500/40",
          invalid
            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
            : "border-brand-200 focus:border-brand-500",
          className
        )}
        {...props}
      />
    );
  }
);

export function HelpText({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <p id={id} className="mt-1.5 text-xs text-ink-subtle">
      {children}
    </p>
  );
}

export function ErrorText({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {children}
    </p>
  );
}

export function Field({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-1.5", className)}>{children}</div>;
}
