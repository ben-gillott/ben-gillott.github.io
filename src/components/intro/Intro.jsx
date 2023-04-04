import "./Intro.scss";
import Icon from "../icon/Icon";
import ResumeIcon from "../overlays/ResumeOverlayButton";

import profileImg from "../../assets/profile/coffee.png";
import gitIcon from "../../assets/icons/git.svg";
import itchIcon from "../../assets/icons/itch.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import instaIcon from "../../assets/icons/instagram.svg";

export default function Intro() {
  return (
    <div className="intro" id="about">
      <div className="imageContainer">
        <img className="image" src={profileImg} alt="Profile" />
      </div>

      <div className="blurbContainer">
        <h1>About</h1>

        <div className="lineContainer">
          <div className="hLine "></div>
        </div>

        <p className="blurb">
          I am fascinated by the blend of art and technology used to create
          digital media. I passionately believe that this combination can and
          should be used to create profound emotional experiences.
          <br />
          <br />
          I make independent games under the moniker "Cloudlight Games".
          <br />
          <br />
          Graduated from Cornell in 2021 with a B.A. in Computer Science.
          Currently working at the geospatial startup Whiteout Solutions.
          <br />
          <br />
        </p>

        <div className="iconContainer">
          <ResumeIcon />
          <Icon
            name="Games"
            link="https://cloudlight-games.itch.io/"
            img={itchIcon}
          />

          <Icon
            name="Art"
            link="https://www.instagram.com/littleartbean/"
            img={instaIcon}
          />

          <Icon
            name="Linkedin"
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
