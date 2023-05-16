import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
// import Art from "./components/art/Art";

import "./app.scss";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Link onClick={window.scrollTo(0, 0)}>Scroll Up</Link>
    </div>
  );
}

export default App;
