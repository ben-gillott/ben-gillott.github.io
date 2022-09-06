import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const menuClass = "menu" + (menuOpen ? " active" : "");

  return (
    <div className={menuClass}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro"> Home </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio"> Portfolio </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
    </div>
  );
}
