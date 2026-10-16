import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/img/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './Carousel.module.css';

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {img.map((imageItem, index) => (
          <div key={index}>
            <img src={imageItem} alt={`Amazon banner ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;