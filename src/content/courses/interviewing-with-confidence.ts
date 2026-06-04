import { MessageCircle } from "lucide-react";
import type { Course } from "./types";

export const interviewingWithConfidence: Course = {
  slug: "interviewing-with-confidence",
  track: "employment",
  title: "Interviewing with Confidence",
  shortTitle: "Interviews",
  level: "Core skills",
  icon: MessageCircle,
  description:
    "Get ready for job interviews — what to wear, how to answer common questions, what to bring, and how to stay calm so you can show your best self.",
  intro:
    "An interview is a meeting where an employer gets to know you. It can feel scary, but it gets easier when you know what to expect and practice ahead of time. This course walks you through every part, step by step.",
  audience: "Young adults preparing for job interviews.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Know what an interview is and what to expect.",
    "Choose clean, neat clothes to wear.",
    "Answer common interview questions.",
    "Know what to bring and how to arrive ready.",
    "Use simple ways to stay calm and follow up after.",
  ],
  modules: [
    {
      title: "Get Ready",
      summary: "Understand interviews and prepare what you'll wear and bring.",
      lessons: [
        {
          slug: "what-to-expect",
          title: "What to Expect in an Interview",
          minutes: "4 min",
          summary: "How an interview works, start to finish.",
          intro:
            "An interview is a friendly meeting. The employer asks questions to learn about you, and you can ask questions too. Knowing the steps makes it less scary.",
          objectives: [
            "Know the basic parts of an interview.",
            "Understand it's a two-way conversation.",
          ],
          sections: [
            {
              heading: "How an interview usually goes",
              bullets: [
                { label: "Greeting.", body: "You say hello, shake hands (if you're comfortable), and sit down." },
                { label: "Questions.", body: "The employer asks about you, your skills, and the job." },
                { label: "Your turn.", body: "You can ask a question or two about the job." },
                { label: "Ending.", body: "They tell you what happens next, and you thank them." },
              ],
            },
            {
              heading: "It goes both ways",
              paragraphs: [
                "An interview isn't a test you pass or fail. It's a chance for both of you to see if the job is a good fit. You're allowed to learn about them, too.",
              ],
              callout: {
                title: "It's okay to share what helps you",
                body: "You can choose to tell an employer you're autistic and ask for things that help, like clear instructions. This is your choice, and there are laws that protect you from unfair treatment.",
                tone: "info",
              },
            },
          ],
          supporterNote:
            "Demystify the interview structure to reduce anticipatory anxiety. Discuss disclosure as a personal choice with pros/cons, and mention ADA protections and reasonable accommodations without pressuring the learner to disclose.",
          check: [
            {
              prompt: "What is an interview, really?",
              options: [
                { id: "a", label: "A meeting to see if you and the job are a good fit.", correct: true },
                { id: "b", label: "A test you either pass or fail forever." },
                { id: "c", label: "A place where you can't ask anything." },
              ],
              explanation:
                "An interview is a two-way conversation. The employer learns about you, and you learn about the job. You're allowed to ask questions too.",
            },
          ],
        },
        {
          slug: "what-to-wear-and-bring",
          title: "What to Wear and Bring",
          minutes: "5 min",
          summary: "Look neat and come prepared.",
          intro:
            "How you look at an interview shows you care about the job. You don't need fancy or expensive clothes — clean and neat is what matters most.",
          objectives: [
            "Choose neat, clean clothes for an interview.",
            "Know what to bring with you.",
          ],
          sections: [
            {
              heading: "What to wear",
              paragraphs: [
                "Aim for clean, neat, and a little dressed up. A collared shirt and nice pants work for most jobs. When unsure, dress a bit nicer than the everyday job clothes.",
              ],
              checklist: [
                "Clean clothes with no stains or rips.",
                "Neat hair and good hygiene (shower, deodorant, brushed teeth).",
                "Clean, closed-toe shoes.",
                "Keep it simple — not too much cologne or perfume.",
              ],
            },
            {
              heading: "Comfort matters too",
              callout: {
                title: "Sensory tip",
                body: "Pick dressy clothes that still feel okay on your body. Try them on a day early so there are no scratchy or tight surprises. Feeling comfortable helps you feel calm.",
                tone: "info",
              },
            },
            {
              heading: "What to bring",
              checklist: [
                "A few copies of your resume.",
                "Your job info sheet with references.",
                "A pen and a small notepad.",
                "The address and the name of who you'll meet.",
              ],
            },
          ],
          supporterNote:
            "Plan and trial the interview outfit in advance to avoid day-of sensory surprises. 'Clean and neat' matters more than expensive. Prepare a packing checklist so the learner arrives organized and confident.",
          check: [
            {
              prompt: "What matters most about interview clothes?",
              options: [
                { id: "a", label: "That they're clean, neat, and a little dressed up.", correct: true },
                { id: "b", label: "That they're the most expensive ones." },
                { id: "c", label: "That they have stains so you look busy." },
              ],
              explanation:
                "Clean and neat beats fancy. A collared shirt and nice pants work for most jobs. Try your outfit on early so it's comfortable on the day.",
            },
          ],
        },
      ],
    },
    {
      title: "The Interview",
      summary: "Answer questions, stay calm, and follow up.",
      lessons: [
        {
          slug: "answering-questions",
          title: "Answering Common Questions",
          minutes: "6 min",
          summary: "Practice answers to questions you'll likely hear.",
          intro:
            "Most interviews use the same kinds of questions. If you think about your answers ahead of time and practice, you'll feel much more ready.",
          objectives: [
            "Know common interview questions.",
            "Prepare simple, honest answers.",
          ],
          sections: [
            {
              heading: "Questions you might hear",
              bullets: [
                { label: "'Tell me about yourself.'", body: "Say a little about your strengths and what you enjoy." },
                { label: "'Why do you want this job?'", body: "Share what interests you about it." },
                { label: "'What are you good at?'", body: "Name a strength and a quick example." },
                { label: "'How do you handle a problem?'", body: "Give a simple example of solving something." },
              ],
            },
            {
              heading: "Tips for answering",
              checklist: [
                "It's okay to take a moment to think before you answer.",
                "Keep answers short and honest.",
                "Give a quick example when you can.",
                "If you don't understand, ask them to say it again.",
              ],
              callout: {
                title: "Practice helps a lot",
                body: "Practice with a family member, friend, or job coach. Say your answers out loud a few times. The more you practice, the calmer you'll feel.",
                tone: "tip",
              },
            },
            {
              heading: "Ask a question too",
              paragraphs: [
                "Near the end, you can ask something like, 'What would a normal day look like?' or 'When will you decide?' It shows you're interested.",
              ],
            },
          ],
          supporterNote:
            "Rehearse common questions repeatedly; predictability and scripting reduce anxiety and improve performance. Affirm that pausing to think is fine and that asking for a question to be repeated is appropriate, not a failure.",
          check: [
            {
              prompt: "What's a good way to get ready to answer interview questions?",
              options: [
                { id: "a", label: "Practice your answers out loud ahead of time.", correct: true },
                { id: "b", label: "Never think about them until you're there." },
                { id: "c", label: "Refuse to answer anything." },
              ],
              explanation:
                "Practicing common questions out loud — with a friend or job coach — helps you feel calm and ready. It's fine to pause to think and to keep answers short and honest.",
            },
          ],
        },
        {
          slug: "stay-calm-and-follow-up",
          title: "Staying Calm and Following Up",
          minutes: "5 min",
          summary: "Handle nerves and what to do after the interview.",
          intro:
            "Feeling nervous before an interview is normal — even for people who've done many. A few simple tricks help you stay calm. And what you do after the interview matters too.",
          objectives: [
            "Use simple ways to calm your nerves.",
            "Follow up the right way after an interview.",
          ],
          sections: [
            {
              heading: "Stay calm",
              checklist: [
                "Arrive about 10 minutes early so you're not rushed.",
                "Take slow, deep breaths while you wait.",
                "Remember: it's a conversation, not a test.",
                "It's okay to bring notes to look at.",
              ],
              callout: {
                title: "Sensory tip",
                body: "If waiting rooms feel stressful, you can hold a calming object or do a quiet breathing exercise. Plan your trip so you arrive with time to settle in.",
                tone: "info",
              },
            },
            {
              heading: "After the interview",
              bullets: [
                { label: "Say thanks.", body: "Thank the person before you leave." },
                { label: "Send a thank-you.", body: "A short thank-you email the next day is a nice touch." },
                { label: "Wait to hear back.", body: "They'll usually tell you when they'll decide." },
              ],
            },
            {
              heading: "If you don't get it",
              paragraphs: [
                "Not getting a job is not a sign you failed. Even strong people hear 'no' sometimes. Each interview is practice that makes the next one easier. Keep going.",
              ],
            },
          ],
          supporterNote:
            "Provide concrete regulation strategies and arrival planning. Normalize rejection as part of the process to protect self-esteem and persistence. A simple thank-you note template can make follow-up feel manageable.",
          check: [
            {
              prompt: "What's a healthy way to think about not getting a job after an interview?",
              options: [
                { id: "a", label: "It's normal, and each interview makes the next easier.", correct: true },
                { id: "b", label: "It means you should stop trying forever." },
                { id: "c", label: "It means you failed as a person." },
              ],
              explanation:
                "Everyone hears 'no' sometimes. It's not failure — it's practice. Arriving early, breathing slowly, and sending a thank-you all help you do your best and keep improving.",
            },
          ],
        },
      ],
    },
  ],
};
