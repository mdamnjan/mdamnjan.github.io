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
    "Cypress",
    "PostgreSQL",
    "Git",
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
