import React from "react";
import { Link } from "react-router-dom"
const RoomCard = (props) => {
  return (
    <div className="room-item">
      <div className="room-image">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="room-content">
        <div className="room-title">
          <h4>{props.title}</h4>
          <p>${props.price}/Night</p>
          <div className="deal-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="room-services mar-bottom-15">
          <ul>
            <li>
              <i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
            </li>
            <li>
              <i className="fa fa-wifi" aria-hidden="true"></i> Wifi
            </li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          orci nulla, fermentum in faucibus a, interdum eu nibh.
        </p>
        <div className="room-btns mar-top-20">
          <Link
            to={`/rooms/${props.title
              .split(" ")
              .join("_")
              .toLowerCase()}`}
            className="btn btn-black mar-right-10"
          >
            VIEW DETAILS
          </Link>
          <Link to="/bookings/check_availability" className="btn btn-orange">
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
