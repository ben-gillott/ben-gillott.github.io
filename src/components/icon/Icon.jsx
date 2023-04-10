import "./Icon.scss";

export default function Icon(props) {
  return (
    <a className="icon" rel="noreferrer" href={props.link} target="_blank">
      <img src={props.img} alt={props.name} />
      <h5>{props.name}</h5>
    </a>
  );
}
