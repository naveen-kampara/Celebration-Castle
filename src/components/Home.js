import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import './Home.css';
import TypingText from './TypingText';

import bgimage from '../assets/bgimage.jpg';


function Home() {
  
  return (
    <div className='body' >
       <TypingText inputText='Welcome to our Celebration Castle'/>
      <div className='h-container'>
      <p className='h-text'>Imagine a place where celebrations come to life with elegance and charm. We specialize in hosting memorable events like birthday parties, candlelight dinners, and intimate gatherings, all tailored to perfection. With the added luxury of our private theater, we create experiences that blend sophistication with unforgettable entertainment.</p>
      <div className='h-card'><p2>Let's cherish the moments</p2><br/>
      <Link to="/slotbooking">
  <button className="btn">Book a Slot Now</button>
</Link>


</div>
      
      </div>
      
    </div>
  );
}

export default Home;
