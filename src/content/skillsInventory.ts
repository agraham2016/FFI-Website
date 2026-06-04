export type Skill = { id: string; label: string };

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Daily hygiene, grooming, and self-care.",
    skills: [
      { id: "shower", label: "Showers or bathes independently" },
      { id: "teeth", label: "Brushes teeth twice a day" },
      { id: "deodorant", label: "Uses deodorant daily" },
      { id: "hair", label: "Washes and combs hair" },
      { id: "shave-trim", label: "Shaves or trims facial hair" },
      { id: "menstrual", label: "Manages menstrual care (if applicable)" },
      { id: "nails", label: "Trims/files nails" },
      { id: "dress-weather", label: "Dresses appropriately for the weather" },
      { id: "dress-occasion", label: "Dresses appropriately for the occasion" },
      { id: "meds", label: "Takes prescribed medications on schedule" },
    ],
  },
  {
    id: "home-life",
    title: "Home & Household",
    description: "Keeping a living space clean, safe, and functional.",
    skills: [
      { id: "bed", label: "Makes the bed" },
      { id: "laundry", label: "Does laundry start to finish" },
      { id: "dishes", label: "Washes dishes or runs the dishwasher" },
      { id: "vacuum", label: "Vacuums or sweeps" },
      { id: "trash", label: "Takes out the trash and recycling" },
      { id: "bathroom-clean", label: "Cleans the bathroom" },
      { id: "groceries-list", label: "Builds a grocery list" },
      { id: "groceries-store", label: "Shops for groceries (with or without help)" },
      { id: "meal-snack", label: "Prepares a snack independently" },
      { id: "meal-cook", label: "Prepares a hot meal (stovetop or oven)" },
      { id: "kitchen-safety", label: "Practices kitchen safety (sharp tools, hot surfaces)" },
      { id: "appliances", label: "Uses common appliances safely (microwave, washer)" },
    ],
  },
  {
    id: "money",
    title: "Money & Banking",
    description: "Budgeting, paying, and managing money.",
    skills: [
      { id: "cash", label: "Identifies coins and bills" },
      { id: "make-change", label: "Counts change correctly" },
      { id: "budget", label: "Keeps a simple weekly budget" },
      { id: "debit", label: "Uses a debit card to pay" },
      { id: "atm", label: "Uses an ATM with support" },
      { id: "savings", label: "Saves for a goal" },
      { id: "bills", label: "Recognizes a bill and asks for help paying it" },
      { id: "scams", label: "Recognizes common scams or pressure" },
    ],
  },
  {
    id: "transportation",
    title: "Transportation & Community",
    description: "Getting around safely and confidently.",
    skills: [
      { id: "walk-route", label: "Walks a familiar route safely" },
      { id: "crossing", label: "Crosses streets and uses crosswalks" },
      { id: "bus", label: "Uses public transit (city bus, light rail)" },
      { id: "rideshare", label: "Calls or schedules a ride (Uber, Lyft, paratransit)" },
      { id: "directions", label: "Asks for or follows directions" },
      { id: "phone-help", label: "Knows when and how to call for help" },
      { id: "id", label: "Carries personal ID" },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    description: "Expressing needs, listening, and connecting.",
    skills: [
      { id: "request", label: "Asks for what they need clearly" },
      { id: "decline", label: "Says no when they want to" },
      { id: "phone-call", label: "Makes a phone call (or video call) to a familiar person" },
      { id: "text", label: "Sends and reads simple text messages" },
      { id: "appt", label: "Speaks up in a doctor or dentist appointment" },
      { id: "feedback", label: "Receives feedback without shutting down" },
      { id: "small-talk", label: "Engages in casual conversation" },
    ],
  },
  {
    id: "self-advocacy",
    title: "Self-Advocacy",
    description: "Knowing yourself, your rights, and your voice.",
    skills: [
      { id: "name-needs", label: "Names personal strengths and needs" },
      { id: "accommodations", label: "Asks for accommodations when needed" },
      { id: "boundaries", label: "Sets and maintains personal boundaries" },
      { id: "ask-help", label: "Asks for help and accepts it" },
      { id: "report-discomfort", label: "Reports discomfort or harm to a trusted adult" },
      { id: "rights", label: "Names a few of their rights as a person with a disability" },
    ],
  },
  {
    id: "work",
    title: "Work Readiness",
    description: "Habits and skills that translate to a real job.",
    skills: [
      { id: "schedule", label: "Follows a daily schedule" },
      { id: "ontime", label: "Arrives on time" },
      { id: "focus", label: "Stays focused on a task for 20+ minutes" },
      { id: "feedback-work", label: "Accepts a supervisor's feedback" },
      { id: "task-list", label: "Completes a multi-step task list" },
      { id: "professional", label: "Dresses for a workplace" },
      { id: "interview", label: "Comfortable answering basic interview questions" },
    ],
  },
  {
    id: "social-leisure",
    title: "Social & Leisure",
    description: "Friendships, fun, and a meaningful life outside of supports.",
    skills: [
      { id: "hobby", label: "Has at least one regular hobby" },
      { id: "friend", label: "Spends time with a friend or peer" },
      { id: "club", label: "Participates in a club or community group" },
      { id: "tech-safe", label: "Uses social media or messaging safely" },
      { id: "boredom", label: "Knows what to do when bored" },
      { id: "preferences", label: "Knows and shares personal preferences" },
    ],
  },
];

export type SkillStatus = "independent" | "with-prompts" | "not-yet";

export const skillStatusLabels: Record<SkillStatus, { label: string; short: string }> = {
  independent: { label: "Does this independently", short: "Independent" },
  "with-prompts": { label: "Does this with prompts or support", short: "With prompts" },
  "not-yet": { label: "Not yet — a growth area", short: "Not yet" },
};
