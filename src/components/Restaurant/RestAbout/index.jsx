import React from "react";
import sign from "../../../resources/images/icons/sign.png"
import about from "../../../resources/images/about5.jpg"
const RestAbout = () => {
  return (
    <section className="about-restaurant">
      <div className="container">
        <div className="section-title">
          <h2>
            About our <span>Restaurant</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
            neque, sodales accumsan sapien et, auctor vulputate quam donec vitae
            consectetur turpis
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about-content pad-top-70">
              <h3>19 years of hands of experience</h3>
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
              <img src={sign} alt="ABOUT" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src={about} alt="ABC" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestAbout;
