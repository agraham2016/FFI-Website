import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

function parseLessons(json: string): string[] {
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

// Returns all of the signed-in user's progress as { [courseSlug]: lessonSlug[] }.
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const rows = await prisma.courseProgress.findMany({
    where: { userId: session.user.id },
  });

  const progress: Record<string, string[]> = {};
  for (const row of rows) progress[row.courseSlug] = parseLessons(row.completedLessons);

  return NextResponse.json({ progress });
}

// Upserts one course's progress, REPLACING the stored list with the provided
// (deduped) list. The client is responsible for merging local + server progress
// on load (see useCourseProgress), so by the time it PUTs, the list is the
// authoritative truth — which also lets "start over" clear progress.
export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  let body: { courseSlug?: string; completedLessons?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const courseSlug = typeof body.courseSlug === "string" ? body.courseSlug : "";
  if (!courseSlug) {
    return NextResponse.json({ error: "Missing courseSlug." }, { status: 400 });
  }

  const incoming = Array.isArray(body.completedLessons)
    ? Array.from(
        new Set(body.completedLessons.filter((x): x is string => typeof x === "string"))
      )
    : [];

  await prisma.courseProgress.upsert({
    where: { userId_courseSlug: { userId: session.user.id, courseSlug } },
    create: {
      userId: session.user.id,
      courseSlug,
      completedLessons: JSON.stringify(incoming),
    },
    update: { completedLessons: JSON.stringify(incoming) },
  });

  return NextResponse.json({ ok: true, completedLessons: incoming });
}
