import React, { Component } from 'react';

import './css/App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"a1", name: "Edwin", age: 29},
      {id:"b2", name: "Ana", age: 22},
      {id:"c3", name: "Manu", age: 23}
    ],
    otherState: "Hi, Im other info",
    showPersons: false
  }

  tooglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id)

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons : persons
    })
  }

  render () {
    let persons = null

    if(this.state.showPersons) {
      persons =  
      (
        <div>
          {this.state.persons.map((person, index) => {
          return <Person 
            click={this.deletePersonHandler.bind(this, index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
          })}
        </div>
        )
    }

    
    const classes = []
    if(this.state.persons.length <= 2)
      classes.push("red")
    if(this.state.persons.length <= 1)
      classes.push("bold")

    return (
      <div className="App">
        <h1>Hi I'm React App!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button
          className="button"
          onClick={this.tooglePersonHandler} 
        >
          Toogler Person!
        </button>
        {persons}
      </div>
    )
  }
}

export default App;