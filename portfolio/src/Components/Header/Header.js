import React from 'react';
import img from './Header_img/aa.jpg';
import Typical from 'react-typical';
import classes from './Header.css';


const MainHeader = (props) => {
  return (
    <div className='video'>
        <img src={img} alt="" />
        <div className="text">
            <h2><span className='text_intro'>Hi I'm</span> Huseyn Ibadzade</h2>
            <p><span>I'm {''}</span> <Typical className='head_first'
                loop={Infinity}
                wrapper="b"
                steps={[
                    'developer',
                    1000,
                    'Student',
                    1000,
                ]} /></p>
        </div>
      {/* <svg className='curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <path fill="#fff" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,106.7C672,128,768,160,864,144C960,128,1056,64,1152,42.7C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
    </div>
  );
};

export default MainHeader;
