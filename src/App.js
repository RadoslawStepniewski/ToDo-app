import React, { Component } from 'react';
import Person from './componets/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Person name={"Radek"} age={23}/> 
        <Person name={"Robek"} age={27}/> 
        <Person name={"Ewa"} age={25}/> 
        
      </div>
    );
  }
}

export default App;
