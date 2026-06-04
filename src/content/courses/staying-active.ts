import { HeartPulse } from "lucide-react";
import type { Course } from "./types";

export const stayingActive: Course = {
  slug: "staying-active",
  track: "supported-living",
  title: "Staying Active",
  shortTitle: "Staying Active",
  level: "Core skills",
  icon: HeartPulse,
  description:
    "Find ways to move your body that feel good to you, build a simple exercise habit, and learn how moving helps your mood and sleep.",
  intro:
    "Moving your body is good for your health and your mood. You don't need a gym or a sport. This course helps you find movement you enjoy and make it a regular part of your week. Go at your own pace.",
  audience: "Young adults building healthy, sustainable movement habits.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Understand how moving your body helps your health and mood.",
    "Find types of movement that feel good to you.",
    "Build a simple, doable exercise routine.",
    "Stay safe and listen to your body while you move.",
    "Keep going on days when it feels hard.",
  ],
  modules: [
    {
      title: "Why and How to Move",
      summary: "The benefits of moving and finding what works for you.",
      lessons: [
        {
          slug: "why-move",
          title: "Why Moving Your Body Helps",
          minutes: "4 min",
          summary: "How exercise helps your body, mood, and sleep.",
          intro:
            "Exercise is any movement that gets your body going. It does a lot more than build muscles — it also helps your mind. Let's look at why it matters.",
          objectives: [
            "Name two ways moving your body helps you.",
            "Know that any movement counts.",
          ],
          sections: [
            {
              heading: "How moving helps",
              bullets: [
                { label: "Your body.", body: "It makes your heart, muscles, and bones stronger." },
                { label: "Your mood.", body: "It can lower stress and worry, and help you feel happier." },
                { label: "Your sleep.", body: "People who move during the day often sleep better at night." },
                { label: "Your energy.", body: "It sounds odd, but moving gives you more energy over time." },
              ],
            },
            {
              heading: "Any movement counts",
              paragraphs: [
                "You don't need to run a race or lift heavy weights. Walking, dancing, cleaning, stretching, and playing all count.",
                "The best exercise is the one you actually enjoy and will keep doing.",
              ],
              callout: {
                title: "Remember",
                body: "Start where you are. Even 10 minutes of moving is good for you. You can do more as it gets easier.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Emphasize movement over 'exercise' or sports, which can carry pressure or past negative experiences (e.g., PE class). Any enjoyable movement counts. Tie it to mood and sleep benefits the learner cares about.",
          check: [
            {
              prompt: "Which of these counts as moving your body?",
              options: [
                { id: "a", label: "Walking, dancing, stretching, and cleaning.", correct: true },
                { id: "b", label: "Only running a race." },
                { id: "c", label: "Only lifting heavy weights." },
              ],
              explanation:
                "All kinds of movement count — walking, dancing, stretching, and more. The best one is the kind you enjoy and will keep doing.",
            },
          ],
        },
        {
          slug: "find-what-you-like",
          title: "Finding Movement You Enjoy",
          minutes: "5 min",
          summary: "Try different activities and pick what feels good.",
          intro:
            "You are more likely to keep moving if you like it. There are many ways to be active. The goal is to find a few you enjoy.",
          objectives: [
            "Explore different types of movement.",
            "Pick one or two to try this week.",
          ],
          sections: [
            {
              heading: "Ways to move",
              bullets: [
                { label: "On your own.", body: "Walking, biking, swimming, dancing to music, or following a video at home." },
                { label: "With others.", body: "A walk with a friend, a team sport, or a class." },
                { label: "While doing chores.", body: "Vacuuming, yard work, or walking the dog." },
              ],
            },
            {
              heading: "Think about what fits you",
              paragraphs: [
                "Some people like being around others. Some like to move alone. Some like quiet, and some like music. There is no wrong answer.",
              ],
              callout: {
                title: "Sensory tip",
                body: "If a gym feels too loud or bright, try moving at home, outside, or at quiet times. Comfortable clothes and shoes make a big difference. Pick what feels good to your body.",
                tone: "info",
              },
            },
            {
              heading: "Pick one to try",
              paragraphs: [
                "Choose one activity that sounds okay to you. You don't have to love it. Just try it once this week and see how it feels.",
              ],
            },
          ],
          supporterNote:
            "Honor sensory preferences when choosing activities (noise, lighting, social demand, clothing). Solo, home-based, or outdoor options are great. Let the learner experiment without pressure to like any particular activity.",
          check: [
            {
              prompt: "What makes you more likely to keep moving?",
              options: [
                { id: "a", label: "Picking activities you actually enjoy.", correct: true },
                { id: "b", label: "Choosing the activity you hate the most." },
                { id: "c", label: "Only doing things other people like." },
              ],
              explanation:
                "You'll stick with movement that feels good to you. Try different options — alone or with others, quiet or with music — and keep what you enjoy.",
            },
          ],
        },
      ],
    },
    {
      title: "Making It a Habit",
      summary: "Build a routine, stay safe, and keep going.",
      lessons: [
        {
          slug: "build-a-routine",
          title: "Building a Movement Habit",
          minutes: "5 min",
          summary: "Make a simple, doable plan to move each week.",
          intro:
            "A habit is something you do without much thinking. The way to build a movement habit is to start small and keep it regular.",
          objectives: [
            "Make a small, doable movement plan.",
            "Tie movement to something you already do.",
          ],
          sections: [
            {
              heading: "Start small",
              paragraphs: [
                "Don't plan to move for an hour every day right away. That's hard to keep up. Start with something easy, like a 10-minute walk three days a week.",
                "When that feels easy, you can add more time or more days.",
              ],
            },
            {
              heading: "Attach it to a habit you have",
              bullets: [
                { label: "After breakfast,", body: "take a short walk." },
                { label: "During a TV show,", body: "stretch or march in place." },
                { label: "Before dinner,", body: "dance to two songs." },
              ],
              callout: {
                title: "Easy tip",
                body: "Pairing movement with something you already do (a meal, a show, a time of day) helps it stick. Put it on your calendar with a reminder, too.",
                tone: "tip",
              },
            },
            {
              heading: "Track it",
              paragraphs: [
                "Mark each day you move on a calendar or phone. Seeing your progress feels good and helps you keep going.",
              ],
            },
          ],
          supporterNote:
            "Habit-stacking (attaching new movement to an existing routine) and starting very small both improve follow-through. Track visibly. Celebrate consistency over intensity — showing up matters more than performance.",
          check: [
            {
              prompt: "What is the best way to start a movement habit?",
              options: [
                { id: "a", label: "Start small and keep it regular.", correct: true },
                { id: "b", label: "Do two hours on day one, then quit." },
                { id: "c", label: "Wait until you feel like a pro." },
              ],
              explanation:
                "Start small — like a 10-minute walk a few days a week — and build from there. Attaching it to a habit you already have helps it stick.",
            },
          ],
        },
        {
          slug: "stay-safe-keep-going",
          title: "Staying Safe and Keeping Going",
          minutes: "5 min",
          summary: "Listen to your body and handle low-energy days.",
          intro:
            "Moving should help you feel better, not hurt you. Learning to listen to your body keeps you safe. And having a plan for hard days helps you keep your habit.",
          objectives: [
            "Know basic safety steps for moving.",
            "Make a plan for low-energy days.",
          ],
          sections: [
            {
              heading: "Stay safe",
              checklist: [
                "Warm up with easy movement for a few minutes.",
                "Drink water before, during, and after.",
                "Wear comfortable shoes and clothes.",
                "Stop if you feel sharp pain, dizzy, or can't breathe well.",
              ],
              callout: {
                title: "Good pain vs. bad pain",
                body: "Feeling your muscles work or getting a little out of breath is normal. Sharp pain, chest pain, or feeling dizzy is not — stop and rest, and tell someone if it doesn't pass.",
                tone: "note",
              },
            },
            {
              heading: "Plan for hard days",
              paragraphs: [
                "Some days you feel tired or low. On those days, do less instead of nothing. A short, gentle walk still counts.",
              ],
              bullets: [
                { label: "Tired?", body: "Try 5 minutes of easy stretching." },
                { label: "Stressed?", body: "A slow walk outside can calm your mind." },
                { label: "No energy?", body: "Be kind to yourself. Rest is okay, and tomorrow is a new day." },
              ],
            },
          ],
          supporterNote:
            "Teach the difference between normal exertion and warning signs (sharp/chest pain, dizziness). On low-energy days, 'do less, not nothing' protects the habit. Avoid all-or-nothing thinking, and frame rest as part of a healthy routine.",
          check: [
            {
              prompt: "What should you do if you feel sharp pain or get dizzy while moving?",
              options: [
                { id: "a", label: "Stop and rest, and tell someone if it doesn't pass.", correct: true },
                { id: "b", label: "Push through it no matter what." },
                { id: "c", label: "Ignore it and move faster." },
              ],
              explanation:
                "Sharp pain, chest pain, or dizziness are warning signs. Stop and rest. Feeling your muscles work or being a little out of breath, though, is normal.",
            },
          ],
        },
      ],
    },
  ],
};
