import "./Projects.scss";
import ProjectList from "./projectList/ProjectList";
import { useState, useEffect } from "react";
import { featuredProjects, projectTypes } from "../../assets/data";

export default function Projects() {
  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredProjects);
        break;
      case "software":
        setData([]);
        break;
      case "games":
        setData([]);
        break;
      case "graphics":
        setData([]);
        break;
      default:
        setData(featuredProjects);
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>

      <ul>
        {projectTypes.map((item) => (
          <ProjectList
            title={item.title}
            id={item.id}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3> {d.title} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
