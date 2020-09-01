import React, { Component } from "react";
import InfiniteCalendar, { withRange, Calendar } from "react-infinite-calendar";
import Breadcrumb from "../utils/Breadcrumb";
import Reservation from "../utils/Reservation";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
class CheckAvailabitity extends Component {
  dateSelect = date => {
    this.refs.chkIn.value = date.start.toDateString();
    this.refs.chkOut.value = date.end.toDateString();
    this.refs.chkIn.value =
      date.start < new Date(new Date().toDateString())
        ? "Not Available"
        : date.start.toDateString();
    this.refs.nights.value = Math.ceil(
      (date.end.getTime() - date.start.getTime()) / 1000 / 86400
    );
  };
  render() {
    document.title = "Booking | Check Availabitity";
    return (
      <div className="">
        <Breadcrumb page="Check Availabitity" />
        <section className="content reservation-main">
          <div className="container">
            <Reservation state0="active" state1="" state2="" state3="" />
            <form
              onSubmit={e => {
                e.preventDefault();
                this.props.history.push("s/select_room");
              }}
              action="/booking/select_room"
            >
              <div className="banner-form form-style-1">
                <div className="form-content">
                  <div className="table-item">
                    <label>Check In</label>
                    <div className="form-group">
                      <div className="date-range-inner-wrapper">
                        <input
                          id="date-range2"
                          className="form-control"
                          readOnly
                          required
                          placeholder="Check In"
                          style={{ backgroundColor: `#fff` }}
                          ref="chkIn"
                        />
                        <span className="input-group-addon">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="table-item">
                    <label>Check Out</label>
                    <div className="form-group">
                      <div className="date-range-inner-wrapper">
                        <input
                          id="date-range2"
                          className="form-control"
                          readOnly
                          required
                          placeholder="Check Out"
                          style={{ backgroundColor: `#fff` }}
                          ref="chkOut"
                        />
                        <span className="input-group-addon">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="table-item">
                    <label>Guests</label>
                    <div className="form-group">
                      <select required className="niceSelect">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                  </div>
                  <div className="table-item">
                    <label>Nights</label>
                    <div className="form-group">
                      <div className="date-range-inner-wrapper">
                        <input
                          required
                          className="form-control"
                          readOnly
                          defaultValue="Nights"
                          style={{ backgroundColor: `#fff` }}
                          ref="nights"
                        />
                        {/* <span className="input-group-addon">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                      </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="table-item">
                    <div className="form-btn mar-top-35">
                      <button className="btn btn-orange">
                        Check Availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="calendar-range">
              <div className="date-range-inner-wrapper">
                <InfiniteCalendar
                  Component={withRange(Calendar)}
                  displayOptions={{
                    layout: "landscape"
                  }}
                  theme={{
                    selectionColor: "#fe4e37",
                    textColor: {
                      default: "#ddd",
                      active: "#FFF"
                    },
                    weekdayColor: "#facec8",
                    headerColor: "#fe4e37",
                    floatingNav: {
                      background: "#fe4e37",
                      color: "#FFF",
                      chevron: "#FFA726"
                    }
                  }}
                  width={1100}
                  height={350}
                  selected={{
                    start: new Date(),
                    end: new Date()
                  }}
                  onSelect={this.dateSelect}
                />
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

export default CheckAvailabitity;
