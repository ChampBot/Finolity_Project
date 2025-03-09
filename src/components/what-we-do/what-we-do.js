import { Component } from 'react';
import './what-we-do.css';
import costEfect from '../../assets/images/cost-effec.png';
import innovative from '../../assets/images/innovative.png';
import industries from '../../assets/images/industries.png';
import scalability from '../../assets/images/scalability.png';
export class WhatWeDo extends Component {
    render() {
        return (
            <>
                <section className='container what-we-do mb-2'>
                    <div className='row m-0 flex-column'>
                        <div className='col-12'>
                            <label className='title'>What we do</label>
                        </div>
                        <div className='col-12 mt-5 d-none d-sm-block dummy'></div>
                        <div className='col-12'>
                            <h2 className='simplifying'>Simplifying IT <br />for a complex world.</h2>
                        </div>
                    </div>
                </section>
                <section className='container what-we-do-info py-5 mb-5 border-bottom'>
                    <div className='row m-0'>
                        <div className='col-12 p-0 col-sm-3'>
                            <div className="card border-0">
                                <img src={costEfect} className="card-img-top" alt="Cost-effectiveness" />
                                <div className="card-body">
                                    <h5 className="card-title">Cost-effectiveness</h5>
                                    <p className="card-text">We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 p-0 col-sm-3'>
                            <div className="card border-0">
                                <img src={innovative} className="card-img-top" alt="Innovative Technology" />
                                <div className="card-body">
                                    <h5 className="card-title">Innovative Technology</h5>
                                    <p className="card-text">We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 p-0 col-sm-3'>
                            <div className="card border-0">
                                <img src={industries} className="card-img-top" alt="Industry Expertise" />
                                <div className="card-body">
                                    <h5 className="card-title">Industry Expertise</h5>
                                    <p className="card-text">We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 p-0 col-sm-3'>
                            <div className="card border-0">
                                <img src={scalability} className="card-img-top" alt="Scalability" />
                                <div className="card-body">
                                    <h5 className="card-title">Scalability</h5>
                                    <p className="card-text">Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}