import {
  type LucideIcon,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Compass,
} from "lucide-react";

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: HeartHandshake,
    title: "Person-centered",
    description:
      "Every plan begins with the individual — their strengths, preferences, and goals. Independence looks different for everyone.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & respectful",
    description:
      "Reliable supports, clear communication, and a culture of dignity that families and guardians can trust.",
  },
  {
    icon: Sparkles,
    title: "Skill-building",
    description:
      "Not just supervision — practical, lasting skills that increase confidence and independence over time.",
  },
  {
    icon: Compass,
    title: "DDD & HCBS aligned",
    description:
      "Services aligned with the Arizona Division of Developmental Disabilities, AHCCCS, and Home and Community-Based Services principles.",
  },
];
