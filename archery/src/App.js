import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import MainHeader from './components/Header/Header';
// import bgImage from './video/background-img.mp4';
import About from './components/About/About';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Slider from 'react-slick';
// import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Archery.az About Page</h1>
      </section>
      <MainHeader/>
      <About />
      <Slider>
        
      </Slider>
    </div>
  );
}

export default App;
