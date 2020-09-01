import React, { Component } from "react";
import bed from "../../../resources/images/icons/bed-logo.png";

import Slider from "react-slick";
import { Link } from "react-router-dom";
class Banner extends Component {
  state = {
    titles: [
      <h1>
        <span>HOTUX</span> CAFE & RESTAURANT
      </h1>,
      <h1>
        Get Ready TO <span>JOIN WITH US</span>
      </h1>,
      <h1>
        SEE WHAT'S NEW <span>TODAY</span>
      </h1>
    ],
    subTitles: [
      <h3>Welcome To</h3>,
      <h3>TODAYS MENU</h3>,
      <h3>Tour Menus</h3>
    ]
  };
  showSlides = () => (
    this.state.titles.map((el, i) => (
      <div className={`slider-slick restaurant${i}`} key={i}>
        <div className="swiper-content">
          <div className="slider-logo">
            <img src={bed} alt="Bed" style={{width:`auto`}}/>
          </div>
          {this.state.subTitles[i]}
          {el}
          <Link
            to="/"
            className="slider-btn btn-or mar-right-10"
          >
            <i className="fa fa-book"></i>Book Now
          </Link>
        </div>
      </div>
    ))
  );
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => <div className="swiper-pagination">{dots}</div>
    };
    return (
      <section className="banner">
        <div className="slider">
          <div className="swiper-container">
            <Slider {...settings} className="swiper-wrapper">
              {this.showSlides()}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
