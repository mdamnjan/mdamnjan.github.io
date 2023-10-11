import "./NavBar.css";

const NavBar = () => {
  const navBarItems = [
    { display: "About Me", path: "/#about-me" },
    { display: "Skills", path: "/#skills" },
    { display: "Projects", path: "/#projects" },
    { display: "Contact", path: "/#contact" },
  ].map((item) => {
    let className =
      window.location === item.path
        ? "current-navbar navbar-item"
        : "navbar-item";
    return (
      <a key={`${item.path}`} href={item.path} className={className}>
        {item.display}
      </a>
    );
  });
  return <nav className="navbar">{navBarItems}</nav>;
};

export default NavBar;
