import React, { Component } from "react";
import { Link } from "react-router-dom"
class Discover extends Component {
  render() {
    return (
      <section className="call-to-action">
        <div className="container-fluid">
          <div className="row display-flex">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="call-content pad-left-30">
                <h2 className="white mar-bottom-25">
                  Discover a brand <span>luxurious</span> hotel
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  porttitor, eros nec porttitor viverra, felis libero luctus
                  nisi, non volutpat purus felis ut erat ipsum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  porttitor, eros nec porttitor viverra, felis libero luctus
                  nisi, non volutpat purus felis ut erat ipsum.
                </p>
                <Link to="/about" className="btn btn-orange mar-top-20">
                  READ MORE <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="video-figure"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Discover;
