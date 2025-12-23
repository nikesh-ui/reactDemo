import { MOCK_PROJECTS } from "../Models/MockProject";
import ProjectList from "./ProjectList";
import { Project } from "../Models/Project";

function Projectspage() {
  const saveProject = (project: Project) => {
    console.log("Saving Project: ", project);
  };
  return (
    <>
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} />
    </>
  );
}

export default Projectspage;
