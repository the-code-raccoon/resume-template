import "./styles.css";
import * as Layout from "../Layout";

export type SkillsType = {
  grouping: string;
  items: string[];
};

export const Skills = ({ skills }: { skills: SkillsType[] }) => {
  return (
    <Layout.Root className="skills">
      <Layout.Header>skills</Layout.Header>

      <Layout.Content>
        {skills.map(({ grouping, items }) => (
          <div className="skill" key={grouping}>
            <span>{grouping}: </span>
            {items.join(", ")}
          </div>
        ))}
      </Layout.Content>
    </Layout.Root>
  );
};
