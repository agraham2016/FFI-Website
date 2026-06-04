import { CalendarCheck } from "lucide-react";
import type { Course } from "./types";

export const buildingDailyRoutines: Course = {
  slug: "building-daily-routines",
  track: "supported-living",
  title: "Routines and Time Management",
  shortTitle: "Routines & Time",
  level: "Core skills",
  icon: CalendarCheck,
  description:
    "Build daily routines, use a calendar, and manage your time so you feel calm and ready — not rushed. Simple tools you can start using today.",
  intro:
    "A routine is a plan for your day. Good routines and time skills help you feel less stressed and get more done. This course shows you simple, step-by-step ways to plan your time. Go at your own speed — your progress is saved as you go.",
  audience: "Young adults building independence at home, school, or work.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Understand how routines lower stress and help you reach your goals.",
    "Build a morning and evening routine that fits your life.",
    "Use a calendar and a to-do list to remember what matters.",
    "Plan your time so you are on time and ready.",
    "Handle changes to your plan without feeling overwhelmed.",
  ],
  modules: [
    {
      title: "Building Routines",
      summary: "Turn your day into a plan your body can follow.",
      lessons: [
        {
          slug: "why-routines-help",
          title: "Why Routines Help",
          minutes: "4 min",
          summary: "How a daily plan lowers stress and helps you reach your goals.",
          intro:
            "A routine is the same set of steps you do in the same order. When you have a routine, you don't have to think hard about what comes next. Your day feels calmer and easier.",
          objectives: [
            "Say what a routine is in your own words.",
            "Name two ways a routine can help you.",
          ],
          sections: [
            {
              heading: "What is a routine?",
              paragraphs: [
                "A routine is a habit you do over and over. Brushing your teeth every morning is a routine. Getting ready for bed the same way each night is a routine.",
                "Routines are not rules to follow perfectly. They are tools that make your day smoother.",
              ],
            },
            {
              heading: "Why routines help",
              bullets: [
                {
                  label: "Less stress.",
                  body: "When you know what comes next, you don't have to worry about it.",
                },
                {
                  label: "Less forgetting.",
                  body: "A routine helps you remember important steps, like taking medicine or packing your bag.",
                },
                {
                  label: "More done.",
                  body: "Steps turn into habits, so you finish them without using a lot of energy.",
                },
              ],
            },
            {
              heading: "Routines and change",
              paragraphs: [
                "Some people with autism feel calmer with a clear routine. A surprise change can feel hard. That is okay and very common.",
                "Later in this course, you will learn ways to handle changes so they feel less stressful.",
              ],
              callout: {
                title: "Remember",
                body: "Your routine is yours. You get to choose the steps and the order. The goal is to make your day easier, not harder.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Frame routines as a tool the learner controls, not a schedule imposed on them. Predictability reduces anxiety for many autistic young adults — but the learner's buy-in and choice are what make a routine stick.",
          check: [
            {
              prompt: "What is a routine?",
              options: [
                { id: "a", label: "The same steps you do in the same order.", correct: true },
                { id: "b", label: "A test you take once a year." },
                { id: "c", label: "Something only happens by accident." },
              ],
              explanation:
                "A routine is a set of steps you do the same way each time. It turns into a habit and makes your day calmer and easier.",
            },
          ],
        },
        {
          slug: "morning-and-evening-routines",
          title: "Morning and Evening Routines",
          minutes: "6 min",
          summary: "Build a simple start and end to your day.",
          intro:
            "The start and end of your day matter most. A morning routine helps you leave the house ready. An evening routine helps you wind down and prepare for tomorrow.",
          objectives: [
            "Build a simple morning routine.",
            "Build a simple evening routine.",
          ],
          sections: [
            {
              heading: "A sample morning routine",
              bullets: [
                { label: "1.", body: "Wake up and turn off your alarm." },
                { label: "2.", body: "Use the bathroom and wash your hands." },
                { label: "3.", body: "Brush your teeth and get dressed." },
                { label: "4.", body: "Eat breakfast and take any medicine." },
                { label: "5.", body: "Pack your bag and check what you need for the day." },
              ],
            },
            {
              heading: "A sample evening routine",
              bullets: [
                { label: "1.", body: "Put dirty clothes in the laundry." },
                { label: "2.", body: "Lay out clothes for tomorrow." },
                { label: "3.", body: "Charge your phone away from your bed." },
                { label: "4.", body: "Brush your teeth and wash your face." },
                { label: "5.", body: "Do something calm, like reading or quiet music." },
              ],
              callout: {
                title: "Make it yours",
                body: "You don't have to use these exact steps. Pick the steps you need and keep the order the same each day so they become habits.",
                tone: "tip",
              },
            },
            {
              heading: "Write it down",
              paragraphs: [
                "A routine is easier to follow when you can see it. Write your steps on paper, or make a checklist on your phone.",
                "Put the list where you will see it — on the mirror, by the door, or as a phone reminder.",
              ],
            },
          ],
          supporterNote:
            "Co-create routines with the learner and write them as a visual checklist (paper or phone). Keep steps concrete and few. Posting the list where the action happens (bathroom mirror, by the door) supports independence.",
          check: [
            {
              prompt: "What is one good way to make a routine easier to follow?",
              options: [
                { id: "a", label: "Write the steps down where you can see them.", correct: true },
                { id: "b", label: "Try to keep all the steps only in your head." },
                { id: "c", label: "Change the order every single day." },
              ],
              explanation:
                "Writing your steps on paper or your phone — and keeping the order the same — makes a routine easier to remember and follow.",
            },
          ],
        },
      ],
    },
    {
      title: "Managing Your Time",
      summary: "Tools to plan ahead, stay on time, and handle changes.",
      lessons: [
        {
          slug: "using-a-calendar",
          title: "Using a Calendar and To-Do List",
          minutes: "6 min",
          summary: "Keep track of what is coming up and what to do.",
          intro:
            "You can't remember everything in your head, and you don't have to. A calendar holds your appointments. A to-do list holds your tasks. Together, they free your mind.",
          objectives: [
            "Know the difference between a calendar and a to-do list.",
            "Add an event and a task using a simple tool.",
          ],
          sections: [
            {
              heading: "Calendar vs. to-do list",
              bullets: [
                {
                  label: "Calendar.",
                  body: "For things that happen at a certain time — like a doctor visit at 2:00 or work at 9:00.",
                },
                {
                  label: "To-do list.",
                  body: "For things you need to get done, but not at an exact time — like 'do laundry' or 'call mom.'",
                },
              ],
            },
            {
              heading: "How to add an event",
              bullets: [
                { label: "Step 1.", body: "Open your calendar app or paper planner." },
                { label: "Step 2.", body: "Pick the day and time." },
                { label: "Step 3.", body: "Write what it is, like 'Dentist.'" },
                { label: "Step 4.", body: "Set a reminder so your phone alerts you before." },
              ],
              callout: {
                title: "Phone tip",
                body: "Most phones have a free calendar app. You can ask it to remind you 1 hour and 1 day before something. Reminders take the pressure off your memory.",
                tone: "info",
              },
            },
            {
              heading: "Keep one list, not ten",
              paragraphs: [
                "It helps to keep all your tasks in one place. If you write notes on many papers, they get lost.",
                "Pick one spot — one app or one notebook — and put everything there.",
              ],
            },
          ],
          supporterNote:
            "Help the learner pick one system (digital or paper) and stick with it. Setting up automatic reminders reduces reliance on prospective memory, which is a common challenge. Practice adding a real, upcoming event together.",
          check: [
            {
              prompt: "Where should you put an appointment that happens at a certain time?",
              options: [
                { id: "a", label: "On your calendar, with a reminder.", correct: true },
                { id: "b", label: "Nowhere — just try to remember it." },
                { id: "c", label: "On ten different sticky notes." },
              ],
              explanation:
                "Appointments with a set time go on your calendar. Add a reminder so your phone alerts you before it starts.",
            },
          ],
        },
        {
          slug: "planning-your-time",
          title: "Planning Your Time and Being On Time",
          minutes: "6 min",
          summary: "Break tasks into steps and leave enough time to get there.",
          intro:
            "Big tasks can feel hard to start. The trick is to break them into small steps. Being on time is also a skill — and it gets easier when you plan backward from when you need to arrive.",
          objectives: [
            "Break a big task into smaller steps.",
            "Plan backward so you arrive on time.",
          ],
          sections: [
            {
              heading: "Break it into steps",
              paragraphs: [
                "A big task like 'clean my room' can feel like too much. Break it into small steps so you know where to start.",
              ],
              bullets: [
                { label: "Instead of:", body: "'Clean my room.'" },
                { label: "Try:", body: "Make the bed. Then pick up clothes. Then clear the desk. Then take out trash." },
              ],
            },
            {
              heading: "Plan backward to be on time",
              paragraphs: [
                "To be on time, start from when you need to arrive and count backward.",
              ],
              bullets: [
                { label: "Example.", body: "Work starts at 9:00. The bus takes 20 minutes. Getting ready takes 30 minutes." },
                { label: "So:", body: "Leave by 8:35, and start getting ready by 8:00." },
              ],
              callout: {
                title: "Add buffer time",
                body: "Things can run late — a slow bus, a long line. Add 10 extra minutes to your plan. Being a little early is better than rushing.",
                tone: "tip",
              },
            },
            {
              heading: "Use a timer",
              paragraphs: [
                "A timer helps you notice how long things really take. It also helps you start. Tell yourself, 'I'll work for just 10 minutes,' and set a timer. Starting is often the hardest part.",
              ],
            },
          ],
          supporterNote:
            "Task initiation and time estimation are common executive-function challenges. Teach 'chunking' big tasks and 'backward planning' for arrival times, and normalize buffer time. Visual timers make abstract time concrete.",
          check: [
            {
              prompt: "Work starts at 9:00, the bus is 20 minutes, and getting ready is 30 minutes. When should you start getting ready?",
              options: [
                { id: "a", label: "Around 8:00, so you can leave by 8:35.", correct: true },
                { id: "b", label: "At exactly 9:00." },
                { id: "c", label: "There is no way to know." },
              ],
              explanation:
                "Plan backward from 9:00. Subtract the 20-minute bus and 30 minutes to get ready, then add buffer time — so start around 8:00.",
            },
            {
              prompt: "What is a good way to handle a big task that feels too hard to start?",
              options: [
                { id: "a", label: "Break it into small steps and start with one.", correct: true },
                { id: "b", label: "Wait until the very last minute." },
                { id: "c", label: "Try to do all of it in one second." },
              ],
              explanation:
                "Breaking a big task into small steps makes it easier to start. Setting a timer for just 10 minutes can also help you begin.",
            },
          ],
        },
        {
          slug: "handling-changes",
          title: "When Plans Change",
          minutes: "5 min",
          summary: "Stay calm and adjust when your routine gets interrupted.",
          intro:
            "Sometimes plans change without warning. A bus is late. An event is canceled. Change can feel stressful, especially if you like a clear plan. You can learn ways to handle it.",
          objectives: [
            "Notice how you feel when plans change.",
            "Use a simple plan to adjust calmly.",
          ],
          sections: [
            {
              heading: "Change is normal",
              paragraphs: [
                "Even with the best plan, things change. This happens to everyone. It is not your fault, and it does not mean your day is ruined.",
              ],
            },
            {
              heading: "A calm-down plan",
              bullets: [
                { label: "Pause.", body: "Stop and take three slow breaths." },
                { label: "Name it.", body: "Tell yourself, 'The plan changed. I can handle this.'" },
                { label: "Ask.", body: "If you're not sure what to do, ask a trusted person." },
                { label: "Make a new plan.", body: "Pick the next small step you can take." },
              ],
              callout: {
                title: "Sensory tip",
                body: "If a change makes you feel overwhelmed, it can help to step away to a quiet spot, use headphones, or hold a calming object for a minute before you decide what to do.",
                tone: "info",
              },
            },
            {
              heading: "Have a backup",
              paragraphs: [
                "For things you do often, it helps to have a backup plan ready. If the bus is late, what else could you do? Knowing your backup ahead of time makes change feel less scary.",
              ],
            },
          ],
          supporterNote:
            "Unexpected change can trigger real distress for autistic individuals — this is dysregulation, not defiance. Pre-plan backup options and a concrete calm-down sequence. Practicing small, low-stakes changes builds flexibility over time.",
          check: [
            {
              prompt: "What is a good first step when your plan suddenly changes?",
              options: [
                { id: "a", label: "Pause and take a few slow breaths.", correct: true },
                { id: "b", label: "Decide the whole day is ruined." },
                { id: "c", label: "Pretend nothing changed at all." },
              ],
              explanation:
                "Pausing to breathe helps you feel calmer first. Then you can name what happened, ask for help if needed, and pick your next small step.",
            },
          ],
        },
      ],
    },
  ],
};
