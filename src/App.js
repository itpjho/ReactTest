import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
class App extends Component {
  render() {
    return (
      <div>
      <h1> Hola React </h1>
      <Header/>
     
      <Switch>
        <Route exact path="/" component={HomePage}/>        
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Profile" component={Profile}/>
 
      </Switch>

      </div>
    );
  }
}

export default App;
