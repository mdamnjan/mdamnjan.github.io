import "./resume.css";
const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume">
        <h2>Milena (Mimi) Damnjanovic</h2>
        <a aria-label="email" href="mailto:mimi.damnjanovic16@gmail.com">
            <i class="bi bi-envelope"></i>
          </a>
          <label>mimi.damnjanovic16@gmail.com</label>
          <a
            arial-label="github"
            href="https://github.com/mdamnjan"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
          <label>https://github.com/mdamnjan</label>
          <a
            aria-label="linkedin"
            href="https://ca.linkedin.com/in/mimi-damnjanovic-b1a21b206"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        <hr/>
        <h3>Education</h3>
        <h4>
          University of Toronto - Bsc Computer Science Specialist, Physics Minor
          (Expected graduation 2023)
        </h4>
        <h3>Experience</h3>
        <h4>
          Software Developer Intern - Security Compass (May 2020-August 2021)
        </h4>
        <ul>
          <li></li>
        </ul>
        <h3>Projects</h3>
        <h4>My Plant Diary</h4>
        <ul>
          <li>
            Created a website to help with care of houseplants using
            Django/Django Rest Framework, React
          </li>
        </ul>
        <h3>Technical Skills</h3>
        <ul>
          <li>Git</li>
          <li>Python</li>
          <li>React</li>
          <li>Django/Django Rest Framework</li>
          <li>Javascript</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
