import "./Navbar.css";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  const sections = [
    // { title: "Home", to: "#home" },
    { title: "About", to: "#about" },
    { title: "Projects", to: "#work" },
    { title: "Contact", to: "#contact" },
  ];
  return (
    <nav className="navbar sticky">
      <ul className="navlist">
        {sections.map((section) => (
          <li>
            <NavHashLink
              className={isActive(section.to) ? "link-active" : "link"}
              smooth
              to={section.to}
            >
              {section.title}
            </NavHashLink>
          </li>
        ))}
        <button
          onClick={() =>
            (window.location.href =
              "https://drive.google.com/file/d/1sdWv_N29hXzCapkVplD-35CgD-6YCmWz/view?usp=share_link")
          }
        >
          Resume
        </button>
      </ul>
    </nav>
  );
}
