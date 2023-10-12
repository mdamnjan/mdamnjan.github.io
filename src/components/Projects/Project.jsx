import "./projects.css";

const Project = ({ title, description, techStack, liveLink, githubLink, img }) => {
  return (
    <div className="project-container">
      <h1>{title}</h1>
      <p>{description}</p>
      {img && <img src={img}></img>}
      <ul>
        {techStack.map((tech) => (
          <li className="skill">{tech}</li>
        ))}
      </ul>
      <div className="links">
        <a
          arial-label="github"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        {liveLink && <a href={liveLink}>
          <i class="bi bi-box-arrow-in-up-right"></i>
        </a>}
      </div>
    </div>
  );
};
export default Project;
