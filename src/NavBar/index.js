import React from 'react';
import './NavBar.css';
import icon from '../images/Fill_1.svg';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={icon} alt="logo" className="nav-logo" />
      </a>
      <a className="sign-in" href="/">Sign in</a>
    </nav>
  );
}

export default NavBar;
