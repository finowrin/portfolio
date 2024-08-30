import React from "react";
import "./Skill.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiJava,
  DiAws,
  DiWindows,
  DiLinux,
  DiSqllite
} from "react-icons/di";

//import {  } from "../../assets";

import { arrowImage, CImage, HTMLImage, CplusImage, EImage, sqlImage, smImage, AWSImage, 
  officeImage, curveImage, pandaImage, lockImage, biImage, serviceImage} from "../../assets";

import { TbDeviceImac } from "react-icons/tb";

const Skill = () => {
  const skills = [
    {
      skillSet: DiJava
    },
    {
      skillSet: DiPython
    },
    {
      skillSet: DiJavascript1
    },
    {
      skillSet: DiSqllite
    },
    {
      skillSet: DiMysql
    },
    
    {
      skillSet: DiHtml5
    },
    {
      skillSet: DiCss3
    },
    {
      skillSet: DiReact
    },
    {
      skillSet: DiNodejs
    },
    {
      skillSet: DiAws
    },

    {
      skillSet: DiWindows
    },
    {
      skillSet: DiLinux
    },
   // {
      //skillSet: TbDeviceImac
    //},

  ];

const toolsImages = [

  {
    toolSet : smImage
  },
  
  {
      toolSet : CplusImage
    },

    {
      toolSet : CImage
    },



  ];


  const tools = [
    {
      toolSet: serviceImage
    },

    {
      toolSet : sqlImage
    },

    // {
    //   toolSet : CplusImage
    // },

    // {
    //   toolSet : CImage
    // },

    // {
    //   toolSet : HTMLImage
    // },
    // {
    //   toolSet : EImage
    // },
    // {
    //   toolSet : smImage
    // },
    // {
    //   toolSet : AWSImage
    // },
    {
      toolSet : officeImage
    },
    {
      toolSet : arrowImage
    },
    {
      toolSet : curveImage
    },
    {
      toolSet : pandaImage
    },
    {
      toolSet : lockImage
    },
    {
      toolSet : biImage
    },

  ];

  return (
    <>
    <section className="skill" id="skill">
      <div className="skill-container">
        <h1 className="skill-heading">
          <span>Skills</span>
        </h1>
        <div className="skill-grid">
          {skills.map((skill, i) => (
            <div className="skill-item">
              <div className="skill-svg" >
                <skill.skillSet />
              </div>
            </div>
          ))}

          {toolsImages.map((toolsImage, i) => (
            <div className="skill-item1">
              <div className="tool-svg" >
                <img src={toolsImage.toolSet} />
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>

<section className="skill" id="skill">
<div className="skill-container">
  <h1 className="skill-heading">
    <span>Tools</span>
  </h1>
  <div className="skill-grid">
    {tools.map((tool, i) => (
      <div className="skill-item1">
        <div className="tool-svg" >
        <img src={tool.toolSet} />
        </div>
      </div>
    ))}
  </div>
</div>
</section>
</>

  );
};

export default Skill;
