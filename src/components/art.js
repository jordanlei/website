import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button } from 'react-bootstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';
import Parallax from './parallax';

class Art extends Component {
  
  render() {
    const items = {
      name : "art-banner",
      background: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
      backgrounddepth: "-0.3",
      layers: [ 
      {image: require("../public/static/art/art-header-1.png"), ydepth: "-0.7", xdepth: "0", name: "layer1"},
      {image: require("../public/static/art/art-header-2.png"), ydepth: "-0.6",  xdepth: "0", name: "layer2"},
      {image: require("../public/static/art/art-header-3.png"), ydepth: "-0.5",  xdepth: "0", name: "layer3"},
      {image: require("../public/static/art/art-header-4.png"), ydepth: "-0.4",  xdepth: "0", name: "layer4"},
      ]
    }

    return (
      <div style={{height: "100vh", zIndex: "-1", color:"rgba(255, 255, 255, 0.7)"}}>
        <Parallax items={items}>
        <Row>
        <Col>
        <div style={{height: "30vh", 
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"}}>
          
        </div>

        <div style={{paddingLeft: "30%", 
                    paddingTop: "15vh",
                    height: "40vh",
                     marginTop: "30vh",  
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))"}}>
          <Fade><h1>ART</h1></Fade>
          <h4>|
              <span className="stdbutton" style={{marginLeft:"12px"}}>
                <a href= {process.env.PUBLIC_URL + "/#/art"} target="_blank">
                VIEW PORTFOLIO
                <img src={require("../images/next.png")} height="40" width="40" style={{marginLeft: "12px", marginTop: "-3px"}}/>
                </a>
              </span>
          </h4>
        </div>
        </Col>
        </Row>
        </Parallax>
      </div>
    );
  }
}

export default Art;
