import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push('red'); // assignedClasses = ['red'];
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold'); // assignedClasses = ['bold];
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>Turns red when less than 3, also turns bold when less than 2</p>
            <button
                onClick={props.clicked}
            >Toggle Persons</button>
        </div>
        
    );
};

export default cockpit;