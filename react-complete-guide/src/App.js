import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: "Jim", age: 16}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 28},
      {name: "Max", age: 16}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'nameChanged', age: 28},
      {name: event.target.value, age: 99}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className ="button" onClick={() => this.switchNameHandler('Button Person')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'paragraph person')}> 
            Hobbies: Racing
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler /* more recommended */ }>
          </Person>
      </div>
    );
  }
}

export default App;
