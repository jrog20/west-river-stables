import React, { Component } from 'react';
// import { connect } from 'react-redux';
import HomeContainer from './containers/HomeContainer';
import Bios from './components/Bios';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

// Switch allows only one route to show at a time
import { Switch, Route } from 'react-router-dom';

// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          West River Stables
          <NavBar />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </header>
        <HomeContainer />
        <Bios />
      </div>
    );
  }
}  

export default App;
