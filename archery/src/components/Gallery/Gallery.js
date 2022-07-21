import React from "react";
import  ReactDOM  from "react-dom";
import { Carousel } from "react-elastic-carousel";
// import { Carousel } from "bootstrap";
import './Gallery.css';

const breakPoints = [
    { width: 1, itemToShow: 1},
    { width: 550, itemToShow: 2},
    { width: 768, itemToShow: 3},
    { width: 1200, itemToShow: 4}
];

const Gallery = () => {
  return (
    <>
        <h1 style={{texAlign: 'center'}}>Gallery</h1>
        <div>
            <Carousel breakPoints= {breakPoints}>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
                <Item>Four</Item>
                <Item>Five</Item>
                <Item>Six</Item>
            </Carousel>
        </div>
    </>  
  );
};

export default Gallery;