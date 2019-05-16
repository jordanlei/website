import React from 'react';
import logo from './logo.svg';
import Landing from './components/landing.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
