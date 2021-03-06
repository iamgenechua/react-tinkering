import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

// everything between the double tics must be written in css style. e.g. use background-color instead of backgroundColor

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

    let btnClass = [classes.Button];

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

      btnClass.push(classes.Red); // will get .button.Red
    }

    let assignedClasses = []; // turn array of strings into one string called 'red bold'
    if (this.state.persons.length < 3) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }


    // style is a inbuilt variable
    return (
      <div className={assignedClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>If less than 3 people, turn red. If less than 2 people, turn bold and red</p>
        <button className ={btnClass.join(' ')} onClick={this.togglePersonsHandler}>Toggle Name</button>
          {persons}
      </div>
    );
  }
}

export default App;

// you can also use radium to use media query, but wrap everything in StyleRoot