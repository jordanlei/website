import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Landing extends Component {
  
  render() {
    return (
      <div className="landing-container">
        <Row>
          <Col md={8} className="welcome-container">
            <p>Hello World</p>
          </Col>
          <Col md={4} className="login-container">
            <p>This is a panel.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
