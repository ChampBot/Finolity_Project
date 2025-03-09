import React from "react";
import "./main-banner.css";
import clutchLogo from '../../assets/images/clutch-logo.svg';
export class MainBanner extends React.Component {
    render() {
        return <>
            <div className="container px-0">
                <section className="main-banner row m-0 py-sm-5 border-bottom">
                    <div className="details col-12 col-md-6 p-0">
                        <div className="banner-heading my-sm-4">
                            <h1>We manage your IT, so you can manage your business.</h1>
                        </div>
                        <div className="banner-subheading my-5">
                            <p>Take charge of your business continuity with innovative IT solutions</p>
                        </div>
                        <div className="banner-action">
                            <button type="button" className="m-2 btn btn-danger">Schedule a Free Consultation</button>
                            <button type="button" className="m-2 btn btn-dark">Services</button>
                        </div>
                    </div>
                    <div className="banner-image col-12 col-md-6 p-0">
                    </div>
                </section>
                <section className="py-5 border-bottom">
                    <div className="row m-0">
                        <div className="col-12 col-md-3 p-0">
                            <div className="rating mb-2">
                                <label>REVIEWED ON</label>
                                <span className="ms-4">
                                    <i className="fa fa-star highlight"></i>
                                    <i className="fa fa-star highlight"></i>
                                    <i className="fa fa-star highlight"></i>
                                    <i className="fa fa-star highlight"></i>
                                    <i className="fa fa-star highlight"></i>
                                </span>
                            </div>
                            <div className="agency">
                                <img src={clutchLogo} alt="clutch-logo"/>
                                <span className="ms-4">2k+ REVIEWS</span>
                            </div>
                            <hr className="d-block d-md-none"/>
                        </div>
                        <div className="col-12 col-md-9 p-0">
                            <div className="row m-0">
                                <div className="col-6 col-md-3">
                                    <div className="banner">
                                        <label className="b-header">08</label>
                                        <label className="b-suheader">Years</label>
                                    </div>
                                    <div className="banner-des">
                                        Proven Track Record
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="banner">
                                        <label className="b-header">98</label>
                                        <label className="b-suheader">%</label>
                                    </div>
                                    <div className="banner-des">
                                        Customer Satisfaction
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="banner">
                                        <label className="b-header">470+</label>
                                        <label className="b-suheader">Projects</label>
                                    </div>
                                    <div className="banner-des">
                                        We Have Completed
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="banner">
                                        <label className="b-header">3</label>
                                        <label className="b-suheader">Mins</label>
                                    </div>
                                    <div className="banner-des">
                                        Average Answer Time
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            </>
    }
}