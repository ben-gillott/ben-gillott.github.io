import { Link } from "react-router-dom";
import "./Topbar.scss";
import { useRef, useEffect } from "react";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const topBarClass = "topbar" + (menuOpen ? " active" : "");

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setMenuOpen);

  return (
    <div ref={wrapperRef} className={topBarClass}>
      <div className="left">
        <a href="/" className="name">
          Ben Gillott
        </a>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/resume">Resume</Link>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <Link to="/portfolio">Portfolio</Link>
          </li>

          {/* <li onClick={() => setMenuOpen(false)}>
            <Link to="/posts">Posts</Link>
          </li> */}
        </ul>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
}

function useOutsideAlerter(ref, setMenuOpen) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setMenuOpen]);
}
