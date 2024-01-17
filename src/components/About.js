import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';

function About() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="components" id="about-div">
      <img src={require("../media/bogdan.png")} alt='' id="profile-picture" />
      <p className="p" id="about" >I'm Bogdan, an upcoming graduate from the MEng of Software Development program at the University of Calgary. In 2019, I graduated from the University of Waterloo with a BASc in Nanotechnology Engineering.</p>
      <p className="p" id="about" >I'm originally from Kitchener, Ontario, but I now live in Calgary, Alberta, where I'm currently looking for opportunities. </p>
      <p className="p" id="about" >I’ve always had a passion and desire for tackling real-world problems, and for me, programming is the best way that I can accomplish this. Programming allows me to combine my creative side with my problem-solving skills and design innovative solutions.</p>
      <p className="p" id="about" >Outside of Software, I love to travel!! I’ve been fortunate enough to visit over 25 countries, and you can see some of my highlights <button className="normalbuttons" onClick={openModal}>here</button>.</p>
      <PhotoGallery isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default About;
