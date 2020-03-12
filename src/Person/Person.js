import React from 'react'

import styled from "styled-components"

const StyledDiv = styled.div`
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;

        @media (min-width: 500px) {
        background-color: pink;
`

const person = (props) => {

    return (
    <StyledDiv>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input onChange={props.changed} value={props.name}></input>
    </StyledDiv>
    )
}

export default person