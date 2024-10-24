import "./Resume.scss";
// import Loader from "../loader/Loader";

import resumeImg from "../../assets/Ben_Gillott_Resume_png.png";

export default function Projects() {
  return (
    <div className="resume" id="resume">
      {/* <Loader elem={<h1 className="sectionTitle">Resume</h1>} /> */}

      <div className="mainList">
        {/* <div className="lineContainer">
          <Loader className="hLine" />
        </div> */}
        <img className="resumeImg" src={resumeImg} alt="Resume" />
      </div>
    </div>
  );
}

// title, highlight, img, src, link, bullets
