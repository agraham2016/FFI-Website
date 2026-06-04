export type FaqCategory = {
  title: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    title: "Getting started",
    items: [
      {
        question: "Who does Foundation for Independence serve?",
        answer:
          "FFI serves individuals with intellectual and developmental disabilities (I/DD), with a particular focus on transition-age young adults — those moving from school-based services into adulthood. We work with autistic young adults, individuals with intellectual disability, and others who benefit from person-centered Supported Living and Employment Services.",
      },
      {
        question: "How do I begin services with FFI?",
        answer:
          "Reach out through our Contact page, by phone, or by email. We'll set up a conversation to learn about the individual's goals, current supports, and how FFI can fit into the broader care plan. From there we coordinate with families, guardians, and DDD Support Coordinators to design a plan that fits.",
      },
      {
        question: "Do you accept DDD funding?",
        answer:
          "Yes. FFI is a DDD-authorized provider, and our services are aligned with DDD service definitions, AHCCCS requirements, and Home and Community-Based Services (HCBS) principles. We work alongside Support Coordinators to deliver services within those guidelines.",
      },
      {
        question: "Where do you provide services?",
        answer:
          "We deliver services across Pinal, Maricopa, Navajo, and Apache Counties in Arizona. See our Service Areas page for the cities we serve.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        question: "What's the difference between Supported Living and Employment Services?",
        answer:
          "Habilitation Supported Living (HASL) focuses on the skills needed for daily life — household routines, hygiene, budgeting, community access, and self-advocacy. Employment Services focus on preparing for, obtaining, and maintaining meaningful work, and include STEP (Pathways to Employment), Individual Supported Employment (ISE), and Group Supported Employment (GSE).",
      },
      {
        question: "What is STEP, ISE, and GSE?",
        answer:
          "STEP (Pathways to Employment) is pre-employment support — exploring interests, building soft skills, and practicing workplace expectations. ISE (Individual Supported Employment) is one-to-one job coaching in a community workplace. GSE (Group Supported Employment) supports small-group employment with on-site coaching. Members may receive STEP first, then move into ISE or GSE based on readiness and authorization.",
      },
      {
        question: "Are services delivered in the home or in the community?",
        answer:
          "Both. Supported Living happens in member-controlled home and community settings. Employment Services may take place in workplaces, community-based vocational settings, or wherever real-world skill-building is most useful. We don't operate facility-based programs — services are designed to mirror real adult life.",
      },
      {
        question: "How are services individualized?",
        answer:
          "Every plan starts with the individual — their strengths, goals, preferences, and the support of their family or guardians. Services are designed around each member's Individual Support Plan (ISP) and adjust over time as skills and independence grow.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        question: "How are families and guardians involved?",
        answer:
          "We see families and guardians as partners. We communicate regularly, coordinate with the broader care team and DDD Support Coordinator, and welcome input throughout the planning and delivery of services.",
      },
      {
        question: "Do families have a say in who supports their loved one?",
        answer:
          "Yes. Member choice is foundational to our work. Families are encouraged to share preferences about staffing — communication styles, personalities, and cultural considerations. When appropriate, members may meet prospective staff and participate in matching.",
      },
      {
        question: "What does progress look like?",
        answer:
          "Progress varies by individual. It might mean cooking a first meal independently, riding a bus solo, or holding a job for the first time. We track progress against personalized goals and celebrate growth at every step.",
      },
      {
        question: "Are you currently hiring Direct Support Professionals?",
        answer:
          "We're growing our team carefully, prioritizing alignment with our person-centered approach. We require at least two years of experience supporting a person with a disability — at home, at school, as a sibling, as a volunteer, or professionally — and we provide all required certifications on top of that. See our Join Our Team page to learn more or express interest.",
      },
      {
        question: "Can a member change providers if it's not the right fit?",
        answer:
          "Absolutely. Members may request a change of provider at any time, and we will support transitions respectfully and without unnecessary delay to ensure continuity of care.",
      },
    ],
  },
];
