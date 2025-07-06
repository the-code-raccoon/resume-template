import { ContactInfo, ContactInfoType } from "./components/ContactInfo";
import { Education, EducationType } from "./components/Education/Education";
import { Employment, EmploymentType } from "./components/Employment";
import { Name, NameType } from "./components/Name";
import { Skills, SkillsType } from "./components/Skills";
import "./styles.css";

import resumeJson from "./resume-info.json";

type ResumeInfoType = {
  personalInfo: NameType & ContactInfoType;
  employments: EmploymentType[];
  education: EducationType[];
  skills: SkillsType[];
};

function App() {
  const { personalInfo, employments, education, skills } =
    resumeJson as unknown as ResumeInfoType;
console.log(skills);
  return (
    <body>
      <div className="page">
        <div className="topPanel">
          <Name {...personalInfo} />
          <ContactInfo {...personalInfo} />
        </div>

        <div className="bottomPanel">
          <Employment employments={employments} />
          <Skills skills={skills} />
          {education.map((e) => (
            <Education {...e} />
          ))}
        </div>
      </div>
    </body>
  );
}

export default App;
