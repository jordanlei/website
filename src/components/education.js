import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Education extends Component {
  
  render() {
    return (
      <div className="dark-container" style={{paddingBottom: 2+"%"}}>            
        <Fade><h1>EDUCATION</h1></Fade>
        <Row>
        <Col md={2}>
              <img className="logo-icon" src={require('../images/logo-nyu.jpeg')} style={{display: "block", padding: "5%", width: "100px"}}alt="Logo Penn"/>
        </Col>
        <Col md={9}>
            <p>
            <b>New York University</b> <br/>
            <b>PhD Program in Neuroscience</b> <br/>
            GPA: 3.85<br/>
            Rotation Advisors: Wei Ji Ma, Eero Simoncelli, Robert Froemke <br/>
            <br/>
            </p>
        </Col>
        <Col md={2}>
              <img className="logo-icon" src={require('../public/static/logo-penn.png')} style={{display: "block", padding: "5%", width: "100px"}}alt="Logo Penn"/>
        </Col>
        <Col md={9}>
            <p>
            <b>University of Pennsylvania</b> <br/>
            <b>Master's Program in Computer Science</b> <br/>
            GPA: 4.0, Summa Cum Laude, Class of 2021<br/>
            <b>MSE: Computer Science</b>,  School of Engineering and Applied Sciences<br/>
            Thesis: “Object-Based Attention Through Internal Gating”<br/>
            Advisor: Konrad Kording <br/>
            <br/>
            </p>
        </Col>
        <Col md={2}>
              <img className="logo-icon" src={require('../public/static/logo-penn.png')} style={{display: "block", padding: "5%", width: "100px"}}alt="Logo Penn"/>
        </Col>
        <Col md={9}>
            <p>
            <b>University of Pennsylvania</b> <br/>
            <b>Jerome Fisher Program in Management and Technology</b> <br/>
            GPA: 3.88, Summa Cum Laude, Class of 2020 <br/>
            <b>BS in Economics: Operations, Informations, and Decisions</b>, The Wharton School<br/>
            <b>BSE: Computer Science</b>,  School of Engineering and Applied Sciences<br/>
            Dean's List 2016-17, 2017-18, 2018-19<br/>
            <br/>
            </p>
        </Col>
        <Col md={2} className>
              <img className="logo-icon" src={require('../public/static/logo-wv.png')} style={{display: "block", padding: "5%", width: "100px"}}alt="Logo WV"/>
        </Col>
        <Col md={9}>
            <p>
            <b>Westview High School</b> <br/>
            <b>Jerome Fisher Program in Management and Technology</b> <br/>
            GPA: 4.7,  Class of 2016 <br/>
            Valedictorian, Class Rank 1st of 603<br/>
            National Merit Scholar Finalist, Presidential Scholar Semifinalist
            </p>
        </Col>
        </Row>

      </div>
    );
  }
}

export default Education;
