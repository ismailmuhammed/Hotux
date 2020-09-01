import React from "react";

const SideCard = (props) => {
  return (
    <div className="sidebar-room">
      <div className="sr-image">
        <img src={props.img} alt="IMG" />
      </div>
      <div className="room-title sr-content">
        <h3>{props.title}</h3>
        <p>$1200/Night</p>
        <div className="deal-rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
