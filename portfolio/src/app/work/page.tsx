import AllProjectsLayout from "../components/all-projects-layout";
import { allProjects } from "../utils/projects";

export default function Work() {
  return (
    <AllProjectsLayout title={"WORK"} description={""} projects={allProjects}></AllProjectsLayout>
  );
}
