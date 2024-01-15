// PhotoGallery.js
import React, { useState } from 'react';


function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const photoList = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpeg'];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photoList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + photoList.length) % photoList.length);
  };

  return (
    <div className="photo-gallery">
      <div className="slider">
        <button className="arrow left" onClick={handlePrev}>&#10094;</button>
        <img className="slide" src={require(`../media/${photoList[activeIndex]}`)} alt={`Photo ${activeIndex + 1}`} />
        <button className="arrow right" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
}

export default PhotoGallery;
