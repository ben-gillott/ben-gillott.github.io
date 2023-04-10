import "../icon/Icon.scss";
import "./PostOverlay.scss";
import momo from "../../assets/profile/momo.png";
import Overlay from "react-overlay-component";
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
      <h5>More Info</h5>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <div className="postContainer">
          <h1> Post Demo Title </h1>
          <p> Lorem ipsum dolor yada yada. </p>
          <img src={momo} alt="testimg" />
        </div>
      </Overlay>
    </div>
  );
}
