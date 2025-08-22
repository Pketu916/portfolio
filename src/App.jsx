import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import Home from "./pages/home";
import AllProjects from "./pages/allProjects";
import About from "./pages/about";
import ServicesPage from "./pages/servicesPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
           <Analytics />
    </Router>
  );
}

export default App;
