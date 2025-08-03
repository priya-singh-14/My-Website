export interface Project {
  id: string;
  title: string;
  cardImage?: string;
  mockup: string;
  description: string;
  techstack: string;
  link?: string;
  carousel: Array<string>;
  bullets: Array<string>;
  purpose: string;
  details?: string;
  process: string;
  demo?: string;
  video?: string;
}

export interface ProjectSection {
  type: string;
}

export interface HeaderSection extends ProjectSection {
  type: "header";
  title: string;
  subtitle: string;
  description: string;
  tags: Array<string>;
  detailedTags: Array<string>;
  mockups: string;
  link: string;
}

interface OverviewSection extends ProjectSection {
  type: "overview";
  problem: string;
  uxr: string;
}

interface DataVisSection extends ProjectSection {
  type: "datavis";
  stats: Array<Number>;
}

interface DDSection extends ProjectSection {
  type: "dd";
  decisions: Array<String>;
}

interface UXRSection extends ProjectSection {
  type: "uxr";
  carousel: Map<String, String>;
}

interface IterationSection extends ProjectSection {
  type: "iteration";
  wireframes: string;
  system: string;
  microint: string;
  colortype: string;
}

interface DemoSection extends ProjectSection {
  type: "demo";
  demo: string;
}

interface FeedbackSection extends ProjectSection {
  type: "feedback";
  subheading: string;
  feedback: Array<String>;
}

export type AllSectionTypes = HeaderSection | OverviewSection | DataVisSection | DDSection | UXRSection | IterationSection | DemoSection | FeedbackSection;

export interface NewProject {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  subtitle: string;
  tags: Array<string>;
  sections?: Array<AllSectionTypes>;
}
