import React from 'react';
import './Output.css';

const Output = (props) => {
    return (
        <div className="Output">
            <h1>Output</h1>
            <p>Username is {props.username}</p>
            <p>Password is {props.password}</p>
        </div>
    )
}

export default Output;