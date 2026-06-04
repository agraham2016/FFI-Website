import {
  type LucideIcon,
  HandHeart,
  Briefcase,
  ClipboardList,
  Users,
} from "lucide-react";

export type Role = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  responsibilities: string[];
  fitFor: string;
};

export const roles: Role[] = [
  {
    slug: "direct-support-professional",
    title: "Direct Support Professional (DSP)",
    shortTitle: "DSP",
    icon: HandHeart,
    summary:
      "The heart of our daily Supported Living work. DSPs work directly with members in their homes and communities — building daily living skills, supporting routines, and showing up reliably day after day.",
    responsibilities: [
      "Provide direct habilitation services in members' homes and communities",
      "Support daily living, meal prep, hygiene, household routines, and community access",
      "Follow person-centered support plans and behavior strategies",
      "Complete progress notes and required documentation",
      "Encourage independence while offering steady, respectful prompting",
      "Provide safety supervision and crisis-prevention strategies",
    ],
    fitFor:
      "People with at least two years of experience supporting someone with a disability — at home, at school, as a sibling, as a volunteer, or professionally. We provide all required certifications on top of that.",
  },
  {
    slug: "employment-support-specialist",
    title: "Employment Support Specialist",
    shortTitle: "Employment Specialist",
    icon: Briefcase,
    summary:
      "Coaches members through STEP, Individual Supported Employment (ISE), and Group Supported Employment (GSE). Works in real community workplaces, modeling tasks and gradually fading support as confidence grows.",
    responsibilities: [
      "Deliver authorized STEP, ISE, and GSE supports in community workplaces",
      "Provide on-the-job training, task modeling, and workplace coaching",
      "Support workplace communication, social skills, and professional behavior",
      "Coordinate with employers, members, families, and Support Coordinators",
      "Document service delivery and member progress accurately",
      "Help members move toward greater independence and longer-term employment",
    ],
    fitFor:
      "People with at least two years of experience supporting someone with a disability — and a knack for coaching without taking over. Prior workforce supervision, retail/hospitality management, or job-coaching experience is a plus.",
  },
  {
    slug: "supported-living-supervisor",
    title: "Supported Living Supervisor",
    shortTitle: "SL Supervisor",
    icon: ClipboardList,
    summary:
      "Provides direct oversight to Direct Support Professionals delivering Supported Living services. Coordinates schedules, reviews documentation, and coaches DSPs to deliver consistent, person-centered support.",
    responsibilities: [
      "Supervise DSPs delivering authorized Supported Living services",
      "Coordinate DSP schedules to ensure adequate coverage",
      "Conduct service oversight, quality monitoring, and health/safety checks",
      "Coach DSPs on support techniques, behavior strategies, and professional conduct",
      "Review service documentation for accuracy, completeness, and compliance",
      "Support incident identification, reporting, and follow-up",
    ],
    fitFor:
      "People with prior I/DD direct support, social work, or DDD-aligned supervisory experience — and a steady, coaching-first leadership style.",
  },
  {
    slug: "employment-services-coordinator",
    title: "Employment Services Coordinator",
    shortTitle: "Employment Coordinator",
    icon: Users,
    summary:
      "Oversees the delivery of STEP, ISE, and GSE services across the team. Builds employer partnerships, supervises Employment Specialists, and ensures employment supports align with members' ISPs and Arizona's Employment First initiative.",
    responsibilities: [
      "Coordinate the delivery of STEP, ISE, and GSE services",
      "Develop and maintain employer and community partnerships",
      "Supervise and coach Employment Specialists",
      "Support development and implementation of ISP-aligned employment goals",
      "Monitor progress, retention, and stability across employment placements",
      "Coordinate communication with employers, members, families, and Support Coordinators",
    ],
    fitFor:
      "Experienced workforce development, vocational rehabilitation, or employment-services professionals — comfortable building employer relationships and supervising a small team.",
  },
];

export type Quality = {
  title: string;
  body: string;
};

export const qualities: Quality[] = [
  {
    title: "Reliability above all",
    body: "Showing up — on time, every shift, ready to work — is the foundation. People are counting on you.",
  },
  {
    title: "Patience and steadiness",
    body: "Calm, supportive presence. Emotional regulation in difficult moments. The willingness to repeat without frustration.",
  },
  {
    title: "Curiosity about people",
    body: "Genuine interest in the individuals you support — their preferences, strengths, history, and goals.",
  },
  {
    title: "Comfort with structure",
    body: "Daily routines, documentation, schedules, and safety procedures — the scaffolding that makes good support possible.",
  },
  {
    title: "Willingness to learn",
    body: "We provide all required training (Article 9, CPR/First Aid, person-centered practices, and more). Your job is to bring the openness.",
  },
  {
    title: "A sense that this work matters",
    body: "Because it does. Independence isn't built in dramatic moments — it's built in the ordinary ones. People who feel that thrive here.",
  },
];

export type Benefit = {
  title: string;
  body: string;
};

export const benefits: Benefit[] = [
  {
    title: "Paid training",
    body: "All required certifications — Article 9, CPR/First Aid, Direct Care Worker (DCW) where applicable, person-centered practices — provided and paid.",
  },
  {
    title: "Mileage reimbursement",
    body: "Community-based work means time on the road. We reimburse mileage for employment-related community supports.",
  },
  {
    title: "Predictable schedules",
    body: "Clear shifts, predictable structure. We aim for low staff-to-member ratios so you can do the work well.",
  },
  {
    title: "Supportive supervision",
    body: "Regular check-ins, open communication with leadership, and coaching that helps you grow into the role.",
  },
  {
    title: "Pathways for growth",
    body: "DSP to Supervisor. Specialist to Coordinator. Internal promotion is a real path, not a poster on the wall.",
  },
  {
    title: "Performance-based incentives",
    body: "As we grow, performance-based incentives reward the consistency and quality that this work depends on.",
  },
];
