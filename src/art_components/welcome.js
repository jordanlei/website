import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import '../css/parallax.css';
import '../css/art_welcome.css';
import Fade from 'react-reveal';

class ArtWelcome extends Component {
  componentDidMount(){
        window.addEventListener('scroll', function(event) {
            var depth, i, layer, layers, len, movement, topDistance, translate3d;
            topDistance = this.pageYOffset;
            var elementDistance = topDistance - document.getElementById("art-welcome-component").offsetTop
            layers = document.querySelectorAll("[data-type='parallax']");
            for (i = 0, len = layers.length; i < len; i++) {
              layer = layers[i];
              depth = layer.getAttribute('data-depth');
              movement = -1 * (topDistance + elementDistance * depth) 
              translate3d = 'translate3d(' + 0 + ',' + movement + 'px, 0)';
              layer.style['-webkit-transform'] = translate3d;
              layer.style['-moz-transform'] = translate3d;
              layer.style['-ms-transform'] = translate3d;
              layer.style['-o-transform'] = translate3d;
              layer.style.transform = translate3d;
            }
        });   
  }
  render() {
    return (
    <div>
        <section id = "art-welcome">
        <div id='art-welcome-component' style= {{minHeight: "100vh"}}>
        <div class='layer-bg layer' data-depth='-0.90' data-type='parallax'></div>
        <div class='layer-1 layer' data-depth='-0.90' data-type='parallax'></div>
        <div class='layer-2 layer' data-depth='-0.85' data-type='parallax'></div>
        <div class='layer-3 layer' data-depth='-0.80' data-type='parallax'></div>
        <div class='layer-4 layer' data-depth='-0.75' data-type='parallax'></div>   
        
          <div className= "namecard">
          <Row>
            <Col md={8} className= "welcome-title">
            <Fade bottom duration= {5000}>
              <h1>PORTFOLIO</h1>
            </Fade>
            </Col>
          </Row>
          </div>
        </div>
        <div id='welcome-mobile'></div>
        </section>
    </div>
    );
  }
}

export default ArtWelcome;
