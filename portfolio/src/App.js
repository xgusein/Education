import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainHeader from './Components/Header/Header';
import About from './Components/About/About';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHeader />
      <About />
    </div>
  );
}

export default App;
