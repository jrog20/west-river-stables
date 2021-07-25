import React, { Component } from 'react';
import lessoninfall from '../assets/images/lessoninfall.jpeg';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className='background-image' style={{ backgroundImage: `url(${lessoninfall})` }} alt="Horse">
      </div>
    );
  }
};

export default Home;
