import { useState, useRef, useEffect } from "react";

import "./Terminal.css";

import Experience from "../sections/Experience.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Help from "../sections/Help.jsx";
import Skills from "../sections/Skills.jsx";
import Home from "../sections/Home.jsx";
import Contact from "../sections/Contact.jsx";

export default function Terminal() {
  // This sets the current state of the input to be "" but then updates the input using setInput
  const [input, setInput] = useState("");

  const terminalEndRef = useRef(null);

  //Array of command history
  const [history, setHistory] = useState([
    {
      type: "text",
      value:
        "Welcome to Philip's Terminal Portfolio! Type ls to see where you can go!.",
    },
  ]);

  // The current view is set to nothing
  const [view, setView] = useState("");

  // A function called commandLine with 0 paremeters
  const commandLine = () => {
    const command = input.trim().toLowerCase();
    let output = null;

    // Always push the command itself
    setHistory((prev) => [
      ...prev,
      { type: "command", value: input, path: view },
    ]);

    switch (command) {
      case "ls":
        output = "Home    About    Experience    Contact";
      // All possible commands
      case "cd ..":
        setView("");
        break;
      case "home":
      case "-hm":
        output = <Home />;
        setView("Home");
        break;
      case "about":
      case "-a":
        output = <About />;
        setView("About");
        break;
      case "experience":
      case "-e":
        output = <Experience />;
        setView("Experience");
        break;
      case "projects":
      case "-p":
        output = <Projects />;
        setView("Projects");
        break;
      // case "skills":
      // case "-s":
      //   output = <Skills />;
      //   setView("Skills");
      //   break;
      case "help":
      case "-h":
        output = <Help />;
        setView("Help");
        break;
      case "contact":
      case "-c":
        output = <Contact />;
        setView("Contact");
        break;
      case "clear":
        // Clear everything including the view --> Maybe we could set it to the welcome page instead
        setHistory([]);
        setInput("");
        return;
      default:
        output = `Unknown command: '${input}'`;
    }

    if (output) {
      setHistory((prev) => [
        ...prev,
        {
          type: typeof output === "string" ? "text" : "component",
          value: output,
        },
      ]);
    }

    setInput("");
  };

  useEffect(() => {
    // If u want more of a terminal feeling, we should not apply the smooth scroll behvaior
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <>
      {/* Terminal styling and div classes*/}
      <div className="terminal">
        <div className="terminal-header">
          <span className="buttons red"></span>
          <span className="buttons yellow"></span>
          <span className="buttons green"></span>
          {/* If there is a current view set, convey the path name */}
          <span className="terminal-title">
            philip@ubuntu:
            {view ? `/${view}` : "~"}$
          </span>
        </div>
        <div className="terminal-body">
          {history.map((entry, i) => {
            if (entry.type === "command") {
              return (
                <pre key={i}>
                  <span className="prompt">
                    philip@ubuntu:
                    {entry.path ? (
                      <span
                        style={{ color: "#6a43f6" }}
                      >{`/${entry.path}`}</span>
                    ) : (
                      "~"
                    )}
                    $
                  </span>{" "}
                  {entry.value}
                </pre>
              );
            }
            if (entry.type === "text") {
              return (
                <pre key={i}>
                  <span style={{ color: "#6a43f6" }}>{entry.value}</span>
                </pre>
              );
            }
            if (entry.type === "component") {
              return (
                <div className="terminal-content mt-4" key={i}>
                  {entry.value}
                </div>
              );
            }
            return null;
          })}

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
        </div>
      </div>
    </>
  );
}
