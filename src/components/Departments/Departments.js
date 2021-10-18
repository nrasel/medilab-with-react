import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Department from '../Department/Department';
import './Departments.css'

const Departments = () => {
    const [departments, setDepartments] = useState('Breakfast')

    const [department, setDepartment] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDepartment(data))
    }, [])

    const handleMenuItem = (type) => {
        setDepartments(type)
        console.log(type)
    }


    return (
        <div>
            <div className="mt-5 pt-5 d-flex justify-content-center algin-items-center">
                <p className={departments === "Cardiology" ? "menuLink" : "menuLinkActive"} onClick={() => handleMenuItem("Cardiology")} >Cardiology</p>
                <p className={departments === "Neurology" ? "menuLink" : "menuLinkActive"} onClick={() => handleMenuItem("Neurology")} >Neurology</p>
                <p className={departments === "Hepatology" ? "menuLink" : "menuLinkActive"} onClick={() => handleMenuItem("Hepatology")} >Hepatology</p>
                <p className={departments === "Pediatrics" ? "menuLink" : "menuLinkActive"} onClick={() => handleMenuItem("Pediatrics")} >Pediatrics</p>
                <p className={departments === "EyeCare" ? "menuLink" : "menuLinkActive"} onClick={() => handleMenuItem("EyeCare")} >EyeCare</p>
            </div>

            {/* show menu item */}
            <div >
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            department.filter((item) => departments === item.type).map(item => <Department {...item} />)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Departments;