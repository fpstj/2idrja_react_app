import './RegistrationForm.css';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsOfUse: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsOfUse: e.target.checked
    });
  };

  const handleCountryChange = (val) => {
    setFormData({
      ...formData,
      country: val
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log('Passwords do not match.');
      return;
    }

    const userPayload = {
      user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        country: formData.country,
        mobile_number: formData.mobileNumber,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        terms_of_use: formData.termsOfUse
      }
    };

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPayload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
      } else {
        console.log('Registration successful!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Navbar className="active text-white" />
      <div className="background-wallpaper-RF">
        <div className="container-fluid container">
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <h2>Register</h2>
              <p className="hint-text">Create your account. </p>
              <div className="form-group">
                <div className="row">
                  <div className="col-12 col-md-6 pb-3 pb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      required="required"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      required="required"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <CountryDropdown
                  className="form-control"
                  value={formData.country}
                  onChange={handleCountryChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  required
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required="required"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required="required"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required="required"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    required="required"
                    checked={formData.termsOfUse}
                    onChange={handleCheckboxChange}
                  />{' '}
                  I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
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
