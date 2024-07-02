// src/NavBar.js
import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/home" className="navbar-link">Love🫶</a>
        </li>
        <li className="navbar-item">
          <a href="/about" className="navbar-link">Shayari🫶</a>
        </li>
      </ul>
      <a href="/home" className="navbar-logo">Shrtit❤️</a>
    </nav>
  );
};

export default NavBar;
