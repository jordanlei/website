import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import "../css/welcome.css"
import Fade from 'react-reveal';
import Parallax from './parallax';

class Welcome extends Component {
  render() {
    const items = {
      name : "welcome-banner",
      background: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
      backgrounddepth: "-0.3",
      layers: [ 
      {image: require("../images/welcome-blue.png"), ydepth: "-0.99", xdepth: "-0.35", name: "welcomelayer wlayer1"},
      {image: require("../images/welcome-green.png"), ydepth: "-1.0", xdepth: "-0.4", name: "welcomelayer wlayer2"},
      {image: require("../images/welcome-red.png"), ydepth: "-1.01", xdepth: "-0.45", name: "welcomelayer wlayer3"},
      ]
    }

    

    return (
      <Parallax items={items}>
      <div style={{height: "100vh"}}>            
        <div className="welcome-title welcome-namecard">
            <h1>JORDAN LEI</h1>
            <h3>Neuroscience | Machine Learning | Art</h3>
        </div>
      </div>
      </Parallax>
    );
  }
}

export default Welcome;
