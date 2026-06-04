import type { Quiz, QuizResultCard } from "@/components/tools/quiz/types";

type Bucket = "hasl" | "step" | "ise" | "gse";

export const serviceFitQuiz: Quiz = {
  id: "service-fit",
  questions: [
    {
      id: "primary-goal",
      prompt: "What's the most important goal right now?",
      options: [
        {
          id: "daily-life",
          label: "Building everyday life skills — hygiene, cooking, money, getting around.",
          scores: { hasl: 3 },
        },
        {
          id: "explore-work",
          label: "Figuring out what kind of work could fit and getting work-ready.",
          scores: { step: 3 },
        },
        {
          id: "find-job",
          label: "Finding a real, paying job in the community.",
          scores: { ise: 2, gse: 2 },
        },
        {
          id: "stay-engaged",
          label: "Staying engaged and connected during the day with structured activity.",
          scores: { gse: 2, hasl: 1 },
        },
      ],
    },
    {
      id: "experience",
      prompt: "How much paid-work experience does this person have?",
      options: [
        { id: "none", label: "None yet — we're still exploring.", scores: { step: 3 } },
        { id: "some", label: "Some — internships, volunteer work, or short trials.", scores: { step: 1, ise: 2, gse: 2 } },
        { id: "experienced", label: "Steady experience — they've held real jobs.", scores: { ise: 3 } },
        { id: "not-pursuing", label: "We're not pursuing employment right now.", scores: { hasl: 3 } },
      ],
    },
    {
      id: "support-style",
      prompt: "What kind of support feels like the best fit?",
      options: [
        {
          id: "one-on-one",
          label: "One-on-one with a person who knows them well.",
          scores: { hasl: 2, ise: 3 },
        },
        {
          id: "small-group",
          label: "A small group with peers — easier to feel part of something.",
          scores: { gse: 3 },
        },
        {
          id: "mix",
          label: "A mix: some one-on-one, some peer time.",
          scores: { hasl: 1, ise: 1, gse: 1 },
        },
        {
          id: "skill-coaching",
          label: "Coaching to learn specific things, then more independence.",
          scores: { step: 3, hasl: 1 },
        },
      ],
    },
    {
      id: "where",
      prompt: "Where will most of the support happen?",
      options: [
        {
          id: "home",
          label: "Mostly at home and out in the community.",
          scores: { hasl: 3 },
        },
        {
          id: "training-site",
          label: "At a training space — learning skills before stepping into a job.",
          scores: { step: 3 },
        },
        {
          id: "job-site",
          label: "At a real community job site.",
          scores: { ise: 2, gse: 2 },
        },
      ],
    },
    {
      id: "schedule",
      prompt: "What kind of schedule feels right?",
      options: [
        {
          id: "weekly-hours",
          label: "Weekly hours in the home and community, day-to-day.",
          scores: { hasl: 3 },
        },
        {
          id: "structured-weekday",
          label: "A structured weekday focused on getting work-ready.",
          scores: { step: 3 },
        },
        {
          id: "work-shift",
          label: "Real work shifts at an employer.",
          scores: { ise: 3, gse: 2 },
        },
      ],
    },
    {
      id: "social",
      prompt: "How does this person do in social situations?",
      options: [
        {
          id: "thrives-peers",
          label: "Thrives around peers — being with others is energizing.",
          scores: { gse: 3, step: 1 },
        },
        {
          id: "best-one-on-one",
          label: "Does best one-on-one — small audiences, predictable people.",
          scores: { hasl: 2, ise: 3 },
        },
        {
          id: "varies",
          label: "It depends on the day, the people, and the setting.",
          scores: { hasl: 1, step: 1, ise: 1, gse: 1 },
        },
      ],
    },
    {
      id: "supports-needed",
      prompt: "How much hands-on support does this person need?",
      options: [
        {
          id: "lot",
          label: "Quite a bit — daily personal care, cueing, and check-ins.",
          scores: { hasl: 3 },
        },
        {
          id: "some",
          label: "Some — coaching and accountability, but increasingly independent.",
          scores: { step: 2, ise: 2 },
        },
        {
          id: "little",
          label: "A little — mostly just structure, prompting, and someone to ask.",
          scores: { ise: 2, gse: 2 },
        },
      ],
    },
    {
      id: "timeline",
      prompt: "When would services ideally start?",
      options: [
        {
          id: "asap",
          label: "As soon as possible — we're already authorized.",
          scores: { hasl: 1, step: 1, ise: 1, gse: 1 },
        },
        {
          id: "few-months",
          label: "In the next few months — we're working through DDD.",
          scores: { hasl: 1, step: 1, ise: 1, gse: 1 },
        },
        {
          id: "exploring",
          label: "Just exploring options for now.",
          scores: { hasl: 1, step: 1, ise: 1, gse: 1 },
        },
      ],
    },
  ],
  computeResult: (scores) => {
    const winners = (Object.entries(scores) as [Bucket, number][]).sort(
      (a, b) => b[1] - a[1]
    );
    const top = winners[0]?.[0];
    return resultMap[top] ?? resultMap.hasl;
  },
};

const resultMap: Record<Bucket, QuizResultCard> = {
  hasl: {
    eyebrow: "Best fit looks like",
    title: "Supported Living (HASL)",
    body: "HASL — Habilitation, Attendant Care, and Supported Living — is FFI's home- and community-based service for adults building everyday-life independence. A DSP works directly with the individual, on goals built into the ISP, in the home and out in the community.",
    highlights: [
      "One-on-one support tailored to specific weekly goals.",
      "Skills like personal care, cooking, money, transit, scheduling.",
      "Hours and goals adjust over time as independence grows.",
    ],
    next: [
      { label: "Open Supported Living (HASL)", href: "/services/supported-living" },
      { label: "Talk with our team", href: "/contact" },
    ],
  },
  step: {
    eyebrow: "Best fit looks like",
    title: "STEP (pre-employment)",
    body: "STEP — Short-Term Employment Pre-vocational — is the pre-employment service. It's about figuring out what kind of work fits, building soft skills, and practicing real workplace tasks before stepping into a paying job.",
    highlights: [
      "Discovery — what kind of work actually fits?",
      "Soft-skill coaching — communication, schedule, feedback.",
      "Real practice tasks before the first paying job.",
    ],
    next: [
      { label: "Open Employment Services", href: "/services/employment" },
      { label: "Talk with our team", href: "/contact" },
    ],
  },
  ise: {
    eyebrow: "Best fit looks like",
    title: "Individual Supported Employment (ISE)",
    body: "ISE is the most personalized employment service. A job coach helps identify the right job, supports the person on-site at a community employer, and gradually fades support as the individual becomes confident.",
    highlights: [
      "One-on-one job coaching at a real community employer.",
      "Coach fades as confidence and independence grow.",
      "Goal: a real paying job, with real coworkers.",
    ],
    next: [
      { label: "Open Employment Services", href: "/services/employment" },
      { label: "Talk with our team", href: "/contact" },
    ],
  },
  gse: {
    eyebrow: "Best fit looks like",
    title: "Group Supported Employment (GSE)",
    body: "GSE is a small-group format — a few adults working together at a real community work site, supported by an FFI coach. It's a great fit for people who learn well alongside peers or who want shared structure.",
    highlights: [
      "Small crew at a real community work site.",
      "Built-in peer support with a steady coach.",
      "A real-world stepping stone toward more independence.",
    ],
    next: [
      { label: "Open Employment Services", href: "/services/employment" },
      { label: "Talk with our team", href: "/contact" },
    ],
  },
};
