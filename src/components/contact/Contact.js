//import { NavHashLink } from "react-router-hash-link";
import "./Contact.css";
import githubImage from "../../assets/github.png";
import linkedinImage from "../../assets/linkedin.png";
import emailImage from "../../assets/email.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Let's Connect</h1>
        <p className="contact-text">
          Want to discuss a project or have any questions? <br>
        </br>
          <br></br>Contact me to get started.
        </p>
        <br />
        <br />
        <div className="contact-links">
          <a href="https://github.com/finowrin" target="" rel="noopener noreferrer">
            <img src={githubImage} alt="Github" className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/fatiha-nowrin-991611214/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} alt="LinkedIn" className="contact-icon" />
          </a>
          <a href="mailto:finowrin@mun.ca">
            <img src={emailImage} alt="Email" className="contact-icon" />
          </a>
        </div>
        <button
          className="contact-btn"
          onClick={() => (window.location.href = "mailto:finowrin@mun.ca")}
        >
          Say Hello!
        </button>
      </div>
    </section>
  );
}
