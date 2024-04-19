import "../icon/Icon.scss";
import "./ResumeOverlay.scss";
import resumeIcon from "../../assets/icons/resume.png";
import Overlay from "react-overlay-component";

import resumeSource from "../../assets/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitW";

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
          <embed
            src={resumeSource}
            // class="embedSet"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </Overlay>
    </div>
  );
}
