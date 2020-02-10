import React, { Component } from "react";
//import Radium, { StyleRoot } from "radium";
import classes from "./App.css";
import PersonList from "../components/PersonLIst/PersonList";
import Cockpit from "../components/Cockpit/Cockpit";

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
    let personsObj = null;

    if (this.state.showPerson) {
      personsObj = (
        <div>
          <PersonList
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
        />
        {personsObj}
      </div>
    );
  }
}

export default App;
