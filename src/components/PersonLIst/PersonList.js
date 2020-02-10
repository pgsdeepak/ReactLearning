import React from "react";
import Person from "./Person/Person";

const personList = props => {
  return props.persons.map((pers, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={pers.name}
        age={pers.age}
        key={pers.id}
        changed={event => props.changed(event, pers.id)}
      />
    );
  });
};

export default personList;
