import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/work/Work";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Certification from "./components/certification/Certification";
import Skill from "./components/skill/Skill";

function App() {
  useEffect(() => {
    console.log(window.TagCanvas);
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill/>
      <Experience />
      <Work />
      <Certification/>
      <Contact />
    </>
  );
}

export default App;
