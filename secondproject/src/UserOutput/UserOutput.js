import React from 'react';
import './UserOutput.css';

const output = (props) => {
    return (
        <div className="Output">
            <p>Hi I am  {props.name} and my favorite food is {props.food}</p>
            <p>Hi I am {props.name} and my favorite food is {props.food}</p>
        </div>
    )
};

export default output