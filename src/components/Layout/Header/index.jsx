import React, { Component } from "react";
import {Link} from "react-router-dom"
import logo from "../../../resources/images/logo.png";
import logo2 from "../../../resources/images/logo-black.png";
class Header extends Component {
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll =()=>{
    if(window.scrollY > 130){
      this.refs.header.className = "header_menu animated slideInDown affix"
    }
    if(window.scrollY < 130){
      this.refs.header.className = "header_menu affix-top"
    }
  }
  render() {
    return (
      <header className="main_header_area">
        <div className="header-content">
          <div className="container">
            <div className="links links-left">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                    adeebahmad0010@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                    0344-8781207
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links links-right pull-right">
              <ul>
                <li>
                  <a href="#login">
                    <i className="fa fa-user" aria-hidden="true"></i> Login
                  </a>
                </li>
                <li>
                  <a href="#register">
                    <i className="fa fa-pen" aria-hidden="true"></i> Register
                  </a>
                </li>
                <li>
                  <ul className="social-links">
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-google-plus" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header_menu affix-top" ref="header">
          <nav className="navbar navbar-default navbar-sticky-in">
            <div className="container">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/" >
                  <img alt="logo" src={logo} className="logo-white" />
                  <img
                    alt="logo1"
                    src={logo2}
                    className="logo-black"
                  />
                </Link>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav" id="responsive-menu">
                  <li className="dropdown submenu active">
                    <Link
                      to="/"
                      className="dropdown-toggle"
                    >
                      Home
                      {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                    </Link>
                    {/* <ul className="dropdown-menu">
                      <li className="submenu dropdown">
                        <Link
                          to="/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Home Default
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="index-2.html">Home Default</Link>
                          </li>
                          <li>
                            <Link to="index-1.html">Home Video</Link>
                          </li>
                          <li>
                            <Link to="index-3.html">Home Slider</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="index-4.html">Home New 1</Link>
                      </li>
                      <li>
                        <Link to="index-5.html">Home New 2</Link>
                      </li>
                      <li>
                        <Link to="index-6.html">Home New 3</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="submenu dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Rooms<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/">Room List</Link>
                      </li>
                      <li>
                        <Link to="/">Room Grid</Link>
                      </li>
                      <li>
                        <Link to="detail-full.html">Room Detail</Link>
                      </li>
                      <li>
                        <Link to="detail-sidebar.html">Room Detail Sidebar</Link>
                      </li>
                      <li>
                        <Link to="availability.html">Check Availability</Link>
                      </li>
                      <li>
                        <Link to="room-select.html">Select Room</Link>
                      </li>
                      <li>
                        <Link to="booking.html">Booking Page</Link>
                      </li>
                      <li>
                        <Link to="confirmation.html">Confirmation Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="submenu dropdown">
                        <Link
                          to="/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Service
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="/services">Service</Link>
                          </li>
                          <li>
                            <Link to="/">Service Detail</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="submenu dropdown">
                        <Link
                          to="/about"
                          className="dropdown-toggle"
                          role="button"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="submenu dropdown">
                        <Link
                          to="gallery.html"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Gallery
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="gallery.html">Gallery 1</Link>
                          </li>
                          <li>
                            <Link to="gallery1.html">Gallery 2</Link>
                          </li>
                          <li>
                            <Link to="gallery2.html">Gallery Masonry</Link>
                          </li>
                          <li>
                            <Link to="gallery3.html">Gallery Lightbox</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="submenu dropdown">
                        <Link
                          to="events.html"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Events
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="events.html">Events One</Link>
                          </li>
                          <li>
                            <Link to="events1.html">Events Two</Link>
                          </li>
                          <li>
                            <Link to="events-detail.html">Events Detail</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="submenu dropdown">
                        <Link
                          to="contact.html"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Contact Us
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="contact.html">Contact One</Link>
                          </li>
                          <li>
                            <Link to="contact1.html">Contact Two</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="submenu dropdown">
                        <Link
                          to="404.html"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Error
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="404.html">Error Page 1</Link>
                          </li>
                          <li>
                            <Link to="404-1.html">Error Page 1</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="submenu dropdown">
                        <Link
                          to="comingsoon.html"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Comming Soon
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="comingsoon.html">Coming Soon 1</Link>
                          </li>
                          <li>
                            <Link to="comingsoon-1.html">Coming Soon 2</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="testimonial.html">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="pricing.html">Pricing</Link>
                      </li>
                      <li>
                        <Link to="faq.html">Faq</Link>
                      </li>
                      <li>
                        <Link to="terms.html">Terms and Conditions</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu dropdown">
                    <Link
                      to="restaurant"
                    >
                      Restaurant
                      {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                    </Link>
                    {/* <ul className="dropdown-menu">
                      <li>
                        <Link to="restaurant.html">Home</Link>
                      </li>
                      <li>
                        <Link to="restaurant-about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="restaurant-menu.html">Menu</Link>
                      </li>
                      <li>
                        <Link to="restaurant-reserve.html">Reservation</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="submenu dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="shop.html">Shop List</Link>
                      </li>
                      <li>
                        <Link to="shop-detail.html">Shop Single</Link>
                      </li>
                      <li>
                        <Link to="cart.html">Cart</Link>
                      </li>
                      <li>
                        <Link to="checkout.html">Checkout</Link>
                      </li>
                      <li>
                        <Link to="login.html">Account</Link>
                      </li>
                      <li>
                        <Link to="forgot-password.html">Forgot Password</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu dropdown">
                    <Link
                      to="blog-full.html"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="blog-full.html">Blog Fullwidth</Link>
                      </li>
                      <li>
                        <Link to="blog-left.html">Blog Left</Link>
                      </li>
                      <li>
                        <Link to="blog-right.html">Blog Right</Link>
                      </li>
                      <li>
                        <Link to="blog-masonry.html">Blog Masonry</Link>
                      </li>
                      <li>
                        <Link to="single-full.html">Blog Single</Link>
                      </li>
                      <li>
                        <Link to="single-left.html">Single Left</Link>
                      </li>
                      <li>
                        <Link to="single-right.html">Single Right</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dashboard
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="dashboard.html">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="dashboard-my-profile.html">
                          Dashboard Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="dashboard-booking.html">Dashboard Bookings</Link>
                      </li>
                      <li>
                        <Link to="dashboard-history.html">Dashboard History</Link>
                      </li>
                      <li>
                        <Link to="dashboard-list.html">Dashboard Listing</Link>
                      </li>
                      <li>
                        <Link to="dashboard-addtour.html">Dashboard Add Tour</Link>
                      </li>
                      <li>
                        <Link to="dashboard-reviews.html">Dashboard Reviews</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu">
                    <Link to="cart.html" className="mt_cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span className="number-cart">1</span>
                    </Link>
                  </li>
                </ul>
                <div className="nav-btn">
                  <Link to="/" className="btn btn-orange">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div id="slicknav-mobile"></div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
