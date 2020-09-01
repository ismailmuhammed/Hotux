import React from 'react';
import visa from "../../../resources/images/icons/visa.png"
import mastercard from "../../../resources/images/icons/mastercard.png"
import americanexpress from "../../../resources/images/icons/americanexpress.png"
import appstore from "../../../resources/images/icons/appstore.png"
import googleplay from "../../../resources/images/icons/googleplay.png"
import tripadvisor from "../../../resources/images/tripadvisor.png"
import logo from "../../../resources/images/logo.png";
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="footer-logo text-center">
                    <img src={logo} alt="Hotux"/>
                </div>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-about">
                                <h4>Company Info</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tellus vitae justo blandit ultrices.</p>
                            </div>
                            <div className="footer-payment">
                                <h4>We Accept</h4>
                                <ul>
                                    <li><img src={visa} alt="Hotux"/></li>
                                    <li><img src={mastercard} alt="Hotux"/></li>
                                    <li><img src={americanexpress} alt="Hotux"/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="quick-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">About</Link></li>
                                    <li><Link to="/">Rooms</Link></li>
                                    <li><Link to="/">Testimonials</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Gallery</Link></li>
                                    <li><Link to="/">Services</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="Rooms">
                                <h4>Rooms</h4>
                                <ul>
                                    <li><Link to="/">Single Rooms</Link></li>
                                    <li><Link to="/">Double Rooms</Link></li>
                                    <li><Link to="/">Studio Rooms</Link></li>
                                    <li><Link to="/">Kingsize Rooms</Link></li>
                                    <li><Link to="/">Presidentsuite Rooms</Link></li>
                                    <li><Link to="/">Luxury Kings Rooms</Link></li>
                                    <li><Link to="/">Connecting Rooms</Link></li>
                                    <li><Link to="/">Murphy Rooms</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-contact">
                                <h4>Contact info</h4>
                                <ul>
                                    <li>Tel: 977-222-444-6666</li>
                                    <li>Email: info@hotux.com.np</li>
                                    <li>Fax: 977-222-444-666</li>
                                    <li>Address: 445 Mount Eden Road, Sundarbasti, Chakrapath</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="copyright-content">
                            <p>Copyright 2019. Made with <span>♥</span>. All Rights Reserved. <Link to="/">Hotux</Link></p>
                            <ul>
                                <li><Link to="/"><i className="fab fa-facebook" aria-hidden="true"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-twitter" aria-hidden="true"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-instagram" aria-hidden="true"></i></Link></li>
                                <li><Link to="/"><i className="fab fa-google-plus" aria-hidden="true"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="tripadvisor-logo text-center">
                            <img src={tripadvisor} alt="Hotux"/>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="copyright-links mar-bottom-20">
                            <ul>
                                <li><Link to="/">Accomodations</Link></li>
                                <li><Link to="/">Book Now</Link></li>
                                <li><Link to="/">Terms and Conditions</Link></li>
                            </ul>
                        </div>
                        <div className="playstore-links">
                            <img src={appstore} alt="Hotux" className="mar-right-10"/>
                            <img src={googleplay} alt="Hotux"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;