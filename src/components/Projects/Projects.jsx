import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects-list">
      <Project
        title="My Plant Diary"
        description="A web app for tracking the health of your houseplants."
        techStack={["React", "Django", "PostgreSQL", "Firebase"]}
        githubLink=""
        liveLink=""
      />
      <Project
        title="Todo App"
        description="A simple todo list app that syncs with Google calendar."
        techStack={["React", "Django", "PostgreSQL", "Firebase"]}
        githubLink=""
        liveLink=""
      />
    </div>
  );
};

export default Projects;
