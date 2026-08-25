import { AllSectionTypes } from "./types";

export const receiptSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Re:ceipt",
    description:
      "A mobile app that helps young adults build sustainable spending habits by pairing everyday financial tracking with eco-friendly purchase suggestions.",
    mockups: "/landing-page-assets/receipt_mockup.png",
  },
  {
    type: "meta",
    role: "UX Designer",
    duration: "2025",
    skills: "Product Design, UX Research",
    team: "Casey Lee",
  },
  {
    type: "overview",
    problem:
      "During a formative financial period, young adults have no single place to build environmentally-sustainable money habits, so overconsumption and waste patterns set in and persist into adulthood.",
    uxr: "Rather than another budgeting tracker, Re:ceipt builds sustainability guidance directly into financial habits, and leads with encouragement instead of judgment to influence behavior.",
  },
  {
    type: "datavis",
    subheading:
      "We surveyed 31 students and recent graduates (18–26) to find what blocks mindful consumption.",
    stats: [
      {
        values: new Map([
          ["Convenience", 41.9],
          ["Cost", 38.7],
        ]),
      },
      {
        values: new Map([
          ["Ranked themselves >5/10 sustainability", 67.7],
          ["Ranked themselves <5/10 sustainability", 32.3],
        ]),
      },
      {
        values: new Map([
          ["Eating Out", 90.3],
          ["Clothing", 41.9],
          ["Entertainment & Subscriptions", 29],
        ]),
      },
    ],
    captions: [
      "Convenience (42%) and cost (39%) were the biggest barriers to sustainable shopping.",
      "68% rated themselves above 5/10 on sustainability — yet most couldn't see the environmental impact of their purchases.",
      "Overspending clustered in eating out (90%), clothing (42%), and subscriptions (29%).",
    ],
  },
  {
    type: "process",
    heading: "Key Design Decisions",
    items: [
      {
        title: "Social Influence",
        body: "Users spend to fit in with peers, so we redirected that social pressure into community features that reward sustainable choices.",
      },
      {
        title: "Rejecting Shame Culture",
        body: "Users responded to encouragement, not judgment. Re:ceipt frames sustainability as achievable next steps rather than criticism of past choices.",
      },
      {
        title: "Providing Educational Value",
        body: "The banking apps we benchmarked offered no sustainability guidance, and users had no time to research it themselves, so we built financial literacy into core features.",
      },
    ],
  },
  {
    type: "demo",
    demo: "/receipt-assets/demo.mp4",
  },
  {
    type: "outcomes",
    summary:
      "Won the Cornell UX Design-a-thon New Designer Award. Built and presented a functional prototype to a live judging panel in a single weekend.",
    takeaways: [
      "Balancing economic and environmental sustainability in one product needed tightly scoped research to prevent scope creep.",
      "Working asynchronously 300 miles apart forced clear communication and trust between designers.",
    ],
    retrospective: [
      "Visual hierarchy needs stronger contrast as some elements start to clash.",
      "Sustainability scores go stale as companies change; in production the app needs SLA's to keep them current and preserve user trust.",
      "Many users already track spending elsewhere, so user adoption needs a reason to switch.",
    ],
  },
];

export const cairnSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Cairn",
    description: "Cairn / 2025",
    mockups: "/cairn-assets/mockup.png",
  },
  {
    type: "meta",
    role: "Designer & Developer",
    duration: "2025",
    skills: "Full-Stack, UX/UI",
    team: "Aahil Nishaad, Afnan Tuffaha, Luis Sarmiento, Vichu Selveraju, Kai Tjia",
  },
  {
    type: "overview",
    problem:
      "Planning a trip around fixed commitments is slow and error-prone — and mistakes are costly and time-consuming to unwind.",
    uxr: "Cairn builds an itinerary around a user's existing schedule — matching attractions to their interests, suggesting times, and slotting them in — cutting the time and mental load of planning.",
  },
  {
    type: "datavis",
    subheading:
      "To size the problem, I drew on secondary research — a 2024 Talker Research survey of 2,000 U.S. travelers who take at least three trips a year.",
    stats: [
      {
        values: new Map([
          ["Choose a destination based on price", 51],
          ["Worry about overspending", 44],
        ]),
      },
      {
        values: new Map([
          ["Accommodations", 21],
          ["Transport", 20],
          ["Food", 15],
        ]),
      },
      {
        values: new Map([
          ["Search engines", 60],
          ["Online travel agency sites", 54],
          ["Social media platforms", 33],
        ]),
      },
    ],
    captions: [
      "Affordability drives the decision: 51% pick a destination on price and 44% worry about overspending.",
      "Overspending fears concentrate in accommodations, transport, and food — the categories Cairn budgets around.",
      "Most travelers plan through search engines (60%) and online travel agency sites (54%) — the channels Cairn needs to meet users in.",
    ],
  },
  {
    type: "process",
    heading: "Key Design & Engineering Decisions",
    items: [
      {
        title: "Stateless by design",
        body: "Cairn stores no user data. It takes your commitments, returns an itinerary, then forgets everything. A deliberate tradeoff of saved trips for privacy and speed (one the retro revisits).",
      },
      {
        title: "Built for speed",
        body: "The stateless flow keeps planning to minutes, not the hours users said they dreaded — quick scheduling over research rabbit holes.",
      },
      {
        title: "Tailored recommendations",
        body: "Affordability was the top pain point, so onboarding captures budget, interests, and habits before Cairn recommends anything.",
      },
    ],
  },
  {
    type: "uxr",
    carousel: ["/cairn-assets/diagram.png", "/cairn-assets/userstory1.png"],
  },
  {
    type: "iteration",
    wireframes: "/cairn-assets/hifi.png",
    system: "/cairn-assets/lofi.png",
    microint: "/cairn-assets/features.png",
    colortype: "/cairn-assets/colorstype.png",
  },
  {
    type: "demo",
    demo: "/cairn-assets/demo.mp4",
  },
  {
    type: "outcomes",
    summary:
      "Shipped a full-stack trip-scheduling platform end-to-end — from user research to a React/Express app deployed on Azure.",
    takeaways: [
      "Ran a full UXR-to-design-to-development cycle solo, at speed.",
      "Picked up TypeScript and Azure Container Apps building it.",
    ],
    retrospective: [
      "With no captured user base to test against, I leaned on secondary research — real validation is the next step.",
      "User profiles and a database would let travelers save trips — the tradeoff the stateless design consciously deferred.",
    ],
  },
];

export const ascentSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Klaviyo",
    description:
      "A six-month product design co-op on Core Infra, standardizing components, reframing how the platform organizes content, and building the AI tooling the team ships with.",
    mockups: "/klaviyo-assets/cover.svg",
  },
  {
    type: "meta",
    role: "Product Design Co-op",
    duration: "2026",
    skills: "Design Systems, Design Engineering, AI",
    team: "Core Infrastructure",
  },
  {
    type: "overview",
    problem:
      "Ascent is Klaviyo's enterprise design system. Across six months, three problems overlapped: fragmented components, a non-intuitive organizational model, and AI tools pulling designers off-system.",
    uxr: "I worked as a design engineer, owning work from spec through code review to merged production.",
  },
  {
    type: "process",
    heading: "Key Contributions",
    items: [
      {
        title: "Shipped a net-new Carousel all the way to prod",
        body: "Reducing duplicity in code and addressing accessibility gaps in custom implementations.",
      },
      {
        title:
          "Redefined platform-wide organizational hierarchy design patterns",
        body: "Enterprise customers needed a more robust solution to manage account assets.",
      },
      {
        title: "Owned to production",
        body: "10+ Figma specs to merged beta-library component at 100% test coverage.",
      },
    ],
  },
  {
    type: "outcomes",
    summary:
      "Total contributions to the system touched more than 56% of all Klaviyo app surfaces.",
    takeaways: [
      "My strongest work lived in the seam between design and engineering — and I want to keep working there.",
      "The durable value in fast-moving AI tooling is building guardrails for where the output fails, not chasing the tools.",
    ],
    retrospective: [
      "Designer or developer — I'm still calibrating where I add the most value on that spectrum.",
      "Be more vocal: doing work that shifts a mental model isn't enough if I'm quiet about it in the room.",
    ],
  },
];

export const c4cSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Code4Community",
    description:
      "Code4Community is a student-run studio at Northeastern that builds free software for nonprofits. I worked at two altitudes at once: design lead on client projects, and Director of Design across the whole studio.",
    mockups: "/landing-page-assets/receipt_mockup.png",
  },
  {
    type: "meta",
    role: "Director of Design",
    duration: "2025 - Present",
    skills: "Design Leadership, Product Design",
    team: "15 Designers / 6 concurrent projects",
  },
  {
    type: "note",
    variant: "disclaimer",
    body: "Client work for nonprofit partners. Some visuals are representative or redacted per partner needs.",
  },
  {
    type: "overview",
    problem:
      "Running a studio of student designers across multiple independent nonprofit projects requires both a quality bar and mentorship, while still leading design on my own projects.",
    uxr: "I needed to build the system and the people that could produced quality design work across every project.",
  },
  {
    type: "process",
    heading: "Leading the pillar",
    items: [
      {
        title: "Team & structure",
        body: "[How you organized designers across projects — per-project leads, pods, how you allocated people and matched them to work.]",
      },
      {
        title: "Mentorship & critique",
        body: "[Your concrete cadence — crits, 1:1s, design reviews — and how you coached designers from where they started to shipping. Name the mechanism, not 'I mentored.']",
      },
      {
        title: "Holding one bar across many projects",
        body: "[How you kept quality consistent across independent teams — shared standards, a component library, review gates, onboarding. This is systems thinking applied to a team.]",
      },
      {
        title: "The hard part",
        body: "[One genuinely hard leadership moment — a struggling project, a designer who needed real coaching, a client or scope conflict — and what you did. Be specific; this is your senior 'scars' signal.]",
      },
    ],
  },
  // {
  //   type: "process",
  //   heading: "Across the studio",
  //   items: [
  //     {
  //       title: "[Client B]",
  //       body: "[What C4C built · your role (led / designed) · the outcome — one line.]",
  //     },
  //     {
  //       title: "[Client C]",
  //       body: "[What C4C built · your role · the outcome — one line.]",
  //     },
  //     {
  //       title: "[Client D]",
  //       body: "[What C4C built · your role · the outcome — one line.]",
  //     },
  //   ],
  // },
  {
    type: "outcomes",
    summary:
      "[Studio: N designers mentored, N projects shipped, N nonprofits served, plus any team growth / retention / onboarding-time result. Flagship: its headline outcome.]",
    takeaways: [
      "[What leading taught you — a real lesson about design leadership, stated plainly.]",
      "[What staying hands-on as a designer taught you.]",
    ],
    retrospective: [
      "[An honest growth edge as a leader.]",
      "[An honest growth edge as a designer.]",
    ],
  },
];
