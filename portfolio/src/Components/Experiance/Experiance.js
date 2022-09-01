import React from 'react';
import './Experiance.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Experiance = (props) => {
  return (
    <section id='experiance'>
        <h1 className='experience_head'>What Skills I have</h1>
        <h2 className='experience_head-2'>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            {/* END OF FRONTEND */}
            <div className="experience__backend">
            <h3>Backtend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>PHP</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>Python</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experiance;