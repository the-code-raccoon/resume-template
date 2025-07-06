import "./styles.css";
import * as Layout from "../Layout"

export type NameType = {
  firstName: string;
  lastName: string;
  title: string;
};

export const Name = ({ firstName, lastName, title }: NameType) => {
  return (
    <Layout.Root className="name">
      <div>
        <span className="first">{firstName} </span>
        <span className="last">{lastName}</span>
      </div>
      <span className="jobTitle">{title}</span>
      <hr />
    </Layout.Root>
  );
};
