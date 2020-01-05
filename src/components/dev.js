import React, { Component } from 'react';
import '../css/standard.css';
import Welcome from './welcome';
import About from './about';
import Menu from './menu';
import Education from './education';
import Experience from './experience';
import ArtComponent from './artcomponent';
import ContactBanner from './contactbanner';

class Dev extends Component {
  render() {
    return (
      <div className="landing-container">
        <Menu/>
        <section id = "welcome">
          <Welcome/>
        </section>
        <section id = "about">
          <About/>
        </section>
        <section id = "education">
          <Education/>
        </section>
        <section id = "experience">
          <Experience/>
        </section>
        <ArtComponent/>
        <ContactBanner/>
      </div>
      
    );
  }
}

export default Dev;
