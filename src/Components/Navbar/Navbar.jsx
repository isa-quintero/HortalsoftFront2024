import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Op1
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Op2
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Op3
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Op4
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
