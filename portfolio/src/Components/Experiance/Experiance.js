import React from 'react';
import './Experiance.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Experiance = (props) => {
  return (
    <section id='experiance'>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill/>
                    </article>
                </div>
            </div>
            <div className="experience__backend">
                
            </div>
        </div>
    </section>
  );
};

export default Experiance;