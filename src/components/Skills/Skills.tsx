import "./styles.css"

export const Skills = () => {
  return (
    <div className="section skills">
      <h1>skills</h1>

      <div className="content">
        <div className="skill">
          <span>Languages: </span>
          Typescript, Javascript, Python, Java, Ruby, HTML, CSS
        </div>

        <div className="skill">
          <span>Frameworks/Libraries: </span>React, NodeJS,
          Remix, NextJS, Redux, Express, GraphQL, Fastify, Django, OAuth,
          socket.io, Stripe API, Stripe Tax API, Retool, SASS, Bootstrap,
          TailwindCSS, Ajax, Ruby on Rails, Axios, jQuery, XState, KeyCloak
        </div>

        <div className="skill">
          <span>Infrastructure: </span>Kubernetes, AWS,
          ElasticSearch, OpenTelemetry, Honeycomb, Docker, Kibana, OpsGenie,
          Linux, Github Actions, Helm
        </div>

        <div className="skill">
          <span>Misc: </span>PostgreSQL, MongoDB, SQL, Git,
          Agile Development, JIRA, Notion, Slack, Github, ElasticSearch,
          Metabase, SendGrid, Graphite, Mailgun
        </div>

        <div className="skill">
          <span>Testing: </span>Jest, Cypress, Storybook,
          Mocha, Chai, RSpec, Pytest
        </div>

        <div className="skill">
          <span>Design: </span>Figma, Adobe Photoshop, Adobe
          After Effects, Adobe Premiere Pro, Adobe Illustrator, Sony Vegas Pro,
          Davinci Resolve
        </div>
      </div>
    </div>
  );
};
