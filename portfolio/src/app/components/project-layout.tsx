"use client";
import { AllSectionTypes, NewProject } from "../utils/types";
import DDSection from "./dd-section";
import HeaderSection from "./header-section";
import MetaSection from "./meta-section";
import OverviewSection from "./overview-section";
import UXRSection from "./uxr-section";
import IterationSection from "./iteration-section";
import DemoSection from "./demo-section";
import FeedbackSection from "./feedback-section";
import DataVisSection from "./datavis-section";
import QuoteSection from "./quote-section";
import ProcessSection from "./process-section";
import OutcomesSection from "./outcomes-section";
import TableOfContents from "./table-of-contents";

const sectionLabels: Partial<Record<AllSectionTypes["type"], string>> = {
  overview: "Overview",
  datavis: "Research",
  process: "Process",
  uxr: "Explorations",
  iteration: "Iteration",
  demo: "Demo",
  outcomes: "Outcomes",
  dd: "Decisions",
  quote: "Quote",
  feedback: "Feedback",
};

interface ProjectLayoutProps {
  project: NewProject;
}

interface SectionRendererProps {
  section: AllSectionTypes;
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {
  const tocItems = (project.sections ?? [])
    .filter((section) => sectionLabels[section.type])
    .map((section) => ({
      id: `section-${section.type}`,
      label: sectionLabels[section.type]!,
      scrollTarget: section.type === "overview" ? "header" : undefined,
    }));

  function SectionRenderer({ section }: SectionRendererProps) {
    switch (section.type) {
      case "header":
        return <HeaderSection sectionDetails={section} />;
      case "meta":
        return <MetaSection sectionDetails={section} />;
      case "process":
        return <ProcessSection sectionDetails={section} />;
      case "outcomes":
        return <OutcomesSection sectionDetails={section} />;
      case "overview":
        return <OverviewSection sectionDetails={section} />;
      case "datavis":
        return <DataVisSection sectionDetails={section} />;
      case "dd":
        return <DDSection sectionDetails={section} />;
      case "uxr":
        return <UXRSection sectionDetails={section} />;
      case "quote":
        return <QuoteSection sectionDetails={section} />;
      case "iteration":
        return <IterationSection sectionDetails={section} />
      case "demo":
        return <DemoSection sectionDetails={section} />
      case "feedback":
          return <FeedbackSection sectionDetails={section} />
      default:
        return null;
    }
  }

  return (
    <div>
      <TableOfContents items={tocItems} />
      <div className="max-w-[1100px] mx-auto">
        {project.sections?.map((section, index) => (
          <div key={index} id={sectionLabels[section.type] ? `section-${section.type}` : undefined}>
            <SectionRenderer section={section} />
          </div>
        ))}
      </div>
    </div>
  );
}
