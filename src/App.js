import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, TikToks, Instructions, AboutUs, Home } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tiktoks" element={<TikToks />} />
        {/* <Route path="/instructions" element={<Instructions />} /> */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
