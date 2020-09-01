import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
import SideCard from "../utils/SideCard";
import img from "../../resources/images/room-b3.jpg";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
class Contact extends Component {
  render() {
    return (
      <div>
        <Breadcrumb page="Contact" />
        <section class="contact">
          <div class="container">
            <div class="contact-info">
              <div class="row">
                <div class="col-md-4">
                  <div class="info-item">
                    <div class="info-icon">
                      <i class="fa fa-map-marker"></i>
                    </div>
                    <div class="info-content">
                      <p>445 Mount Eden Road, Mt Edenward land</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="info-item info-item-or">
                    <div class="info-icon">
                      <i class="fa fa-phone"></i>
                    </div>
                    <div class="info-content">
                      <p>0344-8781207</p>
                      <p>0336-8781207</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="info-item">
                    <div class="info-icon">
                      <i class="fa fa-envelope"></i>
                    </div>
                    <div class="info-content">
                      <p>adeebahmad0010@gmail.com</p>
                      <p>adeebking74@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-support">
              <div class="row">
                <div class="col-md-4">
                  <div class="support-item">
                    <h4>Costumer Support</h4>
                    <p class="mar-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec hendrerit facilisis nisi.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="support-item">
                    <h4>Technical Support</h4>
                    <p class="mar-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec hendrerit facilisis nisi.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="support-item">
                    <h4>Booking Queries</h4>
                    <p class="mar-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec hendrerit facilisis nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-map">
              <div class="row">
                <div class="col-md-6">
                  <SideCard title="Royal Suite" img={img}/>
                </div>
                <div class="col-md-6">
                  <div id="contact-form" class="contact-form">
                    <h3>Keep in Touch</h3>
                    <div id="contactform-error-msg"></div>

                    <form
                      method="post"
                      action="#"
                      name="contactform"
                      id="contactform"
                    >
                      <div class="form-group">
                        <input
                          type="text"
                          name="first_name"
                          class="form-control"
                          id="fname"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="last_name"
                          class="form-control"
                          id="lname"
                          placeholder="Last Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="phone"
                          class="form-control"
                          id="phnumber"
                          placeholder="Phone"
                        />
                      </div>
                      <div class="textarea">
                        <textarea
                          name="comments"
                          placeholder="Enter a message"
                        ></textarea>
                      </div>
                      <div class="comment-btn text-right">
                        <input
                          type="submit"
                          class="btn btn-orange"
                          id="submit"
                          value="Send Message"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LoginModel history={this.props.history} />
        <SignupModel history={this.props.history} />
      </div>
    );
  }
}

export default Contact;
