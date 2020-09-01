import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom"
import bed from "../../../resources/images/icons/bed-logo.png";
class Swiper extends Component {

  showSlides = ()=>{
    const arr = [1,2,3]
    return arr.map(el=>{
      return <div key={el} className={`slider-slick slide${el}`} style={{position:"relative"}} >
      <div className="swiper-content">
        <div className="slider-logo">
          <img src={bed} alt={el} style={{maxWidth: `100%`,width:'auto'}}/>
        </div>
        <h3>The lap of Luxury</h3>
        <h1>
          Hotel <span>Hotux</span>
        </h1>
        <Link to="/" className="slider-btn btn-or mar-right-10">
          <i className="fa fa-book"></i> Explore Our Rooms
        </Link>
        <Link
          to="/"
          data-animation="animated fadeInUp"
          className="slider-btn btn-wt"
        >
          <i className="fa fa-book"></i> Book A Room Now
        </Link>
      </div>
    </div>
    })
  }

  render() {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
    return (
      <section className="banner">
        <Slider {...settings}>
          {this.showSlides()}
        </Slider>

        <div className="banner-form">
          <div className="container">
            <div className="form-content">
              <div className="table-item">
                <div className="form-group">
                  <div className="date-range-inner-wrapper">
                    <input
                      id="date-range2"
                      className="form-control"
                      defaultValue="Check In"
                      type="date"
                    />
                    <span className="input-group-addon">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="table-item">
                <div className="form-group form-icon">
                  <div className="date-range-inner-wrapper">
                    <input
                      id="date-range3"
                      className="form-control"
                      defaultValue="Check Out"
                      type="date"
                    />
                    <span className="input-group-addon">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="table-item">
                <div className="form-group form-icon">
                  <select>
                    <option value="0">Guest</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                  </select>
                </div>
              </div>
              <div className="table-item">
                <div className="form-group form-icon">
                  <select>
                    <option value="0">Nights</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                  </select>
                </div>
              </div>
              <div className="table-item">
                <div className="form-btn">
                  <Link to="/" className="btn btn-orange">Check Availability</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Swiper;
