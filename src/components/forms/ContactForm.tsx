"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validators";
import {
  Field,
  Input,
  Label,
  Textarea,
  ErrorText,
  HelpText,
} from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const relationships = [
  "Self",
  "Family member",
  "Guardian",
  "Care team",
  "Other",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false },
  });

  const onSubmit = async (data: ContactInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
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
        role="status"
        className="rounded-2xl border border-brand-100 bg-brand-50/70 p-6 text-brand-900"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-700" aria-hidden />
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-900">
              Thank you — we&apos;ll be in touch.
            </h3>
            <p className="mt-1 text-sm text-brand-900/80">
              A member of our team will follow up within one business day. If your
              situation is urgent, please call us directly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 sm:grid-cols-2"
    >
      <Field>
        <Label htmlFor="contact-name">Full name</Label>
        <Input
          id="contact-name"
          autoComplete="name"
          invalid={!!errors.name}
          aria-describedby={errors.name ? "name-err" : undefined}
          {...register("name")}
        />
        {errors.name ? <ErrorText id="name-err">{errors.name.message}</ErrorText> : null}
      </Field>

      <Field>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          invalid={!!errors.email}
          aria-describedby={errors.email ? "email-err" : undefined}
          {...register("email")}
        />
        {errors.email ? <ErrorText id="email-err">{errors.email.message}</ErrorText> : null}
      </Field>

      <Field>
        <Label htmlFor="contact-phone">Phone (optional)</Label>
        <Input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
        />
      </Field>

      <Field>
        <Label htmlFor="contact-relationship">I am inquiring as</Label>
        <select
          id="contact-relationship"
          aria-invalid={errors.relationship ? true : undefined}
          aria-describedby={errors.relationship ? "rel-err" : undefined}
          className={cn(
            "block w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-2 focus:ring-brand-500/40",
            errors.relationship
              ? "border-red-400 focus:border-red-500 focus:ring-red-200"
              : "border-brand-200 focus:border-brand-500"
          )}
          {...register("relationship")}
          defaultValue=""
        >
          <option value="" disabled>
            Select one…
          </option>
          {relationships.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.relationship ? (
          <ErrorText id="rel-err">{errors.relationship.message}</ErrorText>
        ) : null}
      </Field>

      <Field className="sm:col-span-2">
        <Label htmlFor="contact-message">How can we help?</Label>
        <Textarea
          id="contact-message"
          rows={6}
          placeholder="Tell us a little about the individual, current supports, and what you're hoping to learn or arrange."
          invalid={!!errors.message}
          aria-describedby={errors.message ? "msg-err" : "msg-help"}
          {...register("message")}
        />
        {errors.message ? (
          <ErrorText id="msg-err">{errors.message.message}</ErrorText>
        ) : (
          <HelpText id="msg-help">
            We&apos;ll never share your information. We typically reply within one
            business day.
          </HelpText>
        )}
      </Field>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-2.5 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-brand-300 text-brand-700 focus:ring-brand-500"
            {...register("consent")}
            aria-describedby={errors.consent ? "consent-err" : undefined}
          />
          <span>
            Yes, please contact me about Foundation for Independence services and
            updates.
          </span>
        </label>
        {errors.consent ? (
          <ErrorText id="consent-err">{errors.consent.message}</ErrorText>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          <Send className="h-4 w-4" aria-hidden />
          {isSubmitting ? "Sending…" : "Send message"}
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
