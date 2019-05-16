import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"

class Welcome extends Component {
  
  render() {
    return (
      <div className="welcome-container">            
        <div className= "namecard">
        <Row>
          <Col md={4}>
            <h1>Hey There!<br/> I'm Jordan.</h1>
            <h3>It's Nice to Meet You!</h3>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Welcome;
