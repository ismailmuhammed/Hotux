import React from 'react';

const Amenities = () => {
  return (
    <section className="amenities">
        <div className="container">
            <div className="section-title">
                <h3>Explore <span>Amenities</span></h3>
            </div>
            <div className="amenities-content">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item mar-bottom-30">
                            <div className="amt-icon">
                                <i className="fa fa-glass" aria-hidden="true"></i>
                            </div>
                            <h4>Private bar</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item mar-bottom-30">
                            <div className="amt-icon">
                                <i className="fa fa-car" aria-hidden="true"></i>
                            </div>
                            <h4>Transport</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item mar-bottom-30">
                            <div className="amt-icon">
                                <i className="fa fa-wifi" aria-hidden="true"></i>
                            </div>
                            <h4>Free wifi</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item mar-bottom-30">
                            <div className="amt-icon">
                                <i className="fa fa-bath" aria-hidden="true"></i>
                            </div>
                            <h4>Laundry service</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item">
                            <div className="amt-icon">
                                <i className="fa fa-cogs" aria-hidden="true"></i>
                            </div>
                            <h4>Quick service</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item">
                            <div className="amt-icon">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <h4>City map</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item">
                            <div className="amt-icon">
                                <i className="fa fa-life-ring" aria-hidden="true"></i>
                            </div>
                            <h4>Swimming pool</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="amt-item">
                            <div className="amt-icon">
                                <i className="fa fa-bolt" aria-hidden="true"></i>
                            </div>
                            <h4>Smoking free</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Amenities;