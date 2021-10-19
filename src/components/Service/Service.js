import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Services/Services.css'

const Service = (props) => {
    const { title, desc, img, id } = props.service
    return (
        <div>
            <div className="">
                <div className="service-box h-100">
                    <div className="">
                        <img className="service-img img-fluid" src={img} alt="" />
                    </div>
                    <h4 className="my-4">{title}</h4>
                    <p>{desc.slice(0, 100)}</p>
                    <NavLink to={`/service/${id}`} className="appoinment-btn text-white rounded-pill border-0">Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;