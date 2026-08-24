import { AllSectionTypes } from "./types";

/*
  OPTIMIZED PASS — what changed and why (mapped to the leaning-out checklist):
  - Cut restated "what the app is" copy (say-it-once): header.description already
    does that job, so overview.uxr now carries the ANGLE, not a second definition.
  - Merged doubled problem statements into one line each (say-it-once + skim).
  - Rounded and tightened all stat captions (so-what).
  - Cairn: reframed the third-party survey as explicit secondary research and cut
    the demographic granularity (age/gender split) — it drove no decision.
  - Cairn: surfaced "ephemeral / no-DB" as an ENGINEERING decision with a tradeoff,
    since this is a Development case and the build thinking was buried in the retro.
  - Foregrounded outcomes; trimmed boilerplate ("Applied Agile methodology").

  YOU MUST SUPPLY (do not let me guess these — they're the protected signal):
  [A] Re:ceipt individual role — it's written entirely in "we". State what YOU
      owned vs. your partner. This is the single highest-value fix.
  [B] One REJECTED direction per case — "we explored X, learned Y, dropped it."
      Neither case shows a killed path; it's the clearest proof of judgment.
  [C] Uncaptioned carousels (user stories / sitemap / diagram): keep only the
      1–2 that drove a decision and caption each with the decision it produced.
  [D] Cairn repo owner (github.com/selvarajuv) vs. site name — make them match,
      or a reviewer clicking through sees a different name (papercut).
*/

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
        // Surfaced as a real architecture decision with a tradeoff.
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
      // [B] For a Development case, add one more engineering decision framed as a
      // tradeoff (stack choice + why, or a hard problem you hit and how you solved it).
    ],
  },
  {
    type: "uxr",
    // [C] If "diagram" is a system/architecture diagram, promote and caption it —
    // that's gold for a Development case. Cut user stories that don't drive a decision.
    carousel: ["/cairn-assets/diagram.png", "/cairn-assets/userstory1.png"],
  },
  {
    type: "iteration",
    // [B] Same as Re:ceipt — one line of rationale + one rejected direction.
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
    // Strong for a dev case. If there was a hard engineering problem you solved,
    // one clause naming it would make this land harder.
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
