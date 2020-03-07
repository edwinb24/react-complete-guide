import React, { useState } from 'react';
import './css/App.css';
import Person from './Person/Person';



const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Edwin", age: 29},
      {name: "Ana", age: 22},
      {name: "Manu", age: 23}
    ]
  })

  const [otherInfoState, setOtherInfoState] = useState("hellow")

  console.log(personsState, otherInfoState)

  const switchName = (newName) => {
    setPersonsState ({
      persons: [
        {name: newName, age: 29},
        {name: "Ana", age: 22},
        {name: "Manu", age: 34}
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState ({
      persons: [
        {name: 'Max', age: 29},
        {name: event.target.value, age: 22},
        {name: "Manu", age: 45}
      ]
    })
  }

  const style = {
    backgroundColor: "white",
    font: 'inherit',
    border: '1px solid red',
    padding: "8px"
  }

  return (
    <div className="App">
      <button 
        onClick={switchName.bind(this, "Max!!!")}
        style={style}
      > 
        Change name! 
      </button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
      />
      <Person 
        click= {switchName.bind(this, "Maximilian!!!")}
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} 
        changed={nameChangedHandler}
      > Hellow </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} 
      />
    </div>
  )
}

export default app;


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
