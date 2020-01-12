import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// lower case components are html native where as components you create need to be capitalised

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 21 },
      { name: 'Steph', age: 21 }

    ]
  }

  switchNameHandler = () => {
    this.state.persons[0].age = Math.random
  }

  render() {
    return (
      <div className="App">
        <h1>My second first React App ~ Jules Riv</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person age={this.state.persons[0].age} name={this.state.persons[0].name} />
        <Person age={this.state.persons[1].age} name={this.state.persons[1].name}>My hobbies: cooking</Person>
        <Person age={this.state.persons[2].age} name={this.state.persons[2].name} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I'm a react App' ))
  }
}

export default App;
