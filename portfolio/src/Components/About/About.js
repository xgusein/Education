import React from 'react';
import aboutimg from './About_img/photo_2022-08-08_22-29-40.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'


const About = (props) => {
  return (
    <section id='About'>
        <h1>About</h1>
        <hr />
        <Container>
            <Row>
                <Col className='wit'>
                    <img src={aboutimg} alt="" />
                </Col>
                <Col className='wit'>
                    <p>Duis aute dolor sit amet, consectetur adipisicing elit. Facere soluta, totam nihil minima, recusandae 
                        sapiente saepe provident ullam itaque nemo, beatae minus ratione asperiores aliquid vitae, debitis sint.</p>
                        <br />
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ea aliquid nostrum rem. Asperiores molestiae magni obcaecati aliquam quam 
                            aliquid reiciendis corrupti excepturi perferendis ab aut, inventore sunt hic iusto.</p>
                    <div className="contact_inf"></div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default About;
