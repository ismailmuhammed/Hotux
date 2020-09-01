import React from 'react';
import img1 from "../../../resources/images/about1.jpg"
import img2 from "../../../resources/images/about2.jpg"
import img3 from "../../../resources/images/about3.jpg"
import img4 from "../../../resources/images/about4.jpg"
import { Link } from "react-router-dom"
const Regarding = () => {
  return (
    <section className="about-us">
        <div className="container">
            <div className="section-title">
                <h2>About <span>Us</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis</p>
            </div>
            <div className="about-outer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-content">
                            <h3 className="mar-bottom-30">Finest and Luxurious Hotel in the Town</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis gravida. Nunc vel maximus libero. Quisque ligula nisi, hendrerit et scelerisque et, scelerisque vitae magna. Integer sollicitudin, ex auctor iaculis tempor, mauris odio accumsan odio.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis gravida. Nunc vel maximus libero. Quisque ligula nisi, hendrerit et scelerisque et, scelerisque vitae magna. Integer sollicitudin, ex auctor iaculis tempor, mauris odio accumsan odio.</p>
                            <Link to="/about"  className="btn btn-orange mar-top-10">KNOW MORE ABOUT US <i className="fas fa-angle-double-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image">
                            <div className="image-box">
                                <div className="image-1 abt-image">
                                    <img src={img1} alt="ABC" />
                                </div>
                                <div className="image-2 abt-image">
                                    <img src={img2} alt="ABC" />
                                </div>
                            </div>
                            <div className="image-box">
                                <div className="image-3 abt-image">
                                    <img src={img3} alt="ABC" />
                                </div>
                                <div className="image-4 abt-image">
                                    <img src={img4} alt="ABC" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Regarding;