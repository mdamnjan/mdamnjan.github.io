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
        finishing up a computer science specialist and a physics minor.
      </p>
      <h4>
        <div className="contacts">
          Contact Me: <a href="mailto:mimi.damnjanovic16@gmail.com"><i class="bi bi-envelope"></i></a>
          <a href="https://github.com/mdamnjan" target="_blank"><i className="bi bi-github"></i></a>
        </div>
      </h4>
    </div>
  );
};
export default Home;
