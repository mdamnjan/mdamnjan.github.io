import { useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation().pathname;
  const navBarItems = [
    { display: "About Me", path: "/#/about-me" },
    { display: "Resume", path: "/#/resume" },
    { display: "Projects", path: "/#/projects" },
  ].map((item) => {
    let className =
      location === item.path ? "current-navbar navbar-item" : "navbar-item";
    return (
      <a key={`${item.path}`}href={item.path} className={className}>
        {item.display}
      </a>
    );
  });
  return <nav className="navbar">{navBarItems}</nav>;
};

export default NavBar;
