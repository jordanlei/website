import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import "../css/art_welcome.css"

class ArtAbout extends Component {
  render() {
    return (
      <section id = "art-about">
      <div style={{paddingBottom: 2+"%", paddingLeft:"20%", paddingRight:"20%", backgroundColor: "none", height: "100vh"}}>            
        <div style={{height: "50vh"}}></div>
        <div style={{margin: "-3%", padding:"3%", backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex:"1"}}>
        <div style={{color: 'rgba(255, 255, 255, 0.9)'}}>
        <Row>
          <Col md={3}>
          <Fade bottom duration={5000}>
            <h3>
              Art is Everywhere
            </h3>
          </Fade>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={8}>
            <p>
              From a young age, I was fascinated with art. 
              I picked up drawing when I was around six years old
              and since then, I've kept at it. When I draw or
              paint, I enter a flow state where the world around me seems 
              to melt away - it's a way for me to detach myself from the
              world and see it from afar with clarity. Most of all, 
              art has given me an appreciation for the beauty that is
              so readily available in this universe, if only we stop 
              and take the time to notice it.
            </p>
          </Col>
        </Row>
        </div>
        </div>
      </div>
      </section>
    );
  }
}

export default ArtAbout;
