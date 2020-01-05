import React from 'react';
import logo from './logo.svg';
import Landing from './components/landing.js';
import Dev from './components/dev.js';
import ArtHome from './art_components/art-home.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './css/mobile.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" exact component={Landing} />
        <Route path="/dev" component = {Dev} />
        <Route path="/art" component = {ArtHome} />
      </div>
    </Router>
  );
}

export default App;
