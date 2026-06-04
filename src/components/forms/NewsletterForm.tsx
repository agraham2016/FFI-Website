"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { newsletterSchema, type NewsletterInput } from "@/lib/validators";
import { Field, Input, Label, ErrorText, HelpText } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Props = { compact?: boolean };

export function NewsletterForm({ compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { message?: string } | null;
        throw new Error(body?.message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      reset();
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  if (submitted) {
    return (
      <div
        className="flex items-start gap-2.5 rounded-xl border border-brand-100 bg-brand-50/60 p-3.5 text-sm text-brand-900"
        role="status"
      >
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
        <span>You&apos;re on the list. We&apos;ll be in touch soon.</span>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
        <Field>
          <Label htmlFor="newsletter-email-compact" className="sr-only">
            Email address
          </Label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              id="newsletter-email-compact"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              invalid={!!errors.email}
              aria-describedby={errors.email ? "newsletter-email-error" : undefined}
              {...register("email")}
            />
            <Button
              type="submit"
              size="md"
              disabled={isSubmitting}
              className="shrink-0"
            >
              {isSubmitting ? "Joining…" : "Join"}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          {errors.email ? (
            <ErrorText id="newsletter-email-error">{errors.email.message}</ErrorText>
          ) : (
            <HelpText>No spam. Unsubscribe anytime.</HelpText>
          )}
        </Field>
        {serverError ? <ErrorText>{serverError}</ErrorText> : null}
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("grid gap-4 sm:grid-cols-2")}
    >
      <Field>
        <Label htmlFor="newsletter-name">Name (optional)</Label>
        <Input
          id="newsletter-name"
          autoComplete="name"
          placeholder="Your name"
          {...register("name")}
        />
      </Field>
      <Field>
        <Label htmlFor="newsletter-email">Email address</Label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          invalid={!!errors.email}
          aria-describedby={errors.email ? "nl-email-err" : "nl-email-help"}
          {...register("email")}
        />
        {errors.email ? (
          <ErrorText id="nl-email-err">{errors.email.message}</ErrorText>
        ) : (
          <HelpText id="nl-email-help">We respect your inbox.</HelpText>
        )}
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? "Joining…" : "Join the mailing list"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
      {serverError ? (
        <div className="sm:col-span-2">
          <ErrorText>{serverError}</ErrorText>
        </div>
      ) : null}
    </form>
  );
}
