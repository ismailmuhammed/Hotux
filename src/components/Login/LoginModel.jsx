import React, { Component } from "react";
import img1 from "../../resources/images/logo-black.png";
import { Link } from "react-router-dom"
class Login extends Component {
  render() {
    return (
      <div className="model" id="login">
        <div
          onClick={() => this.props.history.goBack()}
          style={{
            width: `100%`,
            height: `100%`,
            position: `absolute`,
            top: 0,
            left: 0
          }}
          to="/"
        ></div>
        <div className="modal-dialog">
          <div className="login-content">
            <div className="login-image">
              <img src={img1} alt="Logo" />
            </div>
            <h3>Hello!Sign into your account</h3>
            <form action="/" onSubmit={e=>e.preventDefault()}>
              <div className="form-group">
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="form-group form-checkbox">
                <input type="checkbox" /> Remember Me
                <Link to="/forgot">Forgot password?</Link>
              </div>
              <div className="form-btn">
                <button className="btn btn-orange">LOGIN</button>
                <p>
                  Need an Account?<Link to="/register"> Create your Hotux account</Link>
                </p>
              </div>
            </form>
            <ul className="social-links">
              <li>
                <Link to="/">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
