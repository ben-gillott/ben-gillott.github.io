import Art from "./components/art/Art";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import "./app.scss";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Intro />
      <Projects />
      <Art />
      <Contact />

      {/* <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          {/* <Route path="/portfolio" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
