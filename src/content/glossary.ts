export type GlossaryEntry = {
  term: string;
  full?: string;
  short: string;
  long: string;
  category:
    | "Programs & Services"
    | "Funding & Eligibility"
    | "People & Roles"
    | "Plans & Documents"
    | "Acronyms & Agencies"
    | "Everyday Terms";
  related?: string[];
};

export const glossary: GlossaryEntry[] = [
  {
    term: "DDD",
    full: "Division of Developmental Disabilities",
    short:
      "The Arizona state agency that authorizes and oversees services for people with developmental disabilities.",
    long: "DDD is part of the Arizona Department of Economic Security (DES). It determines who is eligible for developmental-disability services and authorizes the supports each person receives — like Habilitation, Supported Employment, Day Treatment, Respite, and Attendant Care. FFI is a DDD-qualified provider.",
    category: "Acronyms & Agencies",
    related: ["DES", "ALTCS", "ISP", "Support Coordinator"],
  },
  {
    term: "DES",
    full: "Department of Economic Security",
    short:
      "The Arizona state department that DDD sits inside of.",
    long: "DES is the larger Arizona agency responsible for many human-services programs. The Division of Developmental Disabilities (DDD) is one of its divisions.",
    category: "Acronyms & Agencies",
    related: ["DDD"],
  },
  {
    term: "ALTCS",
    full: "Arizona Long Term Care System",
    short:
      "Arizona's Medicaid program that pays for long-term services and supports for eligible individuals.",
    long: "ALTCS is the funding stream most people with developmental disabilities use to pay for HCBS services like Supported Living and Supported Employment. To get ALTCS, a person must meet medical and financial criteria. Once approved, DDD coordinates the services.",
    category: "Funding & Eligibility",
    related: ["DDD", "AHCCCS", "HCBS", "Eligibility"],
  },
  {
    term: "AHCCCS",
    full: "Arizona Health Care Cost Containment System",
    short:
      "Arizona's Medicaid program. ALTCS is a part of AHCCCS.",
    long: "AHCCCS is the umbrella Medicaid program in Arizona. It includes ALTCS (long-term care for people with disabilities and elders) plus other Medicaid plans. People often use 'AHCCCS' loosely to mean any Arizona Medicaid coverage.",
    category: "Acronyms & Agencies",
    related: ["ALTCS"],
  },
  {
    term: "HCBS",
    full: "Home and Community-Based Services",
    short:
      "Medicaid services delivered in a person's home or community — instead of a facility.",
    long: "HCBS is the federal Medicaid framework that funds supports like HASL, Respite, Attendant Care, and Supported Employment. The whole point is to help people live full lives in their own homes and communities, not in institutions.",
    category: "Funding & Eligibility",
    related: ["HASL", "ALTCS", "DDD"],
  },
  {
    term: "HASL",
    full: "Habilitation, Attendant Care, and Supported Living",
    short:
      "A bundle of in-home supports that help an adult build skills and live more independently.",
    long: "HASL is FFI's Supported Living service. It covers Habilitation (skill-building — hygiene, cooking, money, time management), Attendant Care (hands-on help with activities of daily living when needed), and Supported Living. Hours and goals are personalized through the ISP.",
    category: "Programs & Services",
    related: ["Habilitation", "Attendant Care", "ISP", "DSP"],
  },
  {
    term: "Habilitation",
    short:
      "Teaching and supporting new daily-life skills.",
    long: "Habilitation is the active, skill-teaching part of in-home supports. A DSP doesn't just do tasks for someone — they coach, prompt, model, and fade support so the person learns to do more themselves over time.",
    category: "Programs & Services",
    related: ["HASL", "DSP"],
  },
  {
    term: "Attendant Care",
    short:
      "Hands-on help with personal care and activities of daily living.",
    long: "Attendant Care is for moments when a person needs physical help to be safe and well — bathing, dressing, mobility, eating. It's often paired with Habilitation so the person continues building independence wherever they're able.",
    category: "Programs & Services",
    related: ["HASL"],
  },
  {
    term: "Respite",
    short:
      "Short-term care that gives a primary caregiver a break.",
    long: "Respite gives family caregivers planned time off — a few hours, an evening, an overnight, or a weekend — while a qualified provider supports their loved one. It's preventive: rested caregivers are better caregivers.",
    category: "Programs & Services",
    related: ["DDD"],
  },
  {
    term: "STEP",
    full: "Short-Term Employment Pre-vocational",
    short:
      "Time-limited job-readiness coaching to prepare an adult to work in the community.",
    long: "STEP is FFI's pre-employment service. It's about figuring out what kind of work fits a person, building soft skills (communication, schedule, professional habits), and practicing real workplace tasks before stepping into a paying job.",
    category: "Programs & Services",
    related: ["ISE", "GSE", "Employment Services"],
  },
  {
    term: "ISE",
    full: "Individual Supported Employment",
    short:
      "One-on-one job coaching at a real, community job.",
    long: "ISE is the most personalized employment service. A job coach helps identify the right job, supports the person on-site at a community employer, then gradually fades support as the individual becomes confident. The goal: a real paying job, with as much independence as possible.",
    category: "Programs & Services",
    related: ["STEP", "GSE", "Employment Services"],
  },
  {
    term: "GSE",
    full: "Group Supported Employment",
    short:
      "A small crew of adults working together at a community job site, with a coach.",
    long: "GSE is a small-group format — a few adults working together at a real community work site, supported by an FFI coach. Great for people who learn well alongside peers or who want shared structure.",
    category: "Programs & Services",
    related: ["STEP", "ISE", "Employment Services"],
  },
  {
    term: "Employment Services",
    short:
      "Umbrella term for STEP, ISE, and GSE.",
    long: "When DDD or FFI says 'Employment Services,' that usually means STEP, ISE, GSE, or a combination — supports that help an adult prepare for, find, and keep a community job.",
    category: "Programs & Services",
    related: ["STEP", "ISE", "GSE"],
  },
  {
    term: "ISP",
    full: "Individual Support Plan",
    short:
      "The annual plan that lays out a person's goals, services, and supports.",
    long: "An ISP is built every year by the person, their family, the Support Coordinator, and providers. It captures who the person is, what they want, what supports they need, and how progress will be measured. FFI's services are delivered against ISP goals.",
    category: "Plans & Documents",
    related: ["Support Coordinator", "Person-centered planning", "ISP Prep Worksheet"],
  },
  {
    term: "PCSP",
    full: "Person-Centered Service Plan",
    short:
      "Another name for the ISP, used in Medicaid HCBS contexts.",
    long: "Some documents and providers use 'PCSP' — Person-Centered Service Plan — to refer to the same plan that DDD calls the ISP.",
    category: "Plans & Documents",
    related: ["ISP"],
  },
  {
    term: "Person-centered planning",
    short:
      "An approach that builds plans around the individual's strengths, preferences, and goals — not the system's defaults.",
    long: "Person-centered planning starts with: who is this person, what do they want their life to look like, and what supports help them get there? Everything else — services, hours, settings — is built around that. It's the foundation of every FFI plan.",
    category: "Everyday Terms",
    related: ["ISP", "Self-determination"],
  },
  {
    term: "Self-determination",
    short:
      "A person's right to make decisions about their own life.",
    long: "Self-determination means the individual is the lead author of their plan — what to learn, where to live, what to do with their time, who to spend it with. FFI's job is to support that, not replace it.",
    category: "Everyday Terms",
    related: ["Person-centered planning"],
  },
  {
    term: "Self-advocacy",
    short:
      "Speaking up for what you want, need, and deserve.",
    long: "Self-advocacy is a set of skills — knowing yourself, knowing your rights, asking for help, saying yes and no, requesting accommodations. It's a core focus across FFI services.",
    category: "Everyday Terms",
    related: ["Self-determination"],
  },
  {
    term: "Support Coordinator",
    short:
      "DDD's case manager — the person who coordinates services across providers.",
    long: "Every DDD member has a Support Coordinator. They lead the ISP meeting, authorize services, and connect families with providers like FFI. They are not the service provider themselves — they coordinate.",
    category: "People & Roles",
    related: ["DDD", "ISP"],
  },
  {
    term: "DSP",
    full: "Direct Support Professional",
    short:
      "The team member who works directly with an individual day-to-day.",
    long: "DSPs are the heart of FFI. They support someone in their home and community — building skills, helping with daily life, and showing up consistently. The role takes patience, judgment, and warmth.",
    category: "People & Roles",
    related: ["HASL", "Habilitation"],
  },
  {
    term: "Job Coach",
    short:
      "An FFI team member who supports an individual at a community job.",
    long: "Job Coaches work alongside an individual at a real job site, teaching the role, troubleshooting in real time, and gradually fading their presence as the person becomes more confident.",
    category: "People & Roles",
    related: ["ISE", "GSE", "STEP"],
  },
  {
    term: "QVF",
    full: "Qualified Vendor File",
    short:
      "The state file that documents an FFI team member is approved to deliver DDD services.",
    long: "Every DSP and Job Coach must have a complete QVF — background checks, fingerprint clearance, training certifications, CPR/First Aid, and more — before delivering services. It protects the people FFI serves.",
    category: "Plans & Documents",
    related: ["Fingerprint Clearance Card"],
  },
  {
    term: "Fingerprint Clearance Card",
    short:
      "A state-issued background-check card required to work with vulnerable adults.",
    long: "Arizona requires a Level 1 Fingerprint Clearance Card for DSPs and other workers serving vulnerable populations. FFI verifies and tracks every team member's card.",
    category: "Plans & Documents",
    related: ["QVF"],
  },
  {
    term: "Article 9",
    short:
      "Arizona regulations on the use of behavioral interventions and rights of DDD members.",
    long: "Article 9 sets boundaries on how providers can support someone whose behavior puts safety at risk. It heavily restricts restrictive practices and emphasizes positive, person-centered approaches. All DSPs are trained in it.",
    category: "Plans & Documents",
    related: ["DDD"],
  },
  {
    term: "Transition Planning",
    short:
      "The process of preparing a young adult for adult life as school ends.",
    long: "Federal special-education law requires transition planning to start by age 16 (Arizona starts as early as 14). It looks at where the young adult will live, work, learn, and connect socially after school. It often runs in parallel with DDD planning.",
    category: "Everyday Terms",
    related: ["IEP", "ISP", "Transition Journey Map"],
  },
  {
    term: "IEP",
    full: "Individualized Education Program",
    short:
      "A K–12 student's special-education plan.",
    long: "An IEP is built by the school team, parents, and the student. After age 14–16, transition goals (employment, post-secondary, independent living) become a required part of the IEP. The IEP and DDD's ISP often complement each other.",
    category: "Plans & Documents",
    related: ["Transition Planning"],
  },
  {
    term: "Eligibility",
    short:
      "Who qualifies for DDD services — based on diagnosis, age of onset, and functional impact.",
    long: "DDD eligibility in Arizona is based on a qualifying diagnosis (intellectual disability, autism, cerebral palsy, epilepsy, or Down syndrome), onset before age 18, and substantial functional limitations. Eligibility is separate from ALTCS eligibility, which is based on financial and medical criteria.",
    category: "Funding & Eligibility",
    related: ["DDD", "ALTCS"],
  },
  {
    term: "Day Treatment",
    short:
      "Structured daytime programming for adults with disabilities.",
    long: "Day Treatment (sometimes 'Day Program' or 'DTA') is a daytime service some adults attend for activities, learning, and social connection. Some people attend Day Treatment alongside Employment Services or HASL.",
    category: "Programs & Services",
    related: ["DDD"],
  },
  {
    term: "Group Home",
    short:
      "A licensed residential setting where several adults live with 24/7 staff.",
    long: "Group homes are one residential option for adults with disabilities. FFI does not operate group homes — we provide supports for adults who live in their own home, with family, or in their own apartment.",
    category: "Programs & Services",
    related: ["HASL"],
  },
  {
    term: "Vocational Rehabilitation",
    full: "Vocational Rehabilitation (VR or 'Voc Rehab')",
    short:
      "A separate state program that helps people with disabilities prepare for and find work.",
    long: "VR is a federally funded program (in Arizona, run through Rehabilitation Services Administration / RSA) that helps people with disabilities pursue employment. It can fund job evaluations, training, and short-term coaching. People often access VR alongside DDD-funded services.",
    category: "Acronyms & Agencies",
    related: ["Employment Services", "STEP", "ISE"],
  },
  {
    term: "OBRA",
    short:
      "A federal law that shapes how nursing-facility-eligible services are delivered in the community.",
    long: "OBRA (the Omnibus Budget Reconciliation Act) is the older federal foundation behind much of today's HCBS work. You'll see it referenced in some funding and waiver paperwork.",
    category: "Acronyms & Agencies",
    related: ["HCBS"],
  },
  {
    term: "Waiver",
    short:
      "A federal Medicaid permission to fund home- and community-based services instead of institutional care.",
    long: "States operate HCBS programs under federal 'waivers.' In practice, a family doesn't have to apply for a waiver themselves — but you'll see the term in DDD and ALTCS documents.",
    category: "Funding & Eligibility",
    related: ["HCBS", "ALTCS"],
  },
  {
    term: "Natural Supports",
    short:
      "The unpaid people in someone's life — family, friends, neighbors, coworkers — who support them.",
    long: "Natural supports are the relationships that don't go away when funding shifts. Strong plans intentionally build and protect them, because they're the foundation of a good life.",
    category: "Everyday Terms",
    related: ["Person-centered planning"],
  },
  {
    term: "Community Inclusion",
    short:
      "Being a real, recognized part of the community — not just present in it.",
    long: "Inclusion is more than 'being there.' It's being known, having roles, contributing, and belonging. FFI builds community inclusion into HASL and Employment Services on purpose.",
    category: "Everyday Terms",
    related: ["Person-centered planning"],
  },
  {
    term: "Reasonable Accommodation",
    short:
      "A workplace adjustment that helps a person with a disability do their job.",
    long: "Under the ADA, employers must consider reasonable accommodations — schedule changes, written instructions, assistive tech, and more. Job coaches help individuals identify and request accommodations.",
    category: "Everyday Terms",
    related: ["ADA"],
  },
  {
    term: "ADA",
    full: "Americans with Disabilities Act",
    short:
      "The federal civil-rights law that prohibits disability discrimination.",
    long: "The ADA sets baseline rights around employment, public services, public accommodations, and accessibility. It's the legal backbone behind workplace accommodations and accessible community spaces.",
    category: "Acronyms & Agencies",
    related: ["Reasonable Accommodation"],
  },
  {
    term: "Guardianship",
    short:
      "A court-appointed authority to make decisions on behalf of an adult.",
    long: "Guardianship is one of several legal options families consider when a young adult turns 18. It's the most restrictive — alternatives like Supported Decision-Making and Power of Attorney often preserve more autonomy. This is a personal decision; talk with an attorney before deciding.",
    category: "Plans & Documents",
    related: ["Supported Decision-Making", "Power of Attorney"],
  },
  {
    term: "Supported Decision-Making",
    short:
      "An alternative to guardianship where the adult keeps decision rights and chooses trusted helpers.",
    long: "Supported Decision-Making lets an adult formally identify trusted people who help them understand options and make their own decisions. It preserves more autonomy than guardianship and is gaining recognition across the U.S.",
    category: "Plans & Documents",
    related: ["Guardianship"],
  },
  {
    term: "Power of Attorney",
    short:
      "A legal document that gives someone authority to act on your behalf in specific areas.",
    long: "POAs can be limited (e.g., medical, financial) and can be revoked by the person who granted them. For many adults with disabilities, a tailored POA preserves autonomy better than a full guardianship.",
    category: "Plans & Documents",
    related: ["Guardianship"],
  },
  {
    term: "Provider",
    short:
      "An organization (like FFI) that delivers DDD-authorized services.",
    long: "Providers are vetted by DDD, sign vendor contracts, and deliver services per each member's ISP. Families typically choose providers — and can change them — through their Support Coordinator.",
    category: "People & Roles",
    related: ["DDD", "Support Coordinator"],
  },
  {
    term: "Hours",
    short:
      "The amount of weekly service time DDD authorizes for each support category.",
    long: "DDD authorizes specific weekly hours for things like Habilitation, Respite, or Supported Employment, based on assessed need. The provider delivers within those authorized hours.",
    category: "Funding & Eligibility",
    related: ["DDD", "ISP"],
  },
];

export const glossaryCategories: GlossaryEntry["category"][] = [
  "Programs & Services",
  "Funding & Eligibility",
  "People & Roles",
  "Plans & Documents",
  "Acronyms & Agencies",
  "Everyday Terms",
];
