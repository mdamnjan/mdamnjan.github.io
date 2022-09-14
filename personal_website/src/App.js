import "./App.css";
import Home from "./components/Home";
import Resume from "./components/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route path={"/about-me"} element={<Home />} />
            <Route path={"/"} element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
