import React from "react";
import Facilities from "./Facilities";
import Breadcrumb from "../utils/Breadcrumb";
import Amenities from "./Amenities";
import Features from "./Features";
import Rooms from "../Home/Rooms";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
const Services = () => {
  document.title = "Services | Hotux";
  return (
    <div>
      <Breadcrumb page="Services" />
      <Amenities />
      <Features />
      <Facilities />
      <Rooms />
      <LoginModel history={this.props.history} />
      <SignupModel history={this.props.history} />
    </div>
  );
};

export default Services;
