import React from 'react';
import headerImage from '../../assets/images/comp-logo.png';
import './header.css';
export class Header extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg">
                    <div className="container border-bottom p-0 pb-1 border-1 it-header">
                        <a className="navbar-brand me-0" href="/">
                            <img className="logo" src={headerImage} alt="Intelion" />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-sm-auto mb-sm-2 mb-lg-0 flex-wrap">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/services/action">Action</a></li>
                                        <li><a className="dropdown-item" href="/services/another">Another action</a></li>
                                        <li><a className="dropdown-item" href="/services/something">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/industries">Industries</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/market-research" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Market Research
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/services/action">Action</a></li>
                                        <li><a className="dropdown-item" href="/services/another">Another action</a></li>
                                        <li><a className="dropdown-item" href="/services/something">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/company" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Company
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/services/action">Action</a></li>
                                        <li><a className="dropdown-item" href="/services/another">Another action</a></li>
                                        <li><a className="dropdown-item" href="/services/something">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/brands" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Brands
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/adobe">Adobe</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex ms-auto ps-sm-3 pe-0">
                            <div className="d-md-flex flex-column pe-3 ps-2 d-none">
                                <div className="client-support">
                                    <a href='/client-support'>
                                        Client Support
                                    </a>
                                </div>
                                <div className="support-number">
                                    <a href="tel:18003568933">0612-2500971</a>
                                </div>
                            </div>
                            <button className="btn btn-dark px-4 contact-us button-radius" type="button">Contact Us</button>
                        </div>
                        <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </>
        )
    }
}