import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";
import Projects from "./pages/Projects";
import AddProjects from "./pages/AddProjects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/add-project" element={<AddProjects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
