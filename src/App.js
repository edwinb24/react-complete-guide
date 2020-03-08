import React, { Component } from 'react';
import './css/App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {name: "Edwin", age: 29},
      {name: "Ana", age: 22},
      {name: "Manu", age: 23}
    ],
    otherState: "Hi, Im other info",
    showPersons: false
  }

  tooglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  switchName = (newName) => {
    this.setState ({
      persons: [
        {name: newName, age: 29},
        {name: "Ana", age: 22},
        {name: "Manu", age: 34}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name: 'Max', age: 29},
        {name: event.target.value, age: 22},
        {name: "Manu", age: 45}
      ]
    })
  }

  render () {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid red',
      padding: "8px"
    }

    let persons = this.state.showPersons ?
      <div>
        {this.state.persons.map(person => {
        return <Person 
          name={person.name} 
          age={person.age} 
         />
        })}
      </div>
    : null
 
    

    return (
      <div className="App">
        <button onClick={this.tooglePersonHandler} style={style}>Toogler Person!</button>
        {persons}
      </div>
    )
  }
}

export default App;


  // state = {
  //   persons:[
  //     {name:"Edwin", age:29},
  //     {name:"Manu", age:25},
  //     {name:"Stephanie", age:26}
  //   ],
  //   otherState: "some info"
  // }
  // switchPersonHandler = () => {
  //   //console.log("Hey, I was click")
  //   this.setState({persons:
  //     [
  //       {name:"Maximilian", age:29},
  //       {name:"Manu", age:25},
  //       {name:"Stephanie", age:29}
  //     ]
  //   })
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
  //       <button onClick={this.switchPersonHandler}>Switch Person</button>
  //       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
  //       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
  //     </div>
  //   )
  // }
