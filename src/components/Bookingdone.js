import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Bookingdone() {
  
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', marginBottom:'170px' }}>
      <div
        className="bdone"
        style={{ width: '50%', marginLeft: '300px', paddingLeft: '10px' }}
      >
        <span style={{fontSize:'100px'}}>&#9989;</span>
        <p style={{ color: 'black' }}>Thank you for booking</p>
        <div style={{fontSize:'medium'}}>
          Go to <Link to="/">Home</Link> page
          
        </div>
      </div>
    </div>
  );
}

export default Bookingdone;
