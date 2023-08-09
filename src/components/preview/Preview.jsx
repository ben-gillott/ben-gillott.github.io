import "./Preview.scss";
import srcIcon from "../../assets/icons/git.svg";
import linkIcon from "../../assets/icons/link.svg";

export default function Preview(props) {
  return (
    <div className={"preview " + props.type}>
      <div className="leftPrev">
        <img className="image" src={props.img} alt={props.title} style={!props.img ? { display: "none" } : {}} />
      </div>

      <div className="rightPrev">
        <h2 className="title"> {props.title} </h2>

        <div className="roleinfo">
          <h4 className="role">{props.role}</h4>
          <h4 className="dates">{props.date}</h4>
        </div>

        <ul className="bullets">
          {props.bullets &&
            props.bullets.map((b, index) => (
              <li style={!b || b === "" ? { display: "none" } : {}} key={index} className="bullet">
                {b}
              </li>
            ))}
        </ul>

        <div className="linkContainer">
          <a style={!props.read || props.read === "" ? { display: "none" } : {}} className="read" href={props.read}>
            <p>...Read More</p>
          </a>
          <a style={!props.src || props.src === "" ? { display: "none" } : {}} className="src" rel="noreferrer" target="_blank" href={props.src}>
            <img src={srcIcon} alt={"Src Icon"} />
          </a>
          <a style={!props.link || props.link === "" ? { display: "none" } : {}} className="link" rel="noreferrer" target="_blank" href={props.link}>
            <img src={linkIcon} alt={"Link Icon"} />
          </a>
        </div>
      </div>
    </div>
  );
}
