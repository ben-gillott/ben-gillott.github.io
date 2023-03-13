import "./Loader.scss";

// import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Loader(props) {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div
      ref={myRef}
      className={myElementIsVisible ? "loader loading-in" : "loader"}
    >
      {props.elem}
    </div>
  );
}
