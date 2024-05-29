import './Login.css';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPayload = {
      user: {
        email: formData.email,
        password: formData.password
      }
    };

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPayload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
      } else {
        const data = await response.json();
        const token = data.token; // Adjust this based on your API response
        sessionStorage.setItem('jwt', token);
        console.log('Login successful!');
        // Handle successful login, e.g., redirect to another page
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Navbar className="active text-white" />
      <div className="background-wallpaper-Login d-flex">
        <div className="position-relative container-fluid container">
          <div className="signup-form position-absolute top-50 start-50 translate-middle">
            <form className="mt-5" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="form-group">
                {/* email */}
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
                {/* password */}
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
              </div>
              {/* footer of form */}
              <div className="form-group d-flex justify-content-between">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="#">Forgot password?</Link>
              </div>
              <div className="form-group col-12">
                <button type="submit" className="btn btn-info btn-lg col-12">
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-center text-white mb-5">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
