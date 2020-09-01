import React from "react";
import Banner from "./Banner";
import RestAbout from "./RestAbout";
import Menu from "./Menu";
import Speciality from "./Speciality";
import Reviews from "../Home/Reviews";
import Expert from "../About/Team";
import img1 from "../../resources/images/rt1.jpg";
import img2 from "../../resources/images/rt2.jpg";
import img3 from "../../resources/images/rt3.jpg";
import img4 from "../../resources/images/team4.jpg";
import news1 from "../../resources/images/news6.jpg";
import news2 from "../../resources/images/news7.jpg";
import news3 from "../../resources/images/news8.jpg";
import News from "../Home/News";
import TableBooking from "./BookTable";
const Restaurant = () => {
  return (
    <div>
      <Banner />
      <RestAbout />
      <Menu />
      <Speciality />
      <TableBooking />
      <Expert
        images={[img1, img2, img3, img4]}
        h2={
          <h2>
            Meet Our Expert <span>Community</span>
          </h2>
        }
      />
      <Reviews />
      <News images={[news1, news2, news3]} button="" />
    </div>
  );
};

export default Restaurant;
