import Home from "./Home.jsx";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {appRoutes} from './utils/constants'
import About from "./About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path />
      </Routes>
    </Router>
  );
}

export default App;
