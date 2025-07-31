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
            Computer Science graduate from Memorial University of Newfoundland with a strong mix of
            technical, analytical, and client-facing experience. At CGI, I supported operational reporting
            and project coordination, while at Belairdirect, I deliver personalized solutions in a fast-
            paced, customer-focused setting. I bring a proactive, adaptable approach and am seeking
            full-time opportunities where I can contribute to impactful, cross-functional work.
            </p>
          </div>
        </div>
        {/* <div className="skills-container">
          <Skills />
        </div> */}
      </div>
    </section>
  );
}
