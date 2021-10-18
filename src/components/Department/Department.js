import React from 'react';

const Department = (props) => {
    console.log(props.dept)
    const { title } = props.dept
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Department;