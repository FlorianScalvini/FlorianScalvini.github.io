import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import PortfolioPage from "./PortfolioPage";
import TeachingPage from "./TeachingPage";

export default function App() {
    return (
        <HashRouter>
            {/* simple nav for testing */}


            <Routes>
                {/* Use an index route for the default page */}
                <Route index element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/teaching" element={<TeachingPage />} />
                {/* optional: catch-all */}
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}