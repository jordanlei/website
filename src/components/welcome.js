import React, { Component } from 'react';
import Parallax from './parallax';

class Welcome extends Component {
  render() {
    const items = {
      name : "welcome-banner",
      background: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
      backgrounddepth: "-0.3",
      layers: [ 
      {image: "../welcome-blue.png", ydepth: "-0.99", xdepth: "-0.35", name: "screen wlayer1"},
      {image: "../welcome-green.png", ydepth: "-1.0", xdepth: "-0.4", name: "screen wlayer2"},
      {image: "../welcome-red.png", ydepth: "-1.01", xdepth: "-0.45", name: "screen wlayer3"},
      ]
    }

    return (
      <div style={{position: "absolute", height: "100vh"}}>
      <Parallax items={items}>
      </Parallax>
      </div>
    );
  }
}

export default Welcome;
