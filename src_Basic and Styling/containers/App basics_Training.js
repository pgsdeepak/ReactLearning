import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Deepak", age: 39 },
      { name: "Deepa", age: 38 },
      { name: "Paru", age: 11 },
      { name: "Pappu", age: 7 }
    ],
    showPerson: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 39 },
        { name: "Deepa Dinesan", age: 38 },
        { name: "Parvathi Deepak", age: 11 },
        { name: "Prayag Deepak", age: 7 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Deepak Sreedharan", age: 39 },
        { name: event.target.value, age: 38 },
        { name: "Parvathi Deepak", age: 11 },
        { name: "Prayag Deepak", age: 7 }
      ]
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "black",
      font: "inherit",
      border: "3px solid blue",
      padding: "28px",
      cursor: "pointer"
    };
    let personsObj = null;
    if (this.state.showPerson) {
      personsObj = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "D S")}
          >
            How are you
          </Person>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>HI, I am a React App</h1>
        <button stye={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {personsObj}
      </div>
    );
  }
}

export default App;
