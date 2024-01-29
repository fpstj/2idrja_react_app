import React from 'react';
import logo from '../icons/logo.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

// Functional component
const Footer = () => {
  return (
    <div className="bg-primary text-white p-5 d-flex flex-row justify-content-around">
      {/* 1st row */}
      <div className=" d-flex flex-column col-2 justify-content-center align-items-center">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo of 2DRIJA" />
        </Link>
        <p>Copyright © 2023 2IDRJA.</p>
        <p>All rights reserved</p>
      </div>
      {/* 2nd row */}
      <div className="d-flex flex-column col-10 justify-content-center align-items-center ">
        <div className="d-flex flex-row bg-red">red</div>
        <div className="d-flex flex-row bg-green">green</div>
        <div className="d-flex flex-row bg-red">red</div>
        <div className="d-flex flex-row bg-green">green</div>
      </div>
    </div>
  );
};

export default Footer;
