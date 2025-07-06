import "./styles.css";

export const ContactInfo = () => {
  return (
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
          <a href="https://www.github.com/the-code-raccoon" target="_blank">
            <span>
              <i className="fa-brands fa-github"></i>the-code-raccoon
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
