import { GraduationCap } from "lucide-react";
import type { Course } from "./types";

export const growingYourCareer: Course = {
  slug: "growing-your-career",
  track: "employment",
  title: "Growing Your Career",
  shortTitle: "Growing",
  level: "Next steps",
  icon: GraduationCap,
  description:
    "Once you're working, keep growing. Learn how to build new skills, explore more training and school options, and set goals for the future you want.",
  intro:
    "A first job is a starting point, not the finish line. You can learn new skills, earn more, and find work you love even more. This course helps you think about the future and take steps toward it. Go at your own pace.",
  audience: "Young adults who are working and want to grow.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Set simple goals for your future at work.",
    "Find ways to learn new skills on the job.",
    "Explore training, classes, and school options.",
    "Know where to get help paying for and choosing training.",
    "Take small steps toward the work you want.",
  ],
  modules: [
    {
      title: "Think Ahead",
      summary: "Picture your future and set goals to get there.",
      lessons: [
        {
          slug: "setting-goals",
          title: "Setting Goals for Your Future",
          minutes: "5 min",
          summary: "Picture what you want and make a simple plan.",
          intro:
            "A goal is something you want and a plan to get it. Goals give your steps a direction. They can be small, like learning one new task, or big, like a new kind of job.",
          objectives: [
            "Set a simple, clear goal.",
            "Break a goal into small steps.",
          ],
          sections: [
            {
              heading: "What do you want?",
              paragraphs: [
                "Think about your work and your life. Do you want to learn a new skill? Earn more money? Work more hours, or fewer? Try a different kind of job? All of these can be goals.",
              ],
            },
            {
              heading: "Make your goal clear",
              bullets: [
                { label: "Fuzzy goal:", body: "'Do better at work.'" },
                { label: "Clear goal:", body: "'Learn how to use the register by next month.'" },
              ],
            },
            {
              heading: "Break it into steps",
              paragraphs: [
                "Once you have a clear goal, list the small steps to reach it. Small steps make a big goal feel possible.",
              ],
              callout: {
                title: "Try this",
                body: "Write down one goal and three small steps. Put a date on the first step. Tell a trusted person so they can cheer you on.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Help the learner translate vague wishes into specific, measurable goals with concrete first steps and dates. Person-centered planning that follows the individual's own interests builds motivation and ownership.",
          check: [
            {
              prompt: "Which is a clear goal?",
              options: [
                { id: "a", label: "'Learn how to use the register by next month.'", correct: true },
                { id: "b", label: "'Do better somehow.'" },
                { id: "c", label: "'Maybe stuff will happen.'" },
              ],
              explanation:
                "A clear goal says exactly what you want and by when. Then you can break it into small steps that make the goal feel possible.",
            },
          ],
        },
        {
          slug: "learning-on-the-job",
          title: "Building Skills on the Job",
          minutes: "5 min",
          summary: "Grow right where you are by learning more.",
          intro:
            "You can grow a lot without leaving your job. Learning new tasks, taking on more, and showing you're reliable can lead to better hours, more pay, or a new role.",
          objectives: [
            "Find ways to learn more at your current job.",
            "Show you're ready for more.",
          ],
          sections: [
            {
              heading: "Ways to grow at work",
              checklist: [
                "Ask to learn a new task or area.",
                "Volunteer to help with something new.",
                "Watch how skilled coworkers do things.",
                "Ask your boss what skills would help you grow.",
              ],
            },
            {
              heading: "Show you're ready",
              paragraphs: [
                "Being reliable is the foundation. When you show up, do good work, and finish tasks, your boss notices. That's what leads to more responsibility and pay.",
              ],
              callout: {
                title: "Ask the question",
                body: "It's okay to say, 'I'd like to grow here. What can I work on?' Most bosses respect workers who want to learn and improve.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Frame reliability and incremental skill-building as the path to advancement. Encourage self-advocacy by practicing how to ask a supervisor about growth opportunities. Small expansions of responsibility build confidence.",
          check: [
            {
              prompt: "What's a good way to grow at your current job?",
              options: [
                { id: "a", label: "Ask to learn new tasks and tell your boss you want to grow.", correct: true },
                { id: "b", label: "Stop showing up to your shifts." },
                { id: "c", label: "Never learn anything new." },
              ],
              explanation:
                "Being reliable plus asking to learn new tasks shows you're ready for more. Most bosses respect workers who want to improve, and that leads to more pay or responsibility.",
            },
          ],
        },
      ],
    },
    {
      title: "More Learning",
      summary: "Explore training and school, and get help paying for it.",
      lessons: [
        {
          slug: "training-and-school",
          title: "Training and School Options",
          minutes: "5 min",
          summary: "Ways to learn beyond your job.",
          intro:
            "Sometimes growing means learning new skills outside of work. There are many ways to do this, and you can pick what fits your goals, your time, and your budget.",
          objectives: [
            "Name different ways to learn new skills.",
            "Match a learning path to a goal.",
          ],
          sections: [
            {
              heading: "Ways to learn more",
              bullets: [
                { label: "Short classes.", body: "Free or low-cost classes, online or at a library or community center." },
                { label: "Certificates.", body: "Short programs that teach one job skill, like food handling or computer basics." },
                { label: "Trade training.", body: "Hands-on programs for skills like building, repair, or care work." },
                { label: "College.", body: "Community college often has support programs and flexible classes." },
              ],
            },
            {
              heading: "Pick what fits",
              paragraphs: [
                "Match the learning to your goal. If you want a specific job, find the shortest path that teaches that skill. You don't need a long, expensive program to grow.",
              ],
              callout: {
                title: "Go at your pace",
                body: "Learning as an adult can be done slowly — one class at a time. Many programs have support services for students with disabilities. It's okay to ask what help is available.",
                tone: "info",
              },
            },
          ],
          supporterNote:
            "Present a spectrum of options beyond four-year college (certificates, trades, community college with disability services). Match training to specific goals and emphasize accessible, part-time, and supported pathways.",
          check: [
            {
              prompt: "How should you choose a way to learn new skills?",
              options: [
                { id: "a", label: "Match it to your goal and find a path that fits your time and budget.", correct: true },
                { id: "b", label: "Always pick the longest, most expensive option." },
                { id: "c", label: "Avoid learning anything new." },
              ],
              explanation:
                "Match the learning to your goal. Short classes, certificates, trade training, and community college are all options — pick the one that fits your goal, time, and budget.",
            },
          ],
        },
        {
          slug: "getting-help-and-next-steps",
          title: "Getting Help and Taking the Next Step",
          minutes: "5 min",
          summary: "Find support and start moving toward your goals.",
          intro:
            "You don't have to figure this out alone. There are people and programs that help you choose training, pay for it, and reach your goals. The last step is simple: take one small action.",
          objectives: [
            "Know where to get help with training and goals.",
            "Choose one small next step.",
          ],
          sections: [
            {
              heading: "Where to get help",
              checklist: [
                "A job coach or employment program.",
                "Vocational rehabilitation services in your state.",
                "Disability support offices at colleges.",
                "Family members and trusted mentors.",
              ],
            },
            {
              heading: "Help paying for it",
              paragraphs: [
                "Some training and school costs can be covered by grants, scholarships, or vocational rehab programs. Ask a job coach or the school's support office what help is available before you pay anything.",
              ],
              callout: {
                title: "FFI is here",
                body: "Our team can help you set goals, find training, and keep growing in your career. Reach out anytime — supporting your independence is what we do.",
                tone: "info",
              },
            },
            {
              heading: "Take one small step",
              paragraphs: [
                "You don't have to do everything today. Pick one small step — look up one class, ask your boss one question, or talk to a job coach. One step leads to the next.",
              ],
            },
          ],
          supporterNote:
            "Connect learners to vocational rehab, disability services, and funding sources before out-of-pocket spending. End on a single, achievable action to convert planning into momentum. Reinforce that support is ongoing and available.",
          check: [
            {
              prompt: "Before paying for training, what's a smart move?",
              options: [
                { id: "a", label: "Ask a job coach or support office what help with costs is available.", correct: true },
                { id: "b", label: "Pay for the most expensive program right away." },
                { id: "c", label: "Assume no help exists." },
              ],
              explanation:
                "Grants, scholarships, and vocational rehab can help cover training costs. Ask a job coach or a school's support office before paying. Then take one small step toward your goal.",
            },
          ],
        },
      ],
    },
  ],
};
