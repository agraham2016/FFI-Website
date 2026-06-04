import { Compass } from "lucide-react";
import type { Course } from "./types";

export const findingTheRightJob: Course = {
  slug: "finding-the-right-job",
  track: "employment",
  title: "Finding the Right Job",
  shortTitle: "Finding a Job",
  level: "Start here",
  icon: Compass,
  description:
    "Figure out your strengths and interests, learn about different kinds of jobs, and find openings that fit you — the first step toward work you enjoy.",
  intro:
    "A good job fits who you are — your strengths, your interests, and what you need. This course helps you learn about yourself and find jobs that match. It's the first step in getting ready for work. Go at your own pace.",
  audience: "Young adults getting ready to look for their first or next job.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Name your strengths, interests, and needs.",
    "Learn about different kinds of jobs and workplaces.",
    "Understand what 'a good fit' means for you.",
    "Find job openings using simple, safe steps.",
    "Know where to get help with your job search.",
  ],
  modules: [
    {
      title: "Know Yourself",
      summary: "Find your strengths and what you want in a job.",
      lessons: [
        {
          slug: "your-strengths-and-interests",
          title: "Your Strengths and Interests",
          minutes: "5 min",
          summary: "Notice what you're good at and what you enjoy.",
          intro:
            "The best job for you uses your strengths and matches your interests. Before you look for a job, it helps to look at yourself. Everyone has strengths.",
          objectives: [
            "Name some of your strengths.",
            "Name some of your interests.",
          ],
          sections: [
            {
              heading: "What are strengths?",
              paragraphs: [
                "Strengths are things you're good at. They can be skills, like using a computer, or qualities, like being patient or careful.",
              ],
              bullets: [
                { label: "Skills.", body: "Things you've learned — cooking, sorting, cleaning, drawing, math." },
                { label: "Qualities.", body: "How you are — kind, on time, focused, honest, calm." },
              ],
            },
            {
              heading: "Many autistic people have real strengths at work",
              checklist: [
                "Noticing details others miss.",
                "Following steps carefully and correctly.",
                "Being honest and reliable.",
                "Focusing deeply on a task you enjoy.",
                "Doing the same task well, again and again.",
              ],
            },
            {
              heading: "What do you enjoy?",
              paragraphs: [
                "Think about what you like to do. Do you like to be busy or calm? Alone or with people? Inside or outside? With your hands, with words, or with numbers?",
                "Your answers point toward jobs you might like.",
              ],
              callout: {
                title: "Try this",
                body: "Make two short lists: 'Things I'm good at' and 'Things I enjoy.' Ask someone who knows you well to help. Keep the lists — you'll use them when you look for jobs.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Help the learner build a concrete strengths inventory, framing autistic traits (attention to detail, reliability, focus) as genuine workplace assets. Pair self-reflection with input from someone who knows them, since self-assessment can be hard.",
          check: [
            {
              prompt: "Which of these could be a strength at work?",
              options: [
                { id: "a", label: "Noticing details and being reliable.", correct: true },
                { id: "b", label: "Nothing — only some people have strengths." },
                { id: "c", label: "Being late every day." },
              ],
              explanation:
                "Everyone has strengths. They can be skills (like using a computer) or qualities (like being careful, honest, or focused). Knowing yours helps you find a good job.",
            },
          ],
        },
        {
          slug: "what-is-a-good-fit",
          title: "What Makes a Job a Good Fit",
          minutes: "5 min",
          summary: "Think about the conditions you need to do your best.",
          intro:
            "A job is a good fit when it works with your strengths and your needs. The same job can be great for one person and hard for another. Knowing what you need helps you choose well.",
          objectives: [
            "List things you need to do your best at work.",
            "Understand that fit is different for everyone.",
          ],
          sections: [
            {
              heading: "Things to think about",
              bullets: [
                { label: "Place.", body: "Quiet or busy? Inside or outside? Bright lights or calm?" },
                { label: "People.", body: "Working alone, on a team, or with customers?" },
                { label: "Tasks.", body: "The same task each day, or lots of change?" },
                { label: "Time.", body: "Mornings, nights, weekends? Part-time or full-time?" },
              ],
            },
            {
              heading: "Your sensory needs count",
              paragraphs: [
                "Some jobs are loud, bright, or full of strong smells. If those things bother you, it's smart to look for jobs that feel comfortable, or ask about changes that would help.",
              ],
              callout: {
                title: "Sensory tip",
                body: "It's okay to want a calm workplace. Stores at quiet hours, stockrooms, offices, libraries, or outdoor jobs can be good fits. You can also ask for things like headphones later on.",
                tone: "info",
              },
            },
            {
              heading: "There's no perfect job",
              paragraphs: [
                "Most jobs have parts you like and parts you don't. A good fit means the good parts are bigger than the hard parts, and you can handle the rest.",
              ],
            },
          ],
          supporterNote:
            "Guide a person-centered look at environmental and sensory fit, not just job title. Matching work conditions to the individual's needs is one of the biggest predictors of job success and retention for autistic employees.",
          check: [
            {
              prompt: "What does 'a good fit' mean for a job?",
              options: [
                { id: "a", label: "It works with your strengths and your needs.", correct: true },
                { id: "b", label: "It is the exact same job everyone else has." },
                { id: "c", label: "It has zero parts you dislike." },
              ],
              explanation:
                "A good fit matches your strengths and needs — the place, the people, the tasks, and the schedule. Almost every job has some hard parts; fit means the good outweighs them.",
            },
          ],
        },
      ],
    },
    {
      title: "Finding Openings",
      summary: "Where jobs are posted and how to search safely.",
      lessons: [
        {
          slug: "kinds-of-jobs",
          title: "Learning About Different Jobs",
          minutes: "5 min",
          summary: "Explore the many kinds of work out there.",
          intro:
            "There are more kinds of jobs than most people realize. Learning what's out there helps you spot ones that match your strengths and interests.",
          objectives: [
            "Name several kinds of jobs.",
            "Connect job types to your interests.",
          ],
          sections: [
            {
              heading: "Some common job areas",
              bullets: [
                { label: "Stores.", body: "Stocking shelves, organizing, cashier, greeting customers." },
                { label: "Food.", body: "Prep, dishwashing, packing orders, cleaning." },
                { label: "Offices.", body: "Filing, data entry, sorting mail, scanning." },
                { label: "Outdoors.", body: "Landscaping, animal care, deliveries, warehouse work." },
                { label: "Helping.", body: "Cleaning, library help, assisting at programs." },
              ],
            },
            {
              heading: "Match jobs to you",
              paragraphs: [
                "Look back at your strengths and interests. If you like being calm and careful, a stockroom or office task might fit. If you like being active, an outdoor or warehouse job might fit.",
              ],
              callout: {
                title: "Learn more",
                body: "You can watch short videos online about 'a day in the life' of different jobs. Seeing the real work helps you know if it appeals to you.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Expose the learner to a broad range of roles, including behind-the-scenes jobs that may suit those who prefer lower social demand. 'Day in the life' videos and job tours make abstract job titles concrete.",
          check: [
            {
              prompt: "How can you pick job types worth exploring?",
              options: [
                { id: "a", label: "Match them to your strengths and interests.", correct: true },
                { id: "b", label: "Pick the job you would dislike the most." },
                { id: "c", label: "Only choose jobs you've never heard of." },
              ],
              explanation:
                "Use your strengths and interests as a guide. If you like calm, careful work, look at stockroom or office tasks; if you like being active, look at outdoor or warehouse jobs.",
            },
          ],
        },
        {
          slug: "where-to-look",
          title: "Where to Look and Getting Help",
          minutes: "5 min",
          summary: "Find openings safely and use job support services.",
          intro:
            "Once you know what you want, it's time to find openings. There are safe, simple places to look — and people whose job is to help you.",
          objectives: [
            "Name a few places to find job openings.",
            "Know where to get help with your search.",
          ],
          sections: [
            {
              heading: "Where jobs are posted",
              checklist: [
                "Job websites (like Indeed) and company websites.",
                "'Help wanted' signs in store windows.",
                "People you know — family, friends, neighbors.",
                "Job support programs and job coaches.",
              ],
            },
            {
              heading: "Get help — you don't have to do this alone",
              paragraphs: [
                "A job coach or employment program can help you find jobs, apply, and even practice for interviews. They can also explain your rights and supports at work.",
              ],
              callout: {
                title: "FFI can help",
                body: "Our Employment Services help people find and keep jobs that fit them. A job coach can support you every step of the way — from searching to your first day and beyond.",
                tone: "info",
              },
            },
            {
              heading: "Stay safe online",
              bullets: [
                { label: "Real jobs don't charge you.", body: "If a 'job' asks you to pay money to start, it's likely a scam." },
                { label: "Protect your info.", body: "Don't share your bank info or Social Security number until you're truly hired." },
                { label: "Ask if unsure.", body: "Check with a trusted person before sharing personal details." },
              ],
            },
          ],
          supporterNote:
            "Introduce vocational rehab, supported employment, and job coaching as central resources. Teach scam-awareness explicitly (no legitimate employer charges fees or needs banking details up front). Connect to FFI's Employment Services where appropriate.",
          check: [
            {
              prompt: "A job posting asks you to pay money before you can start. What does this likely mean?",
              options: [
                { id: "a", label: "It's probably a scam — real jobs don't charge you.", correct: true },
                { id: "b", label: "It means it's a great job." },
                { id: "c", label: "You should send the money quickly." },
              ],
              explanation:
                "Real employers pay you — they don't charge you to start. Never pay money or share bank details to get a job. Ask a trusted person or a job coach if you're unsure.",
            },
          ],
        },
      ],
    },
  ],
};
