import "./Popout.scss";
import React, { useState } from "react";
import Overlay from "react-overlay-component";

export default function Popout() {
  // const [expand, setExpand] = useState(false);

  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {};

  return (
    <section>
      <h3>default overlay</h3>
      <p>Renders an overlay/modal with default configuration</p>

      <button
        className="primary"
        onClick={() => {
          setOverlay(true);
        }}
      >
        open modal
      </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <h3>Sample header</h3>
        <p>text content</p>
      </Overlay>

    </section>
  );
}
