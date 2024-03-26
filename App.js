import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Skills from "./pages/skills";
import WorkExperience from "./pages/workexp";
import Education from "./pages/education";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1 className="name">Dalia Abou Chakra</h1>
        <h1 className="tite">COMPUTER & COMMUNICATION ENGINEER</h1>
      </div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work-experience" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
}

export default App;
