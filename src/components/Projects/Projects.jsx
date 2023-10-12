import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects-list">
      <Project
        title="My Plant Diary"
        description="A web app that helps you keep your houseplants alive."
        techStack={["React", "Material UI", "Django", "PostgreSQL"]}
        githubLink="https://github.com/mdamnjan/my-plant-diary"
        liveLink=""
      />
      <Project
        title="GitHub Stats Viewer"
        description="A web app that lets you see metrics related to a GitHub user's account or repository."
        techStack={["React", "Chart.js", "Bootstrap", "Node", "Express", "GitHub API"]}
        githubLink="https://github.com/mdamnjan/gh-stats-viewer"
        liveLink="https://gh-stats-viewer.up.railway.app/"
      />
      <Project
        title="Personal Website"
        description="That's this website!"
        techStack={["React", "CSS", "GitHub Actions"]}
        githubLink="https://github.com/mdamnjan/mdamnjan.github.io/"
        liveLink="https://mdamnjan.github.io/"
      />
      <Project
        title="Nuit Blanche Scraper"
        description="A simple scraper that grabs exhibit information from the Toronto 2023 Nuit Blanche website and preps it to be imported into Google My Maps."
        techStack={["Python", "Selenium"]}
        githubLink="https://github.com/mdamnjan/nuit-blanche-scraper"
        liveLink=""
      />
    </div>
  );
};

export default Projects;
