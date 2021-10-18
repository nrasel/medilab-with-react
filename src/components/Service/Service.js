import React from 'react';
import '../Services/Services.css'

const Service = (props) => {
    const { title, desc, img } = props.service
    console.log(props)
    return (
        <div>
            <div className="">
                <div className="service-box h-100">
                    <div className="">
                        <img className="service-img img-fluid" src={img} alt="" />
                    </div>
                    <h4 className="my-4">{title}</h4>
                    <p>{desc.slice(0, 100)}</p>
                    <button className="appoinment-btn text-white rounded-pill  border-0">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;