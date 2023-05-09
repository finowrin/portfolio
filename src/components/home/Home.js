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
        <h1 className="intro-big-heading">Hi, I'm Fatiha,</h1>
        <h1
          className="intro-big-heading"
          style={{ color: "var(--sub-text-color)" }}
        >
          a Software Developer.
        </h1>
        <p className="hero-sub">
          I build websites, applications, games, and more.
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
