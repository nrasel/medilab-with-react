import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            {/*  to banner section */}
            <section id="top-banner" className="d-flex align-items-center">
                <div className="container">
                    <div className="banner-info text-start">
                        <h1 className="banner-heading">WELCOME TO MEDILAB</h1>
                        <p className="mb-3">Medilab,kochi's most trusted Diagnostic Center,since 1992</p>
                        <Link to="/doctors" className="doctors-btn">Go To Doctors</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;