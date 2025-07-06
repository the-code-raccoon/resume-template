import { ContactInfo, ContactInfoType } from "./components/ContactInfo";
import { Education, EducationType } from "./components/Education/Education";
import { Employment, EmploymentType } from "./components/Employment";
import { Name, NameType } from "./components/Name";
import { Skills } from "./components/Skills";
import "./styles.css";

import resumeJson from "./resume-info.json";

type ResumeInfoType = {
  personalInfo: NameType & ContactInfoType;
  employment: EmploymentType[];
  education: EducationType[];
};

function App() {
  const { personalInfo, employment, education } =
    resumeJson as unknown as ResumeInfoType;

  return (
    <body>
      <div className="page">
        <div className="topPanel">
          <Name {...personalInfo} />
          <ContactInfo {...personalInfo} />
        </div>

        <div className="bottomPanel">
          {employment.map((e) => (
            <Employment {...e} />
          ))}
          <Skills />
          {education.map((e) => (
            <Education {...e} />
          ))}
        </div>
      </div>
    </body>
  );
}

export default App;
