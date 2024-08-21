// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import About from './components/About/About';
import Profile from './components/Profile/Profile';
import SmartUserProfData from './components/SmartUserProfData/SmartUserProfData.js';
import SmartUserData from './components/SmartUserData/SmartUserData.js';
import DadosSmart from './components/DadosSmart/DadosSmart.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/Sobre" element={<About />} />
          <Route path="/Perfil" element={<Profile />} />
          <Route path="/Relatorio" element={<SmartUserData />} />
          <Route path="/DadosSmart" element={<DadosSmart />} />
          <Route
            path="/RelatorioProfissional"
            element={<SmartUserProfData />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
