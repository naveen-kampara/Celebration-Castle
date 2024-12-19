import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    
    return (
      <>
      <p >Celebration Castle</p>
      <header className="header" >
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Slotbooking" className="nav-link">Slot Booking</Link>
          <Link to="/About" className='nav-link'>About</Link>
        </nav>
      </header>
      </>
    );
  };

  export default Header;
