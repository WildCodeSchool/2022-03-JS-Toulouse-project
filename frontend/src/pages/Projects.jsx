import React from "react";
import "../styles/Projects.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Projects() {
  return (
    <div>
      <Header title="Projects" />
      <section className="main-projects-container">
        <Sidebar />
        <div>Projects</div>
      </section>
    </div>
  );
}

export default Projects;
