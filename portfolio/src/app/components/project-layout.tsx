"use client";
import { AllSectionTypes, NewProject } from "../utils/types";
import DDSection from "./dd-section";
import HeaderSection from "./header-section";
import OverviewSection from "./overview-section";
import UXRSection from "./uxr-section";
import IterationSection from "./iteration-section";
import DemoSection from "./demo-section";
import FeedbackSection from "./feedback-section";
import DataVisSection from "./datavis-section";
import QuoteSection from "./quote-section";


interface ProjectLayoutProps {
  project: NewProject;
}

interface SectionRendererProps {
  section: AllSectionTypes;
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {

  function SectionRenderer({ section }: SectionRendererProps) {
    switch (section.type) {
      case "header":
        return <HeaderSection sectionDetails={section} />;
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
    <div className="w-full">
      {project.sections?.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </div>
  );
}
