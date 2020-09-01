import React, { Component } from "react";
import img1 from "../../../resources/images/review1.jpg";
import img2 from "../../../resources/images/review2.jpg";
import quote from "../../../resources/images/icons/quote.png";
import Slider from "react-slick";

class Reviews extends Component {
  state = {
    images: [img1, img2, img1],
    names: ["Micheal Clordy", "Ketty Perry", "Micheal Clordy"]
  };
  showReviews = () => (
    this.state.images.map((el, i) => (
      <div key={i} className="slider-item" style={{marginRight:`30px`,width:`45%`}}>
        <div className="slider-image">
          <img src={el} alt={this.state.names[i]} />
        </div>
        <div className="slider-content">
          <p style={{width: `90%`}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            tortor vitae nisi pharetra egestas. Sed egestas sapien libero.
          </p>
          <h4>{this.state.names[i]}</h4>
          <span>Germany</span>
        </div>
        <div className="slider-quote">
          <img src={quote} alt={this.state.names[i]} />
        </div>
      </div>
    ))
  );
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <section className="reviews">
        <div className="container">
          <div className="section-title title-white">
            <h2>
              Explore <span>Reviews</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
            <Slider {...settings}>
              {this.showReviews()}
            </Slider>
        </div>
      </section>
    );
  }
}

export default Reviews;
