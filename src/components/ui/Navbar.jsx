import React, { useState } from 'react';
import './Navbar.css';
import logo from '../icons/logo.svg';

const Navbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <>
      <nav className="navigation justify-content-center">
        <a href="#">
          <img className="logo" src={logo} alt="logo of 2DRIJA" />
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
        <div>
          <div className={isNavbarExpanded ? 'navigation-menu expanded' : 'navigation-menu '}>
            <ul className="">
              <li className="nav-item">
                <a href="#" className=" nav-link text-white fs-6">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className=" nav-link fropdown-toggle text-white fs-6"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link  text-white fs-6">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className=" nav-link text-white fs-6">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
