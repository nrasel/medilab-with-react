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
        <div className="container mt-5 pt-2">
            <div class="section-title mb-5">
                <h1 class="position-relative">Services</h1>
                <p>Medical Service Company specializes in sleep disorder and chronic-respiratory disease management.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services?.filter((service) => service.type === "Service")?.map(service => <Service service={service} />)
                }
            </div>
        </div >
    );
};

export default Services;