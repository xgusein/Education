import React from 'react';
import bgImage from './video/background-img.mp4';
import classes from './Header.css';


const MainHeader = (props) => {
  return (
    <div className='video'>
        <video src={bgImage} autoPlay loop muted />
    </div>
  );
};

export default MainHeader;
