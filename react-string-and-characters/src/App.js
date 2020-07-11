import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: ''
  }
  
  // function that changes state of text according to input written
  inputChangedHandler = (event) => {
    this.setState({text: event.target.value});
  }

  deleteCharHandler = (index) => {
    const newText = this.state.text.split(''); // get an array of chars
    newText.splice(index, 1); // remove character at that index
    const updatedText = newText.join('');
    this.setState({text: updatedText});
  }

  render() {

    const charList = this.state.text.split('').map((char, index) => {
      return <Char 
        character={char} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}></Char>
    });

    return (
     <div>
       <input 
        type="text" 
        onChange={this.inputChangedHandler} // using reserved keyword onChange to continually set state of text based on input
        value = {this.state.text}/>
       <p>{this.state.text}</p>
       <Validation inputLength={this.state.text.length}></Validation>
       {charList}
     </div>
    );
  }
}

export default App;
