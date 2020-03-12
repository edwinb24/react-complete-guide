import React, { Component } from 'react';

// import classes from './css/App.css';
import Person from './Person/Person';
import styled from 'styled-components'

const DisplayedP = styled.p`
  color: ${props => props.alt <= 2 ? "red" : null};
  font-weight: ${props => props.alt <= 1 ? "bold":"normal"};
`

const DisplayedButton = styled.button`
  background-color: ${props => props.alt ? "green":"red"};
  color: white;
  font: inherit;
  border: 1px solid red;
  padding: 8px;
  &:hover {
    background-color: ${props => props.alt ? "lightgreen":"salmon"};
    color: black;
  }
`

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

    return (
      <div className="">
        <h1>Hi I'm React App!</h1>
        <DisplayedP alt={this.state.persons.length}>This is really working!</DisplayedP>
        <DisplayedButton onClick={this.tooglePersonHandler} alt={this.state.showPersons}>
          Toogler Person!
        </DisplayedButton>
        {persons}
      </div>
    )
  }
}

export default App;