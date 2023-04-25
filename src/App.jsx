import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
// import Art from "./components/art/Art";

import "./app.scss";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
