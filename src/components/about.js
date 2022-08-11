import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class About extends Component {
  
  render() {
    return (
      <section id = "about">
        <div className="dark section" style={{paddingBottom: "2%"}}>            
          <Fade><h1>ABOUT</h1></Fade>
          <p>
          <b>Hey there! I'm Jordan Lei.</b> I'm a <b>PhD Student in Neuroscience</b> at <b>New York University.<br/></b> 
          I consider myself an inquisitive person - I love figuring 
          out what makes things tick, particularly when it comes to understanding human
          intelligence and the brain.
          I'm especially passionate about the intersection of <b>Neuroscience and Deep Learning</b>. Before the singularity, you'll find me painting, 
          playing the guitar, or snuggling up with a good book. <br/>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
