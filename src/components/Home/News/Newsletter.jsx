import React from "react";
import { Link } from "react-router-dom"
const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="section-title title-white">
          <h2>
            Subscribe to our <span>Newsletter</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
            neque, sodales accumsan sapien et, auctor vulputate quam donec vitae
            consectetur turpis
          </p>
        </div>
        <div className="newsletter-form">
          <form>
            <input type="email" placeholder="Enter your email" />
            <Link to="/signup" className="btn btn-orange">
              SIGN UP
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
