import React from "react";
import img1 from "../../../resources/images/aboutus2.jpg"
import img2 from "../../../resources/images/aboutus1.jpg"
import { Link } from "react-router-dom"

const Info = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="about-para mar-top-50">
              <h4>Explore more about us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta velit eu nisi consequat dictum. Maecenas accumsan tempor
                neque sed mattis. Morbi quis nunc pharetra, suscipit lacus quis,
                pharetra dignissim nibh a nunc aliquet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta velit eu nisi consequat dictum. Maecenas accumsan tempor
                neque sed mattis.{" "}
              </p>
              <Link to="/" className="btn btn-orange">
                KNOW MORE ABOUT US
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="about-us-image mar-top-50">
              <img src={img1} alt="abc" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="about-us-image">
              <img src={img2} alt="abc" />
            </div>
          </div>
        </div>
        <div className="about-tag">
          <div className="tag-no">
            <span>19</span>
          </div>
          <div className="tag-info">
            <span>years</span>
            <span className="orange">experience</span>
            <span>working</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
