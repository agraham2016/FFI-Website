export type CareerNode = {
  id: string;
  title: string;
  level: 1 | 2 | 3 | 4;
  oneLine: string;
  responsibilities: string[];
  growthInto: string[];
  typicalTimeline?: string;
  prerequisites?: string[];
};

export const careerNodes: CareerNode[] = [
  {
    id: "dsp",
    title: "Direct Support Professional (DSP)",
    level: 1,
    oneLine:
      "The foundation of FFI. You work directly with one or a few individuals, in their home and community.",
    responsibilities: [
      "Support ISP goals day-to-day — habilitation, attendant care, community access.",
      "Build trust and consistent routines.",
      "Document services and report meaningful changes.",
      "Coordinate with families and the FFI team.",
    ],
    growthInto: ["lead-dsp", "employment-spec"],
    typicalTimeline: "Year 1+",
    prerequisites: [
      "2+ years experience with a person with disabilities",
      "Fingerprint Clearance Card, CPR/First Aid",
      "Article 9 and required DSP training",
    ],
  },
  {
    id: "employment-spec",
    title: "Employment Specialist / Job Coach",
    level: 2,
    oneLine:
      "You support adults in real community jobs — discovery, training, on-site coaching, and fading support.",
    responsibilities: [
      "Lead STEP, ISE, and GSE supports.",
      "Build relationships with employer partners.",
      "Document workplace progress against ISP goals.",
      "Coach behavior, communication, and workplace social skills.",
    ],
    growthInto: ["employment-lead", "lead-dsp"],
    typicalTimeline: "Year 1–3",
    prerequisites: [
      "Comfort in workplace settings",
      "Foundation in soft-skill and behavioral coaching",
    ],
  },
  {
    id: "lead-dsp",
    title: "Lead DSP",
    level: 2,
    oneLine:
      "An experienced DSP who mentors new team members and supports complex client situations.",
    responsibilities: [
      "Mentor new DSPs through onboarding and shadow shifts.",
      "Step into hard-to-cover or complex client situations.",
      "Help refine routines and scripts that work for an individual.",
      "Bridge family communication and the FFI office.",
    ],
    growthInto: ["service-coordinator", "trainer"],
    typicalTimeline: "Year 2–3",
    prerequisites: [
      "Strong DSP track record",
      "Demonstrated coaching and communication skills",
    ],
  },
  {
    id: "trainer",
    title: "Trainer",
    level: 3,
    oneLine:
      "You teach the next generation of FFI staff — Article 9, person-centered support, employment best practices.",
    responsibilities: [
      "Build and run new-hire and ongoing training.",
      "Stay current on DDD requirements and field best practices.",
      "Coach staff in difficult moments — not just in the classroom.",
    ],
    growthInto: ["program-director"],
    typicalTimeline: "Year 3+",
    prerequisites: [
      "Deep DSP or Employment Specialist experience",
      "Comfort presenting and building curriculum",
    ],
  },
  {
    id: "service-coordinator",
    title: "Service Coordinator",
    level: 3,
    oneLine:
      "You make sure each individual's services run smoothly — scheduling, ISP coordination, family relationships.",
    responsibilities: [
      "Hold the relationship with families and Support Coordinators.",
      "Match staff to individuals thoughtfully.",
      "Track service delivery and ISP goal progress.",
      "Solve problems before families have to call.",
    ],
    growthInto: ["program-director"],
    typicalTimeline: "Year 3+",
    prerequisites: [
      "Strong organization and communication",
      "Working knowledge of the DDD system",
    ],
  },
  {
    id: "employment-lead",
    title: "Employment Services Lead",
    level: 3,
    oneLine:
      "You oversee FFI's STEP, ISE, and GSE work — the employer partnerships, the team, and the outcomes.",
    responsibilities: [
      "Build and steward employer partnerships across our regions.",
      "Lead the Employment Specialist team.",
      "Track placements and long-term job retention.",
      "Refine FFI's discovery and coaching playbooks.",
    ],
    growthInto: ["program-director"],
    typicalTimeline: "Year 3+",
    prerequisites: [
      "Employment Specialist experience",
      "Track record building employer relationships",
    ],
  },
  {
    id: "program-director",
    title: "Program Director",
    level: 4,
    oneLine:
      "You're responsible for an entire FFI region or program — quality, growth, team, and outcomes.",
    responsibilities: [
      "Set program direction, hire, and develop leaders.",
      "Maintain DDD compliance and quality.",
      "Steward family relationships and community partnerships.",
      "Be the voice of FFI in the region.",
    ],
    growthInto: [],
    typicalTimeline: "Year 5+",
    prerequisites: [
      "Years of FFI leadership experience",
      "Strong people leadership and operations skills",
    ],
  },
];
