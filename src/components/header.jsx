// Header.js
import React from 'react';
import './contect'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Travel Explore</h1>
      <nav className="header__nav">
        <ul>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
