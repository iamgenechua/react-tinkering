import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: "Jim", age: 16}
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className ="button" onClick={this.togglePersonsHandler}>Toggle Name</button>
          {persons}
      </div>
    );
  }
}

export default App;
