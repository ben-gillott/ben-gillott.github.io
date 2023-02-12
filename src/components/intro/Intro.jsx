import "./Intro.scss";
import profileImg from "../../assets/profile/coffee.png";

export default function Intro() {
  return (
    <div className="intro containerbox" id="about">
      <div className="imageContainer">
        <img className="image" src={profileImg} alt="Profile Image" />
      </div>

      <div className="blurbContainer">
        <h1 className="sectionTitle">About</h1>

        <div className="lineContainer">
          <div className="hLine "></div>
        </div>

        <p className="blurb">
          I've always been fascinated by the blend of art and technology used to
          create digital media. I passionately believe that this combination can
          and should be used to create profound emotional experiences.
          <br />
          <br />
          Hobbyist indie game devloper under the moniker "Cloudlight Games".
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
