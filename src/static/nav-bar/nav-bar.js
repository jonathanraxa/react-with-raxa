import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">Component Library</Link>
      </div>
    </header>
  );
};

export default NavBar;
