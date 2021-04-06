import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css";
import Fade from 'react-reveal';

class ArtBanner extends Component {
  
  render() {
    return (
      <div className="art-banner-container">   
      <div className="center-row">
        <Fade bottom duration={5000}>
          <h3>
            Join me on an art adventure
          </h3>
        </Fade>
      </div>
      <div style={{paddingTop: 5 + '%'}} >         
        <p>
          <b>I've been drawing for as long as 
          I can remember.</b> Art has a special way 
          of making people stop, observe, and admire 
          their surroundings. As an artist, I've been 
          lucky enough to work with all different kinds 
          of media, including traditional (oil, acrylic, 
          colored pencil, sketch), and digital forms. Interested 
          in seeing more of my work? Awesome - take a walk with me.
        </p>
      </div>
      </div>
    );
  }
}

export default ArtBanner;
