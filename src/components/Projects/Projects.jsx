import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects-list">
      <Project
        title="My Plant Diary"
        description={`A full-stack web app that helps you keep your houseplants alive built with React, Django and PostgreSQL.`}
        summaryPoints={[
          "Lets you schedule plant care tasks (e.g. watering, repotting, pruning), take notes and make progress updates",
          "Uses Firebase Cloud Storage to allow image uploads",
        ]}
        techStack={[
          "React",
          "Material UI",
          "Django",
          "Django Rest Framework",
          "PostgreSQL",
          "Firebase",
        ]}
        githubLink="https://github.com/mdamnjan/my-plant-diary"
        liveLink="https://my-plant-diary.up.railway.app/"
      />
      <Project
        title="GitHub Stats Viewer"
        description="A web app that lets you see metrics related to a GitHub user's account or repository."
        summaryPoints={[
          "Has a sign in with GitHub option that allows users to see metrics for their private GitHub repositories.",
          "Uses React-query to cache queries and limit the number of calls to GitHub's APIs",
        ]}
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
      />
      <Project
        title="Personal Website"
        description="A React website to showcase my portfolio using GitHub Pages. Also the website you're on right now! It deploys to GitHub Pages automatically when I push any changes thanks to GitHub Actions."
        techStack={["React", "CSS", "GitHub Actions"]}
        githubLink="https://github.com/mdamnjan/mdamnjan.github.io/"
        liveLink="https://mdamnjan.github.io/"
      />
      <Project
        title="Nuit Blanche Scraper"
        description={
          "A Python/Selenium scraper that grabs exhibit information from the Toronto 2023 Nuit Blanche website and preps it to be imported into Google My Maps.\n\nI used it to generate the map below (click on an icon to see get the exhibit's details and directions):"
        }
        techStack={["Python", "Selenium"]}
        githubLink="https://github.com/mdamnjan/nuit-blanche-scraper"
        embedded={
          <iframe
            title="Google My Maps"
            src="https://www.google.com/maps/d/u/0/embed?mid=14A7B4a7-pqqFu2PgVr7gx8CJ6p1EGdo&ehbc=2E312F"
            height="300"
            width={"100%"}
            style={{ maxWidth: "500px" }}
          ></iframe>
        }
      />
      <Project
        title="@sdelements/flan"
        description="A CLI tool I helped build during my time at Security Compass that leverages Git to allow easy and efficient sharing and loading of Postgres instances."
        techStack={["Typescript", "Oclif"]}
        githubLink="https://github.com/sdelements/flan"
      />
    </div>
  );
};

export default Projects;
