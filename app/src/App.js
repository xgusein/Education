import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import User from './Components/User';

class App extends Component {

  render() {

    return (
      <div className='container'>
        <Navbar title = "User App"/>
        <hr/>
      </div>
    )
  }
}
export default App;