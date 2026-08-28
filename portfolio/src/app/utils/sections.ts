import { AllSectionTypes } from "./types";

export const receiptSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Re:ceipt",
    description:
      "Mobile budget-tracking designed to help young adults develop sustainable financial literacy through eco-friendly purchase suggestions.",
    mockups: "/receipt-assets/cover.png",
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
      "Your early twenties are when money habits set. As young adults face pressure to spend socially, wasteful consumption patterns emerge and tend to persist for decades.",
    uxr: "Re:ceipt embeds sustainable suggestions directly where people track their spending, with a positive reinforcement strategy informed by user research.",
  },
  {
    type: "demo",
    demo: "/receipt-assets/demo.mov",
  },
  {
    type: "datavis",
    subheading:
      "To better understand the financial and sustainability behaviors of young adults, we surveyed 31 students and recent graduates (aged 18–26). Our questions aimed to identify blockers preventing mindful consumption.",
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
      "The two biggest blockers were convenience (42%) and cost (39%).",
      "68% rated themselves above a 5 out of 10 on sustainability. Almost none of them could actually see the impact of what they bought.",
      "Overspending showed up most in eating out (90%), clothing (42%), and subscriptions (29%).",
    ],
  },
  {
    type: "process",
    heading: "Key Design Decisions",
    items: [
      {
        title: "Social Influence",
        body: "People spend to keep up with their friends. Instead of fighting that, we used it. The community features reward the sustainable choices.",
      },
      {
        title: "Rejecting Shame Culture",
        body: "Users responded better to empowerment over strict accountability. We shaped Re:ceipts messaging to focus on positive, achievable steps rather than highlighting failures.",
      },
      {
        title: "Providing Educational Value",
        body: "None of the banking apps we looked at said a word about sustainability, and our users stated a lack of motivation to research it themselves, so we built the learning directly into the app.",
      },
    ],
  },
  {
    type: "demo",
    demo: "/receipt-assets/demo2.mov",
  },
  {
    type: "outcomes",
    summary:
      "Won the New Designer Award at the Cornell UX Design-a-thon after presenting our work to a live panel of industry design leaders.",
    takeaways: [
      "Targeting two forms of sustainability in one product could have introduced scope creep quickly. Keeping the research tightly scoped is what helped us maintain the core purpose of the application.",
      "Working asynchronously 300 miles apart required high-level communication and trust between designers.      ",
    ],
    retrospective: [
      "The visual hierarchy needs development. Certain elements compete with others for attention or distract from the contents of the app.",
      "Sustainability scores go out of date as companies evolve. In production we'd need a real process to keep them up to date, or risk eroding user trust.",
    ],
  },
];

export const cairnSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Cairn",
    description:
      "A trip planner that drops the attractions you want into a hour-by-hourß schedule and pushes the whole thing to your calendar.",
    mockups: "/cairn-assets/cover.png",
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
      "Planning a trip around activities that are already locked in, like a flight or a wedding, is slow and easy to get wrong. And once you've booked around a mistake, unwinding it is difficult and time-consuming.",
    uxr: "Cairn starts from what's already on your calendar and builds around it. You tell it what you're into, and it recommends activities, times, and slots things in automatically.",
  },
  {
    type: "demo",
    demo: "/cairn-assets/demo1.mov",
  },
  {
    type: "datavis",
    subheading:
      "We leaned on secondary research, primarily a 2024 Talker Research survey of 2,000 Americans who travel at least three times a year.",
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
      "Affordability and overspending are the two biggest pain-points. 44% worry about spending too much, and 51% say they pick a vacation destination based on price.      ",
      "Those money worries cluster around lodging, transport, and food.",
      "Most people plan through search engines (60%) and travel agency sites (54%), which is what Cairn has to emulate.",
    ],
  },
  {
    type: "process",
    heading: "Key Design & Engineering Decisions",
    items: [
      {
        title: "Stateless by design",
        body: "Cairn keeps nothing. The user providers their schedule, the application gives back an itinerary, then it forgets you were there. We gave up saved trips for privacy and speed.",
      },
      {
        title: "Built for speed",
        body: "There's no account to set up, so planning takes minutes. Research informed that users dreaded the hours of research, so we kept the application lean.",
      },
      {
        title: "Tailored recommendations",
        body: "Money was the top complaint, so before Cairn suggests anything, onboarding asks about your budget, what you like, and how you travel.",
      },
    ],
  },
  {
    type: "demo",
    demo: "/cairn-assets/demo2.mov",
  },
  {
    type: "iteration",
    wireframes: "/cairn-assets/hifi.png",
    system: "/cairn-assets/lofi.png",
    microint: "/cairn-assets/features.png",
    colortype: "/cairn-assets/colorstype.png",
  },
  {
    type: "outcomes",
    summary:
      "Shipped a full-stack application end to end within two weeks, from UX research through a React/Express app running on Azure.",
    takeaways: [
      "Ran a fast UXR-to-design-to-development cycle in a team environment, working in Agile the whole way.",
      "Picked up new technologies like Azure Container Apps in the process.",
    ],
    retrospective: [
      "With no real user base to test against, we had to lean on other UXR strategies to validate the work.",
      "User profiles and a database would let people save and manage trips in the app but could contradict the quick and ephemeral values of the platform.",
    ],
  },
];

export const ascentSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Klaviyo",
    description:
      "Klaviyo is an AI-first B2C marketing/CRM platform that helps consumer brands turn their customer data into personalized email, SMS, and push campaigns. It supports fast-growing DTC names like Glossier and Liquid Death to household names like Mattel.",
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
      "Ascent is Klaviyo's enterprise design system. My contributions to the system include a carousel incentivez by growing screen density, and new content organizatinon patterns built to accomodate enterprise customer needs.",
    uxr: "I worked as a product designer with codebase access, which meant I owned the work the whole way through spec, code, review, and into production.",
  },
  {
    type: "demo",
    demo: "/klaviyo-assets/demo.mov",
  },
  {
    type: "process",
    heading: "Key Contributions",
    items: [
      {
        title: "Reducing code redundancy and maintenance.",
        body: "Cut down on six custom carousel implementations and closed the accessibility gaps that all the custom one-off versions had.",
      },
      {
        title: "Tackled legacy UX debt for scaling customers.",
        body: "Enterprise customers needed a sturdier way to manage their account assets, so I reworked the patterns for a folder based design pattern that introduced hierarchical categorization.",
      },
      {
        title: "Owned to production",
        body: "10+ Figma specs, taken all the way to a merged beta-library component with full test coverage.",
      },
    ],
  },
  {
    type: "demo",
    demo: "/klaviyo-assets/demo2.mov",
  },
  {
    type: "note",
    variant: "disclaimer",
    body: "I can't share all of this publicly, but I'm happy to walk through it if you reach out.",
  },
  {
    type: "outcomes",
    summary:
      "Total contributions touched more than 56% of Klaviyo's app surfaces.",
    takeaways: [
      "Owning a component from Figma spec through code review taught me to design with the build in mind. Knowing what's is expensive to implement helped tailor my specs to production patterns.",
      "Closing accessibility gaps at the component level fixes them across every surface at once.",
    ],
    retrospective: [
      "Migrating six teams off their custom versions outlasted my co-op scope. I built the component but I didn't get to finish moving everyone onto it.",
      "Deep over broad categorization fits enterprise needs, but depth introduces more places to look, more clicks to navigate, and more friction along the way. It is a trade-off that needs additional validation and testing.",
    ],
  },
];

export const c4cSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Code4Community",
    description:
      "Code4Community (C4C) is a student-run organization at Northeastern that builds and maintains software for nonprofits at no cost.",
    mockups: "/ssf-assets/cover.png",
  },
  {
    type: "meta",
    role: "Director of Design",
    duration: "2025 – Present",
    skills: "Product Design, Design Leadership",
    team: "15 Designers / 6 concurrent projects",
  },
  {
    type: "note",
    variant: "disclaimer",
    body: "As Director of Design, I oversee and manage all client projects for a given semester. One client project that I had direct design involvement in (Securing Safe Food) is shared below for context.",
  },
  {
    type: "demo",
    demo: "/ssf-assets/demo1.mov",
  },
  {
    type: "overview",
    problem:
      "Securing Safe Food connects allergen-free food donations from manufacturers to food pantries across the country. They needed an efficient way to track ingress and egress donations, food orders, and requests from pantries in their partner network.",
    uxr: "I built the donation management system through several rounds of iteration, building the project design system and wireframes, while running design for the rest of the studio at the same time.",
  },
  {
    type: "process",
    heading: "Key design decisions",
    items: [
      {
        title: "A mishandled item can send someone to the hospital",
        body: "The unsafe path needed intentional friction. Allergen separation lives in the visual hierarchy, safety checks are unavoidable in the workflow, and volunteers only ever see the manufacturers stocking the specific allergen-safe item that's been requested.",
      },

      {
        title: "Inherited & rearchitected",
        body: "The embedded relationship between orders, donations, and requests across four user roles required a UI that is consistent and retraceable across isolated dashboards. The design system had to support clarity as a primary value.",
      },
      {
        title: "Documentation under the hood",
        body: "Every item moves through manufacturers, volunteers, and pantries, and when something goes wrong, it has to be traced backwards. A paper trail is built underneath the flow of donation stock for administrative ease.",
      },
    ],
  },
  {
    type: "iteration",
    wireframes: "/ssf-assets/demo.svg",
    colortype: "/ssf-assets/colorstype.png",
  },
  {
    type: "demo",
    demo: "/ssf-assets/carousel.mov",
  },
  {
    type: "note",
    variant: "disclaimer",
    body: "Examples of simultaneous client projects.",
  },
  {
    type: "outcomes",
    summary:
      "Took Securing Safe Food from an undocumented handoff to a shipped system across four user roles, owning the client relationship, product, IA, and design system.",
    takeaways: [
      "On a messy inherited project, the first thing worth delivering wasn't polished visuals, but rather a clear picture of how the whole system works.",
      "Setting up the systems that let every other designer do good work allowed for agile systems to thrive.",
    ],
    retrospective: [
      "Detailed and thoughtful documentation played a huge role in the success of this project as contributors changed between semesters.",
      "The complexity of the workflow means that information density is high. Condensing the amount of information shown at once could lead to easier onboarding.",
    ],
  },
];
export const vzSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Verizon",
    description:
      "A data aggregation tool that reads real-time public sentiment and outage data to identify churn-risk customers, pairing each signal with a mitigation strategy.",
    mockups: "/vz-assets/cover.png",
  },
  {
    type: "meta",
    role: "Software Engineer, UX Designer",
    duration: "2025",
    skills: "Full Stack, UX",
    team: "Aahil Nishaad, Afnan Tuffaha, Luis Sarmiento, Vichu Selveraju, Kai Tjia",
  },
  {
    type: "overview",
    problem:
      "Verizon reads churn from its own data (support tickets, billing, feedback forms), but most of that surfaces only after someone's already gone. The public signals that surface prior to churn, like reviews, social posts, complaint threads, and outage reports, went unreported. At a 1.13% quarterly churn rate on postpaid connections, that blind spot works out to more than $150M lost in a single quarter.",
    uxr: "The dashboard pulls from five public sources, runs NLP over them for sentiment, keywords, and topics, and ties every finding to a specific, definable action. The point was to stop reacting to churn and treatign it pre-emptively.",
  },
  {
    type: "demo",
    demo: "/vz-assets/demo1.mov",
  },
  {
    type: "process",
    heading: "Key Design Decisions",
    items: [
      {
        title: "The only product voice on an engineering team",
        body: "I was the only designer and product-oriented contributor who could also write code. Verizon's stakeholders described what they wanted in pretty abstract terms, and my job was turning that into features a very technical, non-product team could actually scope and build.",
      },
      {
        title: "Designing for the role, not just the user",
        body: "A two-week async questionnaire turned up something useful: regional and central analysts care about completely different numbers. That pushed the whole product toward role-specific workflows, the same regional-interface need Verizon later flagged as a priority.",
      },
      {
        title: "Full pipeline under a two-week clock",
        body: "Abstract client needs → async research → personas and scenarios → lo-fi → hi-fi in Verizon's brand system, presented to execs. Tight timelines meant parallelizing this process alongside development.",
      },
    ],
  },
  {
    type: "demo",
    demo: "/vz-assets/demo2.mov",
  },
  {
    type: "outcomes",
    summary:
      "Pulled together 170,000+ public data points and surfaced churn drivers that Verizon's own reporting had never caught.",
    takeaways: [
      "Being the only design and product voice on an engineering team was an exercise in translation. Reducing stakeholder requests into features and presenting tens of thousands of raw data points into a scannable screen became a critical skill.",
      "I owned the NLP and analysis layer, sentiment, keywords, and topic modeling, with contributions to data sourcing, collection and cleaning. Constructing the full pipeline across five messy public sources in four months required streamlined engineering to hit deployment deadlines.",
    ],
    retrospective: [
      "Company sentiment is averaged on each posts overall label, so a post that criticizes Verizon while praising a competitor still counts as positive for Verizon. Per-entity sentiment was accounted for future work, and deprioritized to accomodate deadlines.",
      "Topic modeling relies on a hand-built mapping from raw clusters to business categories. It works today, but as carriers rename plans and new complaints surface, that mapping needs constant manual upkeep.",
    ],
  },
];
