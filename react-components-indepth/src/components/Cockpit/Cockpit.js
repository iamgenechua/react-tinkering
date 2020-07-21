import React, {useEffect, useRef, useContext} from 'react'; //useContext hook allows you to have access to your context in your func component 
import './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null); // useRef hook
    const authContext = useContext(AuthContext);

    useEffect(() => { // useEffect runs after every render cycle
        console.log('[Cockpit.js] useEffect');
        console.log(authContext.authenticated);

        // Faking a http request
        setTimeout(() => {
            alert('saved data to the cloud');
        }, 1000);
        toggleBtnRef.current.click(); // auto click the toggle button upon refresh
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect'); // runs after useEffect but before render
        }
    }, []); // [props.persons] will only execute if persons change. 
    // IF you only want to execute it when component runs first time,
    // just include a []. (empty array)

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = 'Red';
    }

    if (props.personsLength <= 2) {
        assignedClasses.push('red'); // assignedClasses = ['red'];
    }
    if (props.personsLength <= 1) {
        assignedClasses.push('bold'); // assignedClasses = ['bold];
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Turns red when less than 3, also turns bold when less than 2</p>
            <button
                ref = {toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}
            >Toggle Persons</button>
            <button onClick={authContext.login}>
                    Log In
            </button>
            
        </div>
        
    );
};

export default React.memo(cockpit); // use memoisation so that re-render only happens when props change