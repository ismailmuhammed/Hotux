import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
import Reservation from "../utils/Reservation";
import { RoomsContext } from "../../context/RoomsContext";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
import { Link } from "react-router-dom";
class SelectRoom extends Component {
  state = {
    index: 0
  };
  static contextType = RoomsContext;
  renderList = e => {
    e.preventDefault();
    const type = e.target.dataset.type || e.target.parentNode.dataset.type;
    const num = eval(`${this.state.index}${type}5`);
    if (num >= 0) {
      if (num < this.context.gridNames.length) {
        this.context.changePage(num / 5);
        this.setState({ index: num });
      }
    }
  };
  showList = () => {
    console.log(this.context.prices.length);
    const slice = array => {
      return this.context[array].slice(this.state.index, this.state.index + 5);
    };
    const titles = slice("gridNames");
    const images = slice("grids");
    const prices = slice("prices");
    return titles.map((el, i) => {
      return (
        <div className="room-grid" key={i}>
          <div className="grid-image">
            <img src={images[i]} width={370} height={320} alt="iage" />
          </div>
          <div className="grid-content">
            <div className="room-title">
              <h4>{el}</h4>
              <p className="mar-top-5">
                <i className="fa fa-tag"></i> ${prices[i]}/Night
              </p>
              <div className="deal-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
            <div className="room-detail">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ex neque, sodales accumsan sapien et, auctor vulputate quam
                donec vitae consectetur turpis
              </p>
            </div>
            <div className="room-services">
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-6">
                  <i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6">
                  <i className="fa fa-wifi" aria-hidden="true"></i> Quick
                  Service
                </div>
              </div>
            </div>

            <div className="grid-btn mar-top-20">
              <Link
                to={`/rooms/${el
                  .split(" ")
                  .join("_")
                  .toLowerCase()}`}
                className="btn btn-black mar-right-10"
              >
                VIEW DETAILS
              </Link>
              <Link
                to={`/bookings/booking/${el
                  .split(" ")
                  .join("_")
                  .toLowerCase()}`}
                className="btn btn-orange"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <Breadcrumb page="Select Room" />
        <section className="content reservation-main">
          <div className="container">
            <Reservation state0="active" state1="active" state2="" state3="" />
            <div className="room-list mar-top-60">
              <div className="row">
                <div className="col-md-9 pull-right">
                  <div className="list-results">
                    <div className="list-results-sort pull-left pad-top-5">
                      <p className="mar-0">
                        Showing {this.state.index / 5 + 1}-5 of{" "}
                        {this.context.gridNames.length} results
                      </p>
                    </div>
                    <div className="click-menu pull-right">
                      <div className="change-list f-active mar-right-10">
                        <Link href="roomlist-1.html">
                          <i className="fa fa-bars"></i>
                        </Link>
                      </div>
                      <div className="change-grid">
                        <Link href="roomlist-1.html">
                          <i className="fa fa-th"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="list-content">
                    <div className="list-grid">{this.showList()}</div>
                  </div>
                  <div className="pagination-content text-center">
                    <ul className="pagination">
                      <li>
                        <Link href="#" onClick={this.renderList} data-type="-">
                          <i
                            className="fa fa-angle-double-left"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={this.renderList} data-type="+">
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 sidebar pull-left">
                  <div className="list-sidebar">
                    <div className="room-type list-sidebar-item">
                      <h4>Room Types</h4>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Single Rooms</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Double Rooms</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Studio Rooms</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Kingsize Rooms</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Presidentsuite Rooms</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Murphy Rooms</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Connecting Rooms</label>
                        </div>
                      </div>
                    </div>
                    <div className="price list-sidebar-item">
                      <h4>Price</h4>
                      <div className="range-slider">
                        <div className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                          <span className="min-value">0 $</span>
                          <span className="max-value">3000 $</span>
                          <p className="range-field">
                            <input
                              type="range"
                              className="ui-slider-range ui-widget-header ui-corner-all full custom-range"
                              id="test5"
                              min="0"
                              max="100"
                            />
                          </p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="ratings list-sidebar-item">
                      <h4>Ratings</h4>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>
                            <span className="rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>
                            <span className="rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>
                            <span className="rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>
                            <span className="rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>
                            <span className="rating">
                              <span className="fa fa-star"></span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="services list-sidebar-item">
                      <h4>Services</h4>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>24/7 Reception</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Parking</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Bar</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Restaurant</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Satellite Television</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse mar-bottom-15">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Lift/ELevator</label>
                        </div>
                      </div>
                      <div className="pretty p-default p-thick p-pulse">
                        <input type="checkbox" />
                        <div className="state p-warning-o">
                          <label>Luggage Storage </label>
                        </div>
                      </div>
                    </div>
                    <div className="info-1 list-sidebar-item">
                      <i className="fa fa-phone-volume"></i>
                      <h5>Need help? Call us</h5>
                      <a href="tel://004542344599" className="phone">
                        +92 344 8781207
                      </a>
                      <small>Monday to Friday 9.00am - 7.30pm</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LoginModel history={this.props.history} />
        <SignupModel history={this.props.history} />
      </div>
    );
  }
}
export default SelectRoom;
