import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";

import "./app.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <div className="body">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
