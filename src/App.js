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
          Render Header component here: 
          <p>
            West River Stables
            <HomeContainer />
          </p>
        </header>
        <HomeContainer />
      </div>
    );
  }
}  

export default App;
