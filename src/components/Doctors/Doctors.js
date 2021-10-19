import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            {
                <div className="container pt-5 mt-5">
                    <div className="section-title text-center">
                        <h1 className="position-relative">Meet Our Doctors</h1>
                        <p className="mb-5">Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history.</p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            doctors?.filter((doctor) => doctor.type === "doctor")?.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                        }
                    </div>
                </div>
            }
        </div >
    );
};

export default Doctors;