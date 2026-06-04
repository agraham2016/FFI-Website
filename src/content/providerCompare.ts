export type CompareRow = {
  id: string;
  label: string;
  hint?: string;
  rows?: number;
};

export type CompareGroup = {
  id: string;
  title: string;
  description?: string;
  rows: CompareRow[];
};

export const compareGroups: CompareGroup[] = [
  {
    id: "basics",
    title: "Basics",
    rows: [
      { id: "name", label: "Provider name", rows: 1 },
      { id: "contact", label: "Primary contact + phone/email", rows: 2 },
      { id: "founded", label: "How long they've been a DDD provider", rows: 1 },
    ],
  },
  {
    id: "services",
    title: "Services offered",
    description: "Make sure they offer the specific service authorizations on the ISP.",
    rows: [
      { id: "hasl", label: "Supported Living (HASL)", rows: 2 },
      { id: "respite", label: "Respite", rows: 2 },
      { id: "step", label: "Pre-employment (STEP)", rows: 2 },
      { id: "ise-gse", label: "Supported Employment (ISE / GSE)", rows: 2 },
    ],
  },
  {
    id: "people",
    title: "People & training",
    description: "Who delivers the supports, and how are they prepared?",
    rows: [
      { id: "staff-experience", label: "Average DSP / coach experience", rows: 2 },
      {
        id: "training",
        label: "Required training (Article 9, CPR, role-specific, behavioral)",
        rows: 3,
      },
      {
        id: "ratio",
        label: "Coach-to-individual ratio (group services)",
        rows: 2,
      },
      {
        id: "consistency",
        label: "How often do staff change?",
        rows: 2,
      },
    ],
  },
  {
    id: "approach",
    title: "Approach & values",
    description: "The why behind the work matters.",
    rows: [
      {
        id: "person-centered",
        label: "How they describe person-centered planning",
        rows: 3,
      },
      {
        id: "behavior",
        label: "Behavior-support philosophy",
        rows: 3,
      },
      {
        id: "family-role",
        label: "How families are involved",
        rows: 2,
      },
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    description: "The day-to-day mechanics.",
    rows: [
      {
        id: "scheduling",
        label: "How scheduling works (regular cadence, changes, last-minute)",
        rows: 3,
      },
      {
        id: "communication",
        label: "How families get updates (notes, app, calls)",
        rows: 2,
      },
      {
        id: "emergency",
        label: "On-call / emergency protocol",
        rows: 2,
      },
      {
        id: "transportation",
        label: "Transportation (provider drives? family does?)",
        rows: 2,
      },
    ],
  },
  {
    id: "fit",
    title: "Your gut",
    description: "Sometimes the right answer isn't on a checklist.",
    rows: [
      {
        id: "first-impression",
        label: "First impression of the team",
        rows: 3,
      },
      {
        id: "trust",
        label: "Would you trust them with your loved one?",
        rows: 3,
      },
      {
        id: "concerns",
        label: "Concerns or red flags",
        rows: 3,
      },
    ],
  },
];

export const interviewQuestions: { theme: string; questions: string[] }[] = [
  {
    theme: "About the work",
    questions: [
      "Walk me through a typical day with someone you support.",
      "How do you measure progress on ISP goals?",
      "What's a time something didn't go well, and how did you handle it?",
      "How do you support someone whose behavior puts them or others at risk?",
    ],
  },
  {
    theme: "About the people",
    questions: [
      "How do you hire DSPs? What do you screen for?",
      "What training is required before someone works with my loved one?",
      "How do you keep your team — and what's your turnover like?",
      "Will the same DSP support my loved one consistently?",
    ],
  },
  {
    theme: "About working together",
    questions: [
      "How will I know what's happening day-to-day?",
      "How quickly do you respond to questions or concerns?",
      "How do you handle disagreements with families?",
      "What would you need from me to do your best work?",
    ],
  },
  {
    theme: "About the future",
    questions: [
      "How do you think about an individual becoming more independent over time?",
      "When have you helped someone move from group support to individual?",
      "What would prompt you to recommend a different provider?",
    ],
  },
];
