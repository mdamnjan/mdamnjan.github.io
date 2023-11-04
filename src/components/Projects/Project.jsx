import "./projects.css";

const Project = ({ title, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="project-container">
      <h1>{title}</h1>
      <p>{description}</p>
      {title === "Nuit Blanche Scraper" && (
        <iframe
          title="Google My Maps"
          src="https://www.google.com/maps/d/u/0/embed?mid=14A7B4a7-pqqFu2PgVr7gx8CJ6p1EGdo&ehbc=2E312F"
          width="540"
          height="380"
        ></iframe>
      )}
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
        {liveLink && (
          <a href={liveLink}>
            <i class="bi bi-box-arrow-in-up-right"></i>
          </a>
        )}
      </div>
    </div>
  );
};
export default Project;
