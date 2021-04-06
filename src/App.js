import React from 'react';
import logo from './logo.svg';
import Dev from './components/dev.js';
import ArtHome from './art_components/art-home.js';
import ScrollToTop from './components/scrolltotop.js';
import Post from './blog_components/posts/post.js';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './css/mobile.css';
import './css/fonts.css';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}  onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop/>
      <div>
        <Route path="/" exact component={Dev} />
        <Route path="/blog" component = {Dev} />
        <Route path="/art" component = {ArtHome} />
        <Route path="/p/:id" component={Post} />
      </div>
    </Router>
  );
}

export default App;
