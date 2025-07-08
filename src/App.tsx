import { ContactInfo, ContactInfoType } from "./components/ContactInfo";
import { Education, EducationType } from "./components/Education/Education";
import { Employment, EmploymentType } from "./components/Employment";
import { Name, NameType } from "./components/Name";
import { Skills, SkillsType } from "./components/Skills";
import "./styles.css";
// import * as blah from "html2pdf.js"
import html2pdf from "html2pdf.js";

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

  return (
    <>
      <div className="page" id="resume">
        <div className="topPanel" id="topPanel">
          <Name {...personalInfo} />
          <ContactInfo {...personalInfo} />
        </div>

        <div className="bottomPanel">
          <Employment employments={employments} />
          <Skills skills={skills} />
          {education.map((e) => (
            <Education key={e.institution} {...e} />
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={async () => {
          const htmlelement = document.getElementById("resume");
          // console.log(htmlelement);
          if (!htmlelement) {
            return;
          }

          // console.log(blah.html2pdf);

          // console.log('huh');
          console.log(html2pdf);
          console.log(
            await html2pdf().from(htmlelement).save("Resume.pdf"),
            html2pdf
          );
          html2pdf(html2pdf)
          await html2pdf().from(htmlelement).save("Resume.pdf");
        }}
      >
        download
      </button>
    </>
  );
}

export default App;
