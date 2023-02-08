import "./Projects.scss";
import { useState, useEffect } from "react";
import { projects } from "../../assets/data";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="sectionTitle">Portfolio</h1>

      <div className="container">
        {projects.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3> {d.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
