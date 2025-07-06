import { ContactInfo } from "./components/ContactInfo";
import { Employment } from "./components/Employment";
import { Name } from "./components/Name";
import { Skills } from "./components/Skills";
import "./styles.css";

function App() {
  return (
    <body>
      <div className="page">
        <div className="topPanel">
          <Name />
          <ContactInfo />
        </div>

        <div className="bottomPanel">
          <Employment />
          <Skills />

          <div className="section education">
            <h1>education</h1>

            <div className="content">
              <div className="row">
                <h2>University of Toronto</h2>
                <span className="extraInfo">2021</span>
              </div>

              <h3>Computer Science</h3>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </body>
  );
}

export default App;
