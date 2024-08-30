import draw, { updateMousePosition } from "../../canvasAnim";
import Canvas from "../canvas/Canvas";
import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        draw={draw}
        updateMousePosition={updateMousePosition}
      />
      <div className="intro-text-zone">
        <h1 className="intro-big-heading">Hello, I'm Fatiha,</h1>
        <h1
          className="intro-big-heading"
          style={{ color: "var(--sub-text-color)" }}
        >
          Welcome to my portfolio
        </h1>
        <p className="hero-sub">
        Empowering your ideas with breakthrough technological innovations.
        </p>
        <br />
        <br />
        <button
        
          className="contact-btn"
          onClick={() => (window.location.href = "mailto:finowrin@mun.ca")}
        >
          Contact me!
        </button>
      </div>
    </section>
  );
}
