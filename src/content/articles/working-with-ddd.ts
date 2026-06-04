import type { Article } from "./types";

export const workingWithDdd: Article = {
  slug: "working-with-ddd",
  title: "Working with DDD: A Plain-Language Overview",
  description:
    "What the Arizona Division of Developmental Disabilities does, who's involved, and how to get the most from your service plan.",
  category: "Family Guide",
  readTime: "8 min read",
  date: "January 22, 2026",
  intro:
    "For families navigating Arizona's Division of Developmental Disabilities (DDD) for the first time, the system can feel like an alphabet soup — DDD, AHCCCS, HCBS, ISP, HASL, STEP, ISE, GSE. Here's a plain-language overview of what it all means and how the pieces fit together.",
  sections: [
    {
      heading: "What DDD is",
      paragraphs: [
        "The Arizona Division of Developmental Disabilities (DDD) is a division within the state's Medicaid agency, AHCCCS. DDD is responsible for funding and coordinating services for eligible children and adults with developmental disabilities — including autism, intellectual disability, cerebral palsy, and epilepsy.",
        "DDD itself doesn't usually deliver services directly. It contracts with providers — like Foundation for Independence — who deliver the actual day-to-day supports.",
      ],
    },
    {
      heading: "Who you'll work with",
      bullets: [
        {
          label: "DDD Support Coordinator.",
          body: "Your primary point of contact within DDD. They help develop the Individual Support Plan, coordinate services, and connect you with providers. The Support Coordinator is your most important relationship within the system.",
        },
        {
          label: "Support Team.",
          body: "The broader group involved in planning — the individual, family or guardian, Support Coordinator, providers, and any other relevant people the individual wants involved.",
        },
        {
          label: "Service providers.",
          body: "Organizations authorized to deliver specific services — Supported Living, Employment, Day Treatment, Respite, and others. You generally have the right to choose your provider.",
        },
        {
          label: "Direct support staff.",
          body: "The people who actually work with the individual day-to-day — Direct Support Professionals (DSPs), Employment Specialists, supervisors, and others.",
        },
      ],
    },
    {
      heading: "The Individual Support Plan (ISP)",
      paragraphs: [
        "The Individual Support Plan is the central document in DDD-funded services. It describes the individual's goals, the supports they need, and the services that have been authorized to meet those goals.",
        "ISPs are reviewed at least annually, and they can be updated more often as needs and goals change. Everything a provider does should align with the ISP. If a provider is delivering services that aren't in the plan, that's a flag worth raising.",
      ],
      callout: {
        title: "Read the ISP",
        body: "Many families don't realize they can read the full ISP. You should. It's the document that drives everything else, and understanding it is one of the best forms of advocacy.",
      },
    },
    {
      heading: "Services available through DDD",
      paragraphs: [
        "DDD funds a wide range of Home and Community-Based Services (HCBS) — services delivered in homes and communities rather than in institutional settings. The exact mix varies by individual need and authorization.",
      ],
      bullets: [
        {
          label: "Habilitation Supported Living (HASL).",
          body: "Day-to-day skill-building in home and community — hygiene, meals, money, transit, community access.",
        },
        {
          label: "Pathways to Employment (STEP).",
          body: "Pre-employment supports — exploring work interests, building soft skills, preparing for community-based employment.",
        },
        {
          label: "Individual Supported Employment (ISE).",
          body: "One-to-one job coaching in a real community workplace.",
        },
        {
          label: "Group Supported Employment (GSE).",
          body: "Small-group employment with on-site coaching by qualified staff.",
        },
        {
          label: "Other services.",
          body: "Respite, attendant care, day treatment, transportation, and more — depending on need and authorization.",
        },
      ],
    },
    {
      heading: "How services get authorized",
      paragraphs: [
        "Services aren't automatic. They flow from a process: needs are identified, the Support Team discusses appropriate services, and the Support Coordinator submits authorization. Once authorized, services can begin with the chosen provider.",
        "Authorization is for specific service hours and types. A provider can only bill for what's authorized — which is why advocating clearly for the right level of support during ISP planning matters so much.",
      ],
    },
    {
      heading: "Choosing — and changing — a provider",
      paragraphs: [
        "You have the right to choose your service provider. You also have the right to change providers if the fit isn't right. A provider should support that transition respectfully and without delay.",
        "Choosing well is worth doing carefully. Ask about how a provider individualizes services. Ask how they communicate with families. Ask how supports fade as independence grows.",
      ],
    },
    {
      heading: "Common pitfalls — and how to avoid them",
      bullets: [
        {
          label: "Waiting too long to engage.",
          body: "Start working with DDD before school ends, not after. Adult services don't begin automatically.",
        },
        {
          label: "Treating the ISP as paperwork.",
          body: "It's the playbook for the next year of services. Read it. Question it. Shape it.",
        },
        {
          label: "Accepting a service that isn't a fit.",
          body: "If a service or provider isn't working, raise it with the Support Coordinator. You have options.",
        },
        {
          label: "Forgetting to advocate for the long view.",
          body: "Yearly ISPs can become incremental. Periodically zoom out — what does adulthood look like in five years? Are services moving toward that?",
        },
      ],
    },
    {
      heading: "A note on persistence",
      paragraphs: [
        "Like any complex public system, DDD can be slow, inconsistent, and confusing. That's not your fault — and it's not the fault of any one person inside it.",
        "Persistence pays. Polite, repeated, well-documented follow-up tends to move things. So does building a strong working relationship with your Support Coordinator and providers.",
        "You're not just a recipient of services. You're a partner in shaping them.",
      ],
    },
  ],
  takeaways: [
    "DDD funds services; providers deliver them. Both relationships matter.",
    "The Support Coordinator is your most important contact within DDD.",
    "The ISP is the playbook — read it, question it, shape it.",
    "Common services include HASL, STEP, ISE, GSE — and many more.",
    "You can choose, and change, your provider.",
    "Persistent, polite advocacy is one of the most useful family skills.",
  ],
  related: [
    "transition-planning-101",
    "first-job-readiness",
    "building-daily-routines",
  ],
};
