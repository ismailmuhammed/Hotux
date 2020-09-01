import React from "react";
import img from "../../../resources/images/sr1.jpg";
import SideCard from "../../utils/SideCard";
const RoomInfo = props => {
  return (
    <div className="detail-content" style={{marginTop:`50px`}}>
      <div className="detail-title">
        <div className="title-left">
          <h3> {props.title} </h3>
          <div className="rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
        </div>
        <div className="title-right pull-right">
          <ul>
            <li className="facebook">
              <i className="fab fa-facebook"></i>
            </li>
            <li className="twitter">
              <i className="fab fa-twitter"></i>
            </li>
            <li className="linkedin">
              <i className="fab fa-linkedin"></i>
            </li>
            <li className="pinterest">
              <i className="fab fa-pinterest"></i>
            </li>
          </ul>
          <div className="title-price">
            <h3>
              $1200<span>/Night</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="detail-overview">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="overview-outer">
              <div className="overview-content mar-bottom-30">
                <h4>Overview</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  varius ligula non tellus euismod fermentum. Nulla quis enim ut
                  est dapibus luctus quis quis enim. Ut bibendum ultricies nisl
                  ut aliquam. Ut in arcu id nunc elementum ultricies eu eget
                  lacus nam at neque lorem.
                </p>
                <p className="mar-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  varius ligula non tellus euismod fermentum. Nulla quis enim ut
                  est dapibus luctus quis quis enim. Ut bibendum ultricies nisl
                  ut aliquam. Ut in arcu id nunc elementum ultricies eu eget
                  lacus nam at neque lorem.
                </p>
              </div>
              <div className="price-table ">
                <h4>Price and Rates(/Night)</h4>
                <table className="table table-bordered mar-0">
                  <thead>
                    <tr>
                      <td>Sun</td>
                      <td>Mon</td>
                      <td>Tues</td>
                      <td>Wed</td>
                      <td>Thurs</td>
                      <td>Fri</td>
                      <td>Sat</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>$1200</td>
                      <td>$1200</td>
                      <td>$1200</td>
                      <td>$1200</td>
                      <td>$1200</td>
                      <td>$1200</td>
                      <td>$1200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <SideCard title={props.title} img={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
