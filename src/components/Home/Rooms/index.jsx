import React, { Component } from "react";
import { Link } from "react-router-dom"
import Slider from "react-slick";
import RoomCard from "../../utils/RoomCard";
import { RoomsContext } from "../../../context/RoomsContext"
class Rooms extends Component {
  static contextType = RoomsContext
  showCards = () => {
    const titles = this.context.titles.slice(0,5)
    return titles.map((el, i) => (
      <div className="col-md-4 col-sm-6 col-xs-6" key={i}>
        <RoomCard price={this.context.prices[i]} img={this.context.images[i]} title={el}/>
      </div>
    ));
  };
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section className="rooms">
        <div className="container">
          <div className="section-title">
            <h2>
              Explore <span>Rooms</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <div className="room-outer">
            <Slider {...settings} className="row">
              {this.showCards()}
            </Slider>
          </div>
          <div className="section-btn">
            <Link to="/rooms" className="btn btn-black mar-right-10">
              EXPLORE ALL ROOMS <i className="fas fa-angle-double-right"></i>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Rooms;
