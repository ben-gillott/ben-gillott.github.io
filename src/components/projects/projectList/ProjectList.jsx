import React from "react";
import "./ProjectList.scss";

export default function ProjectList({ title, id, selected, setSelected }) {
  const isActive = id === selected;
  const pClass = "projectList" + (isActive ? " active" : "");

  return (
    <li className={pClass} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}
