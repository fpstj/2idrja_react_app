import React from 'react';
import logo from '../icons/2drijaLogo.png';
import { Link } from 'react-router-dom';
import './Footer.css';
import Send from '../icons/send.svg';
import InstagramIcon from '../icons/Instagram icon.svg';
import TwitterIcon from '../icons/Twitter icon.svg';
import YouTubeIcon from '../icons/YouTube icon.svg';

// Functional component
const Footer = () => {
  return (
    <div className="bg-primary text-white p-5 d-flex flex-row justify-content-around">
      {/* 1st row */}
      <div className=" d-flex flex-column col-4 justify-content-center align-items-center p-3">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo of 2DRIJA" style={{ width: '70px' }} />
        </Link>
        <p className="text-center">Copyright &copy; 2019 2IDRJA.</p>
        <p className="text-center">All rights reserved</p>
        <div className="social-media-icons">
          <img className="p-3" src={InstagramIcon} alt="instagram icon" />
          <img className="p-3" src={TwitterIcon} alt="Twitter icon" />
          <img className="p-3" src={YouTubeIcon} alt="youtube icon" />
        </div>
      </div>
      {/* 2nd row */}
      <div className="d-flex flex-column col-4 justify-content-center align-items-between">
        <div className="d-flex flex-row ">
          <div className="col-4 justify-content-center align-items-center p-3">
            <h5 className="pb-3 text-start">Projects</h5>
            <p className="text-start">Project Portfolio</p>
            <p className="text-start">Project Tourist website</p>
            <p className="text-start">Project CSS styling</p>
            <p className="text-start">Project Algorithms</p>
          </div>

          <div className="col-4 justify-content-center align-items-center p-3">
            <h5 className="pb-3 text-start">Courses</h5>
            <p className="text-start">Intro to frontend</p>
            <p className="text-start">HTML+CSS</p>
            <p className="text-start">JavaScript</p>
            <p className="text-start">ReactJS</p>
          </div>
        </div>
      </div>
      {/* 3rd row */}
      <div className="d-flex flex-column col-4 justify-content-center align-items-between p-3">
        <div className="col-md-4 col-sm-12 justify-content-center align-items-center p-3">
          <h6 className="pb-4 text-start">Stay up to date</h6>
          <input
            type="email"
            className="form-control contact-us-form email-contact"
            placeholder="Your email address ..."
          />

          <button className="contact-us-btn mt-3 ps-1 pe-1 ">
            Contact us
            <img src={Send} alt="send" />
          </button>
        </div>
      </div>
      {/* copy rights */}
    </div>
  );
};

export default Footer;
