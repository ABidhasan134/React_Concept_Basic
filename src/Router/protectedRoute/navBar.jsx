import React from 'react'
import { NavLink } from 'react-router-dom'
import '../navbarApp/style.css';

function NavBar() {
  return (
    <nav>
        <NavLink className="link" to='/'>Home</NavLink>
        <NavLink className="link" to='/about'>About</NavLink>
        <NavLink className="link" to='/addblog'>Add Blog</NavLink>
    </nav>
  )
}

export default NavBar
