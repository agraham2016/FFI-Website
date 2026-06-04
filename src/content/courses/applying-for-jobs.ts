import { ClipboardList } from "lucide-react";
import type { Course } from "./types";

export const applyingForJobs: Course = {
  slug: "applying-for-jobs",
  track: "employment",
  title: "Applying for Jobs",
  shortTitle: "Applications",
  level: "Core skills",
  icon: ClipboardList,
  description:
    "Gather your information, make a simple resume, and fill out job applications correctly — online and on paper — without the stress.",
  intro:
    "Applying for a job means telling an employer about you. This course shows you how to gather your info, build a simple resume, and fill out applications step by step. Take it slow — you can stop and come back anytime.",
  audience: "Young adults ready to apply for jobs.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Gather the information every application asks for.",
    "Make a simple, clear resume.",
    "Fill out a paper or online application correctly.",
    "List references and ask people the right way.",
    "Check your work before you send it.",
  ],
  modules: [
    {
      title: "Get Ready",
      summary: "Gather your info and build a simple resume.",
      lessons: [
        {
          slug: "gather-your-info",
          title: "Gather Your Information",
          minutes: "5 min",
          summary: "Collect everything an application will ask for.",
          intro:
            "Applications ask for the same basic facts. If you gather them once and keep them in one place, every application gets faster and easier.",
          objectives: [
            "List the information applications ask for.",
            "Keep your info in one easy place.",
          ],
          sections: [
            {
              heading: "Info you'll need",
              checklist: [
                "Your full name, address, phone, and email.",
                "Schools you went to and dates.",
                "Past jobs or volunteer work, with dates.",
                "Names and phone numbers for references.",
                "The days and hours you can work.",
              ],
            },
            {
              heading: "Make a 'job info sheet'",
              paragraphs: [
                "Write all of this on one sheet of paper or a note on your phone. Then you can copy from it for every application. No more trying to remember.",
              ],
              callout: {
                title: "Email tip",
                body: "Use a simple, grown-up email address, like your name. An address like 'jordan.smith23@email.com' looks better to an employer than a silly nickname.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "A reusable 'master application sheet' removes a major barrier — recalling dates and details under pressure. Help the learner create one and store it somewhere easy to access. Check that their email address reads as professional.",
          check: [
            {
              prompt: "Why is it helpful to make a 'job info sheet' first?",
              options: [
                { id: "a", label: "You can copy from it for every application.", correct: true },
                { id: "b", label: "It is never useful." },
                { id: "c", label: "So you can throw your information away." },
              ],
              explanation:
                "Keeping your name, dates, work history, and references on one sheet means you can copy from it for every application — faster and less stressful.",
            },
          ],
        },
        {
          slug: "make-a-resume",
          title: "Making a Simple Resume",
          minutes: "6 min",
          summary: "A one-page summary of you for employers.",
          intro:
            "A resume is a one-page paper that tells an employer about you. It lists your contact info, skills, and any work or volunteer experience. It doesn't have to be fancy.",
          objectives: [
            "Know what goes on a resume.",
            "Build a simple one-page resume.",
          ],
          sections: [
            {
              heading: "What goes on a resume",
              bullets: [
                { label: "Top.", body: "Your name, phone, and email." },
                { label: "Skills.", body: "A few things you're good at, like 'organized,' 'reliable,' 'careful with details.'" },
                { label: "Experience.", body: "Jobs, volunteer work, or school projects, with what you did." },
                { label: "Education.", body: "Schools you attended." },
              ],
            },
            {
              heading: "If you don't have job experience yet",
              paragraphs: [
                "That's okay — everyone starts somewhere. You can list volunteer work, school activities, chores you do well, or classes you've taken. Focus on your strengths.",
              ],
              callout: {
                title: "Keep it simple",
                body: "Use clear words and a clean layout. One page is enough. You can find free resume templates online, or a job coach can help you make one.",
                tone: "info",
              },
            },
            {
              heading: "Make it easy to read",
              checklist: [
                "Use a plain font and clear headings.",
                "Use short bullet points, not long paragraphs.",
                "Check spelling, or ask someone to check it.",
                "Save it as a PDF so it looks the same everywhere.",
              ],
            },
          ],
          supporterNote:
            "Reassure that limited work history is normal; volunteer roles, school activities, and transferable skills belong on a resume. Templates and job-coach support lower the barrier. Keep formatting clean and readable.",
          check: [
            {
              prompt: "What can you put on a resume if you don't have job experience yet?",
              options: [
                { id: "a", label: "Volunteer work, school activities, and your strengths.", correct: true },
                { id: "b", label: "Nothing — you can't make a resume." },
                { id: "c", label: "Only made-up jobs." },
              ],
              explanation:
                "Everyone starts somewhere. List volunteer work, school activities, classes, and your strengths. Never make up jobs — honesty matters.",
            },
          ],
        },
      ],
    },
    {
      title: "Fill It Out",
      summary: "Complete applications correctly and ask for references.",
      lessons: [
        {
          slug: "filling-out-applications",
          title: "Filling Out an Application",
          minutes: "6 min",
          summary: "Complete paper and online forms the right way.",
          intro:
            "An application is a form with boxes to fill in. Whether it's on paper or online, the steps are similar. Take your time and read carefully.",
          objectives: [
            "Fill out an application step by step.",
            "Avoid common mistakes.",
          ],
          sections: [
            {
              heading: "Steps to fill out an application",
              bullets: [
                { label: "Step 1.", body: "Read the whole form first before you write anything." },
                { label: "Step 2.", body: "Copy your info from your job info sheet." },
                { label: "Step 3.", body: "Answer every question. If one doesn't apply, write 'N/A' (not applicable)." },
                { label: "Step 4.", body: "Write neatly on paper, or type carefully online." },
                { label: "Step 5.", body: "Check it over before you turn it in." },
              ],
            },
            {
              heading: "Online applications",
              checklist: [
                "Save your progress if you can, in case you need a break.",
                "Don't rush — there's usually no timer.",
                "Watch for a 'submit' button at the end, and click it.",
                "Look for a message that says your application was sent.",
              ],
              callout: {
                title: "Take breaks",
                body: "Applications can feel long. It's okay to do one section, take a break, and come back. Ask a trusted person or job coach if a question confuses you.",
                tone: "tip",
              },
            },
            {
              heading: "Be honest",
              paragraphs: [
                "Always tell the truth on an application. It's fine to ask for help, but the facts should be real. Honesty builds trust with your employer.",
              ],
            },
          ],
          supporterNote:
            "Break applications into sections with breaks to manage attention and overwhelm. Clarify form conventions (e.g., 'N/A', confirming submission). Reinforce honesty and that asking for help with wording is appropriate and expected.",
          check: [
            {
              prompt: "What should you do with a question that does not apply to you?",
              options: [
                { id: "a", label: "Write 'N/A' (not applicable) instead of leaving it blank.", correct: true },
                { id: "b", label: "Make up a fake answer." },
                { id: "c", label: "Skip the whole application." },
              ],
              explanation:
                "Answer every question. If one truly doesn't apply, write 'N/A.' Read the form first, copy from your info sheet, be honest, and check your work before turning it in.",
            },
          ],
        },
        {
          slug: "references",
          title: "Choosing and Asking References",
          minutes: "4 min",
          summary: "People who will say good things about you.",
          intro:
            "A reference is a person who can tell an employer that you're a good worker. Applications often ask for two or three. Choosing the right people — and asking them politely — matters.",
          objectives: [
            "Know who makes a good reference.",
            "Ask someone to be a reference the right way.",
          ],
          sections: [
            {
              heading: "Who makes a good reference",
              bullets: [
                { label: "Good choices.", body: "A teacher, coach, job coach, volunteer leader, or past boss." },
                { label: "Usually not.", body: "Close family members (employers want people outside your family)." },
              ],
            },
            {
              heading: "How to ask",
              paragraphs: [
                "Always ask before you list someone. It's polite, and it lets them get ready for a call.",
              ],
              bullets: [
                { label: "Ask clearly.", body: "'Would you be a reference for me when I apply for jobs?'" },
                { label: "Give details.", body: "Tell them what kind of job you're seeking." },
                { label: "Get their info.", body: "Ask for the phone number or email they want employers to use." },
                { label: "Say thanks.", body: "Thank them for helping you." },
              ],
              callout: {
                title: "Keep a list",
                body: "Save your references' names and contact info on your job info sheet, so it's ready for every application.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Practice the actual ask via role-play. Help identify non-family adults who know the learner's work ethic (teachers, coaches, coordinators). Confirm contact details and that references are expecting possible calls.",
          check: [
            {
              prompt: "What should you do before listing someone as a reference?",
              options: [
                { id: "a", label: "Ask them first if they're willing.", correct: true },
                { id: "b", label: "List them as a surprise." },
                { id: "c", label: "Only use close family members." },
              ],
              explanation:
                "Always ask first — it's polite and lets them prepare. Good references are non-family adults who know your work, like a teacher, coach, or past boss.",
            },
          ],
        },
      ],
    },
  ],
};
