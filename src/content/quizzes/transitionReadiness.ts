import type { Quiz, QuizResultCard } from "@/components/tools/quiz/types";

const score = (n: number) => ({ ready: n });

export const transitionReadinessQuiz: Quiz = {
  id: "transition-readiness",
  questions: [
    {
      id: "school-status",
      prompt: "Where are you in the school timeline?",
      options: [
        { id: "early", label: "More than 3 years from school exit.", scores: score(0) },
        { id: "mid", label: "1–3 years out.", scores: score(1) },
        { id: "soon", label: "Less than a year out.", scores: score(2) },
        { id: "exited", label: "Already exited school.", scores: score(3) },
      ],
    },
    {
      id: "ddd-eligibility",
      prompt: "DDD status",
      options: [
        { id: "no", label: "We haven't applied to DDD yet.", scores: score(0) },
        { id: "applying", label: "We're in the middle of applying.", scores: score(1) },
        { id: "eligible", label: "DDD-eligible, but we don't have ALTCS yet.", scores: score(2) },
        { id: "active", label: "Active DDD member with ALTCS.", scores: score(3) },
      ],
    },
    {
      id: "isp",
      prompt: "ISP status",
      options: [
        { id: "no", label: "No ISP yet — or we don't really know what's in it.", scores: score(0) },
        { id: "exists", label: "There's an ISP, but we haven't reviewed it lately.", scores: score(1) },
        { id: "current", label: "Current ISP we know well, but goals could be sharper.", scores: score(2) },
        { id: "fresh", label: "Recently updated ISP with clear, current goals.", scores: score(3) },
      ],
    },
    {
      id: "support-coordinator",
      prompt: "Relationship with the Support Coordinator",
      options: [
        { id: "none", label: "We don't have one assigned yet.", scores: score(0) },
        { id: "name-only", label: "We have one, but barely talk.", scores: score(1) },
        { id: "responsive", label: "Responsive, helpful, but not deeply engaged.", scores: score(2) },
        { id: "great", label: "Trusted partner who knows our family.", scores: score(3) },
      ],
    },
    {
      id: "self-care",
      prompt: "Personal-care independence",
      options: [
        { id: "lots", label: "Needs hands-on help most days.", scores: score(0) },
        { id: "prompts", label: "Independent with regular prompts.", scores: score(1) },
        { id: "minor", label: "Mostly independent, with occasional prompting.", scores: score(2) },
        { id: "full", label: "Fully independent in personal care.", scores: score(3) },
      ],
    },
    {
      id: "household",
      prompt: "Household & daily-life skills",
      options: [
        { id: "starting", label: "Just starting to learn (laundry, cooking, cleaning).", scores: score(0) },
        { id: "some", label: "Can do some tasks with coaching.", scores: score(1) },
        { id: "many", label: "Handles many tasks independently most days.", scores: score(2) },
        { id: "runs", label: "Could realistically run a household with light support.", scores: score(3) },
      ],
    },
    {
      id: "money",
      prompt: "Money skills",
      options: [
        { id: "no", label: "Not yet — money is still abstract.", scores: score(0) },
        { id: "basics", label: "Knows coins/bills, can pay with coaching.", scores: score(1) },
        { id: "uses", label: "Pays with debit, watches a simple budget.", scores: score(2) },
        { id: "manages", label: "Manages a weekly budget and savings goals.", scores: score(3) },
      ],
    },
    {
      id: "transit",
      prompt: "Getting around independently",
      options: [
        { id: "driven", label: "Always needs to be driven.", scores: score(0) },
        { id: "ride-share", label: "Can use rideshare or paratransit with help.", scores: score(1) },
        { id: "transit-help", label: "Uses public transit with some prompting.", scores: score(2) },
        { id: "transit-solo", label: "Travels independently to familiar places.", scores: score(3) },
      ],
    },
    {
      id: "communication",
      prompt: "Self-advocacy & communication",
      options: [
        { id: "limited", label: "Rarely speaks up — we usually advocate for them.", scores: score(0) },
        { id: "some", label: "Speaks up about strong preferences, not much beyond.", scores: score(1) },
        { id: "growing", label: "Increasingly able to express needs and ask for help.", scores: score(2) },
        { id: "strong", label: "Confidently advocates for themselves.", scores: score(3) },
      ],
    },
    {
      id: "work-experience",
      prompt: "Work or volunteer experience",
      options: [
        { id: "none", label: "None yet.", scores: score(0) },
        { id: "school-based", label: "School-based job training only.", scores: score(1) },
        { id: "volunteer", label: "Some real-world volunteer or short-term work.", scores: score(2) },
        { id: "paid", label: "Has held a paid job (or holds one now).", scores: score(3) },
      ],
    },
    {
      id: "social",
      prompt: "Community & social life",
      options: [
        { id: "isolated", label: "Mostly home — limited friendships outside family.", scores: score(0) },
        { id: "school-only", label: "Connections through school but few outside it.", scores: score(1) },
        { id: "some-community", label: "Active in 1–2 community activities or groups.", scores: score(2) },
        { id: "rooted", label: "Rooted in friendships and a community of belonging.", scores: score(3) },
      ],
    },
    {
      id: "future-planning",
      prompt: "Long-range plans (housing, finances, decision-making)",
      options: [
        { id: "none", label: "We haven't really started.", scores: score(0) },
        { id: "considering", label: "We're talking about it but no formal plans yet.", scores: score(1) },
        { id: "started", label: "Some pieces in place (POA, ABLE, etc.).", scores: score(2) },
        { id: "complete", label: "Solid long-range plan in place and reviewed annually.", scores: score(3) },
      ],
    },
  ],
  computeResult: (scores) => {
    const total = scores.ready ?? 0;
    if (total <= 9) return tiers.starting(total);
    if (total <= 18) return tiers.building(total);
    if (total <= 27) return tiers.foundation(total);
    return tiers.ready(total);
  },
};

const tiers = {
  starting: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 36`,
    title: "Just starting — and that's a great place to be.",
    body: "Transition is a long road, and the families who get the most out of FFI are often the ones who started talking about it well before they had to. Here's where we'd focus first.",
    highlights: [
      "Confirm DDD eligibility and ALTCS, even if you're not ready to use services.",
      "Start the Independence Skills Inventory to see what's already in place.",
      "Read FFI's Transition Planning 101 guide to map the next 1–3 years.",
    ],
    next: [
      { label: "Read Transition Planning 101", href: "/resources/transition-planning-101" },
      { label: "Open the Skills Inventory", href: "/tools/independence-skills" },
    ],
  }),
  building: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 36`,
    title: "Building momentum — keep going.",
    body: "You're doing the work. The next phase is about turning early planning into a clear ISP and steady skill-building. Pick the next one or two priorities and don't try to do everything at once.",
    highlights: [
      "Schedule (or refresh) an ISP meeting and walk in prepared.",
      "Pick 3–5 skills to actively build over the next 6 months.",
      "Start a real conversation with a couple of providers — even just to learn.",
    ],
    next: [
      { label: "Open the ISP Prep Worksheet", href: "/tools/isp-prep" },
      { label: "Compare providers", href: "/tools/provider-comparison" },
    ],
  }),
  foundation: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 36`,
    title: "Strong foundation — plan is emerging.",
    body: "A lot of the hard, slow work is already in place. From here, the focus shifts to the right services, the right team, and the right rhythm of life — work, home, community.",
    highlights: [
      "Sharpen ISP goals so they're specific and measurable.",
      "Take the Service Fit Quiz to see what services map to your goals.",
      "Have explicit conversations about housing, employment, and decision-making.",
    ],
    next: [
      { label: "Take the Service Fit Quiz", href: "/tools/service-fit-quiz" },
      { label: "Talk with our team", href: "/contact" },
    ],
  }),
  ready: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 36`,
    title: "Ready for the next chapter.",
    body: "You've built a strong base — and now it's about the right partners and the right level of support to keep growing without holding the person back. The risk now isn't doing too little; it's doing too much.",
    highlights: [
      "Match service hours to actual need — not the maximum.",
      "Build natural supports alongside paid supports.",
      "Plan for what 'less support, more independence' looks like one and three years from now.",
    ],
    next: [
      { label: "See FFI services", href: "/services" },
      { label: "Talk with our team", href: "/contact" },
    ],
  }),
};
