import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const goTo=useNavigate();
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi velit ad temporibus dignissimos, delectus nemo modi! Expedita pariatur itaque, dolore quas aspernatur laudantium magnam, maxime corrupti accusamus consequuntur quos debitis.</p>
      <button onClick={()=>{goTo('/home')}}>Go to home</button>
    </div>
  )
}

export default About
