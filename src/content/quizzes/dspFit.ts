import type { Quiz, QuizResultCard } from "@/components/tools/quiz/types";

const score = (n: number) => ({ fit: n });

export const dspFitQuiz: Quiz = {
  id: "dsp-fit",
  questions: [
    {
      id: "experience",
      prompt:
        "FFI requires at least two years of experience supporting a person with disabilities — paid or personal. How much do you have?",
      helper:
        "This includes raising or caring for a sibling/child, school or volunteer work, or a paid role.",
      options: [
        { id: "less", label: "Less than 2 years.", scores: score(0) },
        { id: "two-three", label: "2–3 years.", scores: score(2) },
        { id: "three-five", label: "3–5 years.", scores: score(3) },
        { id: "five-plus", label: "5+ years.", scores: score(3) },
      ],
    },
    {
      id: "patience",
      prompt:
        "How do you usually feel after a long day with someone who learns slowly?",
      options: [
        { id: "drained-frustrated", label: "Often drained and frustrated.", scores: score(0) },
        { id: "tired-ok", label: "Tired, but okay.", scores: score(2) },
        { id: "satisfied", label: "Energized — small wins really mean something to me.", scores: score(3) },
        { id: "depends", label: "Depends a lot on the person and the day.", scores: score(1) },
      ],
    },
    {
      id: "scenario-meltdown",
      prompt:
        "An adult you support has a meltdown in a grocery store. What's your gut reaction?",
      options: [
        { id: "shut-down", label: "I'd freeze or get embarrassed.", scores: score(0) },
        { id: "control", label: "I'd try to take charge and get them out fast.", scores: score(1) },
        { id: "calm", label: "I'd stay calm, lower my voice, and follow their lead while keeping us safe.", scores: score(3) },
        { id: "disengage", label: "I'd step back and wait it out.", scores: score(2) },
      ],
    },
    {
      id: "scenario-no",
      prompt:
        "Someone you support says no to something on their plan today. You think you know what's best. What do you do?",
      options: [
        { id: "push", label: "Push gently — they need to follow the plan.", scores: score(1) },
        { id: "respect", label: "Respect the no, find out what's behind it, and offer a real choice.", scores: score(3) },
        { id: "give-up", label: "Drop it and do something easier.", scores: score(0) },
        { id: "ask-family", label: "Call the family or supervisor for direction.", scores: score(2) },
      ],
    },
    {
      id: "feedback",
      prompt: "How do you usually respond to feedback from a supervisor?",
      options: [
        { id: "defensive", label: "I get defensive — I usually have a reason.", scores: score(0) },
        { id: "ok", label: "I take it, but I move on quickly.", scores: score(2) },
        { id: "thoughtful", label: "I try to actually use it. Feedback helps me get better.", scores: score(3) },
        { id: "anxious", label: "I get anxious and overthink it.", scores: score(1) },
      ],
    },
    {
      id: "reliability",
      prompt: "What's your honest track record with showing up on time?",
      options: [
        { id: "rough", label: "I'm late more often than I'd like.", scores: score(0) },
        { id: "okay", label: "Mostly on time, occasionally late.", scores: score(1) },
        { id: "reliable", label: "Very reliable — I treat my schedule as a promise.", scores: score(3) },
      ],
    },
    {
      id: "boundaries",
      prompt:
        "An adult you support starts texting you on your days off. How would you handle it?",
      options: [
        { id: "always-respond", label: "Always respond — I want to be supportive.", scores: score(0) },
        { id: "ignore", label: "Ignore — I'm off the clock.", scores: score(1) },
        { id: "redirect", label: "Set a kind boundary, redirect to the on-call team, and follow up at work.", scores: score(3) },
      ],
    },
    {
      id: "values",
      prompt: "Which sentence sounds most like you?",
      options: [
        { id: "fix", label: "I get a lot of meaning from helping people who need help.", scores: score(2) },
        { id: "potential", label: "I believe everyone has potential and I love helping people grow into it.", scores: score(3) },
        { id: "good-pay", label: "I'm mostly here for steady, meaningful work.", scores: score(1) },
        { id: "not-sure", label: "I'm honestly still figuring out what I want.", scores: score(1) },
      ],
    },
    {
      id: "physical",
      prompt: "How do you feel about the physical side of the work?",
      helper:
        "This can include walking long distances, light lifting, helping with mobility, and being on your feet.",
      options: [
        { id: "no-go", label: "Hard pass — I can't be active at work.", scores: score(0) },
        { id: "limited", label: "Some active work is fine; nothing strenuous.", scores: score(1) },
        { id: "fine", label: "I'm comfortable being active and helping when needed.", scores: score(3) },
      ],
    },
    {
      id: "long-game",
      prompt: "How long would you ideally stay in a DSP role?",
      options: [
        { id: "few-months", label: "Just a few months — I need a stopgap.", scores: score(0) },
        { id: "year", label: "Probably about a year.", scores: score(1) },
        { id: "long", label: "Long enough to really build relationships — at least a couple of years.", scores: score(3) },
        { id: "career", label: "I see this as a career, possibly growing into other roles.", scores: score(3) },
      ],
    },
  ],
  computeResult: (scores) => {
    const total = scores.fit ?? 0;
    if (total >= 24) return tiers.strong(total);
    if (total >= 16) return tiers.solid(total);
    if (total >= 8) return tiers.maybe(total);
    return tiers.notRight(total);
  },
};

const tiers = {
  strong: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 30`,
    title: "Strong fit — we'd love to talk.",
    body: "The instincts you described are the heart of FFI's work — patience, respect for autonomy, calm under pressure, and a long view. If you're seriously considering Direct Support, this is a great next step.",
    highlights: [
      "You meet our 2-year experience requirement (or close to it).",
      "Your gut on tough scenarios lines up with how we coach our team.",
      "You treat reliability as part of the job — not optional.",
    ],
    next: [
      { label: "Apply to FFI", href: "/careers" },
      { label: "Read about our roles", href: "/careers#roles" },
    ],
  }),
  solid: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 30`,
    title: "Solid foundation — worth a conversation.",
    body: "You have real strengths for this work, with a few areas worth thinking through honestly before applying. Direct Support is meaningful and demanding — being clear-eyed about both is a good sign.",
    highlights: [
      "Reflect on the scenarios where your gut surprised you.",
      "If experience is the gap, ramp up volunteering or family caregiving first.",
      "Read FFI's guides on self-advocacy and daily routines to see how we think.",
    ],
    next: [
      { label: "Read more about FFI", href: "/about" },
      { label: "Apply to FFI", href: "/careers" },
    ],
  }),
  maybe: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 30`,
    title: "Maybe — but slow down a bit.",
    body: "Some answers point in a great direction; others suggest the day-to-day reality of DSP work could wear on you. Take a beat before applying — being honest now saves everyone heartache later.",
    highlights: [
      "If you don't yet have 2+ years of experience, build that first.",
      "Look hard at the questions where you scored low — those are real.",
      "Talk to a current DSP (we can connect you) before deciding.",
    ],
    next: [
      { label: "Talk with our team", href: "/contact" },
      { label: "Read about our values", href: "/about" },
    ],
  }),
  notRight: (total: number): QuizResultCard => ({
    eyebrow: `Score: ${total} of 30`,
    title: "Probably not the right role today.",
    body: "Direct Support is meaningful work — but not for everyone, and not at every season of life. The honest answers you gave suggest other roles might be a better fit right now. That's not a no forever — just a thoughtful no for now.",
    highlights: [
      "Many DSPs we hire have raised, taught, or supported a person with disabilities for years before applying. That experience matters.",
      "If you're called to this work later, come back. We'll still be here.",
    ],
    next: [
      { label: "Learn more about FFI", href: "/about" },
    ],
  }),
};
