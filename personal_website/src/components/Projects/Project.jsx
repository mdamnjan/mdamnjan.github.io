import "./projects.css";

const Project = ({ title, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="project-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {techStack.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <div className="links">
        <a
          arial-label="github"
          href={githubLink}
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
        <a href={liveLink}>
          <i class="bi bi-box-arrow-in-up-right"></i>
        </a>
      </div>
    </div>
  );
};
export default Project;
