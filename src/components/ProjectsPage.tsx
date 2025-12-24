import { MOCK_PROJECTS } from "../Models/MockProject";
import ProjectList from "./ProjectList";
import { Project } from "../Models/Project";
import { useState } from "react";

function Projectspage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };
  return (
    <>
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={projects} />
    </>
  );
}

export default Projectspage;
