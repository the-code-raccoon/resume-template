import "./styles.css";

export type SkillsType = {
  grouping: string;
  items: string[];
};

export const Skills = ({ skills }: {skills: SkillsType[]}) => {
  return (
    <div className="section skills">
      <h1>skills</h1>

      <div className="content">
        {skills.map(({ grouping, items }) => (
          <div className="skill">
            <span>{grouping}: </span>
            {items.join(", ")}
          </div>
        ))}
      </div>
    </div>
  );
};
