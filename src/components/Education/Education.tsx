import "./styles.css";

export type EducationType = {
  institution: string;
  date: string;
  subject: string;
};

export const Education = ({ institution, date, subject }: EducationType) => {
  return (
    <div className="section education">
      <h1>education</h1>

      <div className="content">
        <div className="row">
          <h2>{institution}</h2>
          <span className="extraInfo">{date}</span>
        </div>

        <h3>{subject}</h3>
      </div>
    </div>
  );
};
