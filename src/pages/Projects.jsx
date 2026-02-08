// src/pages/Projects.jsx
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="page-container projects-wrapper">
      <h1 className="projects-title">Projects</h1>

      <p className="projects-intro">
        Here are a few key projects that reflect my experience in Healthcare IT
        and Digital Health.
      </p>

      <div className="projects-list">

        <div className="project-item">
          <h2>Hospital IT Service Desk Optimization</h2>
          <h3>Lead IT Service Desk Engineer</h3>
          <p>
            Redesigned ticket workflows, improved response times, and implemented
            ITIL-based processes to enhance service quality in a fast-paced hospital
            environment.
          </p>
        </div>

        <div className="project-item">
          <h2>Healthcare Infrastructure Upgrade</h2>
          <h3>IT Infrastructure Coordinator</h3>
          <p>
            Coordinated server, network, and endpoint upgrades across multiple
            hospital sites, ensuring minimal downtime and stable operations.
          </p>
        </div>

        <div className="project-item">
          <h2>Digital Health Integration Initiative</h2>
          <h3>Digital Health Student Project</h3>
          <p>
            Academic project focused on integrating patient data flows and improving
            usability for clinical staff through better interface design and workflow
            mapping.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;