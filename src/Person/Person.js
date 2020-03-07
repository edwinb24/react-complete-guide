import React from 'react'
import '../css/Person/Person.css'

const person = (props) => 
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input onChange={props.changed} value={props.name}></input>
    </div>

export default person