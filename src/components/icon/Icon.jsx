import "./Icon.scss";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import git from "../../assets/icons/git_icon.svg";

export default function Icon(props) {
  return (
    // <div className="icon">
    <a className="icon" href={props.link} target="_blank">
      <img src={props.img} alt={props.name} />
      <h5>{props.name}</h5>
    </a>
  );
}
