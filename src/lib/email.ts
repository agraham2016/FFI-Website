type SendArgs = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

/**
 * Sends an email via Resend when RESEND_API_KEY is set. In development (no key)
 * it logs the message to the server console and reports sent: false, so flows
 * like password reset still work locally without an email provider.
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
}: SendArgs): Promise<{ sent: boolean }> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "FFI Courses <onboarding@resend.dev>";

  if (!key) {
    console.log(
      `\n[email:dev] (no RESEND_API_KEY set — not actually sending)\n` +
        `To: ${to}\nSubject: ${subject}\n\n${text ?? html}\n`
    );
    return { sent: false };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html, text }),
    });
    return { sent: res.ok };
  } catch {
    return { sent: false };
  }
}

export function appUrl(): string {
  return process.env.APP_URL || "http://localhost:3000";
}
