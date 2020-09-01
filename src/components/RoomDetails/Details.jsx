import React, { Component } from "react";
import Amenities from "../Services/Amenities";
import Breadcrumb from "../utils/Breadcrumb";
import Features from "../Services/Features";
import { RoomsContext } from "../../context/RoomsContext";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
import Rooms from "../Home/Rooms";
import RoomInfo from "./RoomInfo";
import RoomSlider from "./RoomSlider";
class Details extends Component {
  static contextType = RoomsContext;
  render() {
    const title = this.context.titles.find(el => {
      return (
        el
          .split(" ")
          .join("_")
          .toLowerCase() === this.props.match.params.roomId
      );
    });
    document.title = `Hotux | ${title}`;
    return (
      <div>
        <Breadcrumb page={title} />
        <section className="details">
          <div className="container">
            <RoomSlider/>
            <RoomInfo title={title} />
          </div>
        </section>
        <Amenities />
        <Features />
        <Rooms />
        <LoginModel history={this.props.history} />
        <SignupModel history={this.props.history} />
      </div>
    );
  }
}

export default Details;
