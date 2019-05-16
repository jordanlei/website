import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"

class ContactBanner extends Component {
  
  render() {
    return (
      <div className="dark-container">            
        <div>
        <Row>
          <Col md={4}>
            <h3>
              Let's get in touch
            </h3>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={7}>
            <p>
            If you thought <i>that</i> was fun, wait until you get to 
            know me in person! Feel free to contact me at the reverse 
            of <i>moc.liamg@krow.ielnadroj</i>. 
            You can find me on Facebook or Instagram.
            </p>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default ContactBanner;
