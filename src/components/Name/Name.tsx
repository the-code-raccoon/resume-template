import "./styles.css";

export type NameType = {
  firstName: string;
  lastName: string;
  title: string;
};

export const Name = ({ firstName, lastName, title }: NameType) => {
  return (
    <div className="name">
      <div>
        <span className="first">{firstName} </span>
        <span className="last">{lastName}</span>
      </div>
      <span className="jobTitle">{title}</span>
      <hr />
    </div>
  );
};
