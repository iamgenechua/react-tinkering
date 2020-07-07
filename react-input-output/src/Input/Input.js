import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className="Input">
            <p>Username</p>
            <input type="text" onChange={props.changed} value={props.username}/>
            <p>Password</p>
            <input type="text" onChange={props.changed} value={props.password}/>
        </div>
    )
}

export default Input;