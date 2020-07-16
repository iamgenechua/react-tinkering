import React from 'react';
import styled from 'styled-components';
// import './Person.css'

// styled.div is a valid React component provided by the library
// styled has a method for every html elements. between the backticks are the styles we want to use
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eeee;
    box-shadow: 0 2px 3px #eee;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 600px)' : {
    //         width: '450px'
    //     }
    // };

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;

