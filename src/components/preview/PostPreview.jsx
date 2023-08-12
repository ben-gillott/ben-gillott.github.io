import "./PostPreview.scss";
import { useNavigate } from "react-router-dom";

export default function Preview(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/posts/${props.slug}`;
    navigate(path);
  };

  return (
    <div className={"postPreview"} onClick={routeChange}>
      <div className="leftPrev">
        <img className="image" src={props.img} alt={props.title} />
      </div>

      <div className="rightPrev">
        <h2 className="title"> {props.title} </h2>

        <p className="description"> {props.description} </p>

        <h4 className="date"> {props.date} </h4>
      </div>
    </div>
  );
}
