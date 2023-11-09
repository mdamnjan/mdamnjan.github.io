import "./Skills.css";

const Skills = () => {
  const skillsList = [
    "Python",
    "Javascript",
    "Typescript",
    "Django",
    "Django Rest Framework",
    "React",
    "HTML",
    "CSS",
    "PostgreSQL",
    "Git",
    "Cypress",
    "React Testing Library",
  ];
  return (
      <div className="skills-container">
        {skillsList.map((skill) => {
          return <div className="skill">{skill}</div>;
        })}
      </div>
  );
};
export default Skills;
