import React, { Component, createContext } from "react";
import img1 from "../resources/images/room-list/list1.jpg";
import img2 from "../resources/images/room-list/list2.jpg";
import img3 from "../resources/images/room-list/list3.jpg";
import img4 from "../resources/images/room-list/list4.jpg";
import img5 from "../resources/images/room-list/list5.jpg";
import img6 from "../resources/images/room-list/list6.jpg";
import img7 from "../resources/images/room-list/list7.jpg";
import img8 from "../resources/images/room-list/list8.jpg";
import img9 from "../resources/images/room-list/list9.jpg";
import roomGrid1 from "../resources/images/room-list/room-grid-1.jfif";
import roomGrid2 from "../resources/images/room-list/room-grid-2.jfif";
import roomGrid3 from "../resources/images/room-list/room-grid-3.jfif";
import roomGrid4 from "../resources/images/room-list/room-grid-4.jfif";
import roomGrid5 from "../resources/images/room-list/room-grid-5.jfif";
import roomGrid6 from "../resources/images/room-list/room-grid-6.jfif";
import roomGrid7 from "../resources/images/room-list/room-grid-7.jfif";
import roomGrid8 from "../resources/images/room-list/room-grid-8.jfif";
import roomGrid9 from "../resources/images/room-list/room-grid-9.jfif";
import roomGrid10 from "../resources/images/room-list/room-grid-10.jfif";
import roomGrid11 from "../resources/images/room-list/room-grid-11.jfif";
import roomGrid12 from "../resources/images/room-list/room-grid-12.jfif";
import roomGrid13 from "../resources/images/room-list/room-grid-13.jfif";
import roomGrid14 from "../resources/images/room-list/room-grid-14.jfif";
import roomGrid15 from "../resources/images/room-list/room-grid-15.jfif";
import roomGrid16 from "../resources/images/room-list/room-grid-16.jfif";
import roomGrid17 from "../resources/images/room-list/room-grid-17.jfif";
import roomGrid18 from "../resources/images/room-list/room-grid-18.jfif";
import roomGrid19 from "../resources/images/room-list/room-grid-19.jfif";
import roomGrid20 from "../resources/images/room-list/room-grid-20.jfif";
import roomGrid21 from "../resources/images/room-list/room-grid-21.jfif";
import roomGrid22 from "../resources/images/room-list/room-grid-22.jfif";
import roomGrid23 from "../resources/images/room-list/room-grid-23.jfif";
import roomGrid24 from "../resources/images/room-list/room-grid-24.jfif";
import roomGrid25 from "../resources/images/room-list/room-grid-25.jfif";
export const RoomsContext = createContext();
class RoomsContextProvider extends Component {
  state = {
    titles: [
      "Royal Suite",
      "Deluxe Suite",
      "Villa Suite",
      "Terrace Suite",
      "Penthouse Suite",
      "Presidential Suite",
      "Super Deluxe",
      "Junior Suite",
      "Executive Suite"
    ],
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    prices: [
      1200,
      1100,
      1000,
      900,
      800,
      700,
      600,
      500,
      400,
      1500,
      1300,
      1250,
      1050,
      1400,
      1299,
      1600,
      2000,
      1800,
      1900,
      1850,
      3450,
      1750,
      1700,
      2400,
      2500
    ],
    grids: [
      roomGrid1,
      roomGrid2,
      roomGrid3,
      roomGrid4,
      roomGrid5,
      roomGrid6,
      roomGrid7,
      roomGrid8,
      roomGrid9,
      roomGrid10,
      roomGrid11,
      roomGrid12,
      roomGrid13,
      roomGrid14,
      roomGrid15,
      roomGrid16,
      roomGrid17,
      roomGrid18,
      roomGrid19,
      roomGrid20,
      roomGrid21,
      roomGrid22,
      roomGrid23,
      roomGrid24,
      roomGrid25
    ],
    gridNames: [
      "Single Room",
      "Double Room",
      "Triple Room",
      "Quad Room",
      "Queen Room",
      "King Room",
      "Twin Room",
      "Hollywood Twin Room",
      "Double-double Room",
      "Studio Room",
      "Executive Suite ",
      "Junior Suite ",
      "Presidential Suite",
      "Apartments Suite",
      "Connecting Room",
      "Murphy Room",
      "Accessible Room",
      "Cabana Room",
      "Adjoining Room ",
      "Adjacent Room",
      "Villa",
      "Executive Floored Room",
      "Cozy Room",
      "Royal Suite",
      "Exclusive Suite"
    ],
    page: 1,
    changePage: (val)=> this.setState({page:val})
  };
  render() {
    return (
      <RoomsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomsContext.Provider>
    );
  }
}

export default RoomsContextProvider;
