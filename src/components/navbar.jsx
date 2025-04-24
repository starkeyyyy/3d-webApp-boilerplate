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

    <div className="sign-in">
      <a href="#" className="btn button-51">Sign In</a>
    </div>
  </nav>
      
    </div>
  )
}

export default Navbar
