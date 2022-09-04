import React from 'react';
import { Container, Row , Col ,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Works.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faFacebook, faTwitter,faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import IMG1 from '../../Components/assets/IMG1.jpg';
import IMG2 from '../../Components/assets/Image-2.png';
import IMG3 from '../../Components/assets/Screenshot_2.png';


const Works = () => {
    return (
        <section id='portfolio'>
            <h5 className='work_head'>My Recent Work</h5>
            <h2>Portfolio</h2>

            {/* <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com/xgusein" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/xgusein" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com/xgusein" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/xgusein" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com/xgusein" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/xgusein" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com/xgusein" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/xgusein" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com/xgusein" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/xgusein" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com/xgusein" className='btn' target='_blank'>Github</a>
                    <a href="https://github.com/xgusein" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>  
            </div> */}
            {/* <Container className="portfolio__container">
                <Row>
                    <Col>
                        <article className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={IMG1} alt="" />
                            </div>
                            <div className='item_title'>
                                <h4>This is a portfolio item title</h4>
                                <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a>
                            </div>
                        </article>
                    </Col>
                    <Col>
                        <article className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={IMG1} alt="" />
                            </div>
                            <div className='item_title'>
                                <h4>This is a portfolio item title</h4>
                                <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a>
                            </div>
                        </article>
                    </Col>
                    <Col>
                        <article className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={IMG1} alt="" />
                            </div>
                            <div className='item_title'>
                                <h4>This is a portfolio item title</h4>
                                <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a>
                            </div>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <article className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={IMG1} alt="" />
                            </div>
                            <div className='item_title'>
                                <h4>This is a portfolio item title</h4>
                                <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a>
                            </div>
                        </article>
                    </Col>
                    <Col>
                        <article className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={IMG1} alt="" />
                            </div>
                            <div className='item_title'>
                                <h4>This is a portfolio item title</h4>
                                <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a>
                            </div>
                        </article>
                    </Col>
                    <Col>
                        <article className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={IMG1} alt="" />
                            </div>
                            <div className='item_title'>
                                <h4>This is a portfolio item title</h4>
                                <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a>
                            </div>
                        </article>
                    </Col>
                </Row>
            </Container> */}
            <Container>
                <div className="hero-section">
                    <div className="gallery">
                        <div className="image-section">
                            <img src={IMG2} alt="" />
                        </div>
                        <div className="caption">
                            <h4>Api making Dashboard
                            <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a></h4>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="image-section">
                            <img src={IMG1} alt="" />
                        </div>
                        <div className="caption">
                            <h4>This is a portfolio item title
                            <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a></h4>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="image-section">
                            <img src={IMG3} alt="" />
                        </div>
                        <div className="caption">
                            <h4>This is a portfolio item title
                            <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a></h4>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="image-section">
                            <img src={IMG1} alt="" />
                        </div>
                        <div className="caption">
                            <h4>This is a portfolio item title
                            <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a></h4>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="image-section">
                            <img src={IMG1} alt="" />
                        </div>
                        <div className="caption">
                            <h4>This is a portfolio item title
                            <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a></h4>
                        </div>
                    </div>
                    <div className="gallery">
                        <div className="image-section">
                            <img src={IMG1} alt="" />
                        </div>
                        <div className="caption">
                            <h4>This is a portfolio item title
                            <a href="https://github.com/xgusein"><FontAwesomeIcon icon ={faGithub} /></a></h4>
                        </div>
                    </div>
                </div>
            </Container>
            
        </section>
    )
}

export default Works;