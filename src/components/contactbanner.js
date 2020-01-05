import React, { Component } from 'react';
import { Row, Col, NavLink} from 'reactstrap';
import Fade from 'react-reveal';

class ContactBanner extends Component {
  
  render() {
    return (      
      <section id = "contact">    
        <div style={{height: "80vh", paddingLeft: "20%", paddingRight: "18%", color: "rgba(255, 255, 255, 0.7)"}}>
        <div style= {{height: "40vh"}}></div>
        <Row>
          <Col md={4}>
          <Fade bottom duration={5000}>
            <h3>
              Let's get in touch
            </h3>
            <Row style={{height: "150px"}}>
            <NavLink href="https://www.linkedin.com/in/jordan-lei-782890130/" target="_blank">
            <img src={require('../public/static/logo-linkedin.png')} style={{display: "block", padding: "5%", height: "60px", width: "60px"}}alt="Logo WV"/>
            </NavLink>
            <NavLink href="https://www.facebook.com/jordan.lei.77" target="_blank">
              <img src={require('../public/static/logo-fb.png')} style={{display: "block", padding: "5%", height: "60px"}}alt="Logo WV"/>
            </NavLink>
            <NavLink href="https://www.instagram.com/leijordanart/" target="_blank">
            <img src={require('../public/static/logo-insta.png')} style={{display: "block", padding: "5%", height: "60px", width: "60px"}}alt="Logo WV"/>
            </NavLink>
            </Row>
            
          </Fade>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={7}>
            <p>
            If you thought <i>that</i> was fun, wait until you get to 
            know me in person! Feel free to contact me at the reverse 
            of <i>moc.liamg@krow.ielnadroj</i>. 
            You can also find me on Facebook or Instagram.
            </p>
          </Col>
        </Row>
        </div>
      </section>
    );
  }
}

export default ContactBanner;
