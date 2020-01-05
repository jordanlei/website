import React from 'react';
import logo from './logo.svg';
import Dev from './components/dev.js';
import ArtHome from './art_components/art-home.js';
import BlogHome from './blog_components/blog-home.js';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './css/mobile.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" exact component={Dev} />
        <Route path="/art" component = {ArtHome} />
        <Route path="/blog" component = {BlogHome} />
      </div>
    </Router>
  );
}

export default App;
