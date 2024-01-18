import React, { useState } from 'react';
import './Navbar.css';
import logo from './icons/logo.svg';
const Navbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <>
      <nav className="navigation">
        <a href="/" className="brand-name ">
          <img src={logo} alt="logo of 2DRIJA" />
        </a>
        <button
          type="button"
          aria-label="hamburger"
          className="hamburger"
          onClick={() => {
            setIsNavbarExpanded(!isNavbarExpanded);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavbarExpanded ? 'navigation-menu expanded' : 'navigation-menu '}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
