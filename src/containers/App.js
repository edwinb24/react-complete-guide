import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props)
    console.log("App JS - Constructor")
  }

  state = {
    persons: [
      {id:"a1", name: "Edwin", age: 29},
      {id:"b2", name: "Ana", age: 22},
      {id:"c3", name: "Manu", age: 23}
    ],
    otherState: "Hi, Im other info",
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App JS - getDerivedStateFromProps")
    return state
  }

  componentDidMount() {
    console.log("App JS - this.componentDidMount")
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
    console.log("App JS - Render")
    let persons = null

    if(this.state.showPersons) {
      persons =  
      (
        <div>
          <Persons 
            clicked={this.deletePersonHandler} 
            persons={this.state.persons} 
            changed={this.nameChangedHandler}
          />
        </div>
        )
    }


    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons} 
          showPersons={this.state.showPersons} 
          clicked={this.tooglePersonHandler}
          title={this.props.appTitle}
        />
        {persons}
      </div>
    )
  }
}

export default App;