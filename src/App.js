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

    switchNameHandler = (newName)=>{
      this.setState({
        persons : [{
            name: newName,
            age: 33
          },
          {
            name: "Robek",
            age: 54
          },
          {
            name: "Ewa123",
            age: 65
          }
        ]
      })
    }

    nameChangedHandler = (e, age) =>{
      this.setState({
        persons: [{
            name: "Max",
            age: 33
          },
          {
            name: e.target.value,
            age:  54
          },
          {
            name: "Ewa123",
            age: 65
          }
        ]
      })
    }

  render() {
    return (
      <div>
        <button onClick={()=>this.switchNameHandler('Radex')}>Click</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          change={this.nameChangedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
