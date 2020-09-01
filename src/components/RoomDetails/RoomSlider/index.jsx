import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../../resources/images/detail-slider/slider1.jpg";
import img2 from "../../../resources/images/detail-slider/slider2.jpg";
import img3 from "../../../resources/images/detail-slider/slider3.jpg";
import img4 from "../../../resources/images/detail-slider/slider4.jpg";
import img5 from "../../../resources/images/detail-slider/slider5.jpg";
import img6 from "../../../resources/images/detail-slider/slider6.jpg";
import img7 from "../../../resources/images/detail-slider/slider7.jpg";
import img8 from "../../../resources/images/detail-slider/slider8.jpg";
import img9 from "../../../resources/images/detail-slider/slider9.jpg";
class RoomSlider extends Component {
  state = {
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9]
  };
  showRooms = () =>
    this.state.images.map((el, i) => (
      <div className="detail-slider-item" key={i}>
        <img src={el} alt="PHTO" />
      </div>
    ));
  render() {
    const settings = {
      dots:true,
      customPaging: i => (
        <div className="detail-slider-item">
          <img src={this.state.images[i]} alt="icon" />
        </div>
      ),
      appendDots: (dots)=> <ul className="slider-1 slider-nav" style={{width:`100%`}}>{ dots }</ul>,
      infinate: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false
    };
    return <Slider {...settings} className="slider-1 slider-for">{this.showRooms()}</Slider>;
  }
}

export default RoomSlider;
