import { ContactInfo, ContactInfoType } from "./components/ContactInfo";
import { Education, EducationType } from "./components/Education/Education";
import { Employment, EmploymentType } from "./components/Employment";
import { Name, NameType } from "./components/Name";
import { Skills } from "./components/Skills";
import "./styles.css";

import resumeJson from "./resume-info.json";

type ResumeInfoType = {
  personalInfo: NameType & ContactInfoType;
  employments: EmploymentType[];
  education: EducationType[];
};

function App() {
  const { personalInfo, employments, education } =
    resumeJson as unknown as ResumeInfoType;

  return (
    <body>
      <div className="page">
        <div className="topPanel">
          <Name {...personalInfo} />
          <ContactInfo {...personalInfo} />
        </div>

        <div className="bottomPanel">
            <Employment employments={employments} />
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
