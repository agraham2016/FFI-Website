import { Users } from "lucide-react";
import type { Course } from "./types";

export const healthyRelationships: Course = {
  slug: "healthy-relationships",
  track: "supported-living",
  title: "Healthy Relationships",
  shortTitle: "Relationships",
  level: "Core skills",
  icon: Users,
  description:
    "Understand the different kinds of relationships, what makes them healthy, how to set boundaries, and how to make and keep good friends — online and in person.",
  intro:
    "People matter. Friends, family, coworkers, and partners are part of a full life. This course explains what healthy relationships look like, how to set boundaries, and how to connect with others safely. There are no grades — go at your own pace.",
  audience: "Young adults learning to build safe, healthy connections.",
  readingLevel: "Plain language. Short steps. Built to be used at your own pace.",
  outcomes: [
    "Name the different kinds of relationships in your life.",
    "Tell the difference between healthy and unhealthy relationships.",
    "Set and respect personal boundaries and consent.",
    "Make and keep friends.",
    "Communicate and listen well.",
    "Stay safe with people online and in person.",
  ],
  modules: [
    {
      title: "Understanding Relationships",
      summary: "What relationships are and what makes them healthy.",
      lessons: [
        {
          slug: "types-of-relationships",
          title: "Kinds of Relationships",
          minutes: "4 min",
          summary: "The different people in your life and how they fit.",
          intro:
            "You have different kinds of relationships with different people. Knowing the difference helps you act in ways that fit each one.",
          objectives: [
            "Name the main kinds of relationships.",
            "Understand that different relationships have different closeness.",
          ],
          sections: [
            {
              heading: "Kinds of relationships",
              bullets: [
                { label: "Family.", body: "The people you live with or are related to." },
                { label: "Friends.", body: "People you choose to spend time with and trust." },
                { label: "Coworkers.", body: "People you work with. Friendly, but mostly about the job." },
                { label: "Acquaintances.", body: "People you know a little, like a neighbor or a clerk." },
                { label: "Partners.", body: "Someone you date or are in a romantic relationship with." },
              ],
            },
            {
              heading: "Different closeness, different sharing",
              paragraphs: [
                "You share more with close people, like family and good friends. You share less with people you barely know.",
                "For example, you might tell a best friend about a hard day, but just say 'I'm fine' to a clerk at a store. Both are okay.",
              ],
              callout: {
                title: "Remember",
                body: "It takes time to get close to someone. Trust is built slowly, as a person shows they are kind and safe.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Concrete categories help clarify social 'rules' that are often unspoken. Discuss how sharing and closeness differ by relationship type. Use real people in the learner's life as examples rather than abstract scenarios.",
          check: [
            {
              prompt: "Who would you usually share the most personal things with?",
              options: [
                { id: "a", label: "A close friend or family member you trust.", correct: true },
                { id: "b", label: "A clerk you just met at a store." },
                { id: "c", label: "Everyone you pass on the street." },
              ],
              explanation:
                "You share more with close, trusted people and less with people you barely know. Trust is built slowly over time.",
            },
          ],
        },
        {
          slug: "healthy-vs-unhealthy",
          title: "Healthy and Unhealthy Relationships",
          minutes: "5 min",
          summary: "Signs of a good relationship and signs of a bad one.",
          intro:
            "A healthy relationship makes you feel safe and respected. An unhealthy one makes you feel scared, used, or small. Knowing the signs helps you choose good people.",
          objectives: [
            "Name signs of a healthy relationship.",
            "Name signs of an unhealthy relationship.",
          ],
          sections: [
            {
              heading: "Signs of a healthy relationship",
              checklist: [
                "You feel safe and respected.",
                "You can say no, and they listen.",
                "They are honest with you.",
                "You both give and take — it's not one-sided.",
                "You feel okay being yourself.",
              ],
            },
            {
              heading: "Signs of an unhealthy relationship",
              bullets: [
                { label: "Control.", body: "They try to tell you what to do, who to see, or what to wear." },
                { label: "Disrespect.", body: "They put you down, tease you in a mean way, or ignore your no." },
                { label: "Pressure.", body: "They make you do things you don't want to do." },
                { label: "Using you.", body: "They only want money, favors, or things from you." },
              ],
              callout: {
                title: "Trust your feelings",
                body: "If someone makes you feel scared, confused, or bad about yourself a lot, that is a warning sign. You deserve to be treated well.",
                tone: "note",
              },
            },
            {
              heading: "It's okay to get help",
              paragraphs: [
                "If a relationship feels unsafe, tell a trusted person — a family member, a staff person, or another adult you trust. You don't have to handle it alone.",
              ],
            },
          ],
          supporterNote:
            "People with disabilities face higher rates of abuse and manipulation. Teach concrete warning signs and that it's always okay to report discomfort. Reinforce that the learner has the right to be treated with respect and to seek help.",
          check: [
            {
              prompt: "Which is a sign of a healthy relationship?",
              options: [
                { id: "a", label: "You can say no, and the other person listens.", correct: true },
                { id: "b", label: "They tell you who you are allowed to see." },
                { id: "c", label: "They only want things from you." },
              ],
              explanation:
                "Healthy relationships feel safe and respectful, and your no is heard. Control, pressure, and being used are warning signs of an unhealthy one.",
            },
          ],
        },
        {
          slug: "boundaries-and-consent",
          title: "Boundaries and Consent",
          minutes: "5 min",
          summary: "Your right to say yes or no, and respecting others.",
          intro:
            "A boundary is a limit that keeps you comfortable and safe. Consent means giving or asking for a clear yes before doing something. Both protect you and the people around you.",
          objectives: [
            "Understand what a personal boundary is.",
            "Understand what consent means.",
          ],
          sections: [
            {
              heading: "Your boundaries",
              paragraphs: [
                "A boundary is your personal limit. It can be about your body, your time, your things, or your feelings.",
              ],
              bullets: [
                { label: "Body.", body: "You decide who can hug or touch you. It's okay to say, 'I don't like hugs.'" },
                { label: "Time.", body: "You can say, 'I need some alone time.'" },
                { label: "Things.", body: "You can say no to lending money or your phone." },
              ],
            },
            {
              heading: "What consent means",
              paragraphs: [
                "Consent means a clear yes, given freely. Before you touch, borrow, or share, ask. And others should ask you.",
                "If someone says no, or seems unsure, the answer is no. A real yes is not given because of pressure or fear.",
              ],
              callout: {
                title: "Key idea",
                body: "You can change your mind at any time, even if you said yes before. So can other people. 'No' is a full answer — you don't have to explain it.",
                tone: "tip",
              },
            },
            {
              heading: "Respecting others",
              paragraphs: [
                "Just like you have boundaries, so does everyone else. Ask before hugging, borrowing, or sharing. Listen when someone says no.",
              ],
            },
          ],
          supporterNote:
            "Teach bodily autonomy and consent explicitly and matter-of-factly — these are safety skills. Model asking permission and accepting 'no.' Reinforce that the learner can withdraw consent anytime and never owes anyone an explanation for a boundary.",
          check: [
            {
              prompt: "If someone says no or seems unsure, what does that mean?",
              options: [
                { id: "a", label: "The answer is no — you stop and respect it.", correct: true },
                { id: "b", label: "You should keep asking until they give in." },
                { id: "c", label: "It means yes." },
              ],
              explanation:
                "Consent is a clear, free yes. If someone says no or seems unsure, the answer is no. People can also change their mind at any time.",
            },
          ],
        },
      ],
    },
    {
      title: "Connecting with Others",
      summary: "Make friends, communicate well, and stay safe.",
      lessons: [
        {
          slug: "making-friends",
          title: "Making and Keeping Friends",
          minutes: "5 min",
          summary: "How to meet people and grow a friendship.",
          intro:
            "Friends make life better. Making friends can feel hard, but it is a skill you can learn. It starts with small steps and shared interests.",
          objectives: [
            "Know simple ways to meet people.",
            "Know how to grow and keep a friendship.",
          ],
          sections: [
            {
              heading: "Where to meet people",
              bullets: [
                { label: "Shared interests.", body: "Clubs, classes, games, or groups about things you like." },
                { label: "Work or school.", body: "People you see often are easier to get to know." },
                { label: "Programs.", body: "Community or disability programs that bring people together." },
              ],
            },
            {
              heading: "Starting a friendship",
              checklist: [
                "Say hi and use the person's name.",
                "Ask a question about them, like what they like to do.",
                "Find something you both enjoy.",
                "Suggest doing that thing together.",
              ],
            },
            {
              heading: "Keeping a friendship",
              paragraphs: [
                "Friendships grow when you stay in touch and treat each other well. Text or call sometimes. Show up when you say you will. Listen and care about their life, too.",
              ],
              callout: {
                title: "Be patient with yourself",
                body: "Not everyone will become a close friend, and that's normal. It can take time to find your people. Keep trying — one good friend is worth a lot.",
                tone: "tip",
              },
            },
          ],
          supporterNote:
            "Shared-interest settings lower the social load and give natural conversation topics. Break friend-making into concrete steps. Normalize that not every interaction leads to friendship and that quality matters more than quantity.",
          check: [
            {
              prompt: "What is a good place to meet possible friends?",
              options: [
                { id: "a", label: "A club or group about something you enjoy.", correct: true },
                { id: "b", label: "Nowhere — friends just appear on their own." },
                { id: "c", label: "Only by waiting alone at home." },
              ],
              explanation:
                "Shared interests give you something to talk about and do together. Clubs, classes, work, and programs are good places to meet people.",
            },
          ],
        },
        {
          slug: "communication-and-listening",
          title: "Talking and Listening",
          minutes: "5 min",
          summary: "Have a back-and-forth conversation and really listen.",
          intro:
            "Good conversations go back and forth, like a game of catch. You share a little, then you listen, then they share. Here are simple ways to do it well.",
          objectives: [
            "Take turns in a conversation.",
            "Show someone you are listening.",
          ],
          sections: [
            {
              heading: "Take turns",
              paragraphs: [
                "A conversation is a two-way street. Share something, then ask the other person a question. This keeps it going and shows you care.",
              ],
              bullets: [
                { label: "Share.", body: "Say a little about yourself or your day." },
                { label: "Ask.", body: "Ask them a question back, like 'How about you?'" },
                { label: "Listen.", body: "Let them finish before you talk." },
              ],
            },
            {
              heading: "Show you're listening",
              checklist: [
                "Face the person and look toward them (eye contact is good, but only as much as feels okay).",
                "Nod or say 'mm-hm' so they know you hear them.",
                "Ask about what they said.",
                "Wait for a pause before you speak.",
              ],
              callout: {
                title: "It's okay to be you",
                body: "Eye contact can feel hard for some people. You can look near someone's face instead. It's also okay to say, 'I listen better when I'm not looking right at you.' Real friends understand.",
                tone: "info",
              },
            },
            {
              heading: "If you're not sure",
              paragraphs: [
                "It's okay to ask, 'What do you mean?' if you don't understand. It's also okay to say you need a moment to think. Clear talk is better than guessing.",
              ],
            },
          ],
          supporterNote:
            "Affirm that neurodivergent communication styles are valid — eye contact and small talk can be effortful. Teach turn-taking and active-listening cues as tools, not rules, and support self-advocacy (e.g., asking for clarification).",
          check: [
            {
              prompt: "What makes a conversation go well?",
              options: [
                { id: "a", label: "Taking turns — share, then listen, then ask.", correct: true },
                { id: "b", label: "Only talking about yourself the whole time." },
                { id: "c", label: "Never letting the other person speak." },
              ],
              explanation:
                "Good conversations go back and forth. Share a little, ask them a question, and really listen before you speak again.",
            },
          ],
        },
        {
          slug: "staying-safe",
          title: "Staying Safe with People",
          minutes: "5 min",
          summary: "Protect yourself online and in person.",
          intro:
            "Most people are kind, but some are not. A few safety rules help you protect yourself — online and in person — while still enjoying friendships.",
          objectives: [
            "Follow basic safety rules with new people.",
            "Stay safe online and protect your private info.",
          ],
          sections: [
            {
              heading: "Online safety",
              checklist: [
                "Don't share your address, passwords, or money.",
                "Be careful — people online may not be who they say.",
                "Never agree to meet someone alone from the internet.",
                "Tell a trusted person if someone online makes you uneasy.",
              ],
            },
            {
              heading: "Meeting someone new in person",
              bullets: [
                { label: "Public place.", body: "Meet in a public spot, like a coffee shop, not a private home." },
                { label: "Tell someone.", body: "Let a trusted person know where you'll be and when." },
                { label: "Have a way home.", body: "Plan your ride before you go." },
              ],
              callout: {
                title: "Trust your gut",
                body: "If something feels wrong, it's okay to leave. You never have to stay to be polite. Call a trusted person if you need help.",
                tone: "note",
              },
            },
            {
              heading: "Money and favors",
              paragraphs: [
                "Be careful if someone you just met asks for money, passwords, or big favors. Real friends don't pressure you for these things. It's okay to say no and to ask a trusted person for advice.",
              ],
            },
          ],
          supporterNote:
            "Online exploitation and financial scams disproportionately target people with disabilities. Teach concrete rules (no sharing of personal/financial info, public meetups, telling a trusted person) and validate that leaving an uncomfortable situation is always allowed.",
          check: [
            {
              prompt: "You're meeting someone new from the internet. What's the safest plan?",
              options: [
                { id: "a", label: "Meet in a public place and tell a trusted person where you'll be.", correct: true },
                { id: "b", label: "Go alone to their house without telling anyone." },
                { id: "c", label: "Send them your address and passwords first." },
              ],
              explanation:
                "Meet in public, tell someone you trust, and plan your ride. Never share private info like your address or passwords, and trust your gut if something feels wrong.",
            },
          ],
        },
      ],
    },
  ],
};
