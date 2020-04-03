import React from 'react'
import classes from "./Cockpit.css"

const Cockpit = (props) => {
    const buttonClasses = [classes.Button]
    if(props.showPersons) buttonClasses.push(classes.Red)

    const paragraphClasses = []
    if(props.persons.length < 3) paragraphClasses.push(classes.red)
    if(props.persons.length < 2) paragraphClasses.push(classes.bold)

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={paragraphClasses.join(' ')}>This is really working!</p>
            <button 
                onClick={props.clicked} 
                className={buttonClasses.join(' ')}
            >
                Toogler Person!
            </button>
        </div>
    )
}

export default Cockpit