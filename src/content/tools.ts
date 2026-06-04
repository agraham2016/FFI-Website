import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  ClipboardCheck,
  ClipboardList,
  Compass,
  GitCompareArrows,
  Map,
  MapPinned,
  Quote,
  ScrollText,
  Sparkles,
  Sun,
  TrendingUp,
  Workflow,
} from "lucide-react";

export type ToolCategory =
  | "Plan"
  | "Decide"
  | "Learn"
  | "Career"
  | "Connect";

export type Tool = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  blurb: string;
  longBlurb: string;
  category: ToolCategory;
  audience: string;
  minutes: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const tools: Tool[] = [
  {
    slug: "transition-readiness",
    href: "/tools/transition-readiness",
    title: "Transition Readiness Self-Assessment",
    shortTitle: "Transition Readiness",
    blurb:
      "A 12-question check-in for families approaching the school-to-adult transition.",
    longBlurb:
      "Answer twelve short questions to see where your young adult feels confident, where supports could help, and which FFI services line up with their next steps.",
    category: "Plan",
    audience: "Families & transition-age young adults",
    minutes: "About 5 minutes",
    icon: ClipboardCheck,
    featured: true,
  },
  {
    slug: "service-fit-quiz",
    href: "/tools/service-fit-quiz",
    title: "Which FFI Service Fits?",
    shortTitle: "Service Fit Quiz",
    blurb:
      "Eight questions that help you see which FFI service — HASL, STEP, ISE, or GSE — most fits today.",
    longBlurb:
      "A short, friendly quiz that helps you understand the differences between Supported Living and the three Employment paths, and shows which one most closely matches your goals.",
    category: "Decide",
    audience: "Families, individuals, support coordinators",
    minutes: "About 3 minutes",
    icon: Compass,
    featured: true,
  },
  {
    slug: "glossary",
    href: "/tools/glossary",
    title: "DDD Acronym Decoder",
    shortTitle: "DDD Glossary",
    blurb:
      "A plain-language glossary of the acronyms and terms you'll hear from DDD, AHCCCS, and providers.",
    longBlurb:
      "Search any term — HASL, ISP, STEP, ISE, GSE, HCBS, ALTCS — and get a clear, jargon-free explanation written for families and self-advocates.",
    category: "Learn",
    audience: "Anyone new to DDD",
    minutes: "Searchable",
    icon: BookOpenText,
    featured: true,
  },
  {
    slug: "service-area-lookup",
    href: "/tools/service-area-lookup",
    title: "Service Area Lookup",
    shortTitle: "Service Area Lookup",
    blurb:
      "Enter a ZIP code or city to confirm whether FFI serves your area today.",
    longBlurb:
      "Quick check by ZIP or city across Pinal, Maricopa, Navajo, and Apache counties — plus a contact link if you live just outside our current footprint.",
    category: "Connect",
    audience: "Anyone in or near Arizona",
    minutes: "Under a minute",
    icon: MapPinned,
  },
  {
    slug: "transition-journey",
    href: "/tools/transition-journey",
    title: "Transition Journey Map",
    shortTitle: "Transition Journey",
    blurb:
      "A visual walk through the school-to-adult transition, from age 14 through ongoing adult life.",
    longBlurb:
      "See the major milestones — transition planning, age 18 decisions, DDD eligibility, ISP planning, services beginning, and continued growth — and what families typically focus on at each stage.",
    category: "Learn",
    audience: "Families starting transition planning",
    minutes: "About 4 minutes",
    icon: Map,
  },
  {
    slug: "ddd-funding-flow",
    href: "/tools/ddd-funding-flow",
    title: "DDD Funding Flowchart",
    shortTitle: "DDD Funding Flow",
    blurb:
      "How DDD eligibility, ALTCS, and HCBS funding fit together — explained step-by-step.",
    longBlurb:
      "A clear, click-through walkthrough of how Arizona's Division of Developmental Disabilities determines eligibility, how ALTCS funding flows in, and how that turns into services like HASL and STEP.",
    category: "Learn",
    audience: "Families navigating DDD for the first time",
    minutes: "About 6 minutes",
    icon: Workflow,
  },
  {
    slug: "day-in-the-life",
    href: "/tools/day-in-the-life",
    title: "A Day in the Life",
    shortTitle: "A Day in the Life",
    blurb:
      "An hour-by-hour walk through what HASL or STEP support can look like.",
    longBlurb:
      "Switch between Supported Living and STEP and see what a typical weekday with FFI support feels like — what we do together, what the individual leads, and how skills build over time.",
    category: "Learn",
    audience: "Anyone curious what services actually feel like",
    minutes: "About 4 minutes",
    icon: Sun,
  },
  {
    slug: "independence-skills",
    href: "/tools/independence-skills",
    title: "Independence Skills Inventory",
    shortTitle: "Skills Inventory",
    blurb:
      "Tag 60+ daily-life skills as independent, with prompts, or not yet — and see strengths and growth areas.",
    longBlurb:
      "A printable, save-as-you-go inventory of practical skills across personal care, home life, money, transportation, communication, and community participation. Great prep for an ISP meeting.",
    category: "Plan",
    audience: "Families & individuals",
    minutes: "About 10–15 minutes",
    icon: ClipboardList,
  },
  {
    slug: "isp-prep",
    href: "/tools/isp-prep",
    title: "ISP Prep Worksheet",
    shortTitle: "ISP Prep",
    blurb:
      "A guided worksheet to organize goals, strengths, and supports before your ISP meeting.",
    longBlurb:
      "Walk through person-centered prompts — strengths, preferences, daily routines, goals, and supports — then print or save a clean summary you can bring to your Individual Support Plan meeting.",
    category: "Plan",
    audience: "Families preparing for an ISP meeting",
    minutes: "About 15 minutes",
    icon: ScrollText,
  },
  {
    slug: "provider-comparison",
    href: "/tools/provider-comparison",
    title: "Provider Comparison Worksheet",
    shortTitle: "Provider Comparison",
    blurb:
      "A side-by-side worksheet for comparing up to three DDD-qualified providers.",
    longBlurb:
      "Choosing a provider is one of the most important decisions a family makes. Use this side-by-side worksheet to track services, communication style, training, and fit — then print or save your notes.",
    category: "Decide",
    audience: "Families interviewing providers",
    minutes: "About 10 minutes",
    icon: GitCompareArrows,
  },
  {
    slug: "dsp-fit",
    href: "/tools/dsp-fit",
    title: "DSP Fit Self-Check",
    shortTitle: "DSP Fit Check",
    blurb:
      "Ten honest, scenario-based questions to help you decide if Direct Support might be the right fit.",
    longBlurb:
      "Direct Support is meaningful work, but it isn't right for everyone. Walk through real scenarios and see whether the role aligns with your strengths and what you're looking for.",
    category: "Career",
    audience: "Anyone considering applying to FFI",
    minutes: "About 4 minutes",
    icon: ClipboardCheck,
  },
  {
    slug: "career-path",
    href: "/tools/career-path",
    title: "FFI Career Path Visualizer",
    shortTitle: "Career Path",
    blurb:
      "See how a Direct Support role can grow into specialist, lead, and management positions.",
    longBlurb:
      "An interactive map of the career paths FFI staff can grow into — from new DSP through Employment Specialist, Lead, Coordinator, and beyond — with the skills and experience that move you forward.",
    category: "Career",
    audience: "Current and future FFI team members",
    minutes: "About 3 minutes",
    icon: TrendingUp,
  },
  {
    slug: "newsletter-preview",
    href: "/tools/newsletter-preview",
    title: "Newsletter Preview",
    shortTitle: "Newsletter Preview",
    blurb:
      "See a real example of the FFI newsletter before you subscribe.",
    longBlurb:
      "A representative issue of the FFI newsletter — guides, parent stories, programs and policy updates, and Ask Alex Q&A — so you know exactly what lands in your inbox.",
    category: "Connect",
    audience: "Anyone considering subscribing",
    minutes: "About 2 minutes",
    icon: ScrollText,
  },
  {
    slug: "mission-generator",
    href: "/tools/mission-generator",
    title: "Quote Card Generator",
    shortTitle: "Quote Card",
    blurb:
      "Turn a favorite FFI guide takeaway into a branded card you can share or save.",
    longBlurb:
      "Pick from FFI's library of guide takeaways — or write your own — and generate a clean, branded card you can download or share to social media.",
    category: "Connect",
    audience: "Families, advocates, partners",
    minutes: "Under a minute",
    icon: Quote,
  },
];

export const featuredTools = tools.filter((tool) => tool.featured);

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export const toolCategories: { id: ToolCategory; title: string; description: string; icon: LucideIcon }[] = [
  {
    id: "Plan",
    title: "Plan & Prepare",
    description: "Get organized for transition, ISPs, and the road ahead.",
    icon: ClipboardList,
  },
  {
    id: "Decide",
    title: "Decide What's Next",
    description: "Compare options and figure out what fits your situation.",
    icon: Compass,
  },
  {
    id: "Learn",
    title: "Learn the System",
    description: "Plain-language explainers for DDD, ALTCS, and how it all fits together.",
    icon: BookOpenText,
  },
  {
    id: "Career",
    title: "Career & Hiring",
    description: "For anyone thinking about joining the FFI team.",
    icon: Sparkles,
  },
  {
    id: "Connect",
    title: "Connect with FFI",
    description: "See where we serve, what we send, and what we share.",
    icon: MapPinned,
  },
];
