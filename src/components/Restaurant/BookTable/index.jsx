import React, { Component } from "react";
import img from "../../../resources/images/reservation.jpg"
class TableBooking extends Component {
  render() {
    return (
      <section class="reservation">
        <div class="container">
          <div class="section-title title-white">
            <h2>
              Make a <span>Reservation</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <div class="reservation-box">
            <div class="reservation-image">
              <img src={img} alt="image" />
            </div>
            <div class="restaurant-form">
              <h3>Book a Table Online</h3>
              <form action="/">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Date"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    placeholder="Time"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="number"
                    placeholder="No of People"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="phnumber"
                    placeholder="Phone"
                  />
                </div>
                <div class="comment-btn text-right">
                  <button class="btn btn-orange">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </section>
    );
  }
}

export default TableBooking;
