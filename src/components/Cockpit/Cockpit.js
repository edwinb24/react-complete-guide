import React, {useEffect} from 'react'
import classes from "./Cockpit.css"

const Cockpit = (props) => {
    const buttonClasses = [classes.Button]
    if(props.showPersons) buttonClasses.push(classes.Red)


    const paragraphClasses = []
    if(props.personsLength < 3) paragraphClasses.push(classes.red)
    if(props.personsLength < 2) paragraphClasses.push(classes.bold)

    useEffect(() => {
        setTimeout(() => {
            alert("Saved data to the cloud")
        }, 1000)
        return () => {
        }
    }, [])

    useEffect(() => {
        return () => {
        }
    },)

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

export default React.memo(Cockpit)