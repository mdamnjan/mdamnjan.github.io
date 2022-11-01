import "./App.css";
import Home from "./components/Home";
import Resume from "./components/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Projects/Project"
import Projects from "./components/Projects/Projects";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <img
            alt="The character No Face from the move Spirited Away, holding a steaming cup of tea."
            src="/noface.png"
          />
          <h1 id='about-me'>About Me</h1>
          <p>
            Hi! I'm Mimi, a student at the University of Toronto, currently
            finishing up a computer science specialist and physics minor.
          </p>
          <button id="resume"><h2>Resume</h2></button>
          <h1 id="projects">Projects</h1>
          <Projects/>
        <footer>
          <div className="contacts">
            <h2>Get in touch:</h2>{" "}
            <a aria-label="email" href="mailto:mimi.damnjanovic16@gmail.com">
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
              href="https://ca.linkedin.com/in/mimi-damnjanovic-b1a21b206"
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
