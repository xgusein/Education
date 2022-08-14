import React from "react";
import aboutimg from './About_img/photo_2022-08-08_22-29-40.jpg';
import { Container, Row , Col ,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

const About = (props) => {
    return (
        <Container className="Container">
            <Row>
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
                                <tr>
                                    <td>BRITHDAY</td>
                                    <td>23/08/2002</td>
                                </tr>
                                <tr>
                                    <td>PHONE</td>
                                    <td>(+90)5346306095</td>
                                </tr>
                                <tr>
                                    <td>EMAIL</td>
                                    <td>ibadzadehuseyn@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>WEBSITE</td>
                                    <td>........</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="social_media">
                            
                        </div>
                    </div>
                    <Button className="BUTTON">DOWNLOAD RESUME</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  };
  
  export default About;
  