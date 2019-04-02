import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
   
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: personsState.persons[0].name = 'Maximilian';
    setPersonsState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ],
      otherState: personsState.otherState
    });
  };

  const nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Maximilian !!!')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}
        changed={nameChangeHandler}>My Hobbies: Racing
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this wrok now ?'));
  
}

export default app;


