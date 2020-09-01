import React, { Component } from "react";
import img1 from "../../../resources/images/awards/award1.png"
import img2 from "../../../resources/images/awards/award2.png"
import img3 from "../../../resources/images/awards/award3.png"
import img4 from "../../../resources/images/awards/award4.png"
import Slider from "react-slick";
class Awards extends Component {
  state={
    images: [img1,img2,img3,img4,img1,img2,img3,img4],
    titles: ["World Luxury Award","Prestigious Award","Reader's Choice Award","World Best Award","World Luxury Award","Prestigious Award","Reader's Choice Award","World Best Award"]
  }
  showAwards = () =>
    this.state.images.map((el, i) => (
      <div className="award-item" key={i}>
        <div className="award-image">
          <img src={el} alt={el} />
        </div>
        <div className="award-content" style={{width:"100%"}}>
          <h5> {this.state.titles[i]} </h5>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
    ));
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <section className="awards">
        <div className="container">
          <div className="section-title title-white">
            <h2>
              Awards and <span>Achievements</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <Slider {...settings} className="award-slider">
            {this.showAwards()}
          </Slider>
        </div>
      </section>
    );
  }
}

export default Awards;
