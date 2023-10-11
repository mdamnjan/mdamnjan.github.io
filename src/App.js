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
        <img alt="Headshot of Mimi Damnjanovic" src="/profile_pic2.jpg" />
        <h1>About Me</h1>
        <p>
          Hi! I'm Mimi, a recent graduate from the University of Toronto, where
          I completed a computer science specialist and physics minor.
        </p>
        <p>
          I have 16 months of work experience as a software engineer intern
          working at{" "}
          <a href="https://www.securitycompass.com/">Security Compass</a> where
          I worked on{" "}
          <a href="https://www.securitycompass.com/sdelements/">SD Elements</a>.
        </p>
      </section>
      <section id="skills">
        <h1>Skills</h1>
        <Skills />
      </section>
      <section id="projects">
        <h1>Projects</h1>
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
