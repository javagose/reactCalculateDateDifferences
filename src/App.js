import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
//importing Moment
import MyForm from './form/form.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Nimbleways</h2>
        </div>
        <p className="App-intro">
          Startup spécialisée dans la réalisation digitale.
        </p>
        <MyForm/>
      </div>
    );
  }
}

export default App;
