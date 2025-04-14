import PageLayout from "../components/page-layout";
import { devProjects } from "../utils/projects";

export default function Development() {
  return (
    <PageLayout title={"DEVELOPMENT"} description={"With a background in Computer Science and Design, I do my best work where creativity meets logic. My development work focuses on connecting intuitive user interfaces to thoughtful, functional experiences— all brought to life through code."} canvasImage={"bw.svg"} projects={devProjects}></PageLayout>
  );
}
