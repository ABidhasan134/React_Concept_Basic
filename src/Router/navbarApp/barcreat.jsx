import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function BarCreat() {
  return (
    <nav>
      <NavLink className='link' to='/home'>Home</NavLink>
      <NavLink className='link' to='/books'>Books</NavLink>
      <NavLink className='link' to='/about'>About</NavLink>
    </nav>
  )
}

export default BarCreat
