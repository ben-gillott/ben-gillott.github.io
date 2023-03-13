import "./Projects.scss";
import Icon from "../icon/Icon";
import playIcon from "../../assets/icons/play.png";
import Loader from "../loader/Loader";

import { projects } from "../../assets/projects";
// import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

{
  /* <Loader elem={} /> */
}

export default function Projects() {
  return (
    <div className="projects" id="portfolio">
      <Loader elem={<h1 className="sectionTitle">Portfolio</h1>} />

      <div className="projectList">
        <div className="lineContainer">
          <Loader elem={<div className="hLine"></div>} />
        </div>

        {projects.map((p) => (
          <div key={p.title} className="projectContainer">
            <div className="left">
              <Loader
                elem={<img className="projectImg" src={p.img} alt={p.title} />}
              />
            </div>

            <div className="lineContainer">
              <Loader elem={<div className="vLine"></div>} />
            </div>

            <div className="right">
              <Loader elem={<h3> {p.title} </h3>} />
              <Loader elem={<Description desc={p.description} />} />
              <Loader elem={<PlayButton link={p.link} />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Description(props) {
  return (
    <div className="descContainer">
      <p> {props.desc} </p>
    </div>
  );
}
function PlayButton(props) {
  return (
    <div className="iconContainer">
      {props.link && <Icon name="Play" link={props.link} img={playIcon} />}
    </div>
  );
}
