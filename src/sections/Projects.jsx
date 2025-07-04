import { Paper, Divider } from "@mui/material";
import ProjectCard from "../components/ProjectCard.jsx";
import "../sections/Projects.css";

export default function Projects() {
  return (
    <>
      <Divider sx={{ borderColor: "#FFFFFF", borderStyle: "dashed" }} />
      <h1 className="project-title">Projects</h1>
      <Divider sx={{ borderColor: "#FFFFFF", borderStyle: "dashed" }} />

      <div className="project-display">
        <ProjectCard
          title="Tech Layoff Predictor"
          image="/eecs398_proj.png"
          description="Predictive model using pandas and scikit-learn to estimate tech layoff percentages based on company characteristics and geographic indicators"
        />
        <ProjectCard
          title="Medical Scanner"
          image="/bloopsProject.png"
          description="An AI-powered medical scanner app that reduces human error and automates inventory tracking using GPT-4 and Gemini API."
        />
        <ProjectCard
          title="Iota Omega Epsilon"
          image="/IOEWebsite.png"
          description="Developed a responsive React.js website for Iota Omega Epsilon to showcase its mission, events, and brotherhood with a modern and accessible design."
        />
        <ProjectCard
          title="Portfolio website"
          image="/portfolio.png"
          description="Developed a responsive portfolio website with react and javascipt as well as Material UI"
        />

        <ProjectCard
          title="Slime run"
          image="/SlimeRun.png"
          description="Mario-styled side scroll game with created map made with Java and Libgdx"
        />

        <ProjectCard
          title="Stock Simulator"
          image="/stockSimulator.png"
          description="Engineered a real-time stock market simulator in C++ to model price movements and identify optimal buy-in points based on historical trends and dynamic thresholds leading to a guaranteed profit."
        />
      </div>
    </>
  );
}
