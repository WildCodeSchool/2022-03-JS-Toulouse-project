import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Project from "./pages/Project";

import "./App.css";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/user" element={<User />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
