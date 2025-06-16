import { useState, useRef } from "react";
import "./StickyNote.css";

export default function StickyNote() {
  return (
    <>
      <div className="Sticky-note">
        <div className="tab">
          <img src="/close.png" alt="" />
          <img src="/rest.png" alt="" />
        </div>

        <div className="bottom text">
          <h1>List of commands: </h1>
          <br />
          <ul>
            <li>
              <span className="bold">ls</span> : look at places to go
            </li>
            <li>
              <span className="bold">cd ..</span> : go back to root directory
            </li>
            <li>
              <span className="bold">home</span>/
              <span className="bold">-hm</span> : Home
            </li>
            <li>
              <span className="bold">about</span>/
              <span className="bold">-a</span> : About Me
            </li>
            <li>
              <span className="bold">projects</span>/
              <span className="bold">-p</span> : Projects
            </li>
            <li>
              <span className="bold">experience</span>/
              <span className="bold">-e</span> : Experiences
            </li>
            {/* <li><span className="bold">skills</span>/<span className="bold">-s</span> : Skills</li> */}
            <li>
              <span className="bold">contact</span>/
              <span className="bold">-c</span> : contact me!
            </li>
            <li>
              <span className="bold">clear</span> : clear window
            </li>
          </ul>
          <br />
          <h2>Happy EXPLORING</h2>
          <h2>- Philip Hadiwidjaja</h2>
        </div>
      </div>
    </>
  );
}
