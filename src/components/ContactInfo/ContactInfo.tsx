import "./styles.css";

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
      <div className="row">
        <div className="email">
          <i className="fa-solid fa-envelope"></i>
          {email}
        </div>
        <div className="phoneNumber">
          <i className="fa-solid fa-phone fa-sm"></i>
          {phoneNumber}
        </div>
      </div>

      <div className="row">
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          {location}
        </div>
      </div>

      <div className="row">
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
      </div>
    </div>
  );
};
