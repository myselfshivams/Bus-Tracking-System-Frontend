import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="main-nav-content">
    <nav className="navbar">
      <div className="navbar-container">
        <img src="/assets/psit.png" alt="logo" />
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-link">Home</a>
          <a href="/about" className="navbar-link">About</a>
          <a href="/services" className="navbar-link">Services</a>
          <a href="/contact" className="navbar-link">Contact</a>
          <a href="/teams" className="navbar-link">Team</a>
        </div>
        <div id='btn-content'>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
