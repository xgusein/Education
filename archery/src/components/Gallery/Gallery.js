import React, { Component } from "react";
import Slider from "react-slick";
import img from './About_im/935c46b5-ae39-438c-8ae0-12f9274913a4.jpg';
import './Gallery.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="gallery">
        <h1 className="gallery_head">  Gallery </h1>
        <h1 className="background_word">Instagram</h1>
        <Slider className="Slider" {...settings}>
          <div className="gallery_img">
            <img src={img} alt="" />
          </div>
          <div className="gallery_img">
            <img src={img} alt="" />
          </div>
          <div className="gallery_img">
            <img src={img} alt="" />
          </div>
          <div className="gallery_img">
            <img src={img} alt="" />
          </div>
          <div className="gallery_img">
            <img src={img} alt="" />
          </div>
          <div className="gallery_img">
            <img src={img} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}