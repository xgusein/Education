import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainHeader from './components/Header/Header';
// import bgImage from './video/background-img.mp4';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Archery.az About Page</h1>
      </section>
      <MainHeader/>
    </div>
  );
}

export default App;
