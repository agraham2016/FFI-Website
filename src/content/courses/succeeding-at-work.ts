import { BadgeCheck } from "lucide-react";
import type { Course } from "./types";

export const succeedingAtWork: Course = {
  slug: "succeeding-at-work",
  track: "employment",
  title: "Succeeding at Work",
  shortTitle: "At Work",
  level: "Core skills",
  icon: BadgeCheck,
  description:
    "Once you're hired, keep your job and grow. Learn workplace behavior, how to finish tasks, how to talk with coworkers and bosses, and how to handle feedback.",
  intro:
    "Getting a job is a big win. Keeping it and doing well is the next step. This course covers how to act at work, how to finish your tasks, and how to get along with coworkers and managers. Go at your own pace.",
  audience: "Young adults starting a new job or wanting to do well at work.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Know the basics of good workplace behavior.",
    "Communicate with coworkers and managers.",
    "Understand and complete your tasks.",
    "Handle feedback and fix mistakes calmly.",
    "Ask for help and supports when you need them.",
  ],
  modules: [
    {
      title: "Being a Good Worker",
      summary: "Show up right and get along with people at work.",
      lessons: [
        {
          slug: "workplace-behavior",
          title: "How to Act at Work",
          minutes: "5 min",
          summary: "The basics that make you a reliable, valued worker.",
          intro:
            "Every workplace has rules — some are written down, and some are just expected. Learning them helps you fit in and keep your job. Most come down to being reliable and respectful.",
          objectives: [
            "Name key workplace behaviors.",
            "Understand written and unwritten rules.",
          ],
          sections: [
            {
              heading: "The basics that matter most",
              checklist: [
                "Show up on time, every shift.",
                "Call ahead if you're sick or running late.",
                "Follow the dress code and safety rules.",
                "Put your phone away during work time.",
                "Treat coworkers and customers with respect.",
              ],
            },
            {
              heading: "Written and unwritten rules",
              paragraphs: [
                "Written rules are in a handbook or posted on a wall. Unwritten rules are things people just expect, like cleaning up after yourself or not interrupting.",
                "If you're not sure about a rule, it's okay to ask your boss or a coworker. Asking shows you care about doing well.",
              ],
              callout: {
                title: "It's okay to ask",
                body: "Unwritten rules can be confusing — you're not the only one. Asking, 'What's the normal way to do this here?' is smart, not silly.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Make hidden workplace norms explicit, since unwritten 'social rules' are a common barrier for autistic employees. Encourage clarifying questions and, where possible, a workplace mentor or job coach who can decode expectations.",
          check: [
            {
              prompt: "What should you do if you're going to be late or sick?",
              options: [
                { id: "a", label: "Call ahead and let your boss know.", correct: true },
                { id: "b", label: "Just don't show up and say nothing." },
                { id: "c", label: "Wait a week, then explain." },
              ],
              explanation:
                "Calling ahead when you're late or sick shows you're reliable and respectful. Being on time, following rules, and treating people well are the basics that keep a job.",
            },
          ],
        },
        {
          slug: "talking-with-coworkers-and-bosses",
          title: "Talking with Coworkers and Bosses",
          minutes: "6 min",
          summary: "Communicate clearly and professionally at work.",
          intro:
            "Work goes better when you can talk with the people around you. You talk a little differently with a boss than with a friend. Here's how to keep it clear and friendly.",
          objectives: [
            "Communicate politely with coworkers.",
            "Know how and when to talk to your manager.",
          ],
          sections: [
            {
              heading: "With coworkers",
              bullets: [
                { label: "Be friendly.", body: "Say good morning, use names, and be polite." },
                { label: "Stay on task.", body: "A little chatting is fine, but get your work done." },
                { label: "Be kind.", body: "Help out and say thank you. Don't gossip or put people down." },
              ],
            },
            {
              heading: "With your manager",
              bullets: [
                { label: "Be respectful.", body: "Listen, and follow their directions." },
                { label: "Speak up early.", body: "If there's a problem, tell them before it gets big." },
                { label: "Pick a good time.", body: "For a longer talk, ask, 'Is now a good time?'" },
              ],
              callout: {
                title: "Clear is kind",
                body: "It's okay to say things directly, like 'I finished the boxes. What's next?' Clear, honest words help everyone. You don't have to guess at hidden meanings.",
                tone: "info",
              },
            },
            {
              heading: "When you don't understand",
              paragraphs: [
                "If a direction is confusing, ask for it to be repeated or written down. Saying 'Can you show me?' is a great way to learn. It's better to ask than to guess wrong.",
              ],
            },
          ],
          supporterNote:
            "Differentiate register (peer vs. supervisor) explicitly. Validate direct communication and the right to request written instructions or demonstrations. Encourage raising issues early rather than masking confusion until it escalates.",
          check: [
            {
              prompt: "A direction from your boss is confusing. What's the best move?",
              options: [
                { id: "a", label: "Ask them to repeat it, write it down, or show you.", correct: true },
                { id: "b", label: "Guess and hope you got it right." },
                { id: "c", label: "Ignore it completely." },
              ],
              explanation:
                "Asking for a direction to be repeated, written down, or shown is smart — it helps you do the task right. Clear, honest communication is valued at work.",
            },
          ],
        },
      ],
    },
    {
      title: "Doing Great Work",
      summary: "Finish tasks well, handle feedback, and get support.",
      lessons: [
        {
          slug: "completing-tasks",
          title: "Understanding and Finishing Tasks",
          minutes: "6 min",
          summary: "Make sure you know the job and get it done.",
          intro:
            "Doing a task well starts with understanding it. Then you work through it step by step and check it before you say you're done. These habits make you a strong worker.",
          objectives: [
            "Make sure you understand a task before starting.",
            "Work through tasks and check your work.",
          ],
          sections: [
            {
              heading: "Before you start",
              checklist: [
                "Listen to or read the whole task first.",
                "Repeat it back: 'So I need to… is that right?'",
                "Ask what 'done' looks like.",
                "Ask when it needs to be finished.",
              ],
            },
            {
              heading: "While you work",
              bullets: [
                { label: "One step at a time.", body: "Break big tasks into smaller steps." },
                { label: "Use a checklist.", body: "Check off steps as you finish them." },
                { label: "Stay focused.", body: "Put your phone away and work through it." },
              ],
              callout: {
                title: "Helpful tip",
                body: "Writing the steps down or asking for a checklist isn't a weakness — lots of great workers use lists. It helps you remember and proves the job is done right.",
                tone: "tip",
              },
            },
            {
              heading: "Before you say you're done",
              paragraphs: [
                "Check your work against what was asked. Did you finish every step? If yes, tell your boss and ask what's next. Finishing well and asking for more shows you're a great worker.",
              ],
            },
          ],
          supporterNote:
            "Teach 'confirm before starting' (repeat-back, define 'done', clarify deadline) and checklists as professional tools. These supports leverage strengths in following clear steps and reduce errors from ambiguous instructions.",
          check: [
            {
              prompt: "What's a good way to make sure you understand a task?",
              options: [
                { id: "a", label: "Repeat it back and ask what 'done' looks like.", correct: true },
                { id: "b", label: "Start right away without listening." },
                { id: "c", label: "Never ask any questions." },
              ],
              explanation:
                "Repeating the task back and asking what 'done' looks like (and when it's due) makes sure you've got it right. Use a checklist, then check your work before you finish.",
            },
          ],
        },
        {
          slug: "feedback-and-mistakes",
          title: "Handling Feedback and Mistakes",
          minutes: "5 min",
          summary: "Learn from feedback and fix mistakes calmly.",
          intro:
            "Everyone gets feedback and everyone makes mistakes — even your boss. Feedback is how you learn and get better. The goal is to take it calmly and use it.",
          objectives: [
            "Take feedback without taking it personally.",
            "Handle a mistake the right way.",
          ],
          sections: [
            {
              heading: "Taking feedback",
              paragraphs: [
                "Feedback is information about your work, not an attack on you. A boss who gives feedback usually wants to help you do better.",
              ],
              bullets: [
                { label: "Listen.", body: "Let them finish before you respond." },
                { label: "Stay calm.", body: "Take a breath. It's about the work, not about you as a person." },
                { label: "Say thanks.", body: "'Thanks, I'll fix that' goes a long way." },
                { label: "Ask if unsure.", body: "'Can you show me the way you'd like it?'" },
              ],
            },
            {
              heading: "When you make a mistake",
              checklist: [
                "Tell your boss instead of hiding it.",
                "Say sorry once, simply — you don't need to over-apologize.",
                "Fix it if you can, or ask how to fix it.",
                "Learn from it so it doesn't happen again.",
              ],
              callout: {
                title: "Mistakes are normal",
                body: "Everyone makes mistakes at work. Owning a mistake and fixing it actually builds trust. One mistake will not get you fired.",
                tone: "note",
              },
            },
          ],
          supporterNote:
            "Reframe feedback as task-focused, not identity-focused, to counter rejection sensitivity. Practice a simple script for receiving feedback and disclosing mistakes. Reassure that errors are recoverable and honesty builds trust.",
          check: [
            {
              prompt: "Your boss gives you feedback about your work. What's the best response?",
              options: [
                { id: "a", label: "Listen, stay calm, and say you'll fix it.", correct: true },
                { id: "b", label: "Get upset and assume they hate you." },
                { id: "c", label: "Argue and refuse to change anything." },
              ],
              explanation:
                "Feedback is about the work, not about you as a person. Listen, stay calm, thank them, and ask questions if you're unsure. It's how you learn and improve.",
            },
          ],
        },
        {
          slug: "asking-for-support",
          title: "Asking for Help and Support",
          minutes: "5 min",
          summary: "Get the help you need to do your best.",
          intro:
            "Asking for help is a strength, not a weakness. Knowing when and how to ask — and what supports you can request — helps you succeed and feel good at work.",
          objectives: [
            "Know when and how to ask for help.",
            "Understand workplace accommodations.",
          ],
          sections: [
            {
              heading: "When to ask for help",
              bullets: [
                { label: "You're stuck.", body: "You tried, but you can't figure out the next step." },
                { label: "It's unsafe.", body: "Something could hurt you or others." },
                { label: "You're overwhelmed.", body: "You need a moment or a clearer plan." },
              ],
            },
            {
              heading: "What are accommodations?",
              paragraphs: [
                "An accommodation is a change that helps you do your job. Workers with disabilities have the right to ask for reasonable ones.",
              ],
              checklist: [
                "Written instructions instead of spoken ones.",
                "Noise-reducing headphones in loud areas.",
                "A checklist or visual schedule.",
                "A quiet spot for breaks.",
                "A set, predictable routine.",
              ],
              callout: {
                title: "You have rights",
                body: "Asking for an accommodation is allowed and protected by law. A job coach can help you ask for what you need in the right way.",
                tone: "info",
              },
            },
            {
              heading: "A job coach can help",
              paragraphs: [
                "If work feels hard, a job coach can support you — at the job site, with your boss, and with figuring out what helps. You don't have to do it alone.",
              ],
            },
          ],
          supporterNote:
            "Normalize help-seeking and introduce reasonable accommodations and ADA rights concretely. Job coaching and on-site supports dramatically improve retention. Help the learner identify which specific accommodations match their needs.",
          check: [
            {
              prompt: "What is a workplace accommodation?",
              options: [
                { id: "a", label: "A change that helps you do your job, which you can ask for.", correct: true },
                { id: "b", label: "Something that's against the rules to request." },
                { id: "c", label: "A punishment for needing help." },
              ],
              explanation:
                "An accommodation is a reasonable change — like written instructions or headphones — that helps you do your job. Asking for one is allowed and protected by law, and a job coach can help.",
            },
          ],
        },
      ],
    },
  ],
};
