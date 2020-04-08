import React, {PureComponent} from 'react'
import Person from "./Person/Person"


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js -> getDerivedStateFromProps')
  //   return state
  // }

  // shouldComponentUpdate(nextPros, nextState) {
  //   console.log('Persons.js -> shouldComponentUpdate')
  //   return (
  //     nextPros.persons !== this.props.persons ||
  //     nextPros.changed !== this.props.changed ||
  //     nextPros.clicked !== this.props.clicked
  //     ) ? true : false
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons.js -> getSnapshotBeforeUpdate")
    return {message: 'snapshot!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Persons.js -> componentDidUpdate")
    console.log(`snap => ${snapshot.message}`)
  }

  componentWillUnmount() {
    console.log("pERSON JS -> ComponentWillUnmount")
  }

  render() {
    return(
      this.props.persons.map((person, index) => {
        return (
          <Person 
          click={() => this.props.clicked( index)}
          name={person.name} 
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
          key={person.id}
          />)
      })
    )
  }
}

export default Persons