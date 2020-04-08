import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props)
  }

  state = {
    persons: [
      {id:"a1", name: "Edwin", age: 29},
      {id:"b2", name: "Ana", age: 22},
      {id:"c3", name: "Manu", age: 23}
    ],
    otherState: "Hi, Im other info",
    showPersons: false,
    showCockpit: true
  }

  // static getDerivedStateFromProps(props, state) {
  //   return state
  // }

  componentDidMount() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentDidUpdate() {
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
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          personsLength={this.state.persons.length} 
          showPersons={this.state.showPersons} 
          clicked={this.tooglePersonHandler}
          title={this.props.appTitle}
        /> : null }
        {persons}
      </div>
    )
  }
}

export default App;