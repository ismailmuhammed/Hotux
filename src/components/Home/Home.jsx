import Swiper from "./Swiper";
import Regarding from "./Regarding";
import Rooms from "./Rooms";
import Discover from "./Discover";
import Facilities from "../Services/Facilities";
import News from "./News";
import Newsletter from "./News/Newsletter";
import Reviews from "./Reviews";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginModel from "../Login/LoginModel";
import SignupModel from "../Signup/SignupModel";
import img1 from "../../resources/images/news1.jpg";
import img2 from "../../resources/images/news2.jpg";
import img3 from "../../resources/images/news3.jpg";
class Home extends Component {
  componentDidMount() {
    document.title = "Home | Hotux";
  }
  render() {
    return (
      <div>
        <Swiper />
        <Regarding />
        <Rooms />
        <Discover />
        <Facilities />
        <Reviews />
        <News
          images={[img1, img2, img3]}
          button={
            <Link to="/" className="btn btn-black mar-right-10">
              EXPLORE ALL <i className="fas fa-angle-double-right"></i>
            </Link>
          }
        />
        <Newsletter />
        <LoginModel history={this.props.history} />
        <SignupModel history={this.props.history} />
      </div>
    );
  }
}

export default Home;
