import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section id="about-me">
        <img alt="Headshot of Mimi Damnjanovic" src="/profile_pic_zoomed.png" />
        <h1>About Me</h1>
        <p>
          Hi! I'm Mimi, a recent computer science and physics graduate from the
          University of Toronto.
        </p>
        <p>
          I have ~1.5 years (16 months) of experience as a software engineer intern
          working at{" "}
          <a href="https://www.securitycompass.com/">Security Compass</a> where
          I worked on{" "}
          <a href="https://www.securitycompass.com/sdelements/">SD Elements</a>.
        </p>
        <p>
          When I'm not programming I'm most likely playing video games 🎮 or
          guitar 🎸.
        </p>
      </section>
      <section id="skills">
        <h1>Skills</h1>
        <p>
          These are the technologies I'm most comfortable with at the moment,
          but I'm always open to learning/working with new technologies.
        </p>
        <Skills />
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <p>Some projects I've worked on outside of school.</p>
        <Projects />
      </section>
      <footer id="contact">
        <div className="contacts">
          <h2>Get in touch:</h2>{" "}
          <a aria-label="email" href="mailto:midamnjan@gmail.com">
            <i class="bi bi-envelope"></i>
          </a>
          <a
            arial-label="github"
            href="https://github.com/mdamnjan"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            aria-label="linkedin"
            href="https://ca.linkedin.com/in/mimi-damnjanovic"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
