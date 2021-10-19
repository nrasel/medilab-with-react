import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <section className="newslatter py-5 mt-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="medilab-info text-start">
                                <h3>Medilab</h3>
                                <p >
                                    <span> A108 Green Road</span> <br />
                                    <span>Dhaka, NY 535022</span> <br />
                                    <span>Bangladesh</span><br />
                                    <span><strong>Phone: </strong>+1 5589 55488 55</span><br />
                                    <span><strong>Email:</strong> rnaimur313@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6  col-md-6">
                            <div className="useful-link d-flex flex-column">
                                <h4>Useful Links</h4>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Home</Link>
                                <Link to="/departments"><i className="fas fa-chevron-right"></i> Departments</Link>
                                <Link to="/doctors"><i className="fas fa-chevron-right"></i> Doctors</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> About Us</Link>

                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="useful-link d-flex flex-column">
                                <h4>Our Services</h4>
                                <Link to="/home" ><i className="fas fa-chevron-right"></i> Pathology</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Radiology</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Pharmacy</Link>
                                <Link to="/home"><i className="fas fa-chevron-right"></i> Physiotherapy</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="specialist-info">
                                <h4>Join Our Specialist</h4>
                                <p>An allergist or immunologist focuses on preventing and treating allergic diseases.</p>
                                <form action="" className="specialist-form">
                                    <input className="specialist-email" type="email" name="" id="" />
                                    <input className="subscribe-btn" type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer bottom */}
            <footer className="footer py-4">
                <div className="container">
                    <div className="row gy-4">
                        <div className=" col-lg-6 col-md-8 credit-center">
                            <div className="d-flex flex-column">
                                <div className="copyright ">
                                    © Copyright <strong>Medilab</strong>. All Rights Reserved
                                </div>
                                <div className="credits mt-2">
                                    Designed by <Link to="/home">Naimur Rahman</Link>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-4 ">
                            <div className="footer-social-icon ">
                                <Link to="/home"><i className="fab fa-twitter icon-align"></i>
                                    <Link to="/home"><i className="fab fa-facebook-f icon-align"></i></Link>
                                    <Link to="/home" ><i className="fab fa-instagram icon-align"></i></Link>
                                    <Link to="/home" ><i className="fab fa-skype icon-align"></i></Link>
                                    <Link to="/home" ><i className="fab fa-linkedin icon-align"></i></Link></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;