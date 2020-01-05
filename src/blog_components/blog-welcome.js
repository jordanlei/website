import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from './parallax';

class BlogWelcome extends Component {
  render() {
    const items = {
      name : "blog-welcome",
      background: "linear-gradient(rgba(0, 52, 141, 1), rgba(0, 0, 0, 1), rgba(171, 66, 0, 1))",
      backgrounddepth: "-0.3",
      layers: [ 
      {image: require("../public/static/blog/background-1.svg"), depth: "-0.90", name: "layer1"},
      {image: require("../public/static/blog/background-2.svg"), depth: "-1.2",  name: "layer2"},
      {image: require("../public/static/blog/background-2.svg"), depth: "-1.0",  name: "layer3"},
      {image: require("../public/static/blog/background-2.svg"), depth: "-0.8",  name: "layer4"},
      ]
    }

    return (
    <div>
        <section id = "blog-welcome">
        <Parallax items = {items}>
        <div className= "namecard">
        <Row>
          <Col md={8} className= "welcome-title">
          <Fade bottom duration= {5000}>
            <h1>BLOG</h1>
          </Fade>
          </Col>
        </Row>
        </div>
        </Parallax>
        </section>
    </div>
    );
  }
}

export default BlogWelcome;
