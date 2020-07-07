import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input'
import Output from './Output/Output'

class App extends Component {
  state = {
    output: [
      {username: "usp_kangaroo", password: "minecraft"},
      {username: "usp_ostrich", password: "javascript"}
    ]
  }

  switchAccountHandler = (name, pass) => {
    this.setState(
      {output: [
        {username: name, password: pass},
        {username: "usp_ostrich", password: "javascript"}
      ]});
  }

  accountChangedHandler = (event) => {
    this.setState(
      {output: [
        {username: event.target.value, password: 'customisedPassword'},
        {username: event.target.value, password: "javascript"}
      ]});
  }

  render() {
    return (
      <div>
        <Input
        username={this.state.output[0].username}
        password={this.state.output[0].password}
        changed={this.accountChangedHandler}>
        </Input>
        <button className="button" onClick={this.switchAccountHandler.bind(this, 'usp_default', 'abc123')}>
          Click to get Default Account
        </button>
        <Output 
          username={this.state.output[0].username}
          password={this.state.output[0].password}
          >
        </Output>
      </div>
    )
  }
}

export default App;
