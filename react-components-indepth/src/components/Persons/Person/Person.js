import React, {Component, Fragment} from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef(); // any reference object react gives me. only for class based compoenents
    }
    
    static contextType = AuthContext; // allows react to connect the classbased component to your context

    componentDidMount() {
        this.inputElementRef.current.focus(); // focus on the last rendered element
        console.log(this.context.authenticated);
    }



    render () {
        console.log('[Person.js] rendering...')
        // onChange accepts an event (nameChangedHandler)
        return (
            <Fragment>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                ref={this.inputElementRef} // elements can have reference points
                type="text"
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Fragment>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func, // i expect to get a function
    name: PropTypes.string, // i expect name to be a string
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;