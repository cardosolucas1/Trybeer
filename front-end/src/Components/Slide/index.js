import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import SlideContainer from '../CSS/Slide';
const Trybeer =  require('../../images/app-bg.png');
const SlideProduct1 =  require('../../images/slide-product-1.png');
const SlideProduct2 =  require('../../images/slide-product-2.png');
const Heineken = require('../../images/heineken-sale.png');
const Budweiser = require('../../images/budweiser-logo.jpg');

const slideImages = [
  Budweiser,
  Trybeer,
  SlideProduct1,
  Heineken,
  SlideProduct2,
];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide duration="5000">
          {slideImages.map((img) => (
            <div className="each-slide">
            <SlideContainer
              style={
                {
                  'backgroundImage': `url(${img})`,
                  
                }
              }
            >
            </SlideContainer>
          </div>
          ))}
         
        </Slide>
      </div>
    )
}

export default Slideshow;
