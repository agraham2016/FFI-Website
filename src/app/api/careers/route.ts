import { NextResponse } from "next/server";
import { careersSchema } from "@/lib/validators";

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

  const parsed = careersSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Invalid form data.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // TODO: wire to your hiring inbox / ATS / Resend, e.g.
  //   await resend.emails.send({
  //     from: "FFI Careers <careers@ffiaz.info>",
  //     to: process.env.CAREERS_TO_EMAIL!,
  //     subject: `New career interest from ${parsed.data.name} — ${parsed.data.role}`,
  //     reply_to: parsed.data.email,
  //     text: JSON.stringify(parsed.data, null, 2),
  //   });
  console.log("[careers] new interest:", parsed.data);

  return NextResponse.json({ ok: true });
}
