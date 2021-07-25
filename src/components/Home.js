import React from 'react';
import lessoninfall from '../assets/images/lessoninfall.jpeg';
import './Home.css'

function Home() {
  return (
    <div className='background-image' style={{ backgroundImage: `url(${lessoninfall})` }} alt="Horse">
    </div>
  );
};

export default Home;
