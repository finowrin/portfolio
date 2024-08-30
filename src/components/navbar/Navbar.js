import "./Navbar.css";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import {
    logoImage,
} from "../../assets";

export default function Navbar() {
    const { hash } = useLocation();
    const isActive = (iHash) => hash === iHash;
    const sections = [
        // { title: "Home", to: "#home" },
        { title: "About", to: "#about" },
        { title: "Skills", to: "#skill" },
        { title: "Experiences", to: "#experience" },
        { title: "Projects", to: "#work" },
        { title: "Certifications", to: "#certification" },
        { title: "Contact", to: "#contact" },

    ];
    return (
        <nav className="navbar sticky d-flex flex-row align-items-center">
            <div>
                <img src={logoImage} height="120px" width="120px" />
            </div>
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
                        "https://drive.google.com/file/d/1sdWv_N29hXzCapkVplD-35CgD-6YCmWz/view?usp=sharing")
                    }
                >
                    Resume
                </button>
            </ul>
        </nav>
    );
}
