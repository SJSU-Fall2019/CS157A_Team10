import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import Canvas from './components/layout/Canvas'
import About from './components/pages/About'
import uuid from 'uuid'




class App extends Component {

  render() {
    return (
      // If you use Router, you need to wrap everything in the Router
      <Router>
        <div className="App">
          <div className ="navigation_container">
            <Navigation/>
          </div>
          <div className="container">
            <Header />
            <Route exact path= "/"  render = {props => (
              <Canvas/>
            )}
            />
            <Route path ="/About" component = {About}/>
          </div>
        </div>
      </Router>
          );
          }
          }

export default App;
