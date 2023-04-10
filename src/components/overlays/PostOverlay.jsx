import "../icon/Icon.scss";
import "./PostOverlay.scss";
// import resumeIcon from "../../assets/icons/resume.png";
import momo from "../../assets/profile/momo.png";
import Overlay from "react-overlay-component";
// import resume from "../../assets/profile/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitW";
import React, { useState } from "react";

export default function PostOverlay() {
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {
    // animate: false,
    // top: `5em`,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: true,
    contentClass: "overlay",
  };

  return (
    <div
      className="icon"
      onClick={() => {
        setOverlay(true);
      }}
    >
      {/* <img src={resumeIcon} alt="Resume" /> */}
      <h5>More Info</h5>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div className="postContainer">
          {/* <iframe title="resume" className="resume" src={resume} /> */}
          <h1> Post Demo Title </h1>
          <p> Lorem ipsum dolor yada yada. </p>
          <img src={momo} />
        </div>
      </Overlay>
    </div>
  );
}
