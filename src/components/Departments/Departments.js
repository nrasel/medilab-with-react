import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Department from '../Department/Department';
import './Departments.css'

const Departments = () => {
    const [department, setDepartment] = useState('Cardiology')

    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])

    const handleDepartments = (type) => {
        setDepartment(type)
        console.log(type)
    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2 text-center">
                        <div className="mt-5 pt-5 ">
                            <p className={department === "Cardiology" ? "menuLink" : "menuLinkActive"} onClick={() => handleDepartments("Cardiology")} >Cardiology</p>
                            <p className={department === "Neurology" ? "menuLink" : "menuLinkActive"} onClick={() => handleDepartments("Neurology")} >Neurology</p>
                            <p className={department === "Hepatology" ? "menuLink" : "menuLinkActive"} onClick={() => handleDepartments("Hepatology")} >Hepatology</p>
                            <p className={department === "Pediatrics" ? "menuLink" : "menuLinkActive"} onClick={() => handleDepartments("Pediatrics")} >Pediatrics</p>
                            <p className={department === "EyeCare" ? "menuLink" : "menuLinkActive"} onClick={() => handleDepartments("EyeCare")} >EyeCare</p>
                        </div>
                    </div>

                    {/* show menu item */}
                    <div className="col-sm-10 mt-5 pt-5 text-start">
                        <Container>
                            <Row xs={1} md={1} className="g-4 ">
                                {
                                    departments?.filter((dept) => department === dept?.type)?.map(dept => <Department key={dept.id} dept={dept} />)
                                }
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departments;