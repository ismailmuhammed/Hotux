import React, { Component } from "react";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
import Breadcrumb from "../utils/Breadcrumb";
import Reservation from "../utils/Reservation";
import BookingImage from "../utils/BookingImage";
import YourReservation from "../utils/YourReservation";
class Confirmation extends Component {
  render() {
    const title = this.context.gridNames.find(
      el =>
        el
          .split(" ")
          .join("_")
          .toLowerCase() === this.props.match.params.bookedRoom
    );
    document.title = `Hotux | Payment Confirmation`;
    return (
      <div>
        <Breadcrumb page="Confirmation" />
        <section class="content">
          <div class="container">
            <Reservation
              state0="active"
              state1="active"
              state2="active"
              state3="active"
            />
            <div class="success-notify">
              <div class="success-icon">
                <i class="fa fa-check"></i>
              </div>
              <div class="success-content">
                <h4 class="white mar-bottom-5">Payment Confirmed</h4>
                <p class="white mar-0">
                  Thank you, your payment has been successful and your booking
                  is now confirmed.A confirmation email has been sent to
                  cyclone.themes@gmail.com.
                </p>
              </div>
              <div class="cancel-icon">
                <i class="fa fa-times"></i>
              </div>
            </div>
            <div class="confirmation booking-content mar-top-60">
              <div class="row">
                <div class="col-md-8">
                  <div class="confirmation-content">
                    <BookingImage title={title} price={this.props.price} />
                    <div class="other-details detail-table mar-top-50">
                      <h4 class="mar-bottom-30">Order Details</h4>
                      <table class="table">
                        <tr>
                          <td>Booking id:</td>
                          <td>289-569-215</td>
                        </tr>
                        <tr>
                          <td>First Name:</td>
                          <td>Cyclone</td>
                        </tr>
                        <tr>
                          <td>Last Name:</td>
                          <td>Themes</td>
                        </tr>
                        <tr>
                          <td>DOB:</td>
                          <td>March 08, 1989</td>
                        </tr>
                        <tr>
                          <td>Country:</td>
                          <td>Nepal</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>cyclone.themes@gmail.com</td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td>977 - 222 - 444 - 666</td>
                        </tr>
                        <tr>
                          <td>Zip Code</td>
                          <td>44600</td>
                        </tr>
                        <tr>
                          <td>Address:</td>
                          <td>445 Mount Eden Road, Basundhara, Chakrapath</td>
                        </tr>
                      </table>
                    </div>
                    <div class="extra-services mar-top-50">
                      <h4 class="mar-bottom-30">Add Extra Services</h4>
                      <ul>
                        <li>
                          <i class="fa fa-bed" aria-hidden="true"></i> 3
                          Bedrooms
                        </li>
                        <li>
                          <i class="fa fa-wifi" aria-hidden="true"></i> Wifi
                        </li>
                        <li>
                          <i class="fa fa-bed" aria-hidden="true"></i>{" "}
                          Television
                        </li>
                        <li>
                          <i class="fa fa-wifi" aria-hidden="true"></i> Hot
                          Water
                        </li>
                        <li>
                          <i class="fa fa-bed" aria-hidden="true"></i> Dinner
                        </li>
                        <li>
                          <i class="fa fa-wifi" aria-hidden="true"></i> AC
                        </li>
                        <li>
                          <i class="fa fa-bed" aria-hidden="true"></i> Airport
                          Taxi
                        </li>
                        <li>
                          <i class="fa fa-wifi" aria-hidden="true"></i> Quick
                          Service
                        </li>
                      </ul>
                    </div>
                    <div class="payment mar-top-50">
                      <h4 class="mar-bottom-30">Payment</h4>
                      <div class="payment-desc">
                        <p>Payment is done via Paypal</p>
                      </div>
                    </div>
                    <div class="payment mar-top-50">
                      <h4 class="mar-bottom-30">View Booking Details</h4>
                      <div class="payment-desc">
                        <p>
                          https://www.hotux.netlify.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <YourReservation />
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

export default Confirmation;
