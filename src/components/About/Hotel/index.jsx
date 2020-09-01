import React, { Component } from 'react';

class Hotel extends Component {
  render() {
    return (
      <section className="about-counter">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-item">
              <p className="icon1">
                <i className="fa fa-suitcase"></i>
              </p>
              <h3 className="room">487</h3>
              <p>Rooms</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-item">
              <p className="icon1">
                <i className="fa fa-users"></i>
              </p>
              <h3 className="staff">1256</h3>
              <p>Staffs</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-item">
              <p className="icon1">
                <i className="fa fa-glass-cheers"></i>
              </p>
              <h3 className="restaurant">16</h3>
              <p>Restaurant & Bars</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="counter-item">
              <p className="icon1">
                <i className="fa fa-trophy"></i>
              </p>
              <h3 className="award">117</h3>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Hotel;
