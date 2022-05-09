import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/slide2.jpg?v=1575706396"
            alt="First slide"
          />
          <Carousel.Caption className="slider-text">
            <h3>Breaking Your Limits</h3>
            <p>Powerful Body</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/slide1.jpg?v=1574650702"
            alt="Second slide"
          />

          <Carousel.Caption className="slider-text">
            <h3>Stylish Handpicked</h3>
            <p>Strong and Healthey</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
