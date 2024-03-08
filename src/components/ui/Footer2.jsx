import React from 'react';
import Send from '../icons/send.svg';

// Functional component
const Footer2 = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="col-md-4 col-sm-12"></div>
        <div className="col-md-8 col-sm-12">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h4>Projects</h4>
            </div>
            <div className="col-md-4 col-sm-12">
              <h4>Courses</h4>
            </div>
            <div className="col-md-4 col-sm-12">
              <h4>Stay up to date</h4>
              <input className="contact" type="email" placeholder="Your email address" />
              <img src={Send} alt="" />
              <button type="button" className="btn">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
