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

    switchNameHandler = ()=>{
      this.setState({
        persons : [{
            name: 'Radek1234',
            age: 3344566334
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
        <button onClick={this.switchNameHandler}>Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );
  }
}

export default App;
