import "./Projects.scss";
import Icon from "../icon/Icon";

// import { useState, useEffect } from "react";

import { projects } from "../../assets/projects";

import playIcon from "../../assets/icons/play.png";
import { display } from "@mui/system";

export default function Projects() {
  return (
    <div className="projects" id="portfolio">
      <div className="projectList">
        <h1 className="sectionTitle">Portfolio</h1>

        <div className="lineContainer">
          <div className="hLine"></div>
        </div>

        {projects.map((p) => (
          <div className="projectContainer">
            <div className="left">
              <img src={p.img} alt={p.title} />
            </div>

            <div className="lineContainer">
              <div className="vLine"></div>
            </div>

            <div className="right">
              <h3> {p.title} </h3>
              <p> {p.description} </p>

              <div className="iconContainer">
                {p.link ? (
                  <Icon name="Play" link={p.link} img={playIcon} />
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
