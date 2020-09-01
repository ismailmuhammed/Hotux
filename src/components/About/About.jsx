import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
import Info from "./Info";
import Hotel from "./Hotel";
import Team from "./Team";
import Facilities from "../Services/Facilities";
import Awards from "./Awards";
import img1 from "../../resources/images/team1.jpg";
import img2 from "../../resources/images/team2.jpg";
import img3 from "../../resources/images/team3.jpg";
import img4 from "../../resources/images/team4.jpg";
class About extends Component {
  componentDidMount(){
    document.title = " About | Hotux"
  }
  render() {
    return (
      <div>
        <Breadcrumb page="About Us" />
        <Info />
        <Hotel />
        <Team h2={<h2>Explore <span>Team</span></h2>} images={[img1,img2,img3,img4]} />
        <Awards />
        <Facilities />
      </div>
    );
  }
}

export default About;
