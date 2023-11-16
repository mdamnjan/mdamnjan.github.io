const NavBar = () => {
  return (
    <header class="bg-blue-500 h-[40px]">
      <nav class="block mb-[100px]">
        <ul class="flex gap-6 float-right">
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
