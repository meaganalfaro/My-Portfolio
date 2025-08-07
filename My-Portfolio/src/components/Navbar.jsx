import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#experience" className="nav-link">EXPERIENCE</a>
        <a href="#contact" className="nav-link">CONTACT ME</a>
      </div>
    </nav>
  );
};

export default Navbar; 