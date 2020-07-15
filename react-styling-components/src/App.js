import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: "Jim", age: 16},
      {id: '3', name: "Shane", age: 24},
      {id: '4', name: "Bean", age: 50}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); // find the person that matches the person ID

    const person = {
      ...this.state.persons[personIndex]
    } // spread the items in the javascript object

    person.name = event.target.value; // replace the name with the stuff written in the input

    const persons = [...this.state.persons]; // make a copy of the persons array
    persons[personIndex] = person; // update the person's name at the specified index

    this.setState({persons: persons}); // set the state to the updated array with the updated name
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // make sure update state immutable
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    const style = {
      // try not to use inline styles, but using now to demonstrate Radium
      ':hover': {
        backgroundColor: 'orange',
        color: 'pink'
      } // values are the set of styles for the hover state
    };

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            name= {person.name} 
            age= {person.age}
            click= {this.deletePersonHandler.bind(this, index)}  
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        })}
        </div>
      );
      style.backgroundColor = 'hotpink'; // dynamically change color with inline javascript styling
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'white'
      };
    }

    let classes = []; // turn array of strings into one string called 'red bold'
    if (this.state.persons.length < 3) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }


    // style is a inbuilt variable
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>If less than 3 people, turn red. If less than 2 people, turn bold and red</p>
          <button className ="button" onClick={this.togglePersonsHandler} style={style}>Toggle Name</button>
            {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

// you can also use radium to use media query, but wrap everything in StyleRoot