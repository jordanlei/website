import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/experience.css"

class Experience extends Component {
  
  render() {
    return (
      <div className="experience-container">            
        <div className="center-row">
        <h3>
          Here are some things I've done
        </h3>
        </div>
        <div className= "experience-entries">
        <Row>
          <Col md={4}>
            <h3><b>2019</b></h3>
            <p>
              <b>Finance Intern, Unilever</b><br/>
              <i>May-August</i><br/>
              Will be working as a finance intern at Unilever
              US Headquarters in Englewood Cliffs, NJ. 
            </p>
            <br/><br/>
          </Col>
          <Col md={2}>
          <p>Insert Image Here</p>
          </Col>
          <Col md={4}>
            <h3><b>2018</b></h3>
            <p>
              <b>Finance Intern, Tovala</b><br/>
              <i>May-August</i><br/>
              Performed financial analysis 
              for end-of-month accounting. Automated 
              marketing attribution. Predicted packaging 
              costs using historical weather data.
            </p>
            <br/><br/>
          </Col>
          <Col md={2}>
          <p>Insert Image Here</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3><b>2017</b></h3>
            <p>
              <b>Research Intern, University of Pennsylvania</b><br/>
              <i>May-August</i><br/>
              Conducted research with Professor Vijay Balasubramanian
              at the Computational Neuroscience Initiative at Penn.
              Used Deep Learning to infer the architecture of the 
              visual pathway. Analyzed effectiveness of Deep Neural 
              Networks as a model for visual processing in the brain.
            </p>
            <br/><br/>
          </Col>
          <Col md={2}>
          <p>Insert Image Here</p>
          </Col>
          <Col md={4}>
            <h3><b>2015</b></h3>
            <p>
              <b>Research Intern, Carnegie Mellon University</b><br/>
              <i>June-August</i><br/>
              Conducted and performed research on the use of 
              footstep-induced vibrations on occupant monitoring 
              and detection. Performed Fourier Transform and Cross 
              Correlation Analysis using MATLAB. Helped write 2 papers 
              (publication pending) and created a mounting model to be 
              patented (pending).
            </p>
            <br/><br/>
          </Col>
          <Col md={2}>
          <p>Insert Image Here</p>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Experience;
