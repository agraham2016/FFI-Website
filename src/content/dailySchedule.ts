export type ScheduleEntry = {
  time: string;
  title: string;
  body: string;
  doing: string;
  building: string;
};

export type ScheduleTrack = {
  id: "hasl" | "step";
  label: string;
  oneLine: string;
  entries: ScheduleEntry[];
};

export const scheduleTracks: ScheduleTrack[] = [
  {
    id: "hasl",
    label: "Supported Living (HASL)",
    oneLine:
      "A weekday with a young adult who lives at home and is working on personal care, household, money, and community routines.",
    entries: [
      {
        time: "8:00 AM",
        title: "DSP arrives, morning check-in",
        body: "Quick chat about how the night went, what's on the calendar today, what mood we're in. We review the schedule together — visually, on paper or phone.",
        doing: "Greeting, schedule review",
        building: "Routine, communication, predictability",
      },
      {
        time: "8:15 AM",
        title: "Personal care & breakfast",
        body: "Independent where possible, prompted where needed. Today's prompts are quieter — the morning hygiene checklist is mostly going on its own.",
        doing: "Hygiene, dressing, breakfast",
        building: "Self-care independence, sequencing",
      },
      {
        time: "9:30 AM",
        title: "Household task of the day",
        body: "Today: laundry. We sort by color, measure detergent (with the tactile measure cup), set the timer. The DSP coaches the steps that are still tricky and steps back when they aren't.",
        doing: "Laundry start-to-finish",
        building: "Household management, time awareness, sequencing",
      },
      {
        time: "10:30 AM",
        title: "Community outing",
        body: "Walk to the bus stop, swipe the Valley Metro card, ride three stops. We're practicing identifying our stop without prompts. We get off, walk to the library.",
        doing: "Transit, navigation",
        building: "Community access, safety, confidence",
      },
      {
        time: "11:15 AM",
        title: "Library time",
        body: "Choose two books, use the self-check kiosk, follow library rules. Independent participation, with the DSP nearby for support if needed.",
        doing: "Library visit, self-check",
        building: "Community participation, decision-making",
      },
      {
        time: "12:30 PM",
        title: "Lunch & money",
        body: "Walk to a familiar lunch spot. Order independently — we've practiced. Use the debit card. Check the change. Add up what we've spent this week against the budget.",
        doing: "Ordering, paying, budgeting",
        building: "Money skills, real-world communication",
      },
      {
        time: "2:00 PM",
        title: "Quiet time at home",
        body: "Down time matters. Today: 30 minutes of preferred activity (drawing). DSP nearby but not directing.",
        doing: "Self-directed downtime",
        building: "Self-regulation, autonomy",
      },
      {
        time: "2:45 PM",
        title: "ISP goal practice: scheduling",
        body: "We open the calendar and schedule next Tuesday's dentist appointment. We send a text to mom about it — using the visual template we built together.",
        doing: "Calendar use, written communication",
        building: "Self-management, executive function",
      },
      {
        time: "3:30 PM",
        title: "Wrap-up & shift change",
        body: "Brief reflection — what went well, what was hard. The DSP logs notes, syncs with the family on the day, and heads out.",
        doing: "Reflection, day notes",
        building: "Self-awareness, reflection",
      },
    ],
  },
  {
    id: "step",
    label: "STEP (Pre-employment)",
    oneLine:
      "A weekday with a young adult preparing for community employment — building soft skills, practicing real workplace tasks, and exploring fit.",
    entries: [
      {
        time: "9:00 AM",
        title: "Arrive & morning huddle",
        body: "Job coach and individual review the day's plan. We're working on three things this week: arriving on time, communicating with a supervisor, and managing breaks.",
        doing: "Schedule review, goal setting",
        building: "Professional habits, self-direction",
      },
      {
        time: "9:15 AM",
        title: "Practice scenario: greeting a supervisor",
        body: "Role-play: arriving at a job site, greeting your supervisor, asking what's first. We do it twice and talk about what felt natural.",
        doing: "Role-play and feedback",
        building: "Workplace communication",
      },
      {
        time: "10:00 AM",
        title: "Job-site exploration",
        body: "Today: a 90-minute visit to a local cafe partner. The job coach introduces us, we observe how the team works, and the individual tries one task — wiping tables — with coaching.",
        doing: "On-site observation, practice task",
        building: "Job-fit understanding, real-world stamina",
      },
      {
        time: "11:30 AM",
        title: "Reflect: was that a fit?",
        body: "Back at the office. We talk about what felt good, what was hard, and what surprised us. Notes go into the discovery profile to inform job choice down the road.",
        doing: "Reflection conversation",
        building: "Self-awareness, decision-making",
      },
      {
        time: "12:00 PM",
        title: "Lunch & break management",
        body: "Practice: setting a 30-minute lunch timer, stepping away, returning on time. Casual conversation as part of the break — workplace social.",
        doing: "Lunch routine",
        building: "Time management, workplace social",
      },
      {
        time: "1:00 PM",
        title: "Soft-skills group session",
        body: "A small-group session on accepting feedback. Today's scenario: a supervisor points out a missed step. How do you respond? We practice three responses.",
        doing: "Group skill-building",
        building: "Receiving feedback, problem-solving",
      },
      {
        time: "2:00 PM",
        title: "Resume & paperwork practice",
        body: "We update the working resume with today's site visit. We practice filling out a sample W-4 and direct-deposit form, slowly, step by step.",
        doing: "Career paperwork practice",
        building: "Workplace literacy, independence",
      },
      {
        time: "2:45 PM",
        title: "Goal check-in",
        body: "Quick scoring on this week's three goals: on-time? supervisor greeting? break management? Two out of three today. We talk about what tomorrow looks like.",
        doing: "Self-rating, goal review",
        building: "Self-monitoring, growth mindset",
      },
      {
        time: "3:00 PM",
        title: "Wrap-up & ride share",
        body: "Job coach syncs notes, confirms tomorrow's plan, walks the individual to their pickup or transit stop.",
        doing: "Day close",
        building: "Routine, self-direction",
      },
    ],
  },
];
