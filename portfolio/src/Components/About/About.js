import React from "react";
import aboutimg from './About_img/photo_2022-08-08_22-29-40.jpg';
import { Container, Row , Col ,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCalendar,faFacebook, faTwitter,faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = (props) => {

    return (
        <Container className="Container">
            <Row className="aa">
                <h1 className="head">About <span className="font">Me</span></h1>
                <Col>
                    <img className="img" src={aboutimg} alt="" />
                </Col>
                <Col>
                    <h1 className="About_heading">PERSONAL DETAILS</h1>
                    <div className="about_inf">
                        <p className="About_text">
                    Duis aute dolor sit amet, consectetur adipisicing elit. Facere soluta, totam nihil minima,<br /> recusandae 
                    sapiente saepe provident ullam itaque nemo, beatae minus ratione <br /> asperiores aliquid vitae, debitis sint.
                    </p>
                    <p className="About_text">
                    Duis aute dolor sit amet, consectetur adipisicing elit. Facere soluta, totam nihil minima, recusandae 
                    sapiente saepe provident ullam itaque nemo, beatae minus ratione <br /> asperiores aliquid vitae, debitis sint.
                    </p>
                    <div className="contact_inf">
                        <table>
                            <tbody>
                                <tr className="">
                                    <td style={{fontWeight:"700"}}><FontAwesomeIcon icon="fa-solid fa-calendar" /> BRITHDAY</td>
                                    <td>:</td>
                                    <td>23/08/2002</td>
                                </tr>
                                <tr className="">
                                    <td style={{fontWeight:"700"}}>PHONE</td>
                                    <td>:</td>
                                    <td>(+90)5346306095</td>
                                </tr>
                                <tr className="">
                                    <td style={{fontWeight:"700"}}>EMAIL</td>
                                    <td>:</td>
                                    <td>ibadzadehuseyn@gmail.com</td>
                                </tr>
                                <tr className="">
                                    <td style={{fontWeight:"700"}}>WEBSITE</td>
                                    <td>:</td>
                                    <td>........</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="social_media">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="https://www.facebook.com/huseyn.ibadov.94/">
                                                <FontAwesomeIcon icon ={faFacebook} />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="https://twitter.com/xgusein">
                                            <FontAwesomeIcon icon ={faTwitter} />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="https://www.linkedin.com/in/huseyn-ibadzade-8a9740227/">
                                            <FontAwesomeIcon icon ={faLinkedinIn} />
                                            </a>
                                        </td>
                                        <td>
                                            <a href="https://github.com/xgusein">
                                            <FontAwesomeIcon icon ={faGithub} />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <a href="Huseyn Ibadzade-CV (1).pdf" download="Huseyn Ibadzade-CV (1).pdf"><Button className="BUTTON">DOWNLOAD RESUME</Button></a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  };
  
  export default About;
  