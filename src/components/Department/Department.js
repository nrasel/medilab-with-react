import React from 'react';

const Department = (props) => {
    console.log(props.dept)
    const { title, img, desc } = props.dept
    return (
        <div className="">
            <h2>{title}</h2>
            <p className="description img-fluid">{desc}</p>
            <img className="depart-img" src={img} alt="" />
        </div>
    );
};

export default Department;