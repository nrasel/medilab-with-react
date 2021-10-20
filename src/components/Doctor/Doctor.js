import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = (props) => {
    const { name, title, desc, img } = props.doctor
    return (
        <div >
            <div>
                <div className="member d-flex align-items-center d-block justify-content-start">
                    <div className="member-img me-4">
                        <img src={img} className="img-fluid d-block" alt="" />
                    </div>
                    <div className="member-info text-start">
                        <h4>{name}</h4>
                        <span className="">{title}</span>
                        <p>{desc.slice(0, 50)}</p>
                        <div className="member-social-icon d-flex flex-row mt-3">
                            <Link to="/doctors"><i className="fab fa-twitter"></i></Link>
                            <Link to="/doctors"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/doctors"><i className="fab fa-instagram"></i></Link>
                            <Link to="/doctors"><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;