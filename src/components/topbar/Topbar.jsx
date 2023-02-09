import "./Topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const topBarClass = "topbar" + (menuOpen ? " active" : "");

  return (
    <div className={topBarClass}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="name">
            Ben Gillott
          </a>
        </div>
        <div className="right">
          <div className="sectionLink">
            <a href="#about">About</a>
          </div>

          <div className="sectionLink">
            <a href="#portfolio">Portfolio</a>
          </div>

          {/* <div className="sectionLink">
            <a href="/contact">Contact</a>
          </div> */}
        </div>

        {/* <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
