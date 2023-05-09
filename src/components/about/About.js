import { NavHashLink } from "react-router-hash-link";
import Skills from "../SkillsSphere/SkillsSphere";
import "./About.css";

export default function About() {
  // const skillsContainer = document.getElementById("skills-container");
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text-zone">
          <h1 className="about-heading">About Me</h1>
          <div className="about-text">
            <p>
              I'm a third-year computer science student at Memorial University
              of Newfoundland. I'm passionate about programming and
              problem-solving. I have experience with multiple programming
              languages including Python, Java, HTML, CSS, Javascript, SQL and
              C/C++. Check out some of
              <NavHashLink
                style={{ textDecoration: "none", color: "var(--light-blue)" }}
                smooth
                to="#work"
              >
                {" "}
                my projects
              </NavHashLink>
              .
            </p>
            <br />
            <p>
              I started my coding journey with Python during Covid and have been
              expanding my skills since then. Currently, I'm working as a
              Customer Experience Associate at TD Bank and looking for a co-op
              opportunity to further develop my skills. Thank you for checking
              out my portfolio!
            </p>
            <br />
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then
              <NavHashLink
                style={{ textDecoration: "none", color: "var(--light-blue)" }}
                smooth
                to="#contact"
              >
                {" "}
                contact me
              </NavHashLink>
              &nbsp;now.
            </p>
          </div>
        </div>
        <div className="skills-container">
          <Skills />
        </div>
      </div>
    </section>
  );
}
