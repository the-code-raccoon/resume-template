import "./styles.css";

type TitleType = {
  titleText: string;
  date: string;
  responsibilities: string[];
};

type EmploymentType = {
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

export const Employment = () => {
  const json: EmploymentType = {
    company: "BioRender",
    location: "Toronto, Ontario (remote)",
    titles: [
      {
        titleText: "Software Developer, Editor Team",
        date: "Nov 2023 to May 2024",
        responsibilities: [
          "Created features for an in-browser editor built using Typescript, React and Redux.",
          "Worked directly on new graphing initiative by building technical foundations.",
          "Collaborated to formulate design/product requirements and led investigations for engineering design documents/specifications.",
          "Worked closely with product designers to implement design specifications and improve the user experience within BioRender's new in-browser graphing product",
        ],
      },
      {
        titleText: "Software Developer, Growth Team",
        date: "Mar 2023 to Nov 2023",
        responsibilities: [
          "Conducted and iterated on fast paced weekly experiments.",
          "Improved end-user experience of legacy billing page by doing complete a UI/UX overhaul.",
          "Added team processes and standards to enhance engineering productivity, organization and internal communications.",
          "Implemented front-end changes to signup flow that improved the collection of user data, resulting in more personalized content and more user engagement.",
          "Developed personalized content targeting enterprise customers, resulting in a 20% lift in product-qualified leads.",
          "Implemented monetization features directly into the BioRender editor leading to over $3.2 million annual recurring revenue.",
        ],
      },
      {
        titleText: "Software Developer, Internal Tools",
        date: "Jul 22 to Mar 2023",
        responsibilities: [
          "Created and maintained a Restful API that supports over 200 internal users and performed critical business logic.",
          "Lead developer in charge of creating and maintaining UI used by internal teams using third-party front-end tool Retool.",
          "Streamlined tedious internal operations and processes into automated tooling that optimized workflow by over 300%.",
          "Developed full-stack enterprise features to help admins manage hundreds of organizations, totalling hundreds of thousands of BioRender users.",
          "Improved consistency in data lake and database, totalling over 20,000 documents updated.",
          "Lead the migration and retirement of legacy features that affected over 10,000 users and updated over 100,000 database entities.",
          "Drew out various product flows, interviewed stakeholders and held feedback sessions with users for several internal and external products.",
          "Provided technical support and troubleshooting using Elastic to non-engineering teams, averaging 4 requests per day and a resolution time of 1 hour.",
          "Assisted in onboarding a co-op student and regularly held pair programming sessions with them.",
        ],
      },
    ],
  };

  return (
    <div className="section employment">
      <h1>employment</h1>

      <div className="content">
        {json.titles.map(t => <Title {...t} />)}
      </div>
    </div>
  );
};
