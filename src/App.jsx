import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
// import Loader from "./components/loader/Loader";
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
          <Route path="/" element={<Intro />} />
          <Route path="/portfolio" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
