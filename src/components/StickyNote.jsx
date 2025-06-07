import { useState, useRef } from "react";
import "./StickyNote.css";

export default function StickyNote() {
  return (
    <>
      <div className="Sticky-note">
        <div className="tab">
          <img src="public/close.png" alt="" />
          <img
            src="public/rest.png"
            alt=""
          />
        </div>

        <div className="bottom text">
          <h1>List of commands: </h1>
          <ul>
            <li>home/-hm : Home</li>
            <li>about/-a : About Me</li>
            <li>projects/-p : Projects</li>
            <li>experience/-e : Experiences</li>
            <li>skills/-s : Skills</li>
            <li>clear : Clear Window</li>
            <li>help/-h : Help</li>
          </ul>
          <h2>Happy EXPLORING!!! :)</h2>
        </div>
      </div>
    </>
  );
}
