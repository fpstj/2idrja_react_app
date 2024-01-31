import React from 'react';
import logo from '../icons/2drijaLogo.png';
import { Link } from 'react-router-dom';
import './Footer.css';

// Functional component
const Footer = () => {
  return (
    <div className="bg-primary text-white p-5 d-flex flex-row justify-content-around">
      {/* 1st row */}
      <div className=" d-flex flex-column col-3 justify-content-center align-items-center p-3">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo of 2DRIJA" />
        </Link>
        <p>Copyright &copy; 2024 2IDRJA.</p>
        <p>All rights reserved</p>
      </div>
      {/* 2nd row */}
      <div className="d-flex flex-column col-9 justify-content-center align-items-center p-3">
        <div className="d-flex flex-row ">
          <div className="col-4 justify-content-center align-items-center p-3">
            <h5 className="pb-3 text-start">Projects</h5>
            <p className="text-start">Project name1</p>
            <p className="text-start">Project name2</p>
            <p className="text-start">Project name3</p>
            <p className="text-start">Project name4</p>
          </div>
          <div className="col-4 justify-content-center align-items-center p-3">
            <h5 className="pb-3 text-start">Courses</h5>
            <p className="text-start">Course name1</p>
            <p className="text-start">Course name2</p>
            <p className="text-start">Course name3</p>
            <p className="text-start">Course name4</p>
          </div>
          <div className="col-4 justify-content-center align-items-center p-3">
            <h6 className="pb-4 text-start">Stay up to date</h6>
            <input type="email" />
            <p className="pt-3 fs-5 text-start">Contact us </p>
          </div>
        </div>
      </div>
      {/* copy rights */}
    </div>
  );
};

export default Footer;
