import { ContactInfo, ContactInfoType } from "./components/ContactInfo";
import { Education } from "./components/Education/Education";
import { Employment, EmploymentType } from "./components/Employment";
import { Name } from "./components/Name";
import { Skills } from "./components/Skills";
import "./styles.css";

import resumeJson from "./resume-info.json";

type ResumeInfoType = {
  contactInfo: ContactInfoType;
  employment: EmploymentType[];
};

function App() {
  const { contactInfo, employment } = resumeJson as unknown as ResumeInfoType;

  return (
    <body>
      <div className="page">
        <div className="topPanel">
          <Name />
          <ContactInfo {...contactInfo} />
        </div>

        <div className="bottomPanel">
          {employment.map((e) => (
            <Employment {...e} />
          ))}
          <Skills />
          <Education />
        </div>
      </div>
    </body>
  );
}

export default App;
