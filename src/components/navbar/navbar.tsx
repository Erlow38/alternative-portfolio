import './navbar.css';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#main"><img src="img/e-transparent.png" className="navbar-brand"></img></a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
    </nav>
  )
}

export default Navbar;