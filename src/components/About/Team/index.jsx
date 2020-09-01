import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"
class Team extends Component {
  state = {
    names: ["John Anderson", "Erina Gray", "Micheal Carter", "Nelson Roar"],
    job: ["Assistant", "Managing Director", "Supervisor", "Project Manager"]
  };
  showCards = () => {
    return this.state.names.map((el, i) => (
      <div className="col-md-4"  key={i}>
        <div className="team-item">
          <div className="team-image">
            <img src={this.props.images[i]} alt={el} />
          </div>
          <div className="team-content">
            <h4>{el}</h4>
            <p> {this.state.job[i]} </p>
            <ul className="social-links">
              <li>
                <Link to="/">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
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
      <section className="about-team">
        <div className="container">
          <div className="section-title">
            {this.props.h2}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <Slider {...settings} className="row team-slider">{this.showCards()}</Slider>
        </div>
      </section>
    );
  }
}

export default Team;
