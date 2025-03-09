import { Component } from 'react';
import './footer.css';
import clutchLogo from '../../assets/images/clutch-logo.svg';

export class Footer extends Component {
    render() {
        return (
            <>
                <section className='container my-2 py-2 border-top'>
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
                                        {/* <label className="b-header">08</label>
                                        <label className="b-suheader">Years</label> */}
                                    </div>
                                    <div className="banner-des">
                                        R-7 Street, Yamuna Nagar, Haryana 135001
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="banner">
                                        {/* <label className="b-header">98</label>
                                        <label className="b-suheader">%</label> */}
                                    </div>
                                    <div className="banner-des">
                                       <p className='mb-0'><a className="btn btn-link text-decoration-none text-secondary read-more p-0 " href="tel:06122500971">T: 0612-2500-971</a></p>
                                       <p className='mb-0'><a className="btn btn-link text-decoration-none text-secondary read-more p-0 " href="mailto:office@tecnologia.com">E: connect@finolity.com</a></p>
                                       
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className='d-flex justify-content-center align-items-center'>
                                        
                                        <div className='text-center p-2'>
                                            <p className='m-0'><i className='fa fa-linkedin-square'></i></p>
                                            <p>LinkedIn</p>
                                        </div>
                                        <div className='text-center p-2'>
                                            <p className='m-0'><i className='fa fa-github'></i></p>
                                            <p>Github</p>
                                        </div>
                                        <div className='text-center p-2'>
                                            <p className='m-0'><i className='fa fa-twitter-square'></i></p>
                                            <p>Twitter</p>
                                        </div>
                                        <div className='text-center p-2'>
                                            <p className='m-0'><i className='fa fa-facebook-square'></i></p>
                                            <p>Facebook</p>
                                        </div>
                                        {/* <i className='fa fa-linkedin-square'></i> */}

                                    </div>
                                    
                                </div>
                                
                                {/* <div className="col-6 col-md-3">
                                    <div className="banner">
                                        <label className="b-header">3</label>
                                        <label className="b-suheader">Mins</label>
                                    </div>
                                    <div className="banner-des">
                                        Average Answer Time
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='footer-links'>
                            <span>© 2025</span>
                            <a className='footer-link' href='https://finolity.com/'>finolity</a>
                            <a className='footer-link' href='https://finolity.com/terms-conditions/'>Terms & Conditions</a>
                            <a className='footer-link' href='https://finolity.com/privacy-policy/'>Privacy Policy</a>
                            <a className='footer-link' href='https://finolity.com/refund-and-cancellation-policy/'>Refund and Cancellation Policy</a>
                            <a className='footer-link' href='https://finolity.com/blog/'>Blog</a>
                            <a className='footer-link' href='https://finolity.com/case-studies/'>Case studies</a>
                            <a className='footer-link' href='https://finolity.com/events/'>Events</a>
                            <a className='footer-link' href='https://finolity.com/faq/'>FAQ</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}