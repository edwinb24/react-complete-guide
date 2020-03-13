import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    const personIndex = this.state.persons.findIndex(person => person.userId === id)

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
    const buttonClasses = [classes.Button]

    if(this.state.showPersons) {
      persons =  
      (
        <div>
          {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}>
            <Person 
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          </ErrorBoundary>
          })}
        </div>
        )
        buttonClasses.push(classes.Red)
    }

    const paragraphClasses = []
    if(this.state.persons.length < 3) paragraphClasses.push(classes.red)
    if(this.state.persons.length < 2) paragraphClasses.push(classes.bold)

    return (
      <div className={classes.App}>
        <h1>Hi I'm React App!</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>
        <button onClick={this.tooglePersonHandler} className={buttonClasses.join(' ')}>
          Toogler Person!
        </button>
        {persons}
      </div>
    )
  }
}

export default App;