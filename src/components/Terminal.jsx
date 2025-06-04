import { useState, useRef, useEffect } from "react";

import "./Terminal.css";

import Experience from "../sections/Experience.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Help from "../sections/Help.jsx";
import Skills from "../sections/Skills.jsx";
import Home from "../sections/Home.jsx";

export default function Terminal() {
  // This sets the current state of the input to be "" but then updates the input using setInput
  const [input, setInput] = useState("");

  const terminalEndRef = useRef(null);

  //Array of command history
  const [history, setHistory] = useState([
    "Welcome to Philip's Terminal Portfolio! Type ls to see where you can go!.",
  ]);

  // The current view is set to nothing
  const [view, setView] = useState("Home");

  // A function called commandLine with 0 paremeters
  const commandLine = () => {
    // trim removes the whitespace. Also turns lowercase to standardize
    const command = input.trim().toLowerCase();

    let response = "";

    switch (command) {
      // All possible commands
      case "cd ..":
        setView("");
        break;
      case "home":
      case "-hm":
        setView("Home");
        break;
      case "about":
      case "-a":
        setView("About");
        break;
      case "experience":
      case "-e":
        setView("Experience");
        break;
      case "projects":
      case "-p":
        setView("Projects");
        break;
      case "skills":
      case "-s":
        setView("Skills");
        break;
      case "help":
      case "-h":
        setView("Help");
        break;
      case "clear":
        // Clear everything including the view --> Maybe we could set it to the welcome page instead
        setHistory([]);
        setInput("");

        return;
      default:
        response = `Unknown command: '${input}'`;
    }
    if (response != "") {
      setHistory((prev) => [...prev, response]);
    } else {
      setHistory((prev) => [...prev, `$ ${input}`]);
    }
    setInput("");
  };

  useEffect(() => {
    // If u want more of a terminal feeling, we should not apply the smooth scroll behvaior
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <>
      <div className="terminal">
        <div className="terminal-header">
          <span className="buttons red"></span>
          <span className="buttons yellow"></span>
          <span className="buttons green"></span>
          <span className="terminal-title">
            philip@ubuntu:
            {view ? `/${view}` : "~"}$
          </span>
        </div>
        <div className="terminal-body">
          {history.map((line, i) => (
            <pre key={i}>
              <span className="prompt">philip@ubuntu:~$</span> {line}
            </pre>
          ))}

          <pre>
            <span className="prompt">
              philip@ubuntu:
              {view ? (
                <span style={{ color: "#6a43f6" }}>{`/${view}`}</span>
              ) : (
                "~"
              )}
              $
            </span>{" "}
            <input
              className="input-box"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && commandLine()}
              autoFocus
              placeholder="Write commands here"
            />
          </pre>

          <div ref={terminalEndRef} />

          {/* Dynamically render section based on view */}
          <div className="terminal-content mt-4">
            {view === "Home" && <Home />}
            {view === "About" && <About />}
            {view === "Projects" && <Projects />}
            {view === "Experience" && <Experience />}
            {view === "Skills" && <Skills />}
            {view === "Help" && <Help />}
          </div>
        </div>
      </div>
    </>
  );
}
