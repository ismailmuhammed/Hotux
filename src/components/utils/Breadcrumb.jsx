import React from "react";
import {Link} from "react-router-dom"
const Breadcrumb = (props) => {
  return (
    <section className="breadcrumb-outer">
      <div className="container">
        <div className="breadcrumb-content">
          <h2>{props.page}</h2>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Hotux</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.page}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;