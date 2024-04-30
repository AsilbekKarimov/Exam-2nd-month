import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/services" element={<Services />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <RoutesComponent />
    </Router>
  </React.StrictMode>
);
