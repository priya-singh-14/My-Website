import PageLayout from "../components/page-layout";
import { devProjects } from "../utils/projects";

export default function Development() {
  return (
    <PageLayout title={"DEVELOPMENT"} description={"With a background in Computer Science and Design, I thrive at the intersection of creativity and logic. My development work lets me build seamless connections between intuitive user interfaces and robust backend systems—bringing thoughtful, functional experiences to life through code."} canvasImage={"bw.svg"} projects={devProjects}></PageLayout>
  );
}
