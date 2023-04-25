import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const menuClass = "menu" + (menuOpen ? " active" : "");

  return (
    <div className={menuClass}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/"> Home </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="/portfolio"> Portfolio </a>
        </li>
      </ul>
    </div>
  );
}
