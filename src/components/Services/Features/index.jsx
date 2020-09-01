import React from "react";
import img1 from "../../../resources/images/feature1.jpg";
import imgIcon1 from "../../../resources/images/icons/ficon1.png";
import img2 from "../../../resources/images/feature2.jpg";
import imgIcon2 from "../../../resources/images/icons/ficon2.png";
import img3 from "../../../resources/images/feature3.jpg";
import imgIcon3 from "../../../resources/images/icons/ficon3.png";
import img4 from "../../../resources/images/feature4.jpg";
import imgIcon4 from "../../../resources/images/icons/ficon4.png";
import { Link } from "react-router-dom"
const Features = () => {
  return (
    <section className="detail-features">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="feature-item">
            <div className="feature-image">
              <img src={img1} alt="ABC" />>
            </div>
            <div className="feature-content">
              <img src={imgIcon1} alt="ABC" />
              <h4>
                <Link to="/" className="white">
                  Fitness club
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="feature-item">
            <div className="feature-image">
              <img src={img2} alt="ABC" />
            </div>
            <div className="feature-content">
              <img src={imgIcon2} alt="ABC" />
              <h4>
                <Link to="/" className="white">
                  Private Beach
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="feature-item">
            <div className="feature-image">
              <img src={img3} alt="ABC" />
            </div>
            <div className="feature-content">
              <img src={imgIcon3} alt="ABC" />
              <h4>
                <Link to="/" className="white">
                  Bicycle Hire
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="feature-item">
            <div className="feature-image">
              <img src={img4} alt="ABC" />
            </div>
            <div className="feature-content">
              <img src={imgIcon4} alt="ABC" />
              <h4>
                <Link to="/" className="white">
                  Restaurant
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
