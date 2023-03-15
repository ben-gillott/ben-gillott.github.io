import "./Loader.scss";

// import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Loader(props) {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    // r"10px 20px 30px 40px";
  });

  return (
    <div
      ref={myRef}
      className={
        props.className +
        " loader" +
        (myElementIsVisible ? " in-view" : " out-of-view")
      }
    >
      {props.elem}
    </div>
  );
}
