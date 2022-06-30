import React from "react";
import "../styles/ProjectCard.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ProjectCard({ title, description, image, technologies }) {
  return (
    <div className="project-container">
      <img src={image} alt="placeholder" />
      <div className="project-text-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ul className="tech-list">
        {technologies.map((el) => (
          <li className="tech-pill">{el.name}</li>
        ))}
      </ul>
      <div className="arrow-container">
        <KeyboardArrowDownIcon sx={{ margin: "0 auto" }} />
      </div>
    </div>
  );
}

export default ProjectCard;
