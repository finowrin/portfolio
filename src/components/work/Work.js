import { breakoutImg, pacmanImg, financebookImg, cantstopImg, battleshipImg } from "../../assets";
import "./Work.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const projects = [
    {
      title: "Breakout",
      description:
        "A game project based on the classic Atari Breakout arcade game. This project features many levels, three themes and high scores list.",
      imgUrl: breakoutImg,
      techList: ["OOPs", "Maven", "JUnit", "JavaFX", "Java"],
      url: "https://github.com/finowrin/breakout",
      //linkList: ["Github", "Show Project"],
      category: "Desktop Game",
    },
    {
      title: "Pacman",
      description:
        "A game project based on the classic Pacman arcade game. This project features many procedural levels, lots of themes, multiple ghosts, high scores list, etc.",
      imgUrl: pacmanImg,
      url: "https://github.com/finowrin/pacman",
      techList: ["Java", "JavaFX", "Maven", "JUnit", "OOPs"],
      // linkList: ["", ""],
      category: "Desktop Game",
    },
    {
      title: "Financebook",
      description:
        "A personal finance management web app. It can be used to track transactions like borrowing and lending safely and efficiently.",
      imgUrl: financebookImg,
      techList: ["Vercel", "CSS", "Javascript", "NextJS", "Firebase"],
      url: "https://financebook-finowrin.vercel.app/",
      // linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    {
      title: "Can't Stop",
      description:
        "An academic group project based on Cant Stop board game played by 2-4 players and bots with mutliple difficulty levels.",
      imgUrl: cantstopImg,
      techList: ["Java", "Swing", "UML", "OOPs"],
      // url: "https://financebook-finowrin.vercel.app/",
      // linkList: ["Github", "Show Project"],
      category: "Desktop Game",
    },
     {
      title: "Battleship",
      description:
        "A game project based on the classic Battleship board game. It can be played by two players in vs Friend mode or by one player in vs Computer mode.",
      imgUrl: battleshipImg,
      techList: ["Game AI", "OOP", "Curses", "Python"],
      url: "https://github.com/finowrin/battleship",
      // linkList: ["Github", "Show Project"],
      category: "Desktop Game",
    },
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">
        <h1 className="work-heading">My Projects</h1>
        <div className="work-items-container">
          {projects.map((project, i) => (
            // <div className="work-item"></div>
            <WorkItem {...project} align={i % 2 !== 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}
