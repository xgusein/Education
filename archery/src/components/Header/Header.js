import React from 'react';
import bgImage from './video/background-img.mp4';
import classes from './Header.css';


const MainHeader = (props) => {
  return (
    <div className='video'>
        <video src={bgImage} autoPlay loop muted />
        {/* <svg
  className="curve"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
</svg> */}
<svg className='curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,32L80,80C160,128,320,224,480,250.7C640,77,800,235,960,181.3C1120,128,1280,64,1360,32L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
    </div>
  );
};

export default MainHeader;
