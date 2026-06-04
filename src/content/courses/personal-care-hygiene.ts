import { Droplets } from "lucide-react";
import type { Course } from "./types";

export const personalCareHygiene: Course = {
  slug: "personal-care-hygiene",
  track: "supported-living",
  title: "Personal Care and Hygiene",
  shortTitle: "Personal Care & Hygiene",
  level: "Start here",
  icon: Droplets,
  description:
    "Simple, step-by-step lessons on taking care of your body every day — teeth, skin, hair, staying fresh, and building a routine that works for you.",
  intro:
    "Taking care of your body is a big part of being independent. This course breaks it into small, clear steps. Go at your own speed. You can stop and come back anytime — the course remembers where you left off. There are no grades and no time limit.",
  audience: "Young adults building daily living skills — and the people who support them.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Know why daily self-care matters for your health and your goals.",
    "Brush your teeth, shower, and care for your hair the right way.",
    "Stay fresh and clean throughout the day.",
    "Pick out clean clothes and wash your hands well.",
    "Build a morning and night routine that fits your life.",
  ],
  modules: [
    {
      title: "Daily Basics",
      summary: "Start with the everyday steps that keep your body healthy.",
      lessons: [
        {
          slug: "why-self-care-matters",
          title: "Why Taking Care of Yourself Matters",
          minutes: "4 min",
          summary: "What self-care is and why it helps you reach your goals.",
          intro:
            "Self-care means taking care of your own body. It is not about being perfect. It is about a few simple habits you do most days. These habits keep you healthy and help you feel good about yourself.",
          objectives: [
            "Say what self-care means in your own words.",
            "Name two reasons self-care matters to you.",
          ],
          sections: [
            {
              heading: "What is self-care?",
              paragraphs: [
                "Self-care is the things you do to take care of your body. It includes brushing your teeth, showering, wearing clean clothes, and washing your hands.",
                "You do not have to do everything at once. You can learn one step at a time. That is what this course is for.",
              ],
            },
            {
              heading: "Why it matters",
              bullets: [
                {
                  label: "Your health.",
                  body: "Clean teeth, skin, and hands help you stay well and get sick less often.",
                },
                {
                  label: "How you feel.",
                  body: "Feeling clean and fresh can help you feel calm, confident, and ready for your day.",
                },
                {
                  label: "Your goals.",
                  body: "Self-care helps with school, work, friends, and living on your own. People notice when you take care of yourself.",
                },
              ],
            },
            {
              heading: "It can be hard sometimes — that's okay",
              paragraphs: [
                "Some days self-care feels easy. Other days it feels like a lot. Maybe a smell, a sound, or the water bothers you. Maybe you are tired.",
                "That is normal. Later in this course you will learn ways to make self-care easier on hard days.",
              ],
              callout: {
                title: "Remember",
                body: "You are learning a skill. Skills take practice. Every small step counts, and you can ask for help anytime.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Frame self-care as a step toward the learner's own goals (a job, friends, living independently) rather than a rule. Tie it to what they care about, and keep the tone respectful and adult — these are not children.",
          check: [
            {
              prompt: "What is self-care?",
              options: [
                { id: "a", label: "Things you do to take care of your body.", correct: true },
                { id: "b", label: "A test you have to pass." },
                { id: "c", label: "Something only other people can do for you." },
              ],
              explanation:
                "Self-care is the everyday things you do to take care of your own body, like brushing your teeth and showering. You can learn it one step at a time.",
            },
          ],
        },
        {
          slug: "brushing-your-teeth",
          title: "Brushing Your Teeth",
          minutes: "5 min",
          summary: "How and when to brush so your teeth and gums stay healthy.",
          intro:
            "Brushing your teeth keeps your mouth healthy and your breath fresh. It also helps you avoid pain from cavities. The good news: it only takes about two minutes, twice a day.",
          objectives: [
            "Know when to brush your teeth.",
            "Follow the steps to brush the right way.",
          ],
          sections: [
            {
              heading: "When to brush",
              paragraphs: [
                "Brush your teeth two times a day. Once in the morning and once before bed works well for most people.",
              ],
              bullets: [
                { label: "Morning.", body: "Brush after you wake up or after breakfast." },
                { label: "Night.", body: "Brush right before you go to sleep." },
              ],
            },
            {
              heading: "What you need",
              checklist: [
                "A toothbrush (soft bristles are best).",
                "Toothpaste with fluoride.",
                "Water.",
              ],
            },
            {
              heading: "Steps to brush your teeth",
              bullets: [
                { label: "Step 1.", body: "Put a small amount of toothpaste on your toothbrush. A pea-sized amount is enough." },
                { label: "Step 2.", body: "Brush the front, back, and top of your teeth using small circles." },
                { label: "Step 3.", body: "Brush for about two minutes. Try humming a song to keep track of time." },
                { label: "Step 4.", body: "Spit out the toothpaste. You do not need to swallow it." },
                { label: "Step 5.", body: "Rinse your brush and put it away to dry." },
              ],
              callout: {
                title: "Sensory tip",
                body: "If mint toothpaste feels too strong, that is okay. You can buy mild or flavor-free toothpaste. A softer brush can feel gentler too.",
                tone: "info",
              },
            },
            {
              heading: "Don't forget",
              paragraphs: [
                "Change your toothbrush every three months, or sooner if the bristles look bent.",
                "Many dentists also suggest flossing once a day to clean between your teeth.",
              ],
            },
          ],
          supporterNote:
            "A visual timer or a two-minute song can make brushing predictable. If toothpaste texture or mint is a sensory barrier, try mild or unflavored options before assuming it's avoidance.",
          check: [
            {
              prompt: "How many times a day should you brush your teeth?",
              options: [
                { id: "a", label: "Once a week." },
                { id: "b", label: "Two times a day.", correct: true },
                { id: "c", label: "Only when your teeth hurt." },
              ],
              explanation:
                "Brushing two times a day — usually morning and night — keeps your teeth and gums healthy and your breath fresh.",
            },
            {
              prompt: "About how long should you brush?",
              options: [
                { id: "a", label: "About two minutes.", correct: true },
                { id: "b", label: "Five seconds." },
                { id: "c", label: "Ten seconds." },
              ],
              explanation:
                "Brush for about two minutes. Humming a short song can help you keep track of the time.",
            },
          ],
        },
        {
          slug: "showering-and-washing",
          title: "Showering and Washing",
          minutes: "6 min",
          summary: "A simple shower routine so you stay clean from head to toe.",
          intro:
            "A shower washes off sweat, dirt, and dead skin. It helps you feel fresh and stops body odor. Most people shower once a day or every other day.",
          objectives: [
            "Know how often to shower.",
            "Follow a simple shower routine from head to toe.",
          ],
          sections: [
            {
              heading: "How often to shower",
              paragraphs: [
                "Showering once a day or every other day works for most people. Shower more often if you sweat a lot, play sports, or work a physical job.",
              ],
            },
            {
              heading: "What you need",
              checklist: [
                "Soap or body wash.",
                "Shampoo (for your hair).",
                "A clean towel.",
                "Clean clothes to change into.",
              ],
            },
            {
              heading: "A simple shower routine",
              bullets: [
                { label: "Step 1.", body: "Turn on the water and check the temperature. Warm — not too hot — is best." },
                { label: "Step 2.", body: "Get your whole body wet." },
                { label: "Step 3.", body: "Wash your hair with shampoo, then rinse it out." },
                { label: "Step 4.", body: "Use soap to wash your body. Don't skip your underarms, private areas, feet, and behind your ears." },
                { label: "Step 5.", body: "Rinse all the soap off your body." },
                { label: "Step 6.", body: "Turn off the water and dry yourself with a clean towel." },
              ],
              callout: {
                title: "Sensory tip",
                body: "If the water feels too strong or too loud, try lowering the pressure or the temperature. A handheld showerhead can give you more control.",
                tone: "info",
              },
            },
            {
              heading: "Staying safe",
              bullets: [
                { body: "Use a bath mat so you don't slip." },
                { body: "Test the water with your hand before you get in so it isn't too hot." },
              ],
            },
          ],
          supporterNote:
            "Water temperature, noise, and the feeling of being wet are common sensory challenges. Offer real choices (pressure, temperature, time of day) and a consistent order of steps. A laminated step card in the bathroom can support independence.",
          check: [
            {
              prompt: "Which body parts are easy to forget but important to wash?",
              options: [
                { id: "a", label: "Underarms, feet, and private areas.", correct: true },
                { id: "b", label: "Only your hands." },
                { id: "c", label: "None — rinsing with water is enough." },
              ],
              explanation:
                "Soap matters most in places that sweat or trap dirt, like your underarms, feet, behind your ears, and private areas.",
            },
          ],
        },
      ],
    },
    {
      title: "Looking and Feeling Fresh",
      summary: "Small daily habits that help you feel clean and ready.",
      lessons: [
        {
          slug: "staying-fresh",
          title: "Staying Fresh All Day",
          minutes: "5 min",
          summary: "Using deodorant and handling body odor with confidence.",
          intro:
            "When you get older, your body sweats more, and sweat can cause body odor. This is normal. Deodorant and clean clothes help you stay fresh all day.",
          objectives: [
            "Understand why body odor happens.",
            "Know how and when to use deodorant.",
          ],
          sections: [
            {
              heading: "Why we use deodorant",
              paragraphs: [
                "Sweat by itself does not smell. The smell comes when sweat mixes with germs on your skin. Deodorant helps stop the smell. Antiperspirant also helps you sweat less.",
              ],
            },
            {
              heading: "How to use deodorant",
              bullets: [
                { label: "Step 1.", body: "Use deodorant after your shower, when your underarms are clean and dry." },
                { label: "Step 2.", body: "Put it on each underarm. A few swipes is enough." },
                { label: "Step 3.", body: "Let it dry for a few seconds before you get dressed." },
              ],
              callout: {
                title: "Sensory tip",
                body: "Deodorant comes in many forms — solid, gel, spray, and roll-on. If one type feels sticky or cold, try another. Unscented kinds are good if smells bother you.",
                tone: "info",
              },
            },
            {
              heading: "Other ways to stay fresh",
              checklist: [
                "Put on clean clothes each day.",
                "Change your socks and underwear daily.",
                "Wash your face if it gets oily or sweaty.",
                "Keep deodorant in your bag for long or hot days.",
              ],
            },
          ],
          supporterNote:
            "Body odor can be a sensitive topic. Keep it matter-of-fact and private, never teasing. Let the learner choose the deodorant type and scent — buy-in matters more than the product.",
          check: [
            {
              prompt: "When is the best time to put on deodorant?",
              options: [
                { id: "a", label: "After a shower, on clean, dry underarms.", correct: true },
                { id: "b", label: "Only at night before bed." },
                { id: "c", label: "Right after you exercise, on sweaty skin." },
              ],
              explanation:
                "Deodorant works best on clean, dry skin — usually right after your shower and before you get dressed.",
            },
          ],
        },
        {
          slug: "clean-clothes-and-dressing",
          title: "Clean Clothes and Getting Dressed",
          minutes: "5 min",
          summary: "Picking clean clothes and dressing for the day or the weather.",
          intro:
            "Clean clothes help you feel fresh and make a good impression. Picking clothes can feel tricky. A few simple checks make it easier.",
          objectives: [
            "Tell if clothes are clean or need washing.",
            "Choose clothes that fit the weather and the day.",
          ],
          sections: [
            {
              heading: "Is it clean?",
              paragraphs: [
                "Before you wear something, do a quick check.",
              ],
              bullets: [
                { label: "Look.", body: "Are there stains, spots, or marks?" },
                { label: "Smell.", body: "Does it smell fresh? If it smells like sweat, it needs a wash." },
                { label: "Underwear and socks.", body: "Always put on a clean pair every day." },
              ],
            },
            {
              heading: "Dress for the day",
              paragraphs: [
                "Think about two things: the weather and what you are doing.",
              ],
              checklist: [
                "Cold day? Add a sweater or jacket.",
                "Hot day? Wear lighter clothes.",
                "Going to work? Wear what your job asks for.",
                "Rainy day? Bring a jacket or umbrella.",
              ],
            },
            {
              heading: "Comfort matters",
              paragraphs: [
                "Clothes should feel okay on your body. If tags, seams, or tight clothes bother you, that is a real thing — not a small thing.",
              ],
              callout: {
                title: "Sensory tip",
                body: "You can cut out scratchy tags, choose soft fabrics, or buy seamless socks. Comfortable clothes are easier to wear all day.",
                tone: "info",
              },
            },
          ],
          supporterNote:
            "Laying out clothes the night before removes a stressful morning decision. Honor sensory needs (fabric, tags, fit) — comfort drives consistency, and there are clothing options designed for sensory sensitivity.",
          check: [
            {
              prompt: "How can you tell if a shirt needs to be washed?",
              options: [
                { id: "a", label: "Check for stains and smell it for sweat.", correct: true },
                { id: "b", label: "Only wash it if it is ripped." },
                { id: "c", label: "Clothes never need washing." },
              ],
              explanation:
                "A quick look for stains and a smell check for sweat tells you if clothes are clean. Underwear and socks should be changed every day.",
            },
          ],
        },
        {
          slug: "washing-your-hands",
          title: "Washing Your Hands",
          minutes: "4 min",
          summary: "When and how to wash your hands to stay healthy.",
          intro:
            "Washing your hands is one of the best ways to stay healthy. It washes off germs that can make you sick. It only takes about 20 seconds.",
          objectives: [
            "Know the key times to wash your hands.",
            "Follow the steps to wash your hands well.",
          ],
          sections: [
            {
              heading: "When to wash your hands",
              checklist: [
                "Before you eat or cook.",
                "After you use the bathroom.",
                "After you blow your nose, cough, or sneeze.",
                "After you touch trash or something dirty.",
                "When you come home from being out.",
              ],
            },
            {
              heading: "Steps to wash your hands",
              bullets: [
                { label: "Step 1.", body: "Wet your hands with water." },
                { label: "Step 2.", body: "Add soap and rub your hands together." },
                { label: "Step 3.", body: "Scrub for about 20 seconds. Get the backs, between your fingers, and under your nails." },
                { label: "Step 4.", body: "Rinse the soap off with water." },
                { label: "Step 5.", body: "Dry your hands with a clean towel." },
              ],
              callout: {
                title: "Easy timer",
                body: "Singing 'Happy Birthday' two times takes about 20 seconds. That's the perfect amount of time to scrub.",
                tone: "tip",
              },
            },
            {
              heading: "No sink nearby?",
              paragraphs: [
                "When you can't get to a sink, hand sanitizer works for a quick clean. Rub it in until your hands are dry. Soap and water are still best when you can use them.",
              ],
            },
          ],
          supporterNote:
            "Tie hand-washing to specific, concrete moments (before lunch, after the bathroom) rather than 'when dirty.' Routines anchored to events are easier to remember than abstract rules.",
          check: [
            {
              prompt: "About how long should you scrub your hands with soap?",
              options: [
                { id: "a", label: "About 20 seconds.", correct: true },
                { id: "b", label: "One second." },
                { id: "c", label: "A full five minutes." },
              ],
              explanation:
                "Scrub for about 20 seconds — about as long as singing 'Happy Birthday' twice — and don't forget between your fingers and under your nails.",
            },
          ],
        },
      ],
    },
    {
      title: "Making It Stick",
      summary: "Turn these steps into a routine that works on any day.",
      lessons: [
        {
          slug: "build-your-routine",
          title: "Building Your Own Routine",
          minutes: "6 min",
          summary: "Put the steps together into a morning and night routine.",
          intro:
            "A routine is the same set of steps you do in the same order. Routines make self-care easier because you don't have to think hard about what comes next. Your body just knows.",
          objectives: [
            "Build a simple morning and night routine.",
            "Make a plan for hard or low-energy days.",
          ],
          sections: [
            {
              heading: "Why routines help",
              paragraphs: [
                "When you do the same steps in the same order, they turn into habits. Habits feel automatic, like brushing your teeth without even thinking about it.",
                "Routines also lower stress. You always know what comes next.",
              ],
            },
            {
              heading: "A sample morning routine",
              bullets: [
                { label: "1.", body: "Use the bathroom and wash your hands." },
                { label: "2.", body: "Brush your teeth." },
                { label: "3.", body: "Shower (or wash your face if you showered last night)." },
                { label: "4.", body: "Put on deodorant." },
                { label: "5.", body: "Get dressed in clean clothes." },
              ],
            },
            {
              heading: "A sample night routine",
              bullets: [
                { label: "1.", body: "Put dirty clothes in the laundry." },
                { label: "2.", body: "Shower if you didn't in the morning." },
                { label: "3.", body: "Brush your teeth." },
                { label: "4.", body: "Lay out clean clothes for tomorrow." },
              ],
              callout: {
                title: "Make it yours",
                body: "Your routine does not have to look like this one. Pick the order that works for you, and keep it the same each day so it becomes a habit.",
                tone: "tip",
              },
            },
            {
              heading: "Plan for hard days",
              paragraphs: [
                "Some days you feel tired, sad, or overwhelmed. On those days, do the most important steps and keep it simple.",
              ],
              checklist: [
                "Pick your 'must-do' steps (like teeth and deodorant).",
                "Use a checklist or phone reminder.",
                "Ask a support person if you need help.",
                "Be kind to yourself. Some is better than none.",
              ],
            },
          ],
          supporterNote:
            "Co-create the routine with the learner instead of handing them one. A printed or phone-based visual checklist supports independence. On hard days, shrink the routine to a 'must-do' core rather than skipping it entirely — consistency builds the habit.",
          check: [
            {
              prompt: "Why does doing your steps in the same order help?",
              options: [
                { id: "a", label: "It turns the steps into habits, so they feel automatic.", correct: true },
                { id: "b", label: "It makes self-care take much longer." },
                { id: "c", label: "It only works for other people, not you." },
              ],
              explanation:
                "Doing the same steps in the same order builds habits. Habits feel automatic and lower stress because you always know what comes next.",
            },
            {
              prompt: "What is a good plan for a hard, low-energy day?",
              options: [
                { id: "a", label: "Do your most important steps and keep it simple.", correct: true },
                { id: "b", label: "Skip everything for the whole week." },
                { id: "c", label: "Try to do twice as much as usual." },
              ],
              explanation:
                "On hard days, focus on your 'must-do' steps and ask for help if you need it. Some self-care is always better than none.",
            },
          ],
        },
      ],
    },
  ],
};
