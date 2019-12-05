// import React, {Component} from 'react';
// import {BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
// import Header from './components/layout/Header'
// import Navigation from './components/layout/Navigation'
// import Canvas from './components/layout/Canvas'
// import About from './components/pages/About'




// class App extends Component {

//   render() {
//     return (
//       // If you use Router, you need to wrap everything in the Router
//       <Router>
//         <div className="App">
//           <div className ="navigation_container">
//             <Navigation/>
//           </div>
//           <div className="container">
//             <Header />
//             <Route exact path= "/"  render = {props => (
//               <Canvas/>
//             )}
//             />
//             <Route path ="/About" component = {About}/>
//           </div>
//         </div>
//       </Router>
//           );
//           }
//           }

// export default App;


import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

const browserHistory = createBrowserHistory();


validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
