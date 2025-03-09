import React from "react";
import '../what-we-do/what-we-do.css';
import "./how-we-do.css";
import {SolutionCard} from "../solution-card/solution-card";
import itbanner  from "../../assets/images/itsolutions.jpg";
import clutchbanner  from "../../assets/images/clutch-baner.png";
import manufacuturing  from "../../assets/images/manufacuturing.jpg";
import transportation  from "../../assets/images/transportation.jpg";
import heathcare from "../../assets/images/heathcare.jpg";
import bankinsu from "../../assets/images/bank_insurence.jpg";
import consultingpro from "../../assets/images/consultingpro.jpg";
import nonprofit from "../../assets/images/nonprofit.jpg";

import { SolutionBadge } from "../solution-badge/solution-badge";

export class HowWeDo extends React.Component {
    list = [
        {
            imageClass: "fa fa-2x fa-puzzle-piece",
            headerTitle: "Managed Services",
            description: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT."
        },
        {
            imageClass: "fa fa-2x fa fa-users",
            headerTitle: "IT Consulting & Advisory",
            description: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth"
        },
        {
            imageClass: "fa fa-2x fa-shield",
            headerTitle: "Cyber Security",
            description: "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data."
        },
        {
            imageClass: "fa fa-2x fa-desktop",
            headerTitle: "Web Development",
            description: "Our web development services can help you establish an impactful online presence and reach your target audience effectively."
        },
        {
            imageClass: "fa fa-2x fa-mobile",
            headerTitle: "Mobile Development",
            description: "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms."
        },
        {
            imageClass: "fa-2x fa fa-cloud-upload",
            headerTitle: "Cloud Services",
            description: "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals."
        }
    ];
    badges = [
        {
            title: "Industry & Manufacturing",
            imageSrc: manufacuturing
        },
        {
            title: "Transportation & Logistics",
            imageSrc: transportation
        },
        {
            title: "Healthcare",
            imageSrc: heathcare
        },
        {
            title: "Banks & Insurance",
            imageSrc: bankinsu
        },
        {
            title: "Consulting Providers",
            imageSrc: consultingpro
        },
        {
            title: "Non-Profit",
            imageSrc: nonprofit
        }
    ]
    render() {
        return (<>
            <div className="how-we-do">
                <section className='container mb-2'>
                    <div className='row m-0 flex-column'>
                        <div className='col-12'>
                            <label className='title text-dark'>How we do</label>
                        </div>
                        <div className='col-12'>
                            <h2 className='simplifying text-danger'>Solutions</h2>
                        </div>
                    </div>
                    <div className="row mx-0 my-3">
                        {this.list.map((card, index) => {
                            return (<div key={index} className='col-12 col-sm-4 mb-2'>
                                <SolutionCard  imageClass={card.imageClass} headerTitle={card.headerTitle} description={card.description}></SolutionCard>
                            </div>)
                        })}
                    </div>
                    <div className="d-flex justify-content-center pb-5 m-5">
                        <button type="button" className="btn btn-dark">View All Solutions</button>
                    </div>
                </section>
            </div>
            <div className="it-challenges bg-white">
                <section className="container position-relative">
                    <div className="it-banner">
                        <img className="w-100 rounded-5" src={itbanner} alt="it banner"/>
                    </div>
                    <div className="it-clutch position-absolute">
                        <img src={clutchbanner} alt="TOP IT SOFTWARE BADGE"/>
                    </div>
                </section>
                <section className="container my-5">
                    <div className='row m-0 flex-column'>
                        <div className='col-8 mx-auto'>
                            <label className='title text-dark bg-body-secondary p-2 rounded-1 text-body-tertiary'>How we do</label>
                        </div>
                        <div className='col-8 mx-auto pt-3'>
                            <h2 className='simplifying text-danger w-100 text-dark'>Solving IT challenges in every industry, every day.</h2>
                        </div>
                        <div className="col-8 flex-wrap mx-auto pt-5 industry-badges d-flex">
                            {this.badges.map((badge, index) => {
                                return (<SolutionBadge key={index} imageSrc={badge.imageSrc} title={badge.title}></SolutionBadge>)
                            })}
                        </div>
                        <div className="col-8 flex-wrap mx-auto pt-5 industry-badges d-flex">
                            <button type="button" className="btn btn-link text-decoration-none border-3 border-bottom text-dark view-all-button p-0">View All Industries</button>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-12">
                            <button type="button" className="btn btn-link text-decoration-none border-3 border-bottom text-dark view-all-button p-0">About Finolity Consultancy Services</button>
                        </div>
                    </div>
                </section>
            </div>
        </>)
    }
}