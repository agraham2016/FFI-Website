import {
  type LucideIcon,
  Home as HomeIcon,
  Briefcase,
  Utensils,
  HeartPulse,
  Wallet,
  Bus,
  Compass,
  GraduationCap,
  Users,
  ClipboardCheck,
  Target,
  Sparkles,
  HandHeart,
} from "lucide-react";

export type ServiceSlug = "supported-living" | "employment";

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SubProgram = {
  acronym: string;
  name: string;
  summary: string;
  details: string[];
};

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  acronym?: string;
  tagline: string;
  intro: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  outcomes: string[];
  programs?: SubProgram[];
};

export const services: Service[] = [
  {
    slug: "supported-living",
    name: "Habilitation — Supported Living",
    shortName: "Supported Living",
    acronym: "HASL",
    tagline: "Skills for everyday independence — at home and in the community.",
    intro:
      "Habilitation Supported Living (HASL) services help individuals with intellectual and developmental disabilities develop, maintain, and improve the skills needed for successful daily living in member-controlled home and community-based settings. Supports are delivered in alignment with each member's Individual Support Plan (ISP) and authorized service hours.",
    icon: HomeIcon,
    features: [
      {
        icon: Utensils,
        title: "Daily living & self-care",
        description:
          "Personal hygiene, grooming, meal preparation, nutrition, and basic food safety — built into a sustainable daily rhythm.",
      },
      {
        icon: HeartPulse,
        title: "Health & safety awareness",
        description:
          "Medication prompting (as authorized), safety supervision, and habits that protect long-term well-being.",
      },
      {
        icon: Wallet,
        title: "Budgeting & money management",
        description:
          "Practical money skills, shopping, and financial decision-making to support adult independence.",
      },
      {
        icon: Bus,
        title: "Community navigation & travel",
        description:
          "Practice and support to use transit, navigate community spaces, and engage with everyday environments.",
      },
      {
        icon: Compass,
        title: "Executive functioning",
        description:
          "Planning, organization, time management, and the routines that make adult life feel manageable.",
      },
      {
        icon: HandHeart,
        title: "Emotional regulation",
        description:
          "Coping strategies, self-awareness, and supports that help members navigate everyday stressors.",
      },
    ],
    outcomes: [
      "Increased independence in daily living and self-care",
      "Greater confidence and self-direction",
      "Stronger participation in community life",
      "Reduced reliance on prompts and supports over time",
    ],
  },
  {
    slug: "employment",
    name: "Employment Services",
    shortName: "Employment",
    tagline: "Job readiness, on-the-job coaching, and long-term workplace success.",
    intro:
      "Foundation for Independence delivers a continuum of DDD-authorized Employment Services aligned with Arizona's Employment First initiative. From early exploration to community-based employment, supports are individualized to each member's strengths, interests, and goals — and gradually fade as confidence and independence grow.",
    icon: Briefcase,
    programs: [
      {
        acronym: "STEP",
        name: "Pathways to Employment",
        summary:
          "Pre-employment supports that build the foundation for community-based work.",
        details: [
          "Exploring employment interests and strengths",
          "Understanding workplace expectations and routines",
          "Developing soft skills — communication, teamwork, professionalism",
          "Building responsibility, task completion, and dependability",
          "Practicing self-advocacy and workplace communication",
          "Travel training and community navigation related to employment",
        ],
      },
      {
        acronym: "ISE",
        name: "Individual Supported Employment",
        summary:
          "One-to-one job coaching and ongoing support in community-based employment.",
        details: [
          "On-the-job training and skill development",
          "Task modeling, task breakdown, and job-specific instruction",
          "Support with problem-solving and appropriate workplace behavior",
          "Coaching in workplace social skills and expectations",
          "Job retention, performance improvement, and growing independence",
          "Designed to fade over time as competence and stability build",
        ],
      },
      {
        acronym: "GSE",
        name: "Group Supported Employment",
        summary:
          "Small-group employment with supervision and job coaching by qualified staff.",
        details: [
          "Teamwork and cooperative work skills",
          "Productivity and work stamina",
          "Understanding workplace routines and multi-step instructions",
          "Reliability, punctuality, and time-on-task",
          "Confidence and appropriate community engagement",
          "Structured support that promotes readiness for greater independence",
        ],
      },
    ],
    features: [
      {
        icon: GraduationCap,
        title: "Job readiness & workplace skills",
        description:
          "Practical preparation for interviews, communication, and navigating workplace expectations.",
      },
      {
        icon: Target,
        title: "Employment goal planning",
        description:
          "Identify the right role and create a realistic, person-centered path to get there.",
      },
      {
        icon: ClipboardCheck,
        title: "On-the-job coaching",
        description:
          "Individualized coaching that fades over time as confidence and skills grow.",
      },
      {
        icon: Sparkles,
        title: "Alternative pathways",
        description:
          "For members exploring micro-enterprise, craft-based, or task-based work — meaningful skill-building beyond traditional roles.",
      },
      {
        icon: Compass,
        title: "Independence in work routines",
        description:
          "Self-managed schedules, transit, and task systems for sustainable workplace success.",
      },
      {
        icon: Users,
        title: "Family & employer collaboration",
        description:
          "Coordinated support across families, guardians, employers, and care teams.",
      },
    ],
    outcomes: [
      "A clear, individualized employment path",
      "Skills to obtain and keep meaningful work",
      "Greater workplace confidence and autonomy",
      "Long-term employability aligned with Employment First principles",
    ],
  },
];

export function getService(slug: ServiceSlug): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
