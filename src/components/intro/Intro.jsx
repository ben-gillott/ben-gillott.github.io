import "./Intro.scss";
import Icon from "../icon/Icon";

import profileImg from "../../assets/profile/coffee.png";
import gitIcon from "../../assets/icons/git_icon.svg";
import itchIcon from "../../assets/icons/itch.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import resumeIcon from "../../assets/icons/resume.png";

export default function Intro() {
  return (
    <div className="intro" id="about">
      <div className="imageContainer">
        <img className="image" src={profileImg} alt="Profile Image" />
      </div>

      <div className="blurbContainer">
        <h1 className="sectionTitle">About</h1>

        <div className="lineContainer">
          <div className="hLine "></div>
        </div>

        <p className="blurb">
          I am fascinated by the blend of art and technology used to create
          digital media. I passionately believe that this combination can and
          should be used to create profound emotional experiences.
          <br />
          <br />
          I make independant games under the moniker "Cloudlight Games".
          <br />
          <br />
          Graduated from Cornell in 2021 with a B.A. in Computer Science.
          Currently working at the geospatial startup Whiteout Solutions.
          <br />
          <br />
        </p>

        <div className="iconContainer">
          <Icon
            name="Cloudlight Games"
            link="https://cloudlight-games.itch.io/"
            img={itchIcon}
          />

          <Icon
            name="LinkedIn"
            link="https://www.linkedin.com/in/ben-gillott/"
            img={linkedinIcon}
          />
          <Icon
            name="Github"
            link="https://github.com/ben-gillott"
            img={gitIcon}
          />
        </div>
      </div>
    </div>
  );
}
