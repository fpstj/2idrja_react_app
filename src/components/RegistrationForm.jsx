import './RegistrationForm.css';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

const RegistrationForm = () => {
  return (
    <>
      <Navbar className="active text-white" />
      <div className="background-wallpaper h-100">
        <div className="container-fluid container ">
          <div className="signup-form">
            <form>
              <h2>Register</h2>
              <p className="hint-text">Create your account. </p>
              <div className="form-group">
                {/* 1 */}
                <div className="row">
                  {/* name */}
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      required="required"
                    />
                  </div>
                  {/* lastname */}
                  <div className="col">
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  name="country"
                  required
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
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block">
                  Register Now
                </button>
              </div>
            </form>
            <div className="text-center text-white">
              Already have an account?{' '}
              <a href="#" className="text-blue">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationForm;
