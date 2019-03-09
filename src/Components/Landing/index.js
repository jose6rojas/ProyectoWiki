import React, { Component } from 'react';
import './App.css';
//import NavBar from '../Navigation/NavBar';
import Inicio from './Inicio';

class Landing extends Component {
  render() {
    return (
      <div className="App">
          {/*}<NavBar/>{*/}
          <Inicio/>
      </div>
    );
  }
}

export default Landing;