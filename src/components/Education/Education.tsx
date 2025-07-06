import "./styles.css";
import * as Layout from "../Layout";

export type EducationType = {
  institution: string;
  date: string;
  subject: string;
};

export const Education = ({ institution, date, subject }: EducationType) => {
  return (
    <div className="education">
      <Layout.Header>education</Layout.Header>

      <Layout.Content>
        <Layout.Row>
          <h2>{institution}</h2>
          <span className="extraInfo">{date}</span>
        </Layout.Row>

        <h3>{subject}</h3>
      </Layout.Content>
    </div>
  );
};
