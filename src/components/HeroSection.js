import React from 'react';
import fieldrogerdrivingwhite from '../assets/images/fieldrogerdrivingwhite.jpeg';
import './HeroSection.css'

function HeroSection() {
  return (
    // this is where the slideshow will go
    <div className='background-image' style={{ backgroundImage: `url(${fieldrogerdrivingwhite})` }} alt="Horse">
    </div>
  );
};

export default HeroSection;

