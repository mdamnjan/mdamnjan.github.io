import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects-list">
      <Project
        title="My Plant Diary"
        description="A web app that helps you keep your houseplants alive. Inspired by my covid-hobby of buying a bunch of plants."
        techStack={["React", "Material UI", "Django", "Django Rest Framework", "PostgreSQL"]}
        githubLink="https://github.com/mdamnjan/my-plant-diary"
      />
      <Project
        title="GitHub Stats Viewer"
        description="A web app that lets you see metrics related to a GitHub user's account or repository."
        techStack={[
          "React",
          "Chart.js",
          "Bootstrap",
          "Node",
          "Express",
          "GitHub API",
        ]}
        githubLink="https://github.com/mdamnjan/gh-stats-viewer"
        liveLink="https://gh-stats-viewer.up.railway.app/"
        img=""
      />
      <Project
        title="Personal Website"
        description="A website to showcase my portfolio using GitHub Pages. Also the website you're on right now!"
        techStack={["React", "CSS", "GitHub Actions"]}
        githubLink="https://github.com/mdamnjan/mdamnjan.github.io/"
        liveLink="https://mdamnjan.github.io/"
      />
      <Project
        title="Nuit Blanche Scraper"
        description="A simple scraper that grabs exhibit information from the Toronto 2023 Nuit Blanche website and preps it to be imported into Google My Maps."
        techStack={["Python", "Selenium"]}
        githubLink="https://github.com/mdamnjan/nuit-blanche-scraper"
      />
      <Project
        title="@sdelements/flan"
        description="A CLI tool for sharing Postgres instances that I helped build during my time at Security Compass."
        techStack={["Typescript", "Oclif"]}
        githubLink="https://github.com/sdelements/flan"
      />
    </div>
  );
};

export default Projects;
