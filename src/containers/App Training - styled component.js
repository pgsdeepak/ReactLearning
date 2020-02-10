import React, { Component } from "react";
import styled from "styled-components";
//import Radium, { StyleRoot } from "radium";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 3px solid blue;
  padding: 28px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;
class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Deepak", age: 39 },
      { id: "2", name: "Deepa", age: 38 },
      { id: "3", name: "Paru", age: 11 },
      { id: "4", name: "Pappu", age: 7 }
    ],
    showPerson: false
  };

  deleteNameHandler = personIndex => {
    //below statement is assigning the pointer to the constant and the splice function actually deletes the data directly
    //const persons = this.state.persons;
    //below function copies the array so the state is not tampared
    //const persons = this.state.persons.slice();

    //above function can be used this like in ES6 format [using spread operator ...]
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "3px solid blue",
      padding: "28px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let personsObj = null;
    if (this.state.showPerson) {
      personsObj = (
        <div>
          {this.state.persons.map((pers, index) => {
            return (
              <Person
                click={() => this.deleteNameHandler(index)}
                name={pers.name}
                age={pers.age}
                key={pers.id}
                changed={event => this.nameChangeHandler(event, pers.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const fontClass = [];
    if (this.state.persons.length <= 2) {
      fontClass.push("red");
    }
    if (this.state.persons.length <= 1) {
      fontClass.push("bold");
    }

    return (
      //   <StyleRoot>
      <div className="App">
        <h1 className={fontClass.join(" ")}>HI, I am a React App</h1>
        <StyledButton onClick={this.togglePersonsHandler}>
          Toggle Name
        </StyledButton>
        {personsObj}
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
