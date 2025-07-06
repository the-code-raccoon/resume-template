import "./styles.css";
import * as Layout from "../Layout";

type ContactInfoLinkType = "github" | "linkedin";

export type ContactInfoType = {
  email: string;
  phoneNumber: string;
  location: string;
  links: {
    type: ContactInfoLinkType;
    url: string;
    text: string;
  }[];
};

export const ContactInfo = ({ email, phoneNumber, location, links }) => {
  return (
    <div className="contactInfo">
      <Layout.Row>
        <div className="email">
          <i className="fa-solid fa-envelope"></i>
          {email}
        </div>
        <div className="phoneNumber">
          <i className="fa-solid fa-phone fa-sm"></i>
          {phoneNumber}
        </div>
      </Layout.Row>

      <Layout.Row>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          {location}
        </div>
      </Layout.Row>

      <Layout.Row>
        {links.map((link) => (
          <div className={link.type}>
            <a href={link.url} target="_blank">
              <span>
                <i className="fa-brands fa-linkedin-in"></i>
                {link.text}
              </span>
            </a>
          </div>
        ))}
      </Layout.Row>
    </div>
  );
};
