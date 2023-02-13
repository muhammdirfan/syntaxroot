import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AppFooter } from "./components";
import AppDev from "./screens/AppDev";
import Career from "./screens/Career";
import ContactUs from "./screens/ContactUs";
import Home from "./screens/Home";
import ITConsultion from "./screens/ITConsultion";
import PlatformSelection from "./screens/PlatformSelection";
import ProductDesign from "./screens/ProductDesign";
import QualityAssurance from "./screens/QualityAssurance";
import WebDev from "./screens/WebDev";

function App() {
  return (
    <Router>
      <div
        className="transition duration-1000 ease-in-out overflow-x-hidden"
        id="head"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/app-development" element={<AppDev />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/product-design" element={<ProductDesign />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/IT-consultion" element={<ITConsultion />} />
          <Route path="/platform-selection" element={<PlatformSelection />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;
