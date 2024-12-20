import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Slotbooking from './components/Slotbooking';
import Header from './components/Header';
import About from './components/About';
import Bookingdone from './components/Bookingdone';
import bgimage from './assets/bgimage.jpg';

// Main App component
function App() {
  return (
    <Router>
      <div className="App" >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Slotbooking" element={<Slotbooking />} />
          <Route path="/About" element={<About />}/>
          <Route path='/Bookingdone' element={<Bookingdone />} />
        </Routes>
        <footer >Email 📧 : naveenkampara18@gmail.com</footer>
      </div>
    </Router>
  );
}

export default App;
