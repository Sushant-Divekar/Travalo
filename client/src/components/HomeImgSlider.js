import React, { useState, useEffect } from 'react';
import './HomeImgSlider.scss'; // Import the SCSS file

const HomeImgSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0; // Reset to the first index seamlessly
        } else {
          return prevIndex + 1; // Increment index normally
        }
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-img-slider-container">
      <div
        className="home-img-slider"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`pic ${index}`}
            className="home-img-slider-image"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImgSlider;
