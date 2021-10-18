import React, { useState } from 'react';

const Departments = () => {
    const [Id, setId] = useState()

    const handleDepartments = (id) => {
        setId(id)
    }
    return (
        <div>
            <section className="departments">
                <div className="container">
                    <div className="section-title text-center">
                        <h1 className="position-relative">Departments</h1>
                        <p className="mb-5">Magnam dolores commodi suscipit.Necessitatibus eius consequatur ex aliquid fuga eum quidem.Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <p onClick={() => handleDepartments(1)} className="nav-link show active" data-bs-toggle="tab" href="#tab-1">Cardiolgy</p>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => handleDepartments(2)} className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => handleDepartments(3)} className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => handleDepartments(4)} className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => handleDepartments(5)} className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content">
                                <div className="tab-pane show active" >

                                    <div className="row">
                                        <div className="col-lg-8 order-2 order-lg-1">
                                            <h3>Cardiolgy</h3>
                                            <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Et nobis maiores eius.Voluptatibus ut enim blanditiis atque harum sint.Laborum eos ipsum ipsa odit magni.Incidunt hic ut molestiae aut qui.Est repellat minima eveniet eius et quis magni nihil.Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                        </div>
                                        <div className="col-lg-4 order-1 order-lg-2">
                                            <img src="images/departments-1.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Departments;