import "./Portfolio.scss";
import Loader from "../loader/Loader";
import { projects } from "../../assets/projects";
import Preview from "../preview/Preview";

export default function Projects() {
  return (
    <div className="portfolio" id="portfolio">
      <Loader elem={<h1 className="sectionTitle">Portfolio</h1>} />

      <div className="projectList">
        <div className="lineContainer">
          <Loader className="hLine" />
        </div>

        {projects.map((p) => (
          <Loader elem={<Preview key={p.title} title={p.title} img={p.img} src={p.src} read={p.read} link={p.link} bullets={p.bullets} type="project" />} />
        ))}
      </div>
    </div>
  );
}

// title, highlight, img, src, link, bullets