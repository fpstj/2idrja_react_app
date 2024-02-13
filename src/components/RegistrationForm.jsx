import './RegistrationForm.css';
import Navbar from './ui/Navbar';

const RegistrationForm = () => {};

return (
  <>
    <Navbar className="active text-white" />
    <form className="form-control">
      <div className="container-fluid container">
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
                    value={firstName}
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
                    value={lastName}
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
                value={country}
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
                value={mobileNumber}
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
                value={email}
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
                value={email}
                placeholder="Password"
                required="required"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                value={{ confirmPassword }}
                name="confirmPassword"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <label className="form-check-label">
                <input type="checkbox" required="required" /> I accept the{' '}
                <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-secondary btn-lg btn-block"
                onClick={submitForm}>
                Register Now
              </button>
            </div>
          </form>
          <div className="text-center">
            Already have an account? <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </form>
  </>
);

export default RegistrationForm;
