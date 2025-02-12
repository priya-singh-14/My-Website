import PageLayout from "../components/page-layout";
import { Project } from "../utils/types";

var devProjects: Project[] = [{title: "title 1"}, {title: "title 2"}, {title: "title 3"}, {title: "title 4"}]

export default function Development() {
  return (
    <PageLayout title={"DEVELOPMENT"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} canvasImage={"bw.svg"} projects={devProjects}></PageLayout>
  );
}
