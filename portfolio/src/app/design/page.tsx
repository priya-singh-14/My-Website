import PageLayout from "../components/page-layout";
import { designProjects } from "../utils/projects";

export default function Design() {
  return (
    <PageLayout
      title={"DESIGN"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
      canvasImage={"lp.jpg"}
      projects={designProjects}
    ></PageLayout>
  );
}
