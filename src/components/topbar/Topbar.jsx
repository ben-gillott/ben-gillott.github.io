import { Link } from "react-router-dom";
import "./Topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const topBarClass = "topbar" + (menuOpen ? " active" : "");

  return (
    <div className={topBarClass}>
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
            <Link to="/portfolio">Portfolio</Link>
          </li>
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
