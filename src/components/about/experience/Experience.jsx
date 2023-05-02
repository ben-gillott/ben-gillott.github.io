import "./Experience.scss";
import Loader from "../../loader/Loader";

export default function Experience(props) {
  return (
    <div className="projectContainer">
      <div className="left">
        <img className="projectImage" src={props.e.img} alt={props.e.title} />
      </div>

      <div className="lineContainer">
        <Loader className="vLine" />
      </div>

      <div className="right">
        <h3> {props.e.title} </h3>
        {/* <Description desc={e.description} /> */}
        {/* <PlayButton link={e.link} /> */}
      </div>
    </div>
  );
}
