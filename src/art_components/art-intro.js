import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import "../css/art_welcome.css"

class ArtIntro extends Component {
  render() {
    return (
      <section id = "art-intro">
      <div style={{paddingBottom: 2+"%", paddingLeft:"30%", paddingRight:"30%", backgroundColor: "none", height: "100vh"}}>            
        <div style={{height: "50vh"}}></div>
        <div style={{margin: "-3%", padding:"3%", backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex:"1"}}>
        <div style={{color: 'rgba(255, 255, 255, 0.9)'}}>
        <Fade bottom duration={5000}>
            <h2>
              INTRODUCTION
            </h2>
        </Fade>
        <p>
          My art has changed a lot over the last few
          years. I've used media ranging from traditional 
          (oil, acrylic, watercolor, and the like) to digital. 
          I've also enjoyed experimenting with different styles, 
          from realism to abstraction. This portfolio is a 
          collection of my pieces, and, by consequence, 
          a time capsule of my own personal development.
          So step right on up, and take a walk with me. I promise 
          it'll be worth your time. 
        </p>
        </div>
        </div>
      </div>
      </section>
    );
  }
}

export default ArtIntro;
