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
            I am a fourth-year Computer Science student at Memorial University of Newfoundland with a 
            strong passion for programming and problem-solving. I have substantial experience with multiple 
            programming languages, including Java, Python, C, C++, C#, JavaScript, SQL, and MySQL. 
            My expertise in web development includes HTML, CSS, React, Node.js, .NET, and AWS.
            </p>
            <br />
            <p>
            In my current roles as a Digital Technology Transformation Consultant Co-op at CGI and a Customer 
            Experience Associate at TD Canada Trust, 
            I am advancing my technical skills and enhancing my client interaction capabilities.
            </p>
            <br />
            <p>
            I am seeking full-time opportunities where I can leverage my skills, 
            contribute to impactful projects, and further my professional growth.

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
