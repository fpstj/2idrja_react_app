import './RegistrationForm.css';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [country, setCountry] = useState('');

  return (
    <>
      <Navbar className="active text-white" />
      <div className="background-wallpaper-RF">
        <div className="container-fluid container ">
          <div className="signup-form ">
            <form>
              <h2>Register</h2>
              <p className="hint-text">Create your account. </p>
              <div className="form-group">
                {/* 1 */}
                <div className="row">
                  {/* name */}
                  <div className="col-12 col-md-6 pb-3 pb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      required="required"
                    />
                  </div>
                  {/* lastname */}
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              {/* country */}
              <div className="form-group">
                <CountryDropdown
                  className="form-control"
                  value={country}
                  onChange={(val) => setCountry(val)}
                />
              </div>
              {/* mobile */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              {/* email */}
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>
              {/* password */}
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label className="form-check-label ">
                  <input type="checkbox" required="required" /> I accept the{' '}
                  <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
                </label>
              </div>
              <div className="form-group btn-registry col-12">
                <button type="submit" className="btn btn-primary btn-lg col-12">
                  Register Now
                </button>
              </div>
            </form>
            <div className="text-center text-white pb-5">
              Already have an account? &nbsp; &nbsp;
              <Link to="/login" className="text-blue">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
