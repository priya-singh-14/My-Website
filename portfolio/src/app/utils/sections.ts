import { AllSectionTypes, DataVis } from "./types";

export const pockItSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "PockIt",
    subtitle: "Development Case Study 01 / July 2025",
    description: "",
    tags: [
      "react",
      "typescript",
      "tailwind",
      "firebase",
      "python",
      "vite",
      "figma",
      "notion",
    ],
    detailedTags: ["Personal Project", "Developer"],
    mockups: "/mockup-copy.png",
  },
  {
    type: "overview",
    problem:
      "Travelers find it hard to plan fulfilling trips according to pre-existing schedules. Ensuring that their events match up takes time, and mistakes could be costly and even more time consuming to resolve.",
    uxr: "Cairn allows its users to schedule events they find interesting while recommending a schedule that works around their current constraints, finding attractions that match their interests, offering suggested times for those activities, and easily incorporating them into a personalized schedule— saving users time and reducing the mental load of trip planning.",
  },
];

export const cairnSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Cairn",
    subtitle: "Design/Development Case Study 02 / January 2025",
    description:
      "A trip scheduling platform for travelers who want to get the most out of their vacation, without foregoing their commitments and travel constraints.",
    tags: [
      "React",
      "Typescript",
      "tailwind",
      "express",
      "vite",
      "figma",
      "adobe cc",
      "azure",
      "linear",
      "notion",
    ],
    detailedTags: ["Personal Project", "Designer/Developer"],
    mockups: "/mockup-copy.png",
  },
  {
    type: "overview",
    problem:
      "Travelers find it hard to plan fulfilling trips according to pre-existing schedules. Ensuring that their events match up takes time, and mistakes could be costly and even more time consuming to resolve.",
    uxr: "Cairn allows its users to schedule events they find interesting while recommending a schedule that works around their current constraints, finding attractions that match their interests, offering suggested times for those activities, and easily incorporating them into a personalized schedule— saving users time and reducing the mental load of trip planning.",
  },
];

export const receiptSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Re:ceipt",
    subtitle: "Design Case Study 01 / May 2025",
    description:
      "Re:ceipt is a mobile application designed to help financially-independent young adults develop sustainable spending habits by integrating financial tracking with eco-friendly purchase suggestions.",
    tags: ["figma", "notion", "miro"],
    detailedTags: [
      "Cornell UX Design-a-thon Winner",
      "Design-a-thon",
      "Designer",
      "Team Project",
    ],
    mockups: "/mockup2.png",
    link: "https://www.figma.com/proto/Sq8TPvfGQCSByfO4OIbr6s/Re-ceipt?page-id=30%3A2&node-id=33-303&viewport=359%2C-31%2C0.16&t=4ldiJUVVxb9PhPN2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=33%3A282&show-proto-sidebar=1",
  },
  {
    type: "overview",
    problem:
      "College students and young adults lack a centralized platform to develop environmentally-sustainable financial habits, leading to overconsumption, excessive waste generation, and an overall larger carbon footprint. / Without financial guidance during this formative period, students can fall victim to environmentally harmful patterns of overconsumption—from fast fashion and disposable products to food waste and energy misuse—that can persist throughout adulthood.",
    uxr: "RE:CEIPT is a comprehensive mobile application for young adults who struggle with balancing newfound financial responsibilities and social pressures to spend money. The app helps users develop sustainable consumption habits while making sound financial decisions, promoting proactive fiscal and environmental responsibility in young adulthood.",
  },
  {
    type: "datavis",
    subheading: "To better understand the financial and sustainability behaviors of young adults, we surveyed 31 students and recent graduates (aged 18–26). Our questions aimed to identify blockers preventing mindful consumption.",
    stats: [
      {
        values: new Map([
          ["Rate themselves sustainable", 67.7],
          ["Still face barriers & overspend", 32.3],
        ]),
      }, {
        values: new Map([
          ["Rate themselves sustainable", 67.7],
          ["Still face barriers & overspend", 32.3],
        ]),
      }, {
        values: new Map([
          ["Rate themselves sustainable", 67.7],
          ["Still face barriers & overspend", 32.3],
        ]),
      },
    ],
  },
  {
    type: "dd",
    decisions: [
      "Social Influence/User research revealed that users tend to spend to fit in with peers, so we created community features that redirect social pressure toward sustainable choices.",
      "Rejecting Shame Culture/Our findings showed users respond better to encouragement and empowerment rather than judgment about existing behaviors. We shaped Re:ceipts tone and messaging to focus on positive, achievable steps toward sustainability rather than criticizing current choices.",
      "Providing educational value/Benchmarking competitive banking apps showed a lack of sustainability guidance. Since participants valued simplicity and convenience but struggled to find time for additional research on sustainable practices, we integrated financial literacy directly into core features.",
    ],
  },
  {
    type: "uxr",
    carousel: ["1"],
  },
  {
    type: "iteration",
    wireframes: "/",
    system: "/",
    microint: "/",
    colortype: "/",
  },
  {
    type: "demo",
    demo: "/inspirademo.mov",
  },
  {
    type: "feedback",
    subheading: "",
    feedback: ["1", "2", "3", "4", "5"],
  },
];
