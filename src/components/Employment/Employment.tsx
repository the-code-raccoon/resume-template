import "./styles.css";
import * as Layout from "../Layout";
import * as React from "react"

type TitleType = {
  title: string;
  date: string;
  responsibilities: string[];
};

export type EmploymentType = {
  company: string;
  location: string;
  titles: TitleType[];
};

const Title = ({ title: titleText, date, responsibilities }: TitleType) => {
  return (
    <>
      <Layout.Row>
        <h3>{titleText}</h3>
        <Layout.RowRightItem>{date}</Layout.RowRightItem>
      </Layout.Row>

      <ul>
        {responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </>
  );
};

export const Employment = ({
  employments,
}: {
  employments: EmploymentType[];
}) => {
  return (
    <Layout.Root className="employment">
      <Layout.Header>employment</Layout.Header>

      <Layout.Content>
        {employments.map(({ company, location, titles }) => (
          <React.Fragment key={company}>
            <Layout.Row >
              <h2>{company}</h2>
              <Layout.RowRightItem>{location}</Layout.RowRightItem>
            </Layout.Row>

            {titles.map((title) => (
              <Title key={title.title} {...title} />
            ))}
          </React.Fragment>
        ))}
      </Layout.Content>
    </Layout.Root>
  );
};
