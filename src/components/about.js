import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class About extends Component {
  
  render() {
    return (
      <div className="dark-container" style={{paddingBottom: 2+"%"}}>            
        <div>
        <Row>
          <Col md={3}>
          <Fade bottom duration={5000}>
            <h3>
              I love drawing, writing, making music, 
              and training AI to beat me at all of those things
            </h3>
          </Fade>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={5}>
            <p>
            I'm a senior in the <b>Jerome Fisher Program in 
            Management and Technology</b> at the <b>University of Pennsylvania.</b> <br/>
            I consider myself an inquisitive person - I love figuring 
            out what makes things tick - maybe that's why I chose to 
            pursue <b>Computer Science</b> and <b>Operations, Information, and Decision Processes</b>!
            Curiosity drives me. <br/>
            I have a nerdy passion for <b>Deep Learning and Artificial 
            Intelligence</b>. Before the singularity, you'll find me painting, 
            playing the guitar, or snuggling up with a good book. <br/>
            </p>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default About;
