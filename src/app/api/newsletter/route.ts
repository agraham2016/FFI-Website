import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";

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

  const parsed = newsletterSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Invalid form data.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // TODO: wire up to Mailchimp / Resend Audiences / Buttondown / etc.
  console.log("[newsletter] new subscriber:", parsed.data);

  return NextResponse.json({ ok: true });
}
