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
            <a href="/" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li onClick={() => setMenuOpen(false)}>
            <a href="/portfolio">Portfolio</a>
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
