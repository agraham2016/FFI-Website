"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { careersSchema, type CareersInput } from "@/lib/validators";
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

const roleOptions = [
  "Direct Support Professional (DSP)",
  "Employment Support Specialist",
  "Supported Living Supervisor",
  "Employment Services Coordinator",
  "Other / Not sure yet",
] as const;

const countyOptions = [
  "Pinal County",
  "Maricopa County",
  "Navajo County",
  "Apache County",
  "Other / Open to discuss",
] as const;

const experienceOptions = [
  "2–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
] as const;

const selectClass = (invalid: boolean) =>
  cn(
    "block w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-2 focus:ring-brand-500/40",
    invalid
      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
      : "border-brand-200 focus:border-brand-500"
  );

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CareersInput>({
    resolver: zodResolver(careersSchema),
    defaultValues: { consent: false },
  });

  const onSubmit = async (data: CareersInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as {
          message?: string;
        } | null;
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
              Thank you — we received your interest.
            </h3>
            <p className="mt-1 text-sm text-brand-900/80">
              A member of our team will follow up within a few business days. If
              there&apos;s a fit, we&apos;ll set up a conversation and request your
              resume then.
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
        <Label htmlFor="careers-name">Full name</Label>
        <Input
          id="careers-name"
          autoComplete="name"
          invalid={!!errors.name}
          aria-describedby={errors.name ? "c-name-err" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <ErrorText id="c-name-err">{errors.name.message}</ErrorText>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="careers-email">Email</Label>
        <Input
          id="careers-email"
          type="email"
          autoComplete="email"
          invalid={!!errors.email}
          aria-describedby={errors.email ? "c-email-err" : undefined}
          {...register("email")}
        />
        {errors.email ? (
          <ErrorText id="c-email-err">{errors.email.message}</ErrorText>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="careers-phone">Phone</Label>
        <Input
          id="careers-phone"
          type="tel"
          autoComplete="tel"
          invalid={!!errors.phone}
          aria-describedby={errors.phone ? "c-phone-err" : undefined}
          {...register("phone")}
        />
        {errors.phone ? (
          <ErrorText id="c-phone-err">{errors.phone.message}</ErrorText>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="careers-county">Where are you located?</Label>
        <select
          id="careers-county"
          aria-invalid={errors.county ? true : undefined}
          aria-describedby={errors.county ? "c-county-err" : undefined}
          className={selectClass(!!errors.county)}
          defaultValue=""
          {...register("county")}
        >
          <option value="" disabled>
            Select one…
          </option>
          {countyOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.county ? (
          <ErrorText id="c-county-err">{errors.county.message}</ErrorText>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="careers-role">Role you&apos;re interested in</Label>
        <select
          id="careers-role"
          aria-invalid={errors.role ? true : undefined}
          aria-describedby={errors.role ? "c-role-err" : undefined}
          className={selectClass(!!errors.role)}
          defaultValue=""
          {...register("role")}
        >
          <option value="" disabled>
            Select one…
          </option>
          {roleOptions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.role ? (
          <ErrorText id="c-role-err">{errors.role.message}</ErrorText>
        ) : null}
      </Field>

      <Field>
        <Label htmlFor="careers-experience">
          Years supporting a person with a disability
        </Label>
        <select
          id="careers-experience"
          aria-invalid={errors.experience ? true : undefined}
          aria-describedby={errors.experience ? "c-exp-err" : "c-exp-help"}
          className={selectClass(!!errors.experience)}
          defaultValue=""
          {...register("experience")}
        >
          <option value="" disabled>
            Select one…
          </option>
          {experienceOptions.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        {errors.experience ? (
          <ErrorText id="c-exp-err">{errors.experience.message}</ErrorText>
        ) : (
          <HelpText id="c-exp-help">
            Family, school, volunteer, or professional — all count. (Minimum 2
            years.)
          </HelpText>
        )}
      </Field>

      <Field className="sm:col-span-2">
        <Label htmlFor="careers-resume">Resume link (optional)</Label>
        <Input
          id="careers-resume"
          type="url"
          placeholder="https://… (Google Doc, LinkedIn, Dropbox, etc.)"
          invalid={!!errors.resumeLink}
          aria-describedby={errors.resumeLink ? "c-resume-err" : "c-resume-help"}
          {...register("resumeLink")}
        />
        {errors.resumeLink ? (
          <ErrorText id="c-resume-err">{errors.resumeLink.message}</ErrorText>
        ) : (
          <HelpText id="c-resume-help">
            Paste a link if you&apos;d like — otherwise we&apos;ll request your
            resume after our first conversation.
          </HelpText>
        )}
      </Field>

      <Field className="sm:col-span-2">
        <Label htmlFor="careers-message">Tell us a little about yourself</Label>
        <Textarea
          id="careers-message"
          rows={6}
          placeholder="What draws you to this work? What kind of support are you most interested in providing? Anything else you'd like us to know?"
          invalid={!!errors.message}
          aria-describedby={errors.message ? "c-msg-err" : "c-msg-help"}
          {...register("message")}
        />
        {errors.message ? (
          <ErrorText id="c-msg-err">{errors.message.message}</ErrorText>
        ) : (
          <HelpText id="c-msg-help">
            We read every note. There&apos;s no script — write the way you talk.
          </HelpText>
        )}
      </Field>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-2.5 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-brand-300 text-brand-700 focus:ring-brand-500"
            {...register("consent")}
            aria-describedby={errors.consent ? "c-consent-err" : undefined}
          />
          <span>
            Yes, please contact me about opportunities at Foundation for
            Independence.
          </span>
        </label>
        {errors.consent ? (
          <ErrorText id="c-consent-err">{errors.consent.message}</ErrorText>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          <Send className="h-4 w-4" aria-hidden />
          {isSubmitting ? "Sending…" : "Submit interest"}
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
