import React, { Component } from 'react';
import '../css/standard.css';
import ArtWelcome from './welcome';
import ArtMenu from './menu';
import ArtAbout from './about';
import ArtIntro from './intro';
import ArtFeatured from './featured';
import About from '../components/about';

class ArtHome extends Component {
  render() {
    return (
      <div className="landing-container">
        <ArtMenu/>
        <section id = "art-home">
          <ArtWelcome/>
        </section>
        <ArtAbout/>
        <ArtIntro/>
        <ArtFeatured/>

        
      </div>
      
    );
  }
}

export default ArtHome;
