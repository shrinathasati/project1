// src/About.js
import React from 'react';
import './About.css';
import image1 from './image/1.png'; // Import your images
import image2 from './image/2.png';
import image3 from './image/3.png';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">कुछ शब्द अनकहे से❤️</h2>
      <div className="image-grid">
        <div className="grid-item">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="grid-item">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="grid-item">
          <img src={image3} alt="Image 3" />
        </div>
      </div>
    </section>
  );
};

export default About;
