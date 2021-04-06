import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css";
import Fade from 'react-reveal';

class BlogBanner extends Component {
  
  render() {
    return (
      <div className="dark-container" style={{paddingBottom: 2+"%"}}>            
        <div>
        <Row>
          <Col md={4}>
          <Fade bottom duration={5000}>
            <h3>
              Oh geez, 
              another blog
            </h3>
          </Fade>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={7}>
            <p>
            I know what you're thinking. <i>Wow, so original, 
            yet another blog.</i> Which, hey, is totally fair. 
            But if you are as curious about the world as I am, 
            I think you'll enjoy it. Plus, it's called <b>The Sketchpad</b>,
            which you have to admit is a pretty adorable name for a 
            blog. The Sketchpad is really just a way for me to shelf 
            my thoughts - it's like a mental attic for my brain.<br/><br/>
            So go ahead! Pick my brains- maybe you'll find something interesting.
            No promises, though.
            </p>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default BlogBanner;
