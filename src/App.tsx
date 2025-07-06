import { Employment } from "./components/Employment";
import "./styles.css";

function App() {
  return (
    <body>
      <div className="page">
        <div className="topPanel">
          <div className="name">
            <div>
              <span className="first">francesca </span>
              <span className="last">ho</span>
            </div>
            <span className="jobTitle">software developer</span>
            <hr />
          </div>

          <div className="contactInfo">
            <div className="row">
              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                francesca.ho459@gmail.com
              </div>
              <div className="phoneNumber">
                <i className="fa-solid fa-phone fa-sm"></i>647-501-3009
              </div>
            </div>

            <div className="row">
              <div className="location">
                <i className="fa-solid fa-location-dot"></i>Toronto, Ontario
              </div>
            </div>

            <div className="row">
              <div className="linkedin">
                <a href="https://linkedin.com/in/francesca-ho" target="_blank">
                  <span>
                    <i className="fa-brands fa-linkedin-in"></i>francesca-ho
                  </span>
                </a>
              </div>
              <div className="github">
                <a
                  href="https://www.github.com/the-code-raccoon"
                  target="_blank"
                >
                  <span>
                    <i className="fa-brands fa-github"></i>the-code-raccoon
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomPanel">
          <Employment />

          <div className="section skills">
            <h1>skills</h1>

            <div className="content">
              <div className="skill">
                <span className="name">Languages: </span>
                Typescript, Javascript, Python, Java, Ruby, HTML, CSS
              </div>

              <div className="skill">
                <span className="name">Frameworks/Libraries: </span>React,
                NodeJS, Remix, NextJS, Redux, Express, GraphQL, Fastify, Django,
                OAuth, socket.io, Stripe API, Stripe Tax API, Retool, SASS,
                Bootstrap, TailwindCSS, Ajax, Ruby on Rails, Axios, jQuery,
                XState, KeyCloak
              </div>

              <div className="skill">
                <span className="name">Infrastructure: </span>Kubernetes, AWS,
                ElasticSearch, OpenTelemetry, Honeycomb, Docker, Kibana,
                OpsGenie, Linux, Github Actions, Helm
              </div>

              <div className="skill">
                <span className="name">Misc: </span>PostgreSQL, MongoDB, SQL,
                Git, Agile Development, JIRA, Notion, Slack, Github,
                ElasticSearch, Metabase, SendGrid, Graphite, Mailgun
              </div>

              <div className="skill">
                <span className="name">Testing: </span>Jest, Cypress, Storybook,
                Mocha, Chai, RSpec, Pytest
              </div>

              <div className="skill">
                <span className="name">Design: </span>Figma, Adobe Photoshop,
                Adobe After Effects, Adobe Premiere Pro, Adobe Illustrator, Sony
                Vegas Pro, Davinci Resolve
              </div>
            </div>
          </div>

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
