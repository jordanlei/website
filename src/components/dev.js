import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import Welcome from './welcome';
import About from './about';
import Menu from './menu';
import Education from './education';
import Experience from './experience';
import ArtComponent from './artcomponent';
import Projects from './projects';
import BlogBanner from './blogbanner';
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


        <BlogBanner/>
      </div>
      
    );
  }
}

export default Dev;