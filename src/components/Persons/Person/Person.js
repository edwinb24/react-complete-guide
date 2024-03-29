import React, {Component, Fragment} from 'react'

import Auxiliary from './../../../hoc/Auxiliary'
import classes from "./Person.css"

class Person extends Component {
    render() {

        return (
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}></input>
            </Fragment>
        )
    }


}

export default Person