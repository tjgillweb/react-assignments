import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Learning React is fun! </p>
            <p onClick={props.click}>{props.name} loves React</p>
        </div>
    )
};

export default userOutput;