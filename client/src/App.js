import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
// import Offer from './components/Offer/Offer';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Registration from './components/Registration/Register';
import Login from './components/Logim/Login';
import Background from "./components/background/background"; // Import Background
import WhatsComing from './components/WhatsComing/WhatsComing';
import FinalCTA from './FinalCTA/FinalCTA';
import Teams from './components/Team/teams';

function App() {
  return (
    <div className="App">
      <Background /> {/* Background animation applied globally */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Teams />
      <WhatsComing />
      <FinalCTA />
    </>
  );
};

export default App;
