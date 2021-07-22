import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HomeContainer from './containers/HomeContainer';
// import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Header /> */}
          {/* Render Hero Image Here */}
          Render Header component here: 
          Nav Bar is rendering here
          <p>
            {/* <h3>Hero image is rendering here:</h3>
            <img src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-9/p720x720/121307571_3365457176863878_5338307208764464459_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_ohc=1u2tWmuq_ZcAX-dZmAQ&_nc_ht=scontent-bos3-1.xx&oh=f25832aed5648714af2f34dd9f50034f&oe=60FE11C5' alt="Horse"></img> */}
          </p>
          
          <p>
            Main Content of Page
            <HomeContainer />
          </p>
        </header>
      </div>
    );
  }
}  

export default App;
