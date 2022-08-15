import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainHeader from './Components/Header/Header';
import About from './Components/About/About';
import HashLoader from "react-spinners/HashLoader";
import './App.css';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3500)
  }, []);
  return (
    <div className="App">
      {
        loading ?(

        <HashLoader className='log' color={"#ff3c78"} loading={loading} size={150} />

        ) : (
        <div>
            <Navbar />
            <MainHeader />
            <About />
        </div>
        )
      }
    </div>
  );
}

export default App;
