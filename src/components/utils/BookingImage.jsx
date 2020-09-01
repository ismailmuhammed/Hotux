import React from "react";
import RoomSlider from "../../resources/images/detail-slider/slider1.jpg";
const BookingImage = (props) => {
  return (
    <div className="booking-image">
      <img src={RoomSlider} alt="image" />
      <div className="booking-title">
        <div className="title-left">
          <h3>{props.title}</h3>
          <div className="rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="title-right pull-right">
          <div className="title-price">
            <h4 className="pad-top-15">
              <a href="#">
                ${props.price}
                <span>/Night</span>
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingImage;
