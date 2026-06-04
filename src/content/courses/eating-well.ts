import { Apple } from "lucide-react";
import type { Course } from "./types";

export const eatingWell: Course = {
  slug: "eating-well",
  track: "supported-living",
  title: "Eating Well",
  shortTitle: "Eating Well",
  level: "Core skills",
  icon: Apple,
  description:
    "Learn what a balanced meal looks like, plan simple meals, shop for food, and make easy snacks — at your own pace and your own taste.",
  intro:
    "Food gives your body energy. Eating well helps you feel good, think clearly, and stay healthy. This course keeps it simple. You don't have to be a chef — you just need a few basic skills. Go step by step.",
  audience: "Young adults learning to feed themselves with more independence.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Know the main food groups and what a balanced plate looks like.",
    "Plan a few simple meals for the week.",
    "Make a shopping list and find food at the store.",
    "Make easy meals and snacks safely.",
    "Drink enough water and notice when you are hungry or full.",
  ],
  modules: [
    {
      title: "Food Basics",
      summary: "What your body needs and what a good meal looks like.",
      lessons: [
        {
          slug: "balanced-plate",
          title: "What a Balanced Plate Looks Like",
          minutes: "5 min",
          summary: "The food groups and how to fill your plate.",
          intro:
            "A balanced meal has a mix of foods. You don't need to count anything. A simple way to picture it is to think of your plate in parts.",
          objectives: [
            "Name the main food groups.",
            "Picture how to fill a balanced plate.",
          ],
          sections: [
            {
              heading: "The food groups",
              bullets: [
                { label: "Fruits and vegetables.", body: "Like apples, bananas, carrots, and broccoli. They give vitamins." },
                { label: "Grains.", body: "Like bread, rice, and pasta. They give energy." },
                { label: "Protein.", body: "Like chicken, eggs, beans, and fish. They help your body grow and repair." },
                { label: "Dairy.", body: "Like milk, cheese, and yogurt. They help your bones." },
              ],
            },
            {
              heading: "Fill your plate",
              paragraphs: [
                "An easy way to build a meal: fill half your plate with fruits and vegetables, one quarter with protein, and one quarter with grains.",
              ],
              callout: {
                title: "Easy picture",
                body: "Half the plate = colorful fruits and veggies. One quarter = protein. One quarter = grains. Add a glass of water.",
                tone: "tip",
              },
            },
            {
              heading: "Treats are okay too",
              paragraphs: [
                "You can still enjoy treats like chips, candy, or soda. The idea is balance — most meals have a mix of healthy foods, and treats are smaller and less often.",
              ],
            },
          ],
          supporterNote:
            "Keep nutrition non-judgmental. Many autistic people have food sensitivities and strong preferences; pushing 'good vs. bad' foods can backfire. Aim for balance and gradual variety rather than perfect meals, and respect texture/taste needs.",
          check: [
            {
              prompt: "A simple way to build a balanced plate is to fill half of it with what?",
              options: [
                { id: "a", label: "Fruits and vegetables.", correct: true },
                { id: "b", label: "Only candy." },
                { id: "c", label: "Nothing at all." },
              ],
              explanation:
                "Fill half your plate with fruits and vegetables, one quarter with protein, and one quarter with grains. Add a glass of water.",
            },
          ],
        },
        {
          slug: "hunger-and-water",
          title: "Hunger, Fullness, and Water",
          minutes: "4 min",
          summary: "Notice your body's signals and stay hydrated.",
          intro:
            "Your body sends signals when it needs food or water. Learning to notice these signals helps you eat the right amount and feel your best.",
          objectives: [
            "Notice signs of hunger and fullness.",
            "Know how much water to drink.",
          ],
          sections: [
            {
              heading: "Signs you are hungry",
              checklist: [
                "Your stomach feels empty or growls.",
                "You feel low on energy or grumpy.",
                "It's hard to focus.",
              ],
            },
            {
              heading: "Signs you are full",
              paragraphs: [
                "Eat slowly so your body has time to tell you it's full. Stop when you feel comfortable, not stuffed. It's okay to save the rest for later.",
              ],
            },
            {
              heading: "Drink water",
              paragraphs: [
                "Water keeps your body working well. Most people feel best with about 6 to 8 cups a day. You need more on hot days or after exercise.",
              ],
              callout: {
                title: "Easy tip",
                body: "Keep a water bottle with you. Take a few sips when you wake up, with each meal, and before bed. If plain water feels boring, add a slice of fruit.",
                tone: "info",
              },
            },
          ],
          supporterNote:
            "Interoception — sensing internal signals like hunger, fullness, and thirst — can be different for autistic individuals. Some need external cues (scheduled meals, a water bottle, phone reminders) rather than relying on body signals alone.",
          check: [
            {
              prompt: "About how much water do most people need each day?",
              options: [
                { id: "a", label: "About 6 to 8 cups.", correct: true },
                { id: "b", label: "None at all." },
                { id: "c", label: "One cup a week." },
              ],
              explanation:
                "Most people feel best with about 6 to 8 cups of water a day — and more on hot days or after exercise.",
            },
          ],
        },
      ],
    },
    {
      title: "Meals in Real Life",
      summary: "Plan, shop, and make simple food safely.",
      lessons: [
        {
          slug: "plan-and-shop",
          title: "Planning Meals and Shopping",
          minutes: "6 min",
          summary: "Pick meals for the week and make a shopping list.",
          intro:
            "A little planning saves money and stress. When you know what you'll eat, shopping is faster and you waste less food.",
          objectives: [
            "Plan a few simple meals for the week.",
            "Make a shopping list from your plan.",
          ],
          sections: [
            {
              heading: "Pick a few meals",
              paragraphs: [
                "You don't need a different meal every day. Pick 3 or 4 meals you like and repeat them. Simple is good.",
              ],
              bullets: [
                { label: "Breakfast idea.", body: "Cereal with milk and a banana." },
                { label: "Lunch idea.", body: "A sandwich, baby carrots, and an apple." },
                { label: "Dinner idea.", body: "Pasta with sauce and a side of vegetables." },
              ],
            },
            {
              heading: "Make a shopping list",
              paragraphs: [
                "Write down everything your meals need. Check what you already have first, so you don't buy it twice.",
              ],
              checklist: [
                "List the food for each meal.",
                "Add snacks and drinks.",
                "Add basics you're out of, like bread or milk.",
                "Bring the list (or put it on your phone).",
              ],
            },
            {
              heading: "At the store",
              paragraphs: [
                "Stores are sorted into sections — fruits and veggies, bread, frozen food, and so on. Signs hang above the aisles to help you find things.",
              ],
              callout: {
                title: "Sensory tip",
                body: "Stores can be loud and bright. Shopping at a quieter time, wearing headphones, or going with a list so you can move quickly can make it easier.",
                tone: "info",
              },
            },
          ],
          supporterNote:
            "Grocery stores can be sensory-heavy (lights, noise, crowds). Suggest off-peak times, a clear list, and a familiar route through the store. Pickup/delivery options are valid supports, not failures.",
          check: [
            {
              prompt: "Why is it smart to check what food you already have before shopping?",
              options: [
                { id: "a", label: "So you don't buy something twice and waste money.", correct: true },
                { id: "b", label: "There is no reason to check." },
                { id: "c", label: "So you can buy only candy." },
              ],
              explanation:
                "Checking what you already have keeps you from buying it again. Planning meals and bringing a list makes shopping faster and cheaper.",
            },
          ],
        },
        {
          slug: "simple-meals-safely",
          title: "Making Simple Meals Safely",
          minutes: "6 min",
          summary: "Easy meals and basic kitchen safety.",
          intro:
            "You can make tasty food with just a few steps. The most important thing is to stay safe in the kitchen. Let's start with easy meals and key safety rules.",
          objectives: [
            "Make a few no-cook or low-cook meals.",
            "Follow basic kitchen safety rules.",
          ],
          sections: [
            {
              heading: "Easy meals to start",
              bullets: [
                { label: "No-cook.", body: "Sandwiches, yogurt with fruit, cereal, or a salad." },
                { label: "Microwave.", body: "Oatmeal, frozen meals, or leftovers." },
                { label: "Stovetop.", body: "Scrambled eggs, pasta, or grilled cheese (with an adult's help at first)." },
              ],
            },
            {
              heading: "Kitchen safety rules",
              checklist: [
                "Wash your hands before you cook.",
                "Turn pot handles toward the back of the stove.",
                "Use oven mitts for hot pans and dishes.",
                "Turn off the stove and oven when you're done.",
                "Keep a towel away from the burner so it can't catch fire.",
              ],
              callout: {
                title: "Stay safe",
                body: "Never leave the stove on when you walk away. If a fire ever starts, get out and call for help. It's okay to ask someone to cook with you while you learn.",
                tone: "note",
              },
            },
            {
              heading: "Keep food safe to eat",
              paragraphs: [
                "Put cold food (like milk and meat) in the fridge right away. Check the date on food. If something smells bad or looks moldy, throw it out.",
              ],
            },
          ],
          supporterNote:
            "Build cooking skills gradually, starting with no-cook and microwave meals before stovetop. Practice safety steps hands-on. A laminated checklist by the stove and supervised practice build real independence without overwhelming.",
          check: [
            {
              prompt: "What should you always do before you start cooking?",
              options: [
                { id: "a", label: "Wash your hands.", correct: true },
                { id: "b", label: "Leave the stove on and walk away." },
                { id: "c", label: "Put a towel on the hot burner." },
              ],
              explanation:
                "Washing your hands keeps food clean and safe. Other key rules: use oven mitts, turn off the stove when done, and never leave it on while you walk away.",
            },
          ],
        },
      ],
    },
  ],
};
