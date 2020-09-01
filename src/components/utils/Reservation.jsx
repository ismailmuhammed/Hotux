import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Reservation = props => {
  const titles = [
    "Check Availability",
    "Select Room",
    "Booking",
    "Confirmation"
  ];
  const states = [props.state0, props.state1, props.state2, props.state3, ""];
  const showLinks = () => {
    return titles.map((el, i) => {
      const title = el
        .split(" ")
        .join("_")
        .toLowerCase();
      return (
        <div key={i} className="res-item">
          <Link to={`/bookings/${title}`} className={states[i]}>
            {states[i + 1] ? (
              states[i + 1] === "active" ? (
                <i className="fa fa-check"></i>
              ) : (
                i + 1
              )
            ) : (
              i + 1
            )}
          </Link>
          <p>{el}</p>
        </div>
      );
    });
  };
  return (
    <div className="reservation-links text-center">
      <h2 className="mar-bottom-60 text-capitalize">Make Your Reservation</h2>
      <div className="reservation-links-content">
        {showLinks()}
      </div>
    </div>
  );
};

export default Reservation;
