import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="./src/assets/psit.png" alt="logo" />
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#services" className="navbar-link">Services</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <a href="#team" className="navbar-link">Team</a>
        </div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-toggle-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
