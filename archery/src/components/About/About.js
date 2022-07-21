import React from "react";
import './About.css';
import img from './About_img/935c46b5-ae39-438c-8ae0-12f9274913a4.jpg'
import { Container, Row , Col ,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = (props) => {
    return (
        <Container className="Container">
            <Row>
                <h1 className="head">Welcome to <span className="font">Archery</span></h1>
                <Col>
                    <p className="">
                    The 2018/19 season was the 27th of the Premier League after its formation in <br /> 1992. After numerous discussions with football authorities, players and <br /> television broadcasters, the First Division clubs resigned from the Football <br />
                     League in May 1992 and the Premier League was formed, with the inaugural campaign starting on Saturday 15 August of that year.
                    Below, each of the 26 seasons has been charted with the story of how the titles were won and the players who starred.
                    From 2011/12’s incredible finale, to Arsenal’s “Invincibles”, as well as Manchester United’s record 13 triumphs, find out more about the rich history of the Premier League.
                    </p>
                    <Button className="BUTTON">OUR TEAM</Button>
                </Col>
                <Col>
                    <img src={img} alt="" />
                </Col>
            </Row>
        </Container>
    );
  };
  
  export default About;
  