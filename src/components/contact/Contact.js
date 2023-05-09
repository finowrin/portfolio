import { NavHashLink } from "react-router-hash-link";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Let's Connect</h1>
        <p className="contact-text">
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then feel free to send a message.
        </p>
        <br />
        <br />
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
