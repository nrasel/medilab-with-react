import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const SingleService = () => {
    const { id } = useParams()

    const [serviceDetails, setServiceDetails] = useState([])
    const [singleServiceDetails, setsingleServiceDetails] = useState({})

    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        const foundService = serviceDetails.find(service => service.id === id)
        setsingleServiceDetails(foundService)
    }, [serviceDetails, id])


    return (
        <div className="">
            <div className="row row-cols-1 row-cols-md-4 g-4 m-auto mt-5 pt-5">
                <div className="service-box m-auto h-100">
                    <div className="">
                        <img className="service-img img-fluid" src={singleServiceDetails?.img} alt="" />
                    </div>
                    <h4 className="my-4">{singleServiceDetails?.title}</h4>
                    <p>{singleServiceDetails?.desc?.slice(0, 100)}</p>
                    <NavLink to="/services" className="appoinment-btn text-white rounded-pill border-0">Back To Services</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SingleService;