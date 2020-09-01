import React, { Component } from "react";
import menu1 from "../../../resources/images/menu/menu1.jpg";
import menu7 from "../../../resources/images/menu/menu7.jpg";
import menu8 from "../../../resources/images/menu/menu8.jpg";
import {Link} from "react-router-dom"
class Speciality extends Component {
  state={
    images: [menu1,menu7,menu8],
    titles: [<h4>Turkey n' Dressing</h4>, <h4>Sunrise Sampler</h4>, <h4>Grilled Pork Chops</h4>]
  }
  showSpeciality = () =>
    this.state.images.map((el, i) => (
      <div className="col-md-4 col-sm-6 col-xs-12" key={i}>
        <div className="special-item">
          <div className="special-image">
            <img src={el} alt="menu" />
            <div className="special-tag">
              <span>${Math.ceil(Math.random()*150)}</span>
            </div>
          </div>
          <div className="special-content text-center">
            {this.state.titles[i]}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel rutrum ante. Morbi suscipit at nisl rhoncus.
            </p>
            <Link to="/" className="btn btn-orange">
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </div>
    ));
  render() {
    return (
      <section className="speciality">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Speciality</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <div className="speciality-outer">
            <div className="row">
              {this.showSpeciality()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Speciality;
