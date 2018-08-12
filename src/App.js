import React, { Component } from 'react';
import Person from './componets/Person'
import './App.css';

class App extends Component {

    state = {
      persons: [{
          name: 'Radek',
          age: 33334
        },
        {
          name: 'Robek',
          age: 5454
        },
        {
          name: 'Ewa',
          age: 63344
        }
      ]
    };

    switchNameHandler = (newName, newAge)=>{
      this.setState({
        persons : [{
            name: newName,
            age: newAge
          },
          {
            name: 'Robek1234',
            age: 5454445674
          },
          {
            name: 'Ewa1234',
            age: 6334445644
          }
        ]
      })
    }

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler.bind(this, "Radoslaw", 9099)}>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );
  }
}

export default App;
