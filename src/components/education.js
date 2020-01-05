import React, { Component } from 'react';
import { Row, Col, Media} from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';

class Education extends Component {
  
  render() {
    return (
      <div className="dark-container">            
        <div>
        <div className= "mobile-only">
        <Row>
          <div className= "banner">
          <Col md={3}>
            <Fade bottom duration={5000}>
              <h3>
                I've learned a thing or two over the past few years
              </h3>
            </Fade>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={7}>
          <Row>
            <Col md={3}>
              <img src={require('../public/static/logo-penn.png')} style={{display: "block", margin:"0 auto", width: "100px", paddingTop: "10%", paddingBottom: "5%"}}alt="Logo Penn"/>
            </Col>
            <Col md={9}>
            <p>
            <b>University of Pennsylvania</b> <br/>
            <b>Jerome Fisher Program in Management and Technology</b> <br/>
            GPA: 3.90,  Class of 2020 <br/>
            Bachelor of Science in Economics, Behavioral Economics, The Wharton School<br/>
            Bachelor of Science in Engineering, Computer Science, School of Engineering and Applied Sciences<br/>
            Dean's List 2016-17, 2017-18, 2018-19<br/>
            <br/>
            </p>
            </Col>
          </Row>
          <Row>
            <Col md={3} className= "mobile-only">
              <img src={require('../public/static/logo-wv.png')} style={{display: "block", margin:"0 auto", width: "100px", paddingTop: "10%", paddingBottom: "5%"}}alt="Logo WV"/>
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
          </Col>
          </div>
        </Row>
        </div>



        <div className= "web-only">
        <Row>
          <Col md={3}>
            <Fade bottom duration={5000}>
              <h3>
                I've learned a thing or two over the past few years
              </h3>
            </Fade>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={7}>
          <Row>
            <Col md={9}>
            <p>
            <b>University of Pennsylvania</b> <br/>
            <b>Jerome Fisher Program in Management and Technology</b> <br/>
            GPA: 3.88,  Class of 2020 <br/>
            Bachelor of Science in Economics, Behavioral Economics, The Wharton School<br/>
            Bachelor of Science in Engineering, Computer Science, School of Engineering and Applied Sciences<br/>
            Dean's List 2016-17, 2017-18, 2018-19<br/>
            <br/>
            </p>
            </Col>
            <Col md={3}>
              <img src={require('../public/static/logo-penn.png')} style={{display: "block", padding: "5%", width: "200px"}}alt="Logo Penn"/>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
            <p>
            <b>Westview High School</b> <br/>
            <b>Jerome Fisher Program in Management and Technology</b> <br/>
            GPA: 4.7,  Class of 2016 <br/>
            Valedictorian, Class Rank 1st of 603<br/>
            National Merit Scholar Finalist, Presidential Scholar Semifinalist
            </p>
            </Col>
            <Col md={3} className>
              <img src={require('../public/static/logo-wv.png')} style={{display: "block", padding: "5%", width: "200px"}}alt="Logo WV"/>
            </Col>
          </Row>
          </Col>

        </Row>
        </div>
        </div>
      </div>
    );
  }
}

export default Education;
