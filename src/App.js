import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AppFooter } from "./components";
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
        </Routes>
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;
