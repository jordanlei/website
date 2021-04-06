import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class About extends Component {
  
  render() {
    return (
      <div className="dark-container" style={{paddingBottom: 2+"%"}}>            
        <Fade><h1>ABOUT</h1></Fade>
        <p>
        <b>Hey there! I'm Jordan Lei.</b> I'm a <b>master's student</b> at the <b>University of Pennsylvania. </b> 
        I consider myself an inquisitive person - I love figuring 
        out what makes things tick, particularly when it comes to understanding human
        intelligence and the brain.
        I'm especially passionate about the intersection of <b>Neuroscience and Deep Learning</b>. Before the singularity, you'll find me painting, 
        playing the guitar, or snuggling up with a good book. <br/>
        </p>

      </div>
    );
  }
}

export default About;
