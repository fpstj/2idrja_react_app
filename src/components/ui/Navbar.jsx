/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../icons/2drijaLogo.png';

const Navbar = (props) => {
  // const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <>
      <nav className={'navbar navbar-expand-lg' + (props.className ? ' ' + props.className : '')}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="logo of 2DRIJA" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Projects
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/projectscoding">
                      Coding projects
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/projectsresearch">
                      Research projects
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Courses
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/coursesfrontend">
                      Front-end
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/coursesreact">
                      React
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/coursesuiux">
                      UI/UX
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
