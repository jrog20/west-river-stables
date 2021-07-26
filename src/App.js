import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
import NavBar from './components/NavBar';

// import FooterContainer from './containers/FooterContainer';

import HomeContainer from './containers/HomeContainer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import NotFound from './components/NotFound';

// Switch allows only one route to show at a time
import { Switch, Route } from 'react-router-dom';

// Moved this to index.js
// import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        {/* Render BodyContainer Here */}
          {/* No...the home container is rendering when the app is loaded to '/' already. */}
        {/* Render FooterContainer Here */}
      </div>
    );
  }
}  

export default App;
