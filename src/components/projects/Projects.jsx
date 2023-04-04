import "./Projects.scss";
import Icon from "../icon/Icon";
import playIcon from "../../assets/icons/play.png";
import Loader from "../loader/Loader";

import { projects } from "../../assets/projects";

export default function Projects() {
  return (
    <div className="projects" id="portfolio">
      <Loader elem={<h1 className="sectionTitle">Portfolio</h1>} />

      <div className="projectList">
        <div className="lineContainer">
          <Loader className="hLine" />
        </div>

        {projects.map((p) => (
          <Loader
            key={p.title}
            elem={
              <div className="projectContainer">
                <div className="left">
                  <img className="projectImage" src={p.img} alt={p.title} />
                </div>

                <div className="lineContainer">
                  {/* <div className="vLine" /> */}
                  <Loader className="vLine" />
                </div>

                <div className="right">
                  <h3> {p.title} </h3>
                  <Description desc={p.description} />
                  <PlayButton link={p.link} />
                  <button>More Info</button>
                </div>
              </div>
            }
          />
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
