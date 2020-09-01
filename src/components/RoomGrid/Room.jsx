import React, { Component } from "react";
import Breadcrumb from "../utils/Breadcrumb";
import RoomCard from "../utils/RoomCard";
import { RoomsContext } from "../../context/RoomsContext"
class Room extends Component {
  static contextType = RoomsContext
  showCards = () =>
    this.context.titles.map((el, i) => (
      <div className="col-md-4 col-sm-6 col-xs-6" key={i}>
        <RoomCard title={el} price={this.context.prices[i]} img={this.context.images[i]} />
      </div>
    ));
  render() {
    console.log(this.context)
    document.title = "Rooms | Hotux"
    return (
      <div>
        <Breadcrumb page="Rooms" />
        <section className="room-list">
          <div className="container">
            <div className="list-filter">
              <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12">
                  <div className="filter-title">
                    <p className="text-uppercase mar-top-10 mar-bottom-0">
                      Filter Rooms by
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-4">
                  <div className="form-group room-type">
                    <select style={{display:`block`}}
                      className="selectpicker"
                      data-width="100%"
                      title="Rooms Type"
                    >
                      <option value="1">0</option>
                      <option value="2">1</option>
                      <option value="3">2</option>
                      <option value="4">3</option>
                      <option value="5">4</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-4">
                  <div className="form-group price">
                    <select style={{display:`block`}}
                      className="selectpicker"
                      data-width="100%"
                      title="Price"
                    >
                      <option value="1">0</option>
                      <option value="2">1</option>
                      <option value="3">2</option>
                      <option value="4">3</option>
                      <option value="5">4</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-4">
                  <div className="form-group rating">
                    <select style={{display:`block`}}
                      className="selectpicker"
                      data-width="100%"
                      title="Rating"
                    >
                      <option value="1">0</option>
                      <option value="2">1</option>
                      <option value="3">2</option>
                      <option value="4">3</option>
                      <option value="5">4</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-content">
              <div className="row">{this.showCards()}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Room;
