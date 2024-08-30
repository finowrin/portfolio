import { useEffect } from "react";
import "./SkillsSphere.css";
const skills = [
  { href: "#git_", title: "Git" },
  { href: "#Java", title: "Java" },
  { href: "#Javascript", title: "Javascript" },
  { href: "#C", title: "C" },
  { href: "#C++", title: "C++" },
  { href: "#HTML", title: "HTML" },
  { href: "#CSS", title: "CSS" },
  { href: "#ReactJS", title: "ReactJS" },
  { href: "#AWS", title: "AWS" },
  { href: "#Windows", title: "Windows" },
  { href: "#LinuxOS", title: "LinuxOS" },
  { href: "#MicrosoftOffice365", title: "Microsoft Office365" },
  { href: "#JIRA", title: "JIRA" },
  { href: "#Confluence", title: "Confluence" },
  { href: "#Microsoft SQL Server", title: "Microsoft SQL Server" },
  { href: "#Power BI", title: "Power BI" },
  { href: "#DBeaver", title: "DBeaver" },
  { href: "#ServiceNow", title: "ServiceNow" },
  { href: "#NodeJS", title: "NodeJS" },
  { href: "#Python", title: "Python" },
  { href: "#SQL", title: "SQL" },
  { href: "#MySQL", title: "MySQL" },
];

const Skills = ({ ...rest }) => {
  useEffect(() => {
    console.log("Loading TagCanvas...");
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#66FCF1",
      textHeight: 25,
      maxSpeed: 0.06,
      // freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 1.0,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 1000,
      initial: [0.2, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start("skills-canvas", "skills-list", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  return (
    <>
      <canvas id="skills-canvas" width={800} height={800}></canvas>
      <div id="skills-list" style={{ display: "none" }}>
        <ul>
          {skills.map((skill) => (
            <li key={skill.title}>
              <a href={skill.href}>{skill.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
