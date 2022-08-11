import React, { Component } from 'react';
import Layout from "../components/layout.js";
import "../css/style.css"
import "../css/mobile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "../components/welcome.js"
import About from "../components/about.js"
import Education from "../components/education.js";
import Experience from "../components/experience.js";
import Art from "../components/art.js";
import Blog from "../components/blog.js";
import Contact from "../components/contact.js";
import Menu from "../components/menu.js";

import {Parallax, ParallaxProvider} from "react-scroll-parallax";


class Index extends Component {
    render() {
      return (
        <Layout>
              <Menu/>
              <div>
              <ParallaxProvider>
                  <Welcome/>
                  <Parallax translateY={['-200px', '200px']}>
                  <div className = "title" style={{color: "black", height: "100vh"}} />
                  </Parallax>
                  <div className = "namecard">
                        <h1>JORDAN LEI</h1>
                        <h2>
                          Neuroscience | Machine Learning | Art
                        </h2>
                  </div>
                  <About/>
                  <Education/>
                  <Experience/>
                  <Art/>
                  <Blog/>
                  <Contact/>
              </ParallaxProvider>
              </div>
        </Layout>
      );
    }
  }

  export default Index;