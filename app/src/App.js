import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import AddUser from './Components/AddUser';
import Users from './Components/Users';
import Test from './Components/Test';

class App extends Component {

  render() {

    return (
      <div className='container'>
        <Navbar title = "User App"/>
        <hr/>
        <AddUser/>
        <Users/>
      </div>
    );
  }
}
export default App;