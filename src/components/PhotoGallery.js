import React, { useState, useEffect } from 'react';

function PhotoGallery({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const photoList = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpeg'];

  const slideInterval = 3000; // Auto-scroll every 3 seconds, adjust as needed
  let timeoutId;

  const startSlideShow = () => {
    timeoutId = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photoList.length);
      startSlideShow();
    }, slideInterval);
  };

  useEffect(() => {
    if (isOpen) {
      startSlideShow();
    } else {
      clearTimeout(timeoutId);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, photoList, timeoutId]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photoList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + photoList.length) % photoList.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleClickOutside}>
          <span className="close" onClick={onClose}>&times;</span>
          <button className="arrow left" onClick={handlePrev}>&#8249;</button>
          <img className="modal-content" src={require(`../media/${photoList[activeIndex]}`)} alt={`Photo ${activeIndex + 1}`} />
          <button className="arrow right" onClick={handleNext}>&#8250;</button>
        </div>
      )}
    </>
  );
}

export default PhotoGallery;
