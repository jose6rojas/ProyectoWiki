import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Inicio from './Components/Inicio';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Inicio/>
      </div>
    );
  }
}

export default App;
