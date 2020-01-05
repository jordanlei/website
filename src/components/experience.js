import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/experience.css";
import Fade from 'react-reveal';

class Experience extends Component {
  
  render() {
    return (
      <div className="light-container">            
        <div className="center-row">
        <Fade bottom duration={5000}>
        <h3>
          Here are some things I've done
        </h3>
        </Fade>
        </div>
        <div className= "experience-entries">
        <Row>
          <Col md={2} className= "mobile-only">
          <img src={require('../public/static/logo-kordinglab.png')} style={{display: "block", 
           padding: "5%", margin: "0 auto", height: "100px"}}alt="Logo WV"/>
          </Col>
          <Col md={3}>
            <h3><b>2019</b></h3>
            <p>
              <b>Independent Study, KordingLab (Penn)</b><br/>
              <i>September - Present</i><br/>
              Using gradient cost functions for semi-supervised 
              object segmentation and recognition.  
            </p>
            <br/><br/>
          </Col>
          <Col md={2} className= "web-only">
          <img src={require('../public/static/logo-kordinglab.png')} style={{display: "block", 
           padding: "5%", height: "10vw", minHeight: "80px"}}alt="Logo WV"/>
          </Col>
          <Col md={2} className="web-only"></Col>
          <Col md={2} className= "mobile-only">
          <img src={require('../public/static/logo-penn.png')} style={{display: "block", 
          padding: "5%", margin: "0 auto", height: "100px"}}alt="Logo WV"/>
          </Col>
          <Col md={3}>
            <h3><b>2019</b></h3>
            <p>
              <b>Teaching Assistant, Machine Learning (Penn)</b><br/>
              <i>May-August</i><br/>
              TA for CIS 519 at Penn. Taught biweekly recitations 
              and prepared course material, including slides 
              and in-class activities.
            </p>
            <br/><br/>
          </Col>
          <Col md={2} className= "web-only">
          <img src={require('../public/static/logo-penn.png')} style={{display: "block", 
          padding: "5%", height: "10vw", minHeight: "80px"}}alt="Logo WV"/>
          </Col>
        </Row>
        <Row>
          <Col md={2} className= "mobile-only">
          <img src={require('../public/static/logo-unilever.png')} style={{display: "block", 
          padding: "5%", margin: "0 auto", height: "100px"}}alt="Logo WV"/>
          </Col>
          <Col md={3}>
            <h3><b>2019</b></h3>
            <p>
              <b>Finance Intern, Unilever</b><br/>
              <i>May-August</i><br/>
              Developed RateDash, a functional dashboard for 
              automated rate validation
              for the monthly rolling forecast as part of 
              Sales and Operations Planning.
            </p>
            <br/><br/>
          </Col>
          <Col md={2} className= "web-only">
          <img src={require('../public/static/logo-unilever.png')} style={{display: "block", 
          padding: "5%", height: "10vw", minHeight: "80px"}}alt="Logo WV"/>
          </Col>
          <Col md={2} className="web-only"></Col>
          <Col md={2} className= "mobile-only">
          <img src={require('../public/static/logo-tovala.png')} style={{display: "block", 
          padding: "5%", margin: "0 auto", height: "100px"}}alt="Logo WV"/>
          </Col>
          <Col md={3}>
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
          <Col md={2} className= "web-only">
          <img src={require('../public/static/logo-tovala.png')} style={{display: "block", 
          padding: "5%", height: "10vw", minHeight: "80px"}}alt="Logo WV"/>
          </Col>
        </Row>
        <Row>
          <Col md={2} className= "mobile-only">
          <img src={require('../public/static/logo-cni.png')} style={{display: "block", 
          padding: "5%", margin: "0 auto", height: "100px"}}alt="Logo WV"/>
          </Col>
          <Col md={3}>
            <h3><b>2017</b></h3>
            <p>
              <b>Research Intern, CNI (Penn)</b><br/>
              <i>May-August</i><br/>
              Conducted research at the Computational Neuroscience 
              Initiative at Penn.
              Used Deep Learning to infer the architecture of the 
              visual pathway.
            </p>
            <br/><br/>
          </Col>
          <Col md={2} className= "web-only">
          <img src={require('../public/static/logo-cni.png')} style={{display: "block", 
          padding: "5%", height: "10vw", minHeight: "80px"}}alt="Logo WV"/>
          </Col>
          <Col md={2} className="web-only"></Col>
          <Col md={2} className= "mobile-only">
          <img src={require('../public/static/logo-cmu.png')} style={{display: "block", 
          padding: "5%", margin: "0 auto", height: "100px"}}alt="Logo WV"/>
          </Col>
          <Col md={3}>
            <h3><b>2015</b></h3>
            <p>
              <b>Research Intern, Carnegie Mellon University</b><br/>
              <i>June-August</i><br/>
              Using footstep-induced vibrations for occupant monitoring 
              and detection. Helped write 2 papers 
              (publication pending) and created a mounting model to be 
              patented (pending).
            </p>
            <br/><br/>
          </Col>
          <Col md={2} className= "web-only">
          <img src={require('../public/static/logo-cmu.png')} style={{display: "block", 
          padding: "5%", height: "10vw", minHeight: "80px"}}alt="Logo WV"/>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Experience;
