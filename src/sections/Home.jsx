import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="text-green-400 font-mono">
        <p className="greeting">Hello! My name is</p>
        <h1 className="name">Philip Hadiwidjaja,</h1>
        <h2 className="about">I'm a software developer</h2>
        <div className="divider"></div>
        <p className="first_line">
          I'm always building projects! I am very passionate about learning new
          technologies and solving real-world problems through code. My projects
          are ideas that have popped into my mind in everyday life and an
          obvious reference to my various interests!
        </p>
        <p className="second_line">
          Currently I am focusing on more Machine Learning and Artificial
          Intelligence! Here are some of my ongoing projects:{" "}
        </p>
        <ul className="projects">
          <li>SwishFeed</li>
          <li>Indonesan Language Chatbot</li>
          <li>The Unbeatable chess game</li>
        </ul>

        <p className="closing">
          <mark>
            You can discover more of my projects in the{" "}
            <span className="highlight">./Projects</span> section
          </mark>
        </p>
      </div>
    </>
  );
}
