import "./projects.css";

const Project = ({
  title,
  description,
  summaryPoints = [],
  techStack,
  liveLink,
  githubLink,
  images = [],
  embedded = undefined,
}) => {
  return (
    <div className="project-container">
      <div className="project-contents">
        <h1>{title}</h1>
        <p className="project-description">{description}</p>
        <ul className="project-summary-points">
          {summaryPoints.map((point) => (
            <li>
              <p className="project-summary-point">{point}</p>
            </li>
          ))}
        </ul>
        {embedded}
        {images.map((img) => (
          <img alt={img.alt} src={img.src}></img>
        ))}
        <ul>
          {techStack.map((tech) => (
            <li className="skill">{tech}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        <a
          arial-label="github"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer">
            <i class="bi bi-box-arrow-in-up-right"></i>
          </a>
        )}
      </div>
    </div>
  );
};
export default Project;
