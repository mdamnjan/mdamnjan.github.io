import "./Home.css";

const Home = () => {
  return (
    <div>
      <img
        alt="The character No Face from the move Spirited Away, holding a steaming cup of tea."
        src="/noface.png"
      />
      <h1>About Me</h1>
      <p>
        Hi! I'm Mimi, a student at the University of Toronto, currently
        finishing up a computer science specialist and physics minor.
      </p>
        <div className="contacts">
          <h2>Get in touch:</h2>{" "}
          <a aria-label="email" href="mailto:mimi.damnjanovic16@gmail.com">
            <i class="bi bi-envelope"></i>
          </a>
          <a
            arial-label="github"
            href="https://github.com/mdamnjan"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            aria-label="linkedin"
            href="https://ca.linkedin.com/in/mimi-damnjanovic-b1a21b206"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
    </div>
  );
};
export default Home;
