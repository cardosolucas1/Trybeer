import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TrybeerApp from '../../images/trybeer.png';

const mock = [
  { item: 'Aplicativo', description: 'Aplicativo IOS e ANDROID' },
];

const CarouselReact = (itens = mock) => {
  return (
    <Carousel width="100%" height="100px">

      <div>
          <img src={TrybeerApp} width="100px"/>
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src={TrybeerApp} width="100px"/>
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img src={TrybeerApp} width="100px"/>
          <p className="legend">Legend 3</p>
      </div>
  </Carousel>
  );
};

export default CarouselReact;
