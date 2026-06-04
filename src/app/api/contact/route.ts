import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Invalid form data.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // TODO: wire up to Resend / SendGrid / etc.
  // Example:
  //   await resend.emails.send({
  //     from: "FFI Website <noreply@ffiaz.info>",
  //     to: process.env.CONTACT_TO_EMAIL!,
  //     subject: `New inquiry from ${parsed.data.name}`,
  //     reply_to: parsed.data.email,
  //     text: parsed.data.message,
  //   });
  console.log("[contact] new submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
