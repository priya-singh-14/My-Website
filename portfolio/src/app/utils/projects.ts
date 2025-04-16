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
    process:
      "Cairn leverages multiple API's, scheduling and recommendation algorithms, and a streamlined UI to help users find attractions that match their interests. The platform then suggests times for those activities, and easily incorporate them into a personalized schedule.",
    mockup: "cairnmock.png",
    demo: "cairnmock.png",
    carousel:["/cairnhome.png", "/cairnonboard.png", "/cairnbase.png", "/cairnbase2.png", "/cal.png", "/cairncal.png"],
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
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
    process:
      "Polaris is a mentorship matchmaking platform designed to guide students through their early career-building process. By pairing students with mentors who share their field of study and career interests, Polaris ensures that every mentee gets personalized, relevant advice—from someone who’s already walked the path they’re hoping to follow.",
    mockup: "polarismock.png",
    demo: "comp.jpg",
    link: "https://github.com/priya-singh-14/Polaris",
    carousel: ["/1.png", "/2.png", "/3.png", "/5.png", "/6.png", "/7.png", "/8.png", "/9.png", "/10.png", "/11.png"],
    bullets: ["/1.png", "/2.png", "/3.png", "/5.png", "/6.png"],
  },
  {
    id: "3",
    cardImage: "candy.png",
    title: "Candid Candies - Message Board",
    description:
      "Overview: A Candy Heart inspired message-board web application",
    techstack:
      "React | HTML | CSS | MongoDB | Adobe Fresco | Adobe Illustrator",
    purpose:
      "Candid Candies is a message-board web application that allows for the drafting and posting of messages onto a candy heart inspired landing page. The UI includes hand-drawn visual elements with coded functionality using React.js, showcases an ability to combine front-end development skills with hand-drawn designs. This project is currently in development, in collaboration with Arushi Aggarwal.",
    mockup: "candymock.png",
    demo: "comp.jpg",
    link: "https://github.com/priya-singh-14/candid-candy",
    carousel: ["/hearts.png", "/hearts2.png"],
    bullets: ["/cairnhome.png", "/cairnonboard.png", "/cairnbase.png", "/cairnbase2.png", "/cal.png", "/cairncal.png"],
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
    description:
      "Overview: Connecting food banks to safe food providers",
    techstack:
      "Figma",
    mockup: "string",
    demo: "comp.jpg",
    carousel: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
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
    mockup: "string",
    demo: "comp.jpg",
    carousel: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
  },
  {
    id: "6",
    title: "Cairn - Trip Scheduler",
    cardImage: "cairn.png",
    description:
      "Overview: A trip planning application that works around your schedule",
    techstack:
      "Figma | Adobe Illustrator | Adobe Photoshop | Adobe Fresco",
    purpose:
      "Cairn is a trip scheduling platform for travelers who want to get the most out of their vacation, without foregoing their commitments and travel constraints.",
    mockup: "string",
    demo: "comp.jpg",
    carousel: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
  },

  {
    id: "7",
    cardImage: "roster.png",
    title: "The Roster - Soccer Social Network",
    description:
      "Overview: Education and Community Building for New Soccer Fans",
    techstack:
      "Figma | Adobe Illustrator | Adobe Photoshop | Adobe Fresco",
    mockup: "string",
    demo: "comp.jpg",
    carousel: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
    bullets: ["/cairnhome.png", "/cal.png", "/cairncal.png"],
  },
];
