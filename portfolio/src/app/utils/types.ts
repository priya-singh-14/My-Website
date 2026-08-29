export interface ProjectSection {
  type: string;
}

export interface HeaderSection extends ProjectSection {
  type: "header";
  title: string;
  description: string;
  tags?: Array<string>;
  detailedTags?: Array<string>;
  mockups: string;
}

export interface MetaSection extends ProjectSection {
  type: "meta";
  role?: string;
  duration?: string;
  skills?: string;
  team?: string;
}

export interface ProcessDecision {
  title: string;
  body: string;
}

export interface ProcessSection extends ProjectSection {
  type: "process";
  heading?: string;
  items: Array<ProcessDecision>;
  mockup?: string;
}

export interface OutcomesSection extends ProjectSection {
  type: "outcomes";
  summary: string;
  takeaways: Array<string>;
  retrospective: Array<string>;
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
  captions: Array<string>;
}

export interface IterationSection extends ProjectSection {
  type: "iteration";
  wireframes?: string;
  system?: string;
  microint?: string;
  colortype?: string;
}

export interface DemoSection extends ProjectSection {
  type: "demo";
  demo: string;
  link?: string;
  // Rendered directly beneath the demo, styled as a note.
  caption?: string;
}

export interface NoteSection extends ProjectSection {
  type: "note";
  body: string;
}

export type AllSectionTypes =
  | HeaderSection
  | MetaSection
  | OverviewSection
  | DataVisSection
  | ProcessSection
  | IterationSection
  | DemoSection
  | OutcomesSection
  | NoteSection;

// A project is just a URL and the sections that render on its page. Card copy
// (title, cover, blurb, tags) lives in the landing page markup, and the
// on-page heading comes from the project's own `header` section.
export interface NewProject {
  // Drives the /project-details/<slug> URL. Kept explicit rather than derived
  // from a title so renaming one can never silently break a live URL.
  slug: string;
  sections?: Array<AllSectionTypes>;
}
