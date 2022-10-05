import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsFillTelephoneFill,BsCalendarWeek} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {RiEarthFill} from 'react-icons/ri';
import { useState } from 'react';
import { faCalendar,faFacebook, faTwitter,faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';


const Contact = () => {
    return (
            <footer>
                <div className="content">
                    <div className="left box">
                        <div className="upper">
                            <div className="topic">About Me</div>
                            <p>lksnjvaklcjmcdmckdmklsjcsikcms</p>
                        </div>
                        <div className="lower">
                            <div className="topic">Contact Me</div>
                            <div className="phone">
                                <a href="#"><BsFillTelephoneFill /> +905346306095</a>
                            </div>
                            <div className="email">
                                <a href="https:gmail.com"><MdEmail/>ibadzadehuseyn@gmail</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle box">
                    <div className="topic">Our Services</div>
                    <div><a href='#'>Web Designing</a></div>
                    <div><a href='#'>Frontend Development</a></div>
                    <div><a href='#'>Backend Development</a></div>
                    <div><a href='#'>Theme Development</a></div>
                    <div><a href='#'>Freelancing</a></div>
                </div>
                <div className="right box">
                    <div className="topic">Subscribe Us</div>
                    <form action="#">
                        <input type="text" placeholder='Enter email address' />
                        <input type="submit" name='' value="Send" />
                        <div className="media-icons">
                            <a href="https://www.facebook.com/huseyn.ibadov.94/" className='facebook'><FontAwesomeIcon icon ={faFacebook} /></a>
                            <a href="https://twitter.com/xgusein" className='twitter'><FontAwesomeIcon icon ={faTwitter} /></a>
                            <a href="https://github.com/xgusein" className='instagram'><FontAwesomeIcon icon ={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/huseyn-ibadzade-8a9740227/" className='linkedin'><FontAwesomeIcon icon ={faLinkedinIn} /></a>
                        </div>
                    </form>
                </div>
                <div className="bottom">
                    <p>
                        Copyright @ 2020
                        All rights reserved
                    </p>
                </div>
            </footer>
    )
}

export default Contact;