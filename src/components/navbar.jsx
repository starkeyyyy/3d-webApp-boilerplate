import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
    <div className="logo">MyLogo</div>

    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

  </nav>
      
    </div>
  )
}

export default Navbar
