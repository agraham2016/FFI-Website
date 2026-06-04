import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .optional()
    .transform((v) => (v?.trim() ? v.trim() : undefined)),
  relationship: z.enum(
    ["Self", "Family member", "Guardian", "Care team", "Other"],
    {
      errorMap: () => ({ message: "Please select an option." }),
    }
  ),
  message: z
    .string()
    .min(10, "Please share a little more so we can help.")
    .max(2000, "Please keep your message under 2,000 characters."),
  consent: z
    .boolean()
    .refine((v) => v === true, "Please confirm you'd like us to reach out."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  name: z.string().optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const careersSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a phone number we can reach you at.")
    .max(40, "That phone number looks too long."),
  role: z.enum(
    [
      "Direct Support Professional (DSP)",
      "Employment Support Specialist",
      "Supported Living Supervisor",
      "Employment Services Coordinator",
      "Other / Not sure yet",
    ],
    { errorMap: () => ({ message: "Please select a role." }) }
  ),
  county: z.enum(
    [
      "Pinal County",
      "Maricopa County",
      "Navajo County",
      "Apache County",
      "Other / Open to discuss",
    ],
    { errorMap: () => ({ message: "Please select a county." }) }
  ),
  experience: z.enum(
    [
      "2–3 years",
      "3–5 years",
      "5–10 years",
      "10+ years",
    ],
    { errorMap: () => ({ message: "Please select your experience level." }) }
  ),
  resumeLink: z
    .string()
    .optional()
    .transform((v) => (v?.trim() ? v.trim() : undefined))
    .refine(
      (v) => !v || /^https?:\/\/.+/.test(v),
      "Please paste a full URL (starting with https://)."
    ),
  message: z
    .string()
    .min(20, "Please share a little more so we can get a sense of fit.")
    .max(2000, "Please keep your note under 2,000 characters."),
  consent: z
    .boolean()
    .refine((v) => v === true, "Please confirm you'd like us to reach out."),
});

export type CareersInput = z.infer<typeof careersSchema>;
