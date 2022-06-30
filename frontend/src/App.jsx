import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

import "./App.css";
import Projects from "./pages/Projects";
import AddProjects from "./pages/AddProjects";
import Profil from "./pages/Profil";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/add-project" element={<AddProjects />} />
          <Route path="/customers" element={<Home />} />
          <Route path="/press-review" element={<Home />} />
          <Route path="/collaborators" element={<Home />} />
          <Route path="/ideas" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
