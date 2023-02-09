import "./Intro.scss";
import profileImg from "../../assets/profile/coffee.png";

export default function Intro() {
  return (
    <div className="intro containerbox">
      <div className="imageContainer">
        <img className="image" src={profileImg} alt="Profile Image" />
      </div>

      <div className="blurbContainer">
        <h1 className="sectionTitle">About</h1>

        <div className="lineContainer">
          <div className="hLine "></div>
        </div>

        <p className="blurb">
          I love using computational and graphical methods to create what looks
          like modern day magic.
          <br />
          <br />
          Graduated from Cornell in 2021 with a B.A. in Computer Science, and
          currently working at the geospatial startup Whiteout Solutions.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
