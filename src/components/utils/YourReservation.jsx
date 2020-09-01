import React, { Component } from "react";

class YourReservation extends Component {
  state = {
    price: this.props.price
  };
  componentWillReceiveProps(props) {
    this.setState({ price: props.price});
  }
  render() {
    return (
      <div className="col-md-4">
        <div className="detail-sidebar">
          <div className="sidebar-reservation">
            <h3>Your reservation</h3>
            <div className="reservation-detail">
              <div className="rd-top">
                {
                  <div className="rd-box">
                    <label>Check in</label>
                    <p className="bold">04</p>
                    <p>
                      August, 2019
                      <br />
                      Monday
                    </p>
                  </div>
                }
                {
                  <div className="rd-box">
                    <label>Check out</label>
                    <p className="bold">13</p>
                    <p>
                      August, 2019
                      <br />
                      Wednesday
                    </p>
                  </div>
                }
              </div>
              <div className="rd-top">
                <div className="rd-box">
                  <p className="bold">{`03`}</p>
                  <p>Guest</p>
                </div>
                <div className="rd-box">
                  <p className="bold">{10}</p>
                  <p>Night</p>
                </div>
              </div>
            </div>
            <table className="reservation-table table">
              <tbody>
                <tr>
                  <td>1 Room x 10 Nights</td>
                  <td>${this.state.price * 10}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>${80}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>${this.state.price * 10 + 80}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="sidebar-support">
            <h3>Help and Support</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ut arnare
            </p>
            <p>
              <i className="fa fa-phone"></i> 00 92 344 8781207
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default YourReservation;
