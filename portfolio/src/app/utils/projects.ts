import { Project } from "./types";

export const devProjects: Project[] = [
  // {
  //   id: "0",
  //   cardImage: "starred.png",
  //   title: "Starred - Browser Wishlist",
  //   description: "A stylized and accessible wishlisting platform that features authentication, database storage, and webpage parsing.",
  //   techstack: "React, Typescript, Python, Next.js, Firebase",
  //   mockup: "comp.jpg",
  //   purpose: "lorem",
  //   process: "lorem",
  //   demo: "demo.mov",
  //   imageSm: "comp.jpg",
  //   imageLg: "comp.jpg",
  // },
  {
    id: "1",
    cardImage: "cairn2.png",
    title: "Cairn - Trip Scheduler",
    description:
      "Overview: A trip planning application that works around your schedule",
    techstack:
      "React | Typescript | Tailwindcss | Express | Cypress | Vite | Adobe suite",
    purpose:
      "Cairn is a trip scheduling platform for travelers who want to get the most out of their vacation, without foregoing their commitments and travel constraints. The web-app allows its users to add events they find interesting while recommending a schedule that works around their existing plans.",
    details:
      "This project was completed with a team of six developers, affiliated with NExT— Northeastern's Software Consulting Organization. While previously deployed with Azure Container Services, the deployment was taken down to avoid costs. For a code walk or a demo, please reach out to schedule a meeting.",
    process:
      "Cairn leverages multiple API's, scheduling and recommendation algorithms, and a streamlined UI to help users find attractions that match their interests. The platform then suggests times for those activities, and easily incorporate them into a personalized schedule.",
    mockup: "cairnmock.png",
    demo: "cairnmock.png",
    link: "",
    carousel: [
      "/cairnhome.png",
      "/cairnonboard.png",
      "/cairnbase.png",
      "/cairnbase2.png",
      "/cal.png",
      "/cairncal.png",
    ],
    bullets: [
      "Used agile development methodologies within a team of six to iteratively improve the product across weekly sprints",
      "Conducted user research to understand traveler pain points and inform features",
      "Integrated multiple APIs (Geodb Cities, TripAdvisor, Pexel Images) to create a robust, streamlined interface",
      "Strategized an approach to constraint-based scheduling using modified greedy algorithms to balance user preferences with real-world limitations",
      "Used Adobe Services to add a layer of interactivity to the platform, but offering a 'stacked-cairn' view of a user's calendar",
    ],
  },
  {
    id: "2",
    cardImage: "polaris.png",
    title: "Polaris - Peer Mentorship",
    description:
      "Overview: Community Career Guidance at Northeastern University",
    techstack: "Python | SQL | FlaskAPI | Streamlit",
    purpose:
      "Polaris allows students to connect with mentors that have experience finding co-ops, networking with employers, and establishing a career post-grad. Mentors and mentees are matched based on their area of study and interests, so that mentees receive advice from graduates working in their desired field with experience looking for the same co-ops and job opportunities.",
    details: "This project was completed in a team of five.",
    process:
      "Polaris is a mentorship matchmaking platform designed to guide students through their early career-building process. By pairing students with mentors who share their field of study and career interests, Polaris ensures that every mentee gets personalized, relevant advice—from someone who’s already walked the path they’re hoping to follow.",
    mockup: "polarismock.png",
    demo: "comp.jpg",
    link: "https://github.com/priya-singh-14/Polaris",
    carousel: [
      "/1.png",
      "/2.png",
      "/3.png",
      "/5.png",
      "/6.png",
      "/7.png",
      "/8.png",
      "/9.png",
      "/10.png",
      "/11.png",
    ],
    bullets: [
      "Performed user research to develop four distinct personas for the platform: Mentee, Mentor, Advisor and Employer",
      "Constructed workflows and requirements based on the specific needs of each persona",
      "Designed a pairing system that connects mentees with mentors based on academic background, career interests, and Northeastern college",
      "Used ER diagrams to design and build a relational database architecture in MySQL to efficiently store and retrieve user profiles, job posting information, and career development resources",
      "Created a streamlined user experience with Streamlit that allows students to easily navigate the product and use features like direct messaging, applying to jobs, and editing their profiles",
      "Implemented a Flask API backend to facilitate a data pipeline between the frontend and the database",
    ],
  },
  {
    id: "3",
    cardImage: "candy.png",
    title: "Candid Candies - Message Board",
    description:
      "Overview: A Candy Heart inspired message-board web application",
    techstack:
      "ExpressJS | HTML | CSS | MongoDB | Adobe Fresco | Adobe Illustrator",
    purpose:
      "Candid Candies is a message-board web application that allows for the drafting and posting of messages onto a candy heart inspired landing page. The user interface includes hand-drawn visual elements embedded with functionality using Javascript, showcases an ability to combine front-end development skills with hand-drawn designs",
    details: "This project was built in collaboration with Arushi Aggarwal.",
    process:
      "While working on Candid Candies, my partner and I architected an MVC Architecture connecting an ExpressJS backend, a scalable database, and a frontend that combines artistic license with technical functionality to create a unique user experience.",
    mockup: "candymock.png",
    demo: "comp.jpg",
    link: "https://github.com/priya-singh-14/candid-candy",
    carousel: ["/hearts.png", "/hearts2.png"],
    bullets: [
      "Created custom visual elements using Adobe Fresco and Adobe Illustrator, to add mixed-media into the React framework",
      "Implemented a MongoDB database to store and retrieve user messages while maintaining scalability",
      "In the future, considering to include user authentication through MongoDB and message interaction features to enhance a interactive community aspect of the platform",
    ],
  },
  // {
  //   id: "4",
  //   cardImage: "stock.png",
  //   title: "StockView - Stock Simulator",
  //   description: "Overview: desc 5",
  //   purpose: "StockView is a stock trading simulation program, coded in Java, that utilizes SOLID principles and MVC architecture to create an environment for simulating stock trading. The program supports over 700 stock tickers, and functionalities such as building multiple portfolios, determining x-day averages, buying, selling, and valuating stocks and portfolios on certain dates, and creating bar-graph representations of stock and portfolio performance among other functionalities. The project features both text-based and Swing GUI interfaces, enabling users to query real-time stock data through integrated API retrieval using AlphaVantageAPI. To enhance performance, we implemented a data caching mechanisms, allowing for more efficient API usage and improved query responsiveness. Built in collaboration with Ayomide Addey. Available on Github upon request.",
  //   techstack: "Java | JavaSwing | AlphaVantage API",
  //   mockup: "string",
  //   demo: "comp.jpg",
  // },
];

export const designProjects: Project[] = [
  {
    id: "8",
    cardImage: "ssf.png",
    title: "Securing Safe Food - Allergen-Safe Food Bank",
    description: "Overview: Connecting food banks to safe food providers",
    techstack: "Figma",
    mockup: "ssfmock.png",
    demo: "comp.jpg",
    purpose: "",
    process: "",
    carousel: [],
    link: "https://www.figma.com/proto/2Y0g8UL3sjWaIo1dAVgnGa/Admin-Dashboard-WF---Volunteer-Dashboard-WF?node-id=174-516&t=WKkO7tVec9CXwOru-1",
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
  },
  {
    id: "9",
    cardImage: "inspira.png",
    title: "Inspira - Artist Resources",
    description: "Overview: Resource curation for creatives and designers",
    techstack: "Figma",
    purpose:
      "Inspira is a resource-curation website for creatives, looking to use generative AI to complement artistic processes, rather than take away from them. This project began with an understanding of the relationship between artists and generative AI. As an artist myself, I have experienced the frustration of generative AI being used to produce artwork through the exploitation of artists online. I wanted to restructure the relationship between artists and AI by providing an environment where this technology can uplift the creative process in a systemized manner, rather than rob from it.",
    process:
      "The current prototype supports primary workflows, such as logging in and signing up, creating a new workspace, saving generated resources to a profile, and exploring a page of publically available workspaces categorized by art form.  These workflows were visualized through both a hand-drawn and digital sitemap. These workflows were identified through benchmarking, as well as my own role as a user of these platforms. I identified the aspects of these UI's that I thought worked well, and ones that I did not want to bring into my own project.",
    mockup: "inspiramock.png",
    demo: "comp.jpg",
    carousel: [],
    link: "https://www.figma.com/proto/2sqRWNFGCqo7NDtJ0mshn6/Inspira?node-id=0-1&t=Mt0uoOGQE06pcISk-1",
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
  },
  {
    id: "6",
    title: "Cairn - Trip Scheduler",
    cardImage: "cairn.png",
    description:
      "Overview: A trip planning application that works around your schedule",
    techstack: "Figma | Adobe Illustrator | Adobe Photoshop | Adobe Fresco",
    purpose:
      "Cairn is a trip scheduling platform for travelers who want to get the most out of their vacation, without foregoing their commitments and travel constraints.",
    process: "",
    mockup: "cairnmock.png",
    demo: "comp.jpg",
    carousel: [],
    link: "https://www.figma.com/proto/84U9JPWEv4sPGqOanXzCHl/Cairn-Figma-File?node-id=0-1&t=SKmPnTkVxxwShHql-1",
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
  },

  {
    id: "7",
    cardImage: "roster.png",
    title: "The Roster - Soccer Social Network",
    description:
      "Overview: Education and Community Building for New Soccer Fans",
    techstack: "Figma | Adobe Illustrator | Adobe Photoshop | Adobe Fresco",
    mockup: "rostermock.png",
    demo: "comp.jpg",
    carousel: [],
    purpose: "",
    process: "",
    link: "https://www.figma.com/proto/O750ndrFJbdkG5839WBfdM/Interaction-Design?node-id=235-1802&t=P5EdDkXXwaRX0moA-1",
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
  },
];
