import React from "react";
import { Link } from "react-router-dom";
const News = props => {
  const showNews = () =>
    props.images.map((el, i) => (
      <div className="col-md-4 col-sm-6 col-xs-12" key={i}>
        <div className="news-item">
          <div className="news-image">
            <img src={el} alt={el} />
          </div>
          <div className="news-content">
            <p className="date mar-bottom-5">16 DECEMBER 2019</p>
            <h4>
              <Link to="/news_detail">
                Why choose Hotux Hotel to travel this summer
              </Link>
            </h4>
            <div className="room-services mar-bottom-10">
              <ul>
                <li>
                  <Link to="/news_detail">
                    <i className="fa fa-user" aria-hidden="true"></i> By Jack
                    Daniels
                  </Link>
                </li>
                <li>
                  <Link to="/news_detail">
                    <i className="fa fa-comment" aria-hidden="true"></i> 3
                    comments
                  </Link>
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.
            </p>
            <Link to="/news_detail">
              READ MORE <i className="fas fa-angle-double-right"></i>
            </Link>
          </div>
        </div>
      </div>
    ));
  return (
    <section className="news">
      <div className="container">
        <div className="section-title">
          <h2>
            Latest <span>News</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
            neque, sodales accumsan sapien et, auctor vulputate quam donec vitae
            consectetur turpis
          </p>
        </div>
        <div className="news-outer">
          <div className="row">{showNews()}</div>
        </div>
        <div className="section-btn">
          {props.button}
        </div>
      </div>
    </section>
  );
};

export default News;
