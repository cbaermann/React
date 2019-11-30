import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: 'asdf4323', name: 'Max', age: 28 },
      { id: 'asdf524', name: 'Manu', age: 29 },
      { id: 'hjsdg8675', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  deletePersonhandler =(personIndex) => {
    const persons =[...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons ){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangedHandler} />
      
    }
    return (
      
        <div className={classes.App}>
          <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
