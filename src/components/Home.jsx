// src/Home.js
import React from 'react';
import './Home.css';
import image from './image/tree.png'; // Make sure to import your image

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Shrinath loves Shakti❤️</h1>
      <p className="quotes">"All I need a perfect day is your Smile😊."</p>
      <img className="image" src={image} alt="A beautiful memory" />
    </div>
  );
};

export default Home;
