import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image2 from '../assets/images/image2.jpeg';
import image1 from '../assets/images/image1.jpeg';

const ImageSlideShow = () => {
  const images = [
    image1,
    image2
  ];

  return (
    <div className="image-slideshow-container">
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="image-slide" 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlideShow;
