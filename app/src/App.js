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
        <User
        name = "Huseyn Ibadzade"
        salary = "5000"
        department = "Computer" />
        <User
        name = "Zamin Ibadzade"
        salary = "9000"
        department = "Chemistrh" />
      </div>
    )
  }
}
export default App;