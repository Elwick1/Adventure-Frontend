import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const Us = 'http://localhost:3000/users'

export default class App extends React.Component {

  state = {
    users : []
  };

  componentDidMount() {
    fetch(Us)
    .then(res => res.json())
    .then(users => this.setState({
      users : users
   }))
 }

  render () {
  return (
    <Router>
      <Switch>
    <div className="App">
      
        
      <header className="App-header">
        
        <p>
          Hello  Michael!
        </p>
       
      </header>
      
    </div>
    </Switch>
    </Router>
  );
}
}

// This will be the home page of the app
// Within the homepage will feature ;
// - the game credits
// - rules/game information
// - Game launch
//  STRETCH GOALS
// - Highscore Board

