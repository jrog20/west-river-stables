import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HomeContainer from './containers/HomeContainer';
import Bios from './components/Bios';

// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Render Header component here: West River Stables
        </header>
        <HomeContainer />
        <Bios />
      </div>
    );
  }
}  

export default App;
