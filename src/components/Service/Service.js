import React from 'react';
import '../Services/Services.css'

const Service = (props) => {
    const { name } = props.service
    console.log(props)
    return (
        <div className="mt-5 pt-5">
            <div className="">
                <div className="service-box h-100">
                    <div className="service-icon">
                        <i className="fas fa-heartbeat"></i>
                    </div>
                    <h4 className="my-4">Lorem Ipsum</h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
            </div>
        </div>
    );
};

export default Service;