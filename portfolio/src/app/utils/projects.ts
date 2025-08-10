import { cairnSections, pockItSections, polarisSections, receiptSections, rosterSections, ssfSections } from "./sections";
import { NewProject } from "./types";

export const allProjects: NewProject[] = [
  // {
  //   id: "0",
  //   title: "PockIt",
  //   coverImage: "work-page-assets/pockit.png",
  //   description:
  //     "A stylized web-scraping and wish-listing platform that features authentication, database storage, and webpage parsing.",
  //   subtitle: "Design/Development 01 / July 2025",
  //   tags: ["React", "Typescript", "tailwind", "python", "figma", "adobe cc"],
  //   sections: pockItSections,
  // },
  {
    id: "1",
    title: "RE:CEIPT",
    coverImage: "work-page-assets/receipt.png",
    description:
      "A mobile application to help financially-independent young adults develop sustainable spending habits by integrating financial tracking with eco-friendly purchase suggestions.",
    subtitle: "Design 01 / MAY 2025",
    tags: ["figma", "notion", "miro"],
    sections: receiptSections,
  },
  {
    id: "2",
    title: "Cairn",
    coverImage: "work-page-assets/cairn.png",
    description:
      "A trip scheduling platform for travelers who want to get the most out of their vacation, without foregoing their commitments and travel constraints.",
    subtitle: "Development 01 / January 2025",
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
    sections: cairnSections
  },
  {
    id: "3",
    title: "Securing Safe Food",
    coverImage: "work-page-assets/ssf.png",
    description:
      "Securing Safe Food (SSF) is a national nonprofit dedicated to fighting food insecurity among individuals with food allergies and improving access to allergen-free foods.",
    subtitle: "Design 02 / January 2025",
    tags: ["figma", "trello", "miro"],
    sections: ssfSections
  },
  {
    id: "4",
    title: "The Roster",
    coverImage: "work-page-assets/roster.png",
    description:
      "A comprehensive learning and community-building platform that helps users of all levels understand soccer, stay up to date on teams and players, and foster meaningful connections with like-minded fans.",
    subtitle: "Design 03 / December 2024",
    tags: ["figma", "adobe cc", "miro"],
    sections: rosterSections
  },
  {
    id: "5",
    title: "Polaris",
    coverImage: "work-page-assets/polaris.png",
    description:"A peer-guidance platform that connects students to mentors, helping them find career resources, apply to jobs, and grow their career network.",
    subtitle: "Development 02 / December 2024",
    tags: ["Python", "Flask", "Streamlit", "MySQL", "Docker", "Git"],
    sections: polarisSections
  },
];