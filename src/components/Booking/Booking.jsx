import React, { Component } from "react";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
import Reservation from "../utils/Reservation";
import { RoomsContext } from "../../context/RoomsContext";
import jsonFile from "../../resources/json/countries.json";
import Breadcrumb from "../utils/Breadcrumb";
import BookingImage from "../utils/BookingImage";
import YourReservation from "../utils/YourReservation";
import { PriceContext } from "../../context/PriceContext";
class Booking extends Component {
  state = {
    countries: jsonFile.countries,
    price: null,
    span: ""
  };
  static contextType = RoomsContext;
  showOptions = () => {
    return this.state.countries.map((el, i) => {
      return (
        <option value={i} key={i}>
          {el.name}
        </option>
      );
    });
  };
  addNum = e => {
    this.setState({
      span: this.state.countries[e.target.selectedOptions[0].value].code
    });
  };
  componentDidMount() {
    this.setState({
      price: this.context.prices[
        this.context.gridNames.findIndex(
          el =>
            el
              .split(" ")
              .join("_")
              .toLowerCase() === this.props.match.params.bookedRoom
        )
      ]
    });
  }
  componentWillUpdate(){
    document.querySelector(".phoneNo").innerHTML = this.state.span
  }
  addCharges = e => {
    if (e.target.checked === true)
      this.setState({ price: this.state.price + +e.target.dataset.add });
    else this.setState({ price: this.state.price - e.target.dataset.add });
  };
  render() {
    const title = this.context.gridNames.find(
      el =>
        el
          .split(" ")
          .join("_")
          .toLowerCase() === this.props.match.params.bookedRoom
    );
    document.title = `Hotux | Book ${title}`;
    return (
      <PriceContext.Consumer>
        {() => {
          return (
            <div>
              <Breadcrumb page="Booking" />
              <section className="content">
                <div className="container">
                  <Reservation
                    state0="active"
                    state1="active"
                    state2="active"
                    state3=""
                  />
                  <div className="booking">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="booking-content">
                          <BookingImage
                            title={title}
                            price={this.state.price}
                          />
                          <div className="booking-desc mar-top-50">
                            <ul className="mar-bottom-15">
                              <li>
                                <i className="fa fa-bed" aria-hidden="true"></i>{" "}
                                3 Bedrooms
                              </li>
                              <li>
                                <i
                                  className="fa fa-wifi"
                                  aria-hidden="true"
                                ></i>{" "}
                                Wifi
                              </li>
                              <li>
                                <i className="fa fa-tv" aria-hidden="true"></i>{" "}
                                Telivision
                              </li>
                              <li>
                                <i
                                  className="fa fa-bath"
                                  aria-hidden="true"
                                ></i>{" "}
                                Hot Water
                              </li>
                              <li>
                                <i
                                  className="fa fa-utensil-spoon"
                                  aria-hidden="true"
                                ></i>{" "}
                                Dinner
                              </li>
                              <li>
                                <i
                                  className="fa fa-cogs"
                                  aria-hidden="true"
                                ></i>{" "}
                                Fast Service
                              </li>
                              <li>
                                <i
                                  className="fa fa-thermometer"
                                  aria-hidden="true"
                                ></i>{" "}
                                AC
                              </li>
                              <li>
                                <i className="fa fa-car" aria-hidden="true"></i>{" "}
                                Airport Taxi
                              </li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Praesent in quam urna. Sed eu suscipit
                              augue. Duis sollicitudin euismod velit, a lobortis
                              felis pretium a. In facilisis maximus elit, sed
                              fermentum sem lobortis at. Ut luctus euismod
                              metus, eu malesuada orci malesuada sit amet mauris
                              vitae sapien.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. In ultrices felis est, vitae suscipit odio
                              suscipit a. Integer sit amet eleifend nisi. Nam eu
                              pulvinar eros.{" "}
                            </p>
                          </div>
                          <div className="extra-services mar-top-50">
                            <h4 className="mar-bottom-30">
                              Add Extra Services
                            </h4>
                            <ul>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="2000"
                                  />
                                  <span className="state p-warning-o">
                                    <label>10 Bedrooms</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="100"
                                  />
                                  <span className="state p-warning-o">
                                    <label>Wifi</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="50"
                                  />
                                  <span className="state p-warning-o">
                                    <label>Television</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="25"
                                  />
                                  <span className="state p-warning-o">
                                    <label>Hot Water</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="100"
                                  />
                                  <span className="state p-warning-o">
                                    <label>Dinner</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="50"
                                  />
                                  <span className="state p-warning-o">
                                    <label>Quick Services</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="50"
                                  />
                                  <span className="state p-warning-o">
                                    <label>A/C</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="100"
                                  />
                                  <span className="state p-warning-o">
                                    <label>Laundry Services</label>
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="pretty p-default p-thick p-pulse mar-bottom-15">
                                  <input
                                    type="checkbox"
                                    onChange={this.addCharges}
                                    data-add="200"
                                  />
                                  <span className="state p-warning-o">
                                    <label>AirPort Taxi</label>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="personal-info mar-top-50">
                            <div className="form-title">
                              <span>1</span>
                              <h4 className="mar-bottom-30">
                                Personal Information
                              </h4>
                            </div>
                            <form>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="First Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Last Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" placeholder="DOB" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <select
                                      onChange={this.addNum}
                                      placeholder="Country"
                                    >
                                      <option value="" selected disabled>
                                        Select Country
                                      </option>
                                      {this.showOptions()}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="email" placeholder="Email" />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <span
                                      className="phoneNo"
                                    ></span>
                                    <input
                                      type="text"
                                      placeholder="Phone"
                                      style={{ paddingLeft: `70px` }}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group mar-0">
                                    <textarea placeholder="Message"></textarea>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="card-info mar-top-50">
                            <div className="form-title">
                              <span>2</span>
                              <h4 className="mar-bottom-30">
                                Payment Information
                              </h4>
                            </div>
                            <form>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Card Type"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Card Number"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Card Holder Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" placeholder="CVC" />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Expiry Month"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      placeholder="Expiry Year"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group radio-group">
                                    <input type="radio" name="payment" />
                                    Via Credit Card
                                  </div>
                                </div>
                                <div className="col-md-3">
                                  <div className="form-group radio-group">
                                    <input type="radio" name="payment" />
                                    Via Paypal
                                  </div>
                                </div>
                                <div className="col-md-12 mar-top-15">
                                  <div className="form-group mar-bottom-30">
                                    <input type="checkbox" /> I agree to the{" "}
                                    <a href="#">Terms and Conditions</a>
                                  </div>
                                  <div className="card-btn">
                                    <a href="#" className="btn btn-orange">
                                      CONFIRM BOOKING
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <YourReservation price={this.state.price} />
                    </div>
                  </div>
                </div>
              </section>
              <LoginModel history={this.props.history} />
              <SignupModel history={this.props.history} />
            </div>
          );
        }}
      </PriceContext.Consumer>
    );
  }
}

export default Booking;
