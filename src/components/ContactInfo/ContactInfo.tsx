import "./styles.css";
import * as Layout from "../Layout";

type ContactInfoLinkType = "github" | "linkedin";

const ContactLinkIcon = ({ type }: { type: ContactInfoLinkType }) => {
  switch (type) {
    case "github":
      return <i className="fa-brands fa-github" />;
    case "linkedin":
      return <i className="fa-brands fa-linkedin-in" />;
  }
};

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
    <Layout.Root className="contactInfo">
      <Layout.Row spacing="flex-start">
        <div className="email">
          <i className="fa-solid fa-envelope"></i>
          {email}
        </div>
        <div className="phoneNumber">
          <i className="fa-solid fa-phone fa-sm"></i>
          {phoneNumber}
        </div>
      </Layout.Row>

      <Layout.Row spacing="flex-start">
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          {location}
        </div>
      </Layout.Row>

      <Layout.Row spacing="flex-start">
        {links.map((link) => (
          <div className={link.type}>
            <a href={link.url} target="_blank">
              <span>
                <ContactLinkIcon type={link.type} />
                {link.text}
              </span>
            </a>
          </div>
        ))}
      </Layout.Row>
    </Layout.Root>
  );
};
