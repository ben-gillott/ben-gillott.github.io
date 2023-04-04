import "./Icon.scss";
import "./Overlay.scss";
import resumeIcon from "../../assets/icons/git.svg";
import Overlay from "react-overlay-component";
import resume from "../../assets/profile/resume.pdf";
import React, { useState } from "react";

export default function ResumeIcon() {
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
      <img src={resumeIcon} alt="Resume" />
      <h5>Resume</h5>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div className="resumeContainer">
          {/* <h1>Resume</h1> */}
          <iframe className="resume" src={resume} />
        </div>
      </Overlay>
    </div>
  );
}
