import './slotbooking.css';
import image1 from '../assets/img1.jpg';
import image2 from '../assets/paperimg.jpeg';
import dec1 from '../assets/dec1.jpg';
import dec2 from '../assets/dec2.jpg';
import dec3 from '../assets/dec3.jpg';
import { useState } from 'react';
import Bookingdone from './Bookingdone';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Slotbooking = () => {
  let [userName,setUserName]=useState("");
  let Change=(v)=>{
    setUserName(v.target.value.trim() ? ` ${v.target.value} 😎` : '');
  }
    return (
      <div
        className="slotbooking-body"
       
      >
        <h2>Welcome<it>{userName}</it></h2>
      <div class="gform-container">
    <form class="glass-form">
      
      <div class="form-group">
        <label for="name" >Name</label>
        <input type="text" id="name" placeholder="Enter your name"  onChange={Change}required/>
      </div>
      <div class="form-group">
        <label for="event">Event</label>
        <select name="Event" id="">
        <option value="" disabled selected>Select an Event</option>
            <option value="Birthday">Birthday</option>
            <option value="candle light dinner">candle light dinner</option>
            <option value="Private Theater">Private Theater</option>
            <option value="Get Together">Get Together</option>
        </select>
        </div>
        <div class="form-group">
        <label for="plan">Plan</label>
        <select name="Event" id="">
        <option value="" disabled selected>Select an Plan</option>
            <option value="Premimum">Premimum</option>
            <option value="Medium">Medium</option>
            <option value="Basic">Basic</option>
        </select>
        </div>
        <div class="form-group">
        <label for="Timeslot">Time Slot</label>
        <select name="Event" id="">
        <option value="" disabled selected>Select a Time Slot</option>
            <option >3:00PM</option>
            <option >5:00PM</option>
            <option >7:00PM</option>
        </select>
        </div>
      <div class="form-group">
        <label for="Mobile">Mobile Number</label>
        <input type="number" id="phnumber" placeholder="Enter your Mobile Number" required/>
      </div>
      <Link to='/Bookingdone'><button type="submit">Book Now</button></Link>
      
    </form>
  </div>
      </div>
    );
  };

  export default Slotbooking;
