import React, { Component } from 'react';
import './App.css';
//import NavBar from '../Navigation/NavBar';
import Inicio from './Inicio';
import Home from '../InPage/HomeP.js';

class Landing extends Component {
  render() {
    return (
      <div className="App">
          {/*}<NavBar/>{*/}
          <Inicio/>
         {/* <div className = "margen"> 
            <Home/>
    </div>*/}
      </div>
    );
  }
}

export default Landing;