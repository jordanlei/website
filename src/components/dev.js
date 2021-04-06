import React, { Component } from 'react';
import '../css/standard.css';
import Welcome from './welcome';
import About from './about';
import Education from './education';
import Experience from './experience';
import Art from './art';
import Blog from './blog';
import Contact from './contact';
import Menu from './menu'

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
        <section id = "artwork">
          <Art/>
        </section>
        <section id = "blog">
          <Blog/>
        </section>
        <section id = "contact">
          <Contact/>
        </section>
        {/* 
        <section id = "welcome">
          <Welcome/>
        </section>
        
        <section id = "education">
          <Education/>
        </section>
        <section id = "experience">
          <Experience/>
        </section>
        <ArtComponent/>
        <ContactBanner/> */}
      </div>
      
    );
  }
}

export default Dev;
