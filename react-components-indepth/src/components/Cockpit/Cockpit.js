import React, {useEffect} from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // Faking a http request
        setTimeout(() => {
            alert('saved data to the cloud');
        })
    }, [props.persons]); // will only execute if persons change. 
    // IF you only want to execute it when component runs first time,
    // just include a []. (empty array)

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = 'Red';
    }

    if (props.persons.length <= 2) {
        assignedClasses.push('red'); // assignedClasses = ['red'];
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold'); // assignedClasses = ['bold];
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Turns red when less than 3, also turns bold when less than 2</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Toggle Persons</button>
        </div>
        
    );
};

export default cockpit;