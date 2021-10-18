import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services?.filter((service) => service.type === "Service")?.map(service => <Service service={service} />)
                }
            </div>
        </div >
    );
};

export default Services;