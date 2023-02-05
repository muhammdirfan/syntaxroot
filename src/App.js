import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AppFooter } from "./components";
import ContactUs from "./screens/ContactUs";
import Home from "./screens/Home";

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
        </Routes>
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;
