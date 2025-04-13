import PageLayout from "../components/page-layout";
import { designProjects } from "../utils/projects";

export default function Design() {
  return (
    <PageLayout
      title={"DESIGN"}
      description={
        "Designing visuals that go beyond aesthetics. Building on a fine arts background to experiment with visual identity, intentionality, and purpose to create meaningful, human-centered experiences."
      }
      canvasImage={"lp.jpg"}
      projects={designProjects}
    ></PageLayout>
  );
}
