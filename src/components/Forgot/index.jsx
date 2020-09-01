import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
class Forgot extends Component {
  render() {
    return (
      <div>
        <Breadcrumb page="Forgot Password" />
        <section className="forgot-password">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="fp-content">
                  <p className="bold">
                    Please provide your email address. Click in the provided
                    link to retrieve you account.
                  </p>
                  <form>
                    <div className="row">
                      <div className="form-group col-xs-12">
                        <label>Enter Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="Name"
                          placeholder="Enter username or email id"
                        />
                      </div>
                      <div className="col-xs-12">
                        <button className="btn btn-orange">
                          Reset Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Forgot;
