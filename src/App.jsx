import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
// import Art from "./components/art/Art";
import { useEffect } from "react";

import "./app.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
