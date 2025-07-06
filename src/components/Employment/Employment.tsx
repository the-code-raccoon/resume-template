import "./styles.css";
import * as Layout from "../Layout";

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
          <li>{r}</li>
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
          <>
            <Layout.Row>
              <h2>{company}</h2>
              <Layout.RowRightItem>{location}</Layout.RowRightItem>
            </Layout.Row>

            {titles.map((title) => (
              <Title {...title} />
            ))}
          </>
        ))}
      </Layout.Content>
    </Layout.Root>
  );
};
