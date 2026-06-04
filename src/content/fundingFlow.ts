export type FlowStep = {
  id: string;
  step: string;
  title: string;
  body: string;
  bullets?: string[];
  tip?: string;
};

export const fundingFlow: FlowStep[] = [
  {
    id: "diagnosis",
    step: "01",
    title: "A qualifying diagnosis & onset before age 18",
    body: "Arizona DDD eligibility starts here. To qualify, the individual must have one (or more) of these diagnoses, with onset before age 18 and a substantial impact on daily functioning.",
    bullets: [
      "Intellectual disability",
      "Autism",
      "Cerebral palsy",
      "Epilepsy (with substantial functional limitations)",
      "Down syndrome",
    ],
    tip: "If you're not sure whether your young adult qualifies, don't try to interpret it alone. Apply — DDD does the formal determination.",
  },
  {
    id: "ddd-application",
    step: "02",
    title: "Apply to DDD",
    body: "Families apply through DES/DDD. The state reviews medical records, evaluations, and functional assessments. Approval can take weeks to months — start as early as you can.",
    bullets: [
      "Gather: psych evaluations, school IEP, medical records, and any prior diagnoses.",
      "DDD may schedule additional assessments to verify functional impact.",
      "If approved, you become a DDD member and are assigned a Support Coordinator.",
    ],
    tip: "DDD eligibility ≠ ALTCS funding. Those are two separate decisions, made on different criteria.",
  },
  {
    id: "altcs",
    step: "03",
    title: "Apply for ALTCS",
    body: "ALTCS is the Medicaid program that actually pays for most adult services. Eligibility is based on financial criteria (assets and income) and medical criteria (functional need).",
    bullets: [
      "Income and asset limits apply — these are different for adults vs. minors.",
      "A medical assessor evaluates daily living function.",
      "ALTCS approval unlocks the funded HCBS services your ISP authorizes.",
    ],
    tip: "Most adults with developmental disabilities qualify for ALTCS as adults even when they didn't as minors — household income no longer counts.",
  },
  {
    id: "support-coordinator",
    step: "04",
    title: "Meet your Support Coordinator",
    body: "Your Support Coordinator is your DDD case manager. They lead ISP planning, authorize services, and connect you with providers like FFI.",
    bullets: [
      "You can request a Support Coordinator change if the relationship isn't working.",
      "They are not a service provider — they coordinate among providers.",
      "You'll meet at least annually for the ISP, and any time life changes meaningfully.",
    ],
  },
  {
    id: "isp",
    step: "05",
    title: "Build the ISP (Individual Support Plan)",
    body: "The ISP captures who the person is, what they want, the supports they need, and the goals they're working toward. It drives every authorized service.",
    bullets: [
      "Person-centered: the individual leads, with family and team support.",
      "Authorizes specific weekly hours for HASL, Respite, Employment Services, etc.",
      "Lists the providers responsible for each service.",
    ],
    tip: "Use FFI's free ISP Prep Worksheet before the meeting. Going in organized changes everything.",
  },
  {
    id: "choose-providers",
    step: "06",
    title: "Choose your providers",
    body: "Families choose which DDD-qualified providers deliver each service. You can interview multiple providers, ask for references, and switch later if it's not a fit.",
    bullets: [
      "FFI is a DDD-qualified provider for HASL and Employment Services.",
      "You can mix providers across services if that fits best.",
      "Ask about training, communication style, and values — not just availability.",
    ],
    tip: "Use FFI's Provider Comparison Worksheet to compare two or three side by side.",
  },
  {
    id: "services-begin",
    step: "07",
    title: "Services begin — and keep evolving",
    body: "Once authorizations are in place, services start. The ISP is renewed at least annually, and can be revisited any time life changes — a new job, a move, a new goal.",
    bullets: [
      "DSPs and Job Coaches deliver the day-to-day support.",
      "FFI tracks goals and shares progress with you and your Support Coordinator.",
      "You always have the right to call an ISP meeting if something needs to change.",
    ],
  },
];
