import React from 'react'
import './About.css'
import dec1 from '../assets/dec1.jpg';
import dec2 from '../assets/dec2.jpg';
import dec3 from '../assets/dec3.jpg';
export default function About() {
  return (
    <div className='About-container'>
<article class="card1">
  <div class="card-img">
    <div class="card-imgs pv delete">
    </div>
  </div>
  <div class="project-info">
    <div class="flex">
      <div class="project-title">About</div>
      <span class="tag"></span>
    </div>
    <span class="lighter"
      >Imagine a place where celebrations come to life with elegance and charm. We specialize in hosting memorable events like birthday parties, candlelight dinners, and intimate gatherings, all tailored to perfection. With the added luxury of our private theater, we create experiences that blend sophistication with unforgettable entertainment.</span>
  </div>
</article>
    </div>
  )
}
