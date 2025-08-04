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
  link?: string;
}

export interface OverviewSection extends ProjectSection {
  type: "overview";
  problem: string;
  uxr: string;
}

export interface DataVis {
  values: Map<string, number>;
}

export interface DataVisSection extends ProjectSection {
  type: "datavis";
  subheading: string;
  stats: Array<DataVis>
  captions?: Array<string>;
}

export interface DDSection extends ProjectSection {
  type: "dd";
  decisions: Array<string>;
}

export interface UXRSection extends ProjectSection {
  type: "uxr";
  carousel: Array<string>;
}

export interface IterationSection extends ProjectSection {
  type: "iteration";
  wireframes: string;
  system: string;
  microint: string;
  colortype: string;
}

export interface DemoSection extends ProjectSection {
  type: "demo";
  demo: string;
}

export interface FeedbackSection extends ProjectSection {
  type: "feedback";
  subheading: string;
  feedback: Array<string>;
}

export type AllSectionTypes =
  | HeaderSection
  | OverviewSection
  | DataVisSection
  | DDSection
  | UXRSection
  | IterationSection
  | DemoSection
  | FeedbackSection;

export interface NewProject {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  subtitle: string;
  tags: Array<string>;
  sections?: Array<AllSectionTypes>;
}
