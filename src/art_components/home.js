import React, { Component } from 'react';
import '../css/standard.css';
import ArtWelcome from './welcome';
import ArtMenu from './menu';
import ArtAbout from './art-about';
import ArtIntro from './art-intro';
import ArtFeatured from './art-featured';
import About from '../components/about';
import ArtDigital from './art-digital';

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
        <ArtDigital/>
        
      </div>
      
    );
  }
}

export default ArtHome;
