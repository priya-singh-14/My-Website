import { AllSectionTypes } from "./types";

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
    mockups: "/receipt-assets/mockup.png",
    link: "https://www.figma.com/proto/Sq8TPvfGQCSByfO4OIbr6s/Re-ceipt?page-id=30%3A2&node-id=33-303&viewport=359%2C-31%2C0.16&t=4ldiJUVVxb9PhPN2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=33%3A282&show-proto-sidebar=1",
  },
  {
    type: "overview",
    problem:
      "College students and young adults lack a centralized platform to develop environmentally-sustainable financial habits, leading to overconsumption, excessive waste generation, and an overall larger carbon footprint. / Without financial guidance during this formative period, students can fall victim to environmentally harmful patterns of overconsumption that can persist throughout adulthood.",
    uxr: "RE:CEIPT is a comprehensive mobile application for young adults who struggle with balancing newfound financial responsibilities and social pressures to spend money. The app helps users develop sustainable consumption habits while making sound financial decisions, promoting proactive fiscal and environmental responsibility in young adulthood.",
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
      "Convenience (41.9%) and Cost (38.7%) were the top barriers to sustainable shopping.",
      "67.7% of respondents rated themselves above 5/10 in sustainable practices, yet many said they lacked visibility into the environmental impact of their purchases.",
      "Top overspending categories included Eating Out (90.3%), Clothing (41.9%), and Entertainment & Subscriptions (29%).",
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
    carousel: [
      "/receipt-assets/userstory1.png",
      "/receipt-assets/userstory2.png",
      "/receipt-assets/userstory3.png",
      "/receipt-assets/sitemap.png",
    ],
  },
  {
    type: "iteration",
    wireframes: "/receipt-assets/hifi.png",
    system: "/receipt-assets/lofi.png",
    microint: "/receipt-assets/features.png",
    colortype: "/receipt-assets/colorstype.png",
  },
  {
    type: "demo",
    demo: "/receipt-assets/demo.mp4",
  },
  {
    type: "feedback",
    subheading: "",
    feedback: [
      "Working asynchronously 300 miles apart required high-level communication and trust between designers.",
      "Balancing Economic and Environmental Sustainability in one platform needed very focused user research to prevent scope creep.",
      "Visual elements need stronger contrast as elements start to clash with one another.",
      "How can the app or users keep up to date on company changes that affect its sustainability score?'",
      "Users may already track spending elsewhere, so an adoption strategy is needed for app users.",
    ],
  },
];

export const cairnSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Cairn",
    subtitle: "Development Case Study 01 / January 2025",
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
    mockups: "/cairn-assets/mockup.png",
  },
  {
    type: "overview",
    problem:
      "Travelers find it hard to plan fulfilling trips according to pre-existing schedules. Ensuring that their events match up takes time, and mistakes could be costly and even more time consuming to resolve.",
    uxr: "Cairn allows its users to schedule events they find interesting while recommending a schedule that works around their current constraints, finding attractions that match their interests, offering suggested times for those activities, and easily incorporating them into a personalized schedule— saving users time and reducing the mental load of trip planning.",
  },
  {
    type: "datavis",
    subheading:
      "In October 2024, Talker Research conducted a random double-opt-in survey of 2,000 U.S. residents who have traveled either domestically or internationally at least three times per year. Respondents' ages varied from 18-85, with an average age of 45. 45% identified as female, 56% identified as male, and 1% identified as other.",
    stats: [
      {
        values: new Map([
          ["Choose a vacation destination based on price", 51],
          ["Worry about overspending", 44],
          ["Dislike packing", 26],
          ["Dislike trip planning", 23],
          ["Worry about missing flights or travel", 21],
        ]),
      },
      {
        values: new Map([
          ["Accomodations", 21],
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
      "Affordability and overspending are the two biggest pain-points mentioned by surveyors, as 44% worry about spending too much, and 51% say they pick a vacation destination based on price.",
      "What are people worried about overspending on? The top three categories are accommodation, transport, and food.",
      "The vast majority of travelers use search engines (60%) like Google, as well as online travel agency sites (54%), to plan their trips.",
    ],
  },
  {
    type: "dd",
    decisions: [
      "Ephemeral Scheduling/Cairn enables a start-to-end workflow that begins with a schedule of user commitments, and ends with a trip itinerary with events scheduled around those commitments— without storing any user data.",
      "Speed/The transient nature of Cairn encourages quick scheduling rather than hours poured into research as they survey findings suggest.",
      "Tailored Recommendations/Affordability and overspending were credited as the two largest pain points among user groups. Therefore Cairn builds off of a comprehensive onboarding flow to ensure recommendations fit user interests, budget, and lifestyle habits.",
    ],
  },
  {
    type: "uxr",
    carousel: [
      "/cairn-assets/userstory1.png",
      "/cairn-assets/userstory2.png",
      "/cairn-assets/diagram.png",
    ],
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
    type: "feedback",
    subheading: "",
    feedback: [
      "Gained exposure to new technologies: TypeScript + Azure Container Apps",
      "Experienced rapid iteration cycle from UXR to Design to Development in team environment",
      "Applied Agile methodology in team-based development process",
      "Found alternative UXR strategies considering lack of access to concrete user base for research and testing validation",
      "In the future, consider implementing user profiles and database integration for users wanting to maintain trips within interface",
    ],
  },
];

export const ssfSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Securing Safe Food",
    subtitle: "Design Case Study 02 / January 2025",
    description:
      "Securing Safe Food (SSF) is a national nonprofit dedicated to fighting food insecurity among individuals with food allergies and improving access to allergen-free foods.",
    tags: ["figma", "trello", "miro"],
    detailedTags: ["Client Work", "Designer"],
    mockups: "/ssf-assets/mockup.png",
  },
  {
    type: "overview",
    problem:
      "Securing Safe Food (SSF) is dedicated to fighting food insecurity among individuals with food allergies and improving access to allergen-free foods. Through partnerships, communication, research, and education, SSF aims to revolutionize food options for under-resourced, allergen-avoidant families by providing nutritionally balanced alternatives.",
    uxr: "To facilitate the connection of food manufacturers to pantries around the country, SSF requires comprehensive and intuitive admin and volunteer dashboards for their contributors to easily connect allergen-safe food to victims of food insecurity.",
  },
  {
    type: "dd",
    decisions: [
      "Safety-First Workflow Management / Food pantries require specialized separation and tracking systems for allergen-free products, as improper handling can result in life-threatening reactions for recipients. The dashboard must prioritize fail-safe workflows that prevent cross-contamination through clear visual hierarchies, mandatory safety checkpoints, and error-prevention mechanisms built directly into the user interface.",
      "Adaptive Interfaces/The dashboard needs adaptive interface complexity that scales based on user experience levels, with integrated educational resources and features for inexperienced volunteers handling necessary tasks.",
      "Documentation and History/Food bank partnerships involve complex logistics between manufacturers, distributors, and pantries, with accountability challenges in maintaining food quality and availability. Maintaining visual clarity without neglecting proper reporting and documentation is necessary.",
    ],
  },
  {
    type: "iteration",
    wireframes: "/ssf-assets/hifi.png",
    system: "/ssf-assets/lofi.png",
    microint: "/ssf-assets/system.png",
    colortype: "/ssf-assets/colorstype.png",
  },
  {
    type: "demo",
    demo: "/ssf-assets/demo.mp4",
  },
  {
    type: "feedback",
    subheading: "",
    feedback: [
      "Developed a comprehensive design system from scratch including components, patterns, and documentation",
      "Successfully iterated through complex stakeholder requirements while maintaining design consistency",
      "Led design operations and collaborated with engineering team to streamline design-to-development handoff process",
      "Engaged in design reviews and critique sessions to refine solutions and validate design decisions",
      "Design scalability needs revisiting as the current system may not accommodate future feature expansion",
      "Information density is high, consider condensing the amount of information shown at once for better usability for new users",
    ],
  },
];

export const rosterSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "The Roster",
    subtitle: "Design Case Study 03 / December 2024",
    description:
      "The Roster is a comprehensive learning and community-building platform that helps users of all levels understand soccer, stay up to date on teams and players, and foster meaningful connections with like-minded fans.",
    tags: ["figma", "adobe cc", "miro"],
    detailedTags: ["Personal Project", "Designer"],
    mockups: "/roster-assets/mockup.png",
  },
  {
    type: "overview",
    problem:
      "As a global interest in soccer rises, many new fans are eager to engage with the rich, historic culture but face barriers due to a lack of welcoming communities and accessible guidance. Existing platforms often assume prior knowledge, leaving newcomers overwhelmed by the sport’s complexity and culture. This leads to missed opportunities for both fans seeking connection and the broader soccer ecosystem looking to grow its audience.",
    uxr: "The Roster is an inclusive platform designed to help new and curious soccer fans learn the game, stay informed on matches and players, and build community. It offers personalized team recommendations, player insights, and real-time discussions, all within a supportive, judgment-free zone. Unlike traditional sports apps, The Roster is built specifically for fans without existing networks, making it easier to feel connected and confident in their soccer journey.",
  },
  {
    type: "datavis",
    subheading:
      "Four interviews were conducted with young women, aged 23-27 and based out of major american cities, who interacted with soccer content for at least 3 hours per week.  The interviews followed a semi-structured format with a basic interview script that allowed for deviation based on the interviewee’s responses.",
    stats: [
      {
        values: new Map([
          ["Longtime Fans (6+ years)", 33],
          ["Mid-Term Fans (2–5 years)", 28],
          ["New Fans (Joined in the last 12 months)", 39],
        ]),
      },
      {
        values: new Map([
          ["Female", 45],
          ["Male", 42],
          ["Other/Prefer not to say", 3],
        ]),
      },
      {
        values: new Map([
          ["Follow Multiple Leagues", 66],
          ["Follow One League", 34],
        ]),
      },
    ],
    captions: [
      "Nearly 40% of U.S. soccer fans became supporters within the last year (as of 2024), reflecting a major influx of new fans who are still forming their understanding of the sport and its culture.",
      "Almost half of new soccer fans identify as female, signaling a shift toward a more diverse and inclusive fan base",
      "Two-thirds of American fans follow multiple leagues, underscoring the need for tools that help users navigate complex team dynamics, player transfers, and overlapping competitions.",
    ],
  },
  {
    type: "quote",
    quotes: [
      "Interest began during an International tournament /All participants mentioned their interest starting due to an international tournament and cited the passion, atmosphere, and the ubiquity of the culture to be part of the appeal. $I remember watching the [2022 World Cup] final in my apartment and hearing my next door neighbor cheer through the wall$, $I watched the second half at the airport lounge surrounded by strangers huddled around a TV.$.",
      "Majority of social interaction online/Participants mentioned the constant need to prove that they understand the sport due to gender and nationality, forced to test out multiple physical environments until they found a stable community without that judgement.$It’s always like name five soccer players whenever you’re at a sports bar.$",
      "Ambiguity of choice/Participants struggled to articulate why they support the teams they do. Answers ranged from legacy and nationality to attraction and “vibe.” As U.S.-based fans, they lacked geographic loyalty.$After the World Cup, we started watching the EPL because we thought it would be more fun. I liked [Christian] Pulisic from the World Cup and he ended up playing for Chelsea, so it was kind of a right place right time thing.$",
      "Community/Most participants had been exposed to soccer before, but their passion grew once friends got involved. A shared, understanding friend group made it easier to stay invested.$I’ve been watching for 14 years, but it wasn’t until I started posting content on twitter and building a following that I had a real fun community to interact with.$",
    ],
  },
  {
    type: "dd",
    decisions: [
      "Judgment-free spaces to learn and engage/Participants, especially women, faced constant pressure to demonstrate their understanding of the sport due to gender and nationality biases. The platform should create welcoming, educational-first interfaces that normalize asking questions and learning, avoiding intimidating jargon or assuming baseline knowledge.",
      "Emotional connection to team selection/When choosing teams or players to support, participants struggled to articulate clear reasons, often citing intangible factors like 'vibe,' personality, or attractiveness alongside more traditional factors. Recommendation systems should account for subjective, emotional factors beyond statistics—incorporating personality insights, visual content, and community sentiment alongside performance data.",
      "Community connection accelerates engagement and retention/Having friends who share soccer interest was stated as making the experience significantly more enjoyable and easier to navigate. Social features should be central to the platform, facilitating friend connections, group discussions, and shared viewing experiences to recreate that supportive community environment.",
    ],
  },
  {
    type: "uxr",
    carousel: [
      "/roster-assets/userstory1.png",
      "/roster-assets/userstory2.png",
      "/roster-assets/userstory3.png",
      "/roster-assets/storyboards1.png",
      "/roster-assets/storyboards2.png",
      "/roster-assets/lofi.png",
      "/roster-assets/sitemap.png",
    ],
  },
  {
    type: "iteration",
    wireframes: "/roster-assets/hifi.png",
    system: "/roster-assets/lofi2.png",
    microint: "/roster-assets/lofi.png",
    colortype: "/roster-assets/colorstype.png",
  },
  {
    type: "demo",
    demo: "/roster-assets/demo.mp4",
  },
  {
    type: "feedback",
    subheading: "",
    feedback: [
      "Chat functionality resonates well with users as an engagement feature",
      "Benchmarking analysis provided crisp, actionable takeaways for stakeholders",
      "Beginner user journey could be unclear, need clearer starting point for complete newcomers to soccer",
      "ADA contrast compliance needs attention",
      "Role and value of roster feature must be clarified or highlighted more prominently",
    ],
  },
];

export const polarisSections: AllSectionTypes[] = [
  {
    type: "header",
    title: "Polaris",
    subtitle: "Development Case Study 02 / December 2024",
    description:
      "A peer-guidance platform that connects students to mentors, helping them find career resources, apply to jobs, and grow their career network.",
    tags: ["Python", "Flask", "Streamlit", "MySQL", "Docker", "Git"],
    detailedTags: ["Personal Project", "Developer"],
    mockups: "/polaris-assets/mockup.png",
  },
  {
    type: "overview",
    problem:
      "Students navigating the co-op and early career search often struggle to find tailored guidance from people who have successfully been through the process. Current university resources can be generalized, leaving gaps in specific industry knowledge and personalized support. Employers also lack efficient ways to discover and connect with students who fit their hiring needs. Advisors face difficulty managing these relationships at scale while ensuring quality mentorship.",
    uxr: "Polaris is a multi-user platform where students (mentees), alumni or upperclassmen (mentors), advisors, and employers collaborate to enhance career readiness and opportunities./Mentees get matched with mentors in their field, receive guidance, build public profiles, and apply directly to positions.Mentors track mentee progress, offer targeted feedback, and receive advisor guidance. Advisors manage matches, host networking events, and oversee platform engagement. Employers browse student profiles, receive applications, and connect via events.",
  },
  {
    type: "dd",
    decisions: [
      "System Design / A containerized microservices architecture with separate services for API, frontend, and database, orchestrated using Docker Compose.",
      "API Design/ RESTful API built with Flask to handle CRUD operations for user profiles, applications, event management, and chat. Ensures modular endpoints for each persona’s needs.",
      "Database Schema/ MySQL database with tables for users, mentorship_matches, events, applications, and chat_logs. Foreign keys ensure relationships between personas and their interactions.",
    ],
  },
  {
    type: "uxr",
    carousel: [
      "/polaris-assets/userstory1.png",
      "/polaris-assets/userstory2.png",
      "/polaris-assets/userstory3.png",
      "/polaris-assets/userstory4.png",
      "/polaris-assets/erdiagram.png",
      "/polaris-assets/dbdiagram.png",
      "/polaris-assets/sitemap.png",
    ],
  },
  {
    type: "iteration",
    wireframes: "/polaris-assets/hifi.png",
    system: "/polaris-assets/lofi.png",
    microint: "/polaris-assets/features.png",
    colortype: "/polaris-assets/colorstype.png",
  },
  {
    type: "demo",
    demo: "/polaris-assets/demo.mp4",
  },
  {
    type: "feedback",
    subheading: "",
    feedback: [
      "Gained experience with full-stack development using Flask + Streamlit",
      "Learned Docker containerization and environment configuration.",
      "Overcame team-based development challenges when building software with varying software development skill levels.",
      "In the future, add authentication for data privacy and security",
      "Enhance mentor-mentee matching with machine learning for better recommendations.",
    ],
  },
];
