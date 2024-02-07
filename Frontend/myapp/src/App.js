import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Attendance from './pages/Attendance';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/attendance' element={<Attendance />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
