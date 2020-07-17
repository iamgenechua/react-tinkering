import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Jim', age: 18},
      {id: '2', name: 'Nicole', age: 32},
      {id: '3', name: 'Desmond', age: 50},
      {id: '4', name: 'Harry', age: 91}
    ],
    otherState: 'additional values',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex (p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // spread out the details of that particular person into this object
    }

    person.name = event.target.value; // change the name of the person with the value typed in
    const persons = [this.state.persons]; // point to the persons object
    persons[personIndex] = person; // replace the person with the new person in the persons object

    this.setState({persons: person}); // officially set the state
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // pointer to the persons object
    persons.splice(personIndex, 1); // delete the person at the index
    this.setState({persons: persons}); // replace with updated persons
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; // pointer to the showPersons boolean
    this.setState({showPersons: !doesShow}); // replace with updated stated
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />; 
    }

    return (
      <div className='App'>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
