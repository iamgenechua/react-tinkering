import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = { // initialise state outside of constructor as part of modern JS syntax
    persons: [
      {id: '1', name: 'Jim', age: 18},
      {id: '2', name: 'Nicole', age: 32},
      {id: '3', name: 'Desmond', age: 50},
      {id: '4', name: 'Harry', age: 91}
    ],
    otherState: 'additional values',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true; // returning false would prevent the update of props and not let the Person element be generated
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex (p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] // spread out the details of that particular person into this object
    }

    person.name = event.target.value; // change the name of the person with the value typed in
    const persons = [...this.state.persons]; // point to the array of persons
    persons[personIndex] = person; // replace the person with the new person in the persons object

    this.setState({persons: persons}); // officially update the state
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
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      </div>
      )
    }

    return (
      <div className='App'>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
