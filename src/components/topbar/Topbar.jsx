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
            <a href="/">About</a>
          </div>

          <div className="sectionLink">
            <a href="/portfolio">Portfolio</a>
          </div>

          {/* <div className="sectionLink">
            <a href="/blog">Blog</a>
          </div> */}

          {/* <div className="sectionLink">
            <a href="/art">Art</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
