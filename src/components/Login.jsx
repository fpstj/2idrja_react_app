import './Login.css';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Navbar className="active text-white" />
      <div className="background-wallpaper-Login d-flex">
        <div className="position-relative container-fluid container">
          <div className="signup-form position-absolute top-50 start-50 translate-middle">
            <form className="mt-5">
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
              </div>
              {/* footer of form */}
              <div className="form-group d-flex justify-content-between">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="#">Forgot password?</Link>
              </div>
              <div className="form-group  col-12">
                <button type="submit" className="btn btn-info btn-lg col-12">
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-center text-white mb-5">
              Dont have an account?{' '}
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
