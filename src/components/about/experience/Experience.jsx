import "./Experience.scss";
// import Loader from "../../loader/Loader";

export default function Experience(props) {
  const e = props.e;
  return (
    <div className="experience">
      <div className="left">
        <img className="image" src={e.img} alt={e.company} />
      </div>

      <div className="right">
        <h2 className="company"> {e.company} </h2>
        <div className="roleinfo">
          <h4 className="role">{e.role}</h4>
          <h4 className="dates">{e.dates}</h4>
        </div>

        <ul className="bullets">
          {e.bullets.map((b) => (
            <li className="bullet">{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
