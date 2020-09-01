import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
import logo from "../../resources/images/logo-black.png";
import { Link } from "react-router-dom";
class Signup extends Component {
  render() {
    return (
      <div>
        <Breadcrumb page="Sign Up" />
        <section className="login">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="login-image text-center">
                  <img src={logo} alt="LOGO" />
                  <p className="mar-top-10">Conscientious & Professional</p>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ position: `relative`, height: `60vh` }}
            >
              <div
                className="col-md-6 col-sm-6 col-xs-12"
                style={{
                  position: `absolute`,
                  top: `50%`,
                  left: `50%`,
                  transform: `translate(-50%,-50%)`
                }}
              >
                <div className="login-content pad-0">
                  <h3>Create a Hotux Account</h3>
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="Confirm password" />
                    </div>
                    <div className="form-btn">
                      <button className="btn btn-orange">SIGN UP</button>
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
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
