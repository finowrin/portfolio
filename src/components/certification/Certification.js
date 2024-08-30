import React, { useState } from "react";
import "./Certification.css";
import {
  awsImage,
  cgiImage,
  safeImage,
  techImage,
  udemyImage,
  comppImage,
} from "../../assets";

const Certification = () => {
  const certificationList = [

    {
      title: " Certified SAFe 6 Practitioner - Scaled Agile, Inc.",
      imgUrl: safeImage,
      redirectUrl:
        "https://drive.google.com/file/d/1yjLRwQMEPbjjcqbqxJ9pL3-4jhTDlMeS/view?usp=sharing",
    },

    {
      title: "AWS Certified Cloud Practitioner - AWS",
      imgUrl: awsImage,
      redirectUrl:
        "https://drive.google.com/file/d/1rtAZzMZA9rpJQKhc8YpciqDGaJv1zLEk/view?usp=sharing",
    },

    {
      title: "CGI_WiSE-Certificate_Summer 2024- Fatiha Nowrin",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1WoaveYn43s-pQZP09L93nyvaOA-MUeeA/view?usp=sharing",
    },
    {
      title: "Sprinklr Conversational AI Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1735zFj4IQbcsRpXVqxSls5veUd09XV8i/view?usp=sharing",
    },

    {
      title: "Working with Google Cloud SQL - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1bFYeUKtFLxUOD-UpBzx4vjFFDp55_ooO/view?usp=drive_link",
    },
    {
      title: "Global Google Learning - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1yB5Fl4LfwmxmXcHyI-g_GCh8WJMbeyrV/view?usp=sharing",
    },
    
    {
      title: "Global ServiceNow Learning - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1GGdnsn7F7fnAEdvezQlwPQ68O6BQqJI8/view?usp=sharing",
    },
    
    {
      title: "Working with Microsoft Azure SQL - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1L7Y5wcaizaA5ICT9STyWoJz6dYJhCBj8/view?usp=drive_link",
    },
    {
      title: "Natural Language Processing and LLMS - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1IADV-5oyyx0UFH6tzizMGYuLKFJOd9Of/view?usp=sharing",
    },
    {
      title: "Mastering Power BI - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1MDYilU4armornOoO3uRGOR4YCB73EzYA/view?usp=sharing",
    },
    {
      title: "Introduction to Operating Systems - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1Z7Jnvw_sbXoMA6ScyHH_i1slbG_LVYhw/view?usp=sharing",
    },
    {
      title: "Introduction to Cybersecurity- CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1Re6VF9zQMNam9UpiNCZd27WNQF874qzc/view?usp=sharing",
    },
    {
      title: "Harnessing Disruption Through Data - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1ni-3SIwZendsuPQw8OuBvXScVLUaatuG/view?usp=sharing",
    },
    {
      title: "CGI Cooperative Education Program - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1mc_W-Qn2qK5u7mo7iH2h3A5qUaTntyIh/view?usp=sharing",
    },

    {
      title: "F24 Member-Partners Consultation - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1GyGSDdKCpvDqBil3TlkVLsgUImTpxJPy/view?usp=sharing",
    },
    {
      title: "CGI: SharpCloud",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1Z_sXVRUvmClwGBvNpiyHtgGzLsZe5HIN/view?usp=sharing",
    },
    {
      title: "Salesforce Learning Trailhead Certification Links - CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1M6ETpHV4T129ZtXBwkc_hdp0ARz6yz0R/view?usp=sharing",
    },
    {
      title: "CGI: Intelligent Automation Platform",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/147M-pq_kG5jB4Edzbe6MCmzsiZF5mTrg/view?usp=sharing",
    },
    {
      title: "CGI: Global Microsoft Learning Guides",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/165iWlkgOdM86hDknZR10O91pmE_dRy3Z/view?usp=sharing",
    },
    {
      title: "CGI: Generative AI Foundations",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1tb_TW1CNSLpe7_Ll_vfBE47PzCBREEul/view?usp=sharing",
    },
    {
      title: "CGI: Data Visualization And Analyst External Certifications",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1ULUhv9PXbe7oB9zJd5SLx-luBUZHoKkp/view?usp=sharing",
    },
    {
      title: "CGI: Data Science Certification Links",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1Qh7HihkASNp4YccqzBBXwFtbz6hsgZ_Z/view?usp=sharing",
    },
    {
      title: "CGI: Data Engineering External Certifications",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1W9wTDO1jHnf2aznqtEsvQw1pD_eamFwE/view?usp=sharing",
    },
    {
      title: "CGI: AWS Learning Guides",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1cf3JYw4676hK2kF_pTts-TpA0PUKB2fG/view?usp=sharing",
    },
    {
      title: "Automated Software Testing with Java Selenium – CGI",
      imgUrl: cgiImage,
      redirectUrl:
        "https://drive.google.com/file/d/1ueMbCJgYich2ShTn4ap1vSy3jB7pJmEk/view?usp=sharing",
    },


    {
      title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 - Udemy",
      imgUrl: udemyImage,
      redirectUrl:
        "https://drive.google.com/file/d/1A-VtNS-rBB4HFa9tN1qEny11ND3bDsf6/view?usp=drive_link",
    },
 
    {
      title: "Introduction to Time Management - TECHNATION",
      imgUrl: techImage,
      redirectUrl:
        "https://drive.google.com/file/d/1a51yZnXIausEUpls2T5eIHxvtyMNdIjW/view?usp=sharing",
    },
    {
      title: "Introduction to Search Engine Optimization - TECHNATION",
      imgUrl: techImage,
      redirectUrl:
        "https://drive.google.com/file/d/1Lvqw2CYDq-H4IZkcxaVDKeVtp6hXjefx/view?usp=sharing",
    },
    {
      title: "Presentation Skills - TECHNATION",
      imgUrl: techImage,
      redirectUrl:
        "https://drive.google.com/file/d/1WQYGzJxo56WML1l4cMPunXajmPJRvn0P/view?usp=sharing",
    },
    {
      title: "Introduction to Project Management - TECHNATION",
      imgUrl: techImage,
      redirectUrl:
        "https://drive.google.com/file/d/1RAhUvSsGkfumFFbqHht6hR7ESjweRI6x/view?usp=sharing",
    },
    {
      title: "Introduction to Microsoft Excel - TECHNATION",
      imgUrl: techImage,
      redirectUrl:
        "https://drive.google.com/file/d/1etpan4w3P_ibUpNKRFvO_TKXoHvcnKrd/view?usp=sharing",
    },
    {
      title: "Communication Styles - TECHNATION",
      imgUrl: techImage,
      redirectUrl:
        "https://drive.google.com/file/d/1sk0KH61i8x1ipRxCNgKHGerQOciZod0m/view?usp=sharing",
    },
    {
      title: " Business Writing - TECHNATION",
      imgUrl: techImage,
      redirectUrl:
        "https://drive.google.com/file/d/11vQ0S4pwOhBltBNx8AM9MrM6up_RqJyH/view?usp=sharing",
    },
    {
      title: "Sprinklr Location Analyst Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/15eorjFwfx4CXg2f0MvX2HsU1hhGZ3ut6/view?usp=sharing",
    },
    {
      title: "Sprinklr Product Analyst Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1mZej7nP233B3VoU93D8KeBt_GZ8zXF5I/view?usp=sharing",
    },
    {
      title: "Sprinklr Insight Analyst Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1axlTRj5x40tqqao2udq7YO33EI2rhirR/view?usp=sharing",
    },
    {
      title: "Sprinklr Insight: Crisis Research",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1kc-OZryTpB9aOAocMolhSvu5s95JVPDe/view?usp=sharing",
    },
    {
      title: "Sprinklr Insight: Audience Research",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1CZiyyI02WqxdUawCm6aEgO8uwOU62CWC/view?usp=sharing",
    },
    {
      title: "Sprinklr Insight: Brand Research",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1tD2J_ESPl_G02mdIi7NbCFHCpF7Gp9GT/view?usp=sharing",
    },
    {
      title: "Sprinklr Insight: Lead Generation",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/17TGUcVuAJ3ra5CP2nC8ST0p9KFr3tOai/view?usp=drive_link",
    },

    {
      title: "Sprinklr Marketing Research Analyst Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1sYevcb3dTDKD_UF4uG0_7_InBnxZWale/view?usp=sharing",
    },
    {
      title: "Sprinklr Marketing Operations Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1Y8SLpn31BnA7G0Jlkh58lDx_JZaoX57V/view?usp=sharing",
    },
    {
      title: "Sprinklr Ads Analyst Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1EGxprBL_ejhloVlYliIQ0SiWFJd1aSQs/view?usp=sharing",
    },
    {
      title: "Sprinklr Marketing: Ads Execution",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1ZV4PX7SQoPBWVHVEeMKVMcufpSgkEONn/view?usp=sharing",
    },
    {
      title: "Sprinklr Marketing: Ads Optimization",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1LYDnBLQQcfjPnHgSaakdbWCqJoFji3LY/view?usp=sharing",
    },
    {
      title: "Sprinklr Campaign Manager Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1waecjODj6lVfyx-IWNYFa71mXXc8QyrX/view?usp=sharing",
    },
    {
      title: "Sprinklr Community Manager Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1gAddFCa3ZC2KJmgKoJ0KHw0Av7tMD04g/view?usp=sharing",
    },
    {
      title: "Sprinklr System Admin Pro: Workflow Setup",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1wZ4ex_Fo45eTsWqm7MxKXdvqybFNTSsj/view?usp=sharing",
    },
    {
      title: "Sprinklr System Admin Pro: Team Management",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1ZMKf_oNFnDhmI5BR5ENbds_j3K3pv-Fa/view?usp=sharing",
    },
    {
      title: "Sprinklr Social Analyst Pro",
      imgUrl: comppImage,
      redirectUrl:
        "https://drive.google.com/file/d/1lykQ65ve7OVmTw6FO4jonv7PKggh7Hdm/view?usp=sharing",
    },

  ];const [visibleCount, setVisibleCount] = useState(4);

  const showAll = () => {
    setVisibleCount(certificationList.length);
  };

  const showLess = () => {
    setVisibleCount(4);
  };

  return (
    <>
      <section className="certification" id="certification">
        <div className="certification-container">
          <h1 className="certification-heading">Certifications</h1>
          <div className="certification-grid">
            {certificationList.slice(0, visibleCount).map((certification, i) => (
              <div className="certification-item" key={i}>
                <a href={certification.redirectUrl} target="_blank" rel="noopener noreferrer">
                  <img src={certification.imgUrl} alt={certification.title} />
                  {certification.title}
                </a>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center mt-5">
            {visibleCount < certificationList.length ? (
              <button className="showmore-btn" onClick={showAll}>

                Show All
              </button>
            ) : (
              <button className="showmore-btn" onClick={showLess}>
                Show Less
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certification;