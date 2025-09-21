import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import PortfolioPage from "./PortfolioPage";
import TeachingPage from "./TeachingPage";

function App() {
  return (

      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/teaching" element={<TeachingPage/>} />
          </Routes>
      </Router>
  );
}

export default App;
