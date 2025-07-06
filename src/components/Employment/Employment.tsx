import "./styles.css";

type TitleType = {
  titleText: string;
  date: string;
  responsibilities: string[];
};

export type EmploymentType = {
  company: string;
  location: string;
  titles: TitleType[];
};

const Title = ({ titleText, date, responsibilities }: TitleType) => {
  return (
    <>
      <div className="row">
        <h3>{titleText}</h3>
        <span className="extraInfo">{date}</span>
      </div>

      <ul>
        {responsibilities.map((r) => (
          <li>{r}</li>
        ))}
      </ul>
    </>
  );
};

export const Employment = ({ company, location, titles }: EmploymentType) => {
  return (
    <div className="section employment">
      <h1>employment</h1>

      <div className="content">
        <div className="row">
          <h2>{company}</h2>
          <span className="extraInfo">{location}</span>
        </div>

        {titles.map((title) => (
          <Title {...title} />
        ))}
      </div>
    </div>
  );
};
