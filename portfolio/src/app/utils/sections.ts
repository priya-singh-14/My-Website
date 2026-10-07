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
      "Young adults want to spend sustainably, but convenience and cost get in the way, and budgeting apps show where their money goes without showing its impact.",
    uxr: "Re:ceipt adds sustainable suggestions where people already track spending, focused on the categories where they overspend most.",
  },
  {
    type: "demo",
    demo: "/receipt-assets/demo.mp4",
  },
  {
    type: "datavis",
    subheading:
      "To better understand the financial and sustainability behaviors of young adults, We surveyed 31 people, mostly aged 18–24, about their spending and sustainability habits.",
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
        title: "Suggestions where the spending happens",
        body: "About a third of surveyors wanted to know more about brands' impact, but few would research it on their own. Since convenience was also the biggest blocker mentioned by surveyors, we had suggestions appear inside the transaction feed, next to the purchase they relate to for quick scanning.",
        media: "/receipt-assets/vis1.svg",
      },
      {
        title: "Building on social spending",
        body: "A third of survey responses indicated that most social spending happens with friends, so community features reward sustainable choices rather than restricting spending.",
        media: "/receipt-assets/vid1.mp4",
      },
      {
        title: "Subverting shame culture",
        body: "Users responded better to empowerment over strict accountability. Re:ceipt's messaging focuses on small, achievable steps instead of flagging overspending.",
        media: "/receipt-assets/vis3.svg",
      },
    ],
  },
  {
    type: "demo",
    demo: "/receipt-assets/demo2.mp4",
  },
  {
    type: "outcomes",
    summary:
      "Won the New Designer Award at the Cornell UX Design-a-thon judged by a live panel of industry design leaders.",
    takeaways: [
      "Targeting two forms of sustainability in one product could have introduced scope creep quickly. Keeping the research tightly scoped is what helped us maintain the core purpose of the application.",
      "Working asynchronously 300 miles apart required high-level communication and trust between designers.",
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
      "A trip planner that drops the attractions you want into an hour-by-hour schedule and pushes the whole thing to your calendar.",
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
    demo: "/cairn-assets/demo1.mp4",
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
      "Affordability and overspending are the two biggest pain points. 44% worry about spending too much, and 51% say they pick a vacation destination based on price.",
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
        body: "Cairn retains nothing. The user provides their schedule, the application gives back an itinerary, then it forgets you were there. We gave up saved trips for privacy and speed.",
      },
      {
        title: "Built for speed",
        body: "There's no account to set up, so planning takes minutes. Research showed that users dreaded the hours of planning, so we kept the application lean.",
      },
      {
        title: "Tailored recommendations",
        body: "Money was the top complaint, so before Cairn suggests anything, onboarding asks about your budget, what you like, and how you travel.",
      },
    ],
  },
  {
    type: "demo",
    demo: "/cairn-assets/demo2.mp4",
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
      "Klaviyo is an AI-first B2C marketing/CRM platform that helps consumer brands turn their customer data into personalized email, SMS, and push campaigns. It supports fast-growing DTC customers like Glossier and Liquid Death to household names like Mattel.",
    mockups: "/klaviyo-assets/cover.png",
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
      "Klaviyo stored content in flat, tag-based lists, so enterprise teams had no reliable way to organize or navigate large amounts of content. Product teams had started building one-off fixes, which created inconsistent patterns and growing UX debt.",
    uxr: "I researched and shipped a folder system, with pattern guidelines and four new components, that made hierarchical organization a platform-level pattern.",
  },
  {
    type: "demo",
    demo: "/klaviyo-assets/demo.mp4",
    caption: "Folder patterns and components in production.",
  },
  {
    type: "process",
    heading: "Key Contributions",
    items: [
      {
        title: "Simplifying load-bearing tags",
        body: "Tags were used as both the metadata layer and the navigation layer. Because tags and objects are many-to-many, nothing had a single location in the interface, making content hard to index and keep track of. Folders absorbed the navigation use-case, giving every object one home and clarifying the role of tags.",
        media: "/klaviyo-assets/vis1.png",
      },
      {
        title: "Shifting the mental model",
        body: "Folders changed how the platform thinks about content holistically and warranted adoption by multiple feature teams. I ran working sessions with product owners to identify how a new system would fit enterprise workflows in various feature areas to solidify patterns that would extend to every surface.",
      },
      {
        title: "Building the system sustainably",
        body: "I built the folders as four composable components so any team could adopt them, which replaced multiple custom implementations with one canonical pattern, inclusive of accessibility patterns.",
        media: "/klaviyo-assets/vis.png",
      },
    ],
  },
  {
    type: "demo",
    demo: "/klaviyo-assets/demo2.mp4",
    caption:
      "Some of this work is proprietary! Please reach out for details, as well as information about other component projects.",
  },
  {
    type: "ai",
    heading: "AI Iteration",
    parts: [
      {
        title: "Pressure-testing the structure",
        body: [
          "Before handoff, I used a custom Figma MCP-Claude Code workflow to build all four components in staging so I could test how they fit into the existing platform.",
          "It exposed gaps in our drag-and-drop library and where customizing it would hit its limits, and let me test how modular the content was and how easy the depth-based structure was to navigate.",
        ],
      },
      {
        title: "Auditing hooks for accessibility",
        body: [
          "I had Claude audit our existing hooks package against what the new components needed for accessibility.",
          "It flagged that drag and drop capabilities needed new hooks or alternatives to account for motor impairment and keyboard-only surfaces.",
          "Focus management and ARIA were scoped before development instead of retrofitted.",
        ],
      },
    ],
  },
  {
    type: "outcomes",
    summary:
      "Folders were reinstated as a platform-level pattern after deprecation, backed by published content hierarchy guidelines and new components.",
    takeaways: [
      "Owning components from design spec through code review taught me to design with the technical build in mind. Knowing what's expensive to implement helped tailor my specs to our production code patterns.",
      "Closing accessibility gaps at the folder component level fixes them across every surface at once, which incentivized a future accessibility hook package.",
    ],
    retrospective: [
      "Depth-based content hierarchy fits enterprise needs, but depth introduces more places to look and more clicks to navigate. It is a trade-off that needs additional validation.",
      "Bringing back a deprecated system meant first understanding why it was cut. The case for reinstating folders could only be made after I could show how the customer need had changed.",
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
    body: "As Director of Design, I oversee and manage all client projects for a given semester. One client project is shared below. For information about additional client projects, please reach out.",
  },
  {
    type: "demo",
    demo: "/ssf-assets/demo1.mp4",
  },
  {
    type: "overview",
    problem:
      "Securing Safe Food connects allergen-free food donations from manufacturers to food pantries nationwide. They needed an efficient way to track ingress and egress donations, orders, and food requests from pantries in their partner network.",
    uxr: "I mapped the inherited system, rebuilt its information architecture, and designed the donation management workflows and design system across all four roles.",
  },
  {
    type: "process",
    heading: "Key Design Decisions",
    items: [
      {
        title: "A mishandled item can send someone to the hospital",
        body: "The unsafe path needed intentional friction. Allergen separation lives in the visual hierarchy, safety checks are built in the workflow, and conditional logic prevents volunteers from allocating allergen-risk item to an order.",
        media: "/ssf-assets/vid1.mp4",
      },
      {
        title: "Connecting isolated workflows",
        body: "The embedded relationship between orders, donations, and requests across four user roles required a UI that is consistent and re-traceable across isolated dashboards. The system had to emphasize clarity as a primary value, maintained by constrained visuals and limited components.",
        media: "/ssf-assets/vis2.png",
      },
      {
        title: "Designing around the allocation moment",
        body: "Volunteers are the only role working across the whole system, matching donations to requests as stock changes. I defined how each lifecycle action affects stock totals, so stock already promised to an order never shows as available, and made those states visible where volunteers allocate.",
        media: "/ssf-assets/vis3.png",
      },
    ],
  },
  {
    type: "iteration",
    wireframes: "/ssf-assets/demo.svg",
  },
  {
    type: "outcomes",
    summary:
      "Took Securing Safe Food from an undocumented handoff to a shipped system across four user roles, owning the client relationship, product, IA, and design system.",
    takeaways: [
      "Since this was an inherited project, defining the product terminology, outlining the IA, and creating clear guidelines for lifecycle actions needed to be completed with technical stakeholders upfront.",
      "Detailed and thoughtful documentation played a huge role in the success of this project as contributors changed between semesters.",
    ],
    retrospective: [
      "The workflow is complex, so the dashboards are dense. I'd like to test ways to show less at once, like progressive disclosure, to make onboarding easier for new volunteers.",
      "Since most of my user input came through the client representative rather than volunteers directly, I would've liked to get early iterations in front of the people doing allocations.",
    ],
  },
  {
    type: "demo",
    demo: "/ssf-assets/carousel.mp4",
    caption:
      "As Director of Design, I've managed 10+ client projects like this one! Please reach out for details about other products.",
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
      "Verizon tracks churn with internal data that surfaces only after customers leave. Public warning signs like reviews, social posts, and outage reports go untracked, while churn costs more than $150M a quarter.",
    uxr: "We built a dashboard that pulls daily data from five public sources, uses NLP to surface churn drivers, and pairs each one with a mitigation strategy.",
  },
  {
    type: "demo",
    demo: "/vz-assets/demo1.mp4",
    caption:
      "Sorry! Some of this work is proprietary. Please reach out for further details",
  },
  {
    type: "process",
    heading: "Key Design Decisions",
    items: [
      {
        title: "Scoping our Machine Learning",
        body: "We originally scoped a dashboard of structured metrics relating to network connectivity, but once we started data collection, most of the data turned out to be unstructured text, so I researched and owned the addition of an NLP layer for sentiment, keywords, and topics. The dashboard now shows themes and sentiment trends in conjunction with network connectivity trends.",
        media: "/vz-assets/vis1.png",
      },
      {
        title: "Every signal needs an action",
        body: "Early versions reported what was happening. Interviews with Verizon stakeholders showed they needed to know what to do about it, so we paired each churn driver with a specific mitigation strategy.",
      },
      {
        title: "Designing for every role",
        body: "At first, we approached the problem from a singular user role, but a two-week async questionnaire revealed that regional and central analysts care about completely different metrics. From there, we pivoted the whole product toward role-specific workflows, which enabled more specific mitigation strategies.",
      },
    ],
  },
  {
    type: "demo",
    demo: "/vz-assets/demo2.mp4",
  },
  {
    type: "outcomes",
    summary:
      "Pulled together 170,000+ public data points and surfaced churn drivers that Verizon's own reporting had never caught.",
    takeaways: [
      "As the only design/product voice on an engineering team, a large part of my role was translation. It took practice to understand how abstract requests can be parsed into scoped features.",
      "Three major product decisions came from what we learned mid-build, not from the original scope. Being able to reassess and pivot made a huge positive impact on our end product.",
    ],
    retrospective: [
      "Sentiment is scored per post, so a post that criticizes Verizon while praising a competitor still counts as positive. Per-entity sentiment is stored in the system, but visualizing it was deferred to future work.",
      "I'd like to revisit our topic model to have the clusters update autonomously. Topic modeling relies on a hand-built mapping from raw clusters to business categories, so that mapping needs manual upkeep against industry trends as it is currently implemented.",
    ],
  },
];
