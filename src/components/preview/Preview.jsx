import "./Preview.scss";
// import Loader from "../../loader/Loader";
import srcIcon from "../../assets/icons/git.svg";
import linkIcon from "../../assets/icons/link.svg";
// import linkIcon from "../../assets/icons/resume.png";

export default function Preview(props) {
  const e = props.e;
  return (
    <div className="preview">
      <div className="left">
        <img
          className="image"
          src={e.img}
          alt={e.title}
          style={!e.img ? { display: "none" } : {}}
        />
      </div>

      <div className="right">
        <h2 className="title"> {e.title} </h2>

        <div className="roleinfo">
          <h4 className="role">{e.role}</h4>
          <h4 className="dates">{e.date}</h4>
        </div>

        <ul className="bullets">
          {e.bullets.map((b, index) => (
            <li
              style={!b || b === "" ? { display: "none" } : {}}
              key={index}
              className="bullet"
            >
              {b}
            </li>
          ))}
        </ul>

        <div className="linkContainer">
          <a
            style={!e.read || e.read === "" ? { display: "none" } : {}}
            className="read"
            href={e.read}
          >
            <p>...Read More</p>
          </a>
          <a
            style={!e.link || e.link === "" ? { display: "none" } : {}}
            className="link"
            rel="noreferrer"
            target="_blank"
            href={e.link}
          >
            <img src={linkIcon} alt={"Link Icon"} />
          </a>

          <a
            style={!e.src || e.src === "" ? { display: "none" } : {}}
            className="src"
            rel="noreferrer"
            target="_blank"
            href={e.src}
          >
            <img src={srcIcon} alt={"Src Icon"} />
          </a>
        </div>
      </div>
    </div>
  );
}