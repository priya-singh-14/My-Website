"use client";
import { AllSectionTypes, NewProject } from "../utils/types";
import HeaderSection from "./header-section";
import MetaSection from "./meta-section";
import OverviewSection from "./overview-section";
import IterationSection from "./iteration-section";
import DemoSection from "./demo-section";
import DataVisSection from "./datavis-section";
import ProcessSection from "./process-section";
import OutcomesSection from "./outcomes-section";
import NoteSection from "./note-section";
import TableOfContents from "./table-of-contents";

const sectionLabels: Partial<Record<AllSectionTypes["type"], string>> = {
  overview: "Overview",
  datavis: "Research",
  process: "Process",
  iteration: "Iteration",
  outcomes: "Outcomes",
};

interface ProjectLayoutProps {
  project: NewProject;
}

interface SectionRendererProps {
  section: AllSectionTypes;
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {
  const sections = project.sections ?? [];
  const sectionIds = sections.map((section, index) => `section-${section.type}-${index}`);

  const tocItems: Array<{ id: string; label: string; scrollTarget?: string }> = [];
  const seenTypes = new Set<string>();
  sections.forEach((section, index) => {
    if (!sectionLabels[section.type] || seenTypes.has(section.type)) return;
    seenTypes.add(section.type);
    tocItems.push({
      id: sectionIds[index],
      label: sectionLabels[section.type]!,
      scrollTarget: section.type === "overview" ? "header" : undefined,
    });
  });

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
      case "iteration":
        return <IterationSection sectionDetails={section} />
      case "demo":
        return <DemoSection sectionDetails={section} />
      case "note":
        return <NoteSection sectionDetails={section} />
      default:
        return null;
    }
  }

  return (
    <div>
      <TableOfContents items={tocItems} />
      <div className="max-w-[1100px] mx-auto">
        {sections.map((section, index) => (
          <div key={index} id={sectionLabels[section.type] ? sectionIds[index] : undefined}>
            <SectionRenderer section={section} />
          </div>
        ))}
      </div>
    </div>
  );
}
