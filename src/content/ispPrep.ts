export type IspField = {
  id: string;
  label: string;
  prompt: string;
  rows: number;
  placeholder?: string;
};

export type IspSection = {
  id: string;
  title: string;
  intro: string;
  fields: IspField[];
};

export const ispSections: IspSection[] = [
  {
    id: "person",
    title: "Who is this person?",
    intro:
      "The ISP starts with the person — not the disability. Use these fields to set the meeting's tone.",
    fields: [
      {
        id: "name",
        label: "Name",
        prompt: "Whose ISP is this?",
        rows: 1,
      },
      {
        id: "age",
        label: "Age",
        prompt: "Helpful for context, especially for transition-age planning.",
        rows: 1,
      },
      {
        id: "intro",
        label: "Intro",
        prompt:
          "If you had to introduce them in 3 sentences — without listing diagnoses — what would you say?",
        rows: 4,
        placeholder:
          "Example: Maya is a 19-year-old with a great sense of humor who loves music, dogs, and being on the go. She's funniest in the morning. She's working on living more independently while still close to family.",
      },
    ],
  },
  {
    id: "strengths",
    title: "Strengths & what's working",
    intro:
      "Plans built on strengths actually work. Be specific — what does this person do well, even on hard days?",
    fields: [
      {
        id: "strengths",
        label: "Strengths",
        prompt:
          "What does this person do really well? (Skills, traits, hobbies, ways of relating.)",
        rows: 5,
      },
      {
        id: "working",
        label: "What's working now",
        prompt:
          "What's going well in their life right now? (Routines, relationships, supports, environments.)",
        rows: 4,
      },
      {
        id: "people-who-matter",
        label: "Important people",
        prompt:
          "Who matters most to them? Who do they want at the table — or kept in the loop?",
        rows: 3,
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences & communication",
    intro:
      "How does this person want to be supported? Naming preferences out loud changes how the team shows up.",
    fields: [
      {
        id: "love",
        label: "Things they love",
        prompt:
          "Activities, foods, places, music, rituals, sensory inputs that bring joy.",
        rows: 4,
      },
      {
        id: "dislike",
        label: "Things to avoid",
        prompt:
          "What's reliably hard, frustrating, or upsetting — and how do they show it?",
        rows: 4,
      },
      {
        id: "comm",
        label: "How they communicate",
        prompt:
          "Words, AAC device, gestures, behavior. What helps you understand them best?",
        rows: 4,
      },
      {
        id: "regulation",
        label: "What helps them regulate",
        prompt:
          "When things get hard, what helps them come back to themselves?",
        rows: 4,
      },
    ],
  },
  {
    id: "daily",
    title: "Daily life — today",
    intro:
      "A quick snapshot of how a typical week looks right now. Helps the team see fit and gaps.",
    fields: [
      {
        id: "weekday",
        label: "A typical weekday",
        prompt:
          "Walk through morning, afternoon, and evening. Who's around? What are they doing?",
        rows: 5,
      },
      {
        id: "weekend",
        label: "A typical weekend",
        prompt: "What does Saturday and Sunday usually look like?",
        rows: 4,
      },
      {
        id: "current-supports",
        label: "Current supports",
        prompt:
          "Hours per week of HASL, Respite, Employment, school, day programs, family/natural supports.",
        rows: 3,
      },
    ],
  },
  {
    id: "goals",
    title: "Goals for the year",
    intro:
      "These don't need to be perfect or 'measurable' yet — name them honestly. The team will help you shape the wording.",
    fields: [
      {
        id: "big-goal",
        label: "One big-picture goal",
        prompt:
          "If you fast-forward a year, what's one thing that would make this person's life noticeably better?",
        rows: 3,
      },
      {
        id: "skill-goals",
        label: "Skill goals",
        prompt:
          "2–4 specific skills to build. (Use the Independence Skills Inventory if helpful.)",
        rows: 5,
      },
      {
        id: "social-goals",
        label: "Social & community goals",
        prompt:
          "Friendships, clubs, faith communities, employment, volunteering — what's worth pursuing?",
        rows: 4,
      },
      {
        id: "family-goal",
        label: "Family or caregiver goal",
        prompt:
          "What would make life easier or more sustainable for the people supporting them?",
        rows: 3,
      },
    ],
  },
  {
    id: "concerns",
    title: "Concerns & open questions",
    intro:
      "Bring the hard stuff to the table. The ISP is your chance to ask for what you actually need.",
    fields: [
      {
        id: "concerns",
        label: "Concerns",
        prompt:
          "Health, safety, behavior, relationships, finances — what worries you?",
        rows: 4,
      },
      {
        id: "questions",
        label: "Questions for the team",
        prompt:
          "Anything you want to ask the Support Coordinator or providers in this meeting.",
        rows: 4,
      },
      {
        id: "asks",
        label: "Specific asks",
        prompt:
          "Are you asking for new services, more hours, a provider change, an assistive technology evaluation? Name it.",
        rows: 4,
      },
    ],
  },
];
