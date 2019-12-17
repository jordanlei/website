import React from 'react';
import logo from './logo.svg';
import Landing from './components/landing.js';
import Dev from './components/dev.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" exact component={Landing} />
        <Route path="/dev" component = {Dev} />
      </div>
    </Router>
  );
}

export default App;
