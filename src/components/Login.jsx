import './Login.css';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';

const Login = () => {
  return (
    <>
      <Navbar className="active text-white" />
      <div className="background-wallpaper h-100">
        <div className="container-fluid container ">
          <div className="signup-form">
            <form>
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
              <div className="form-group">
                <label className="form-check-label ">
                  <input type="checkbox" required="required" /> Remember me
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-info btn-lg btn-block">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
