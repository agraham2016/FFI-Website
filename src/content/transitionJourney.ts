export type JourneyStage = {
  id: string;
  ageRange: string;
  title: string;
  oneLiner: string;
  whatHappens: string[];
  familyFocus: string[];
  ffiFit?: string;
};

export const journeyStages: JourneyStage[] = [
  {
    id: "early-transition",
    ageRange: "Ages 14–15",
    title: "Transition planning begins",
    oneLiner: "School transition planning starts — and so does the long view.",
    whatHappens: [
      "The school IEP team adds transition goals: post-secondary, employment, independent living.",
      "The student is invited into IEP meetings as the lead voice.",
      "Families start exploring DDD eligibility, if they haven't already.",
    ],
    familyFocus: [
      "Talk about what your young adult wants their adult life to look like.",
      "Visit the FFI guide on Transition Planning 101.",
      "If not already an active DDD member, apply or check status.",
    ],
    ffiFit:
      "It's early to start services, but a great time to learn the system and start building skills at home.",
  },
  {
    id: "deepening",
    ageRange: "Ages 16–17",
    title: "Build skills & explore options",
    oneLiner: "Real-world skills, work exposure, and life-after-school decisions.",
    whatHappens: [
      "Schools may offer work experiences, community-based instruction, and Vocational Rehabilitation referrals.",
      "Self-determination, communication, and self-advocacy goals appear in the IEP.",
      "Families start touring providers, day programs, and adult services.",
    ],
    familyFocus: [
      "Use FFI's Independence Skills Inventory to map current strengths.",
      "Have an early conversation with your DDD Support Coordinator about adult services.",
      "Begin researching guardianship alternatives — well before the 18th birthday.",
    ],
    ffiFit:
      "FFI's Transition Readiness Self-Assessment can help you see where supports could plug in next.",
  },
  {
    id: "age-18",
    ageRange: "Around age 18",
    title: "Age of majority decisions",
    oneLiner: "The legal landscape shifts. So does your young adult's voice.",
    whatHappens: [
      "Your young adult is now a legal adult — with full decision-making rights.",
      "Families decide between full guardianship, limited POAs, Supported Decision-Making, or no formal arrangement.",
      "Selective Service registration for males; voter registration is also an option.",
      "Adult-focused medical, dental, and psychiatric care begins (transition from pediatric).",
    ],
    familyFocus: [
      "Consult a disability-rights attorney before defaulting to full guardianship.",
      "Update healthcare and consent forms.",
      "Review benefits — SSI, ALTCS — for adult thresholds.",
    ],
  },
  {
    id: "school-end",
    ageRange: "Ages 18–22",
    title: "School ends, services begin",
    oneLiner: "From an IEP to an ISP — the day-to-day support structure changes.",
    whatHappens: [
      "Public school services end (varies by state and program — Arizona supports through age 22).",
      "DDD adult services replace much of what schools used to provide.",
      "An Individual Support Plan (ISP) is built around the new adult's life.",
    ],
    familyFocus: [
      "Request your ISP meeting early; bring FFI's ISP Prep Worksheet.",
      "Choose providers — FFI's Provider Comparison Worksheet helps.",
      "Talk through housing, employment, and daily-life expectations honestly.",
    ],
    ffiFit:
      "This is when many families start FFI services — HASL, STEP, ISE, or GSE — building on what school began.",
  },
  {
    id: "early-adult",
    ageRange: "Ages 22–30",
    title: "Building an adult life",
    oneLiner: "Skills and routines settle in. So does meaningful work and community.",
    whatHappens: [
      "Steady HASL and Employment Services help establish daily routines and a paying job.",
      "Community connections — clubs, faith communities, volunteer roles — root in.",
      "ISP goals shift from 'learning the basics' to 'expanding what's possible.'",
    ],
    familyFocus: [
      "Watch for skill gains — and adjust supports so they stay challenging, not stuck.",
      "Document what works for your young adult: routines, sensory needs, communication.",
      "Plan for housing transitions if your young adult wants to move toward independent living.",
    ],
    ffiFit:
      "FFI services scale up or down based on what an individual is ready for — never to fill hours.",
  },
  {
    id: "ongoing",
    ageRange: "30s and beyond",
    title: "Continued growth & life events",
    oneLiner: "Adulthood has chapters. Plans evolve with them.",
    whatHappens: [
      "Major life events — moving, job changes, parents aging — reshape supports.",
      "Some adults move toward more independence; others may need additional support over time.",
      "ISPs continue annually but are renegotiated whenever life changes.",
    ],
    familyFocus: [
      "Build a long-range plan that doesn't depend on aging parents alone.",
      "Identify a circle of trusted decision-makers (siblings, friends, professionals).",
      "Revisit financial planning — special-needs trusts, ABLE accounts, beneficiaries.",
    ],
    ffiFit:
      "Long-term FFI relationships matter most here — continuity, trust, and a team that knows the person.",
  },
];
