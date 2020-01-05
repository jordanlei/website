import React, { Component } from 'react';
import { Row, Col, NavLink} from 'reactstrap';
import '../css/standard.css';
import '../css/art_component.css'
import Fade from 'react-reveal';

class ArtComponent extends Component {
  componentDidMount(){
    window.addEventListener('scroll', function(event) {
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        var elementDistance = topDistance - document.getElementById("art-component").offsetTop
        layers = document.querySelectorAll("[data-type='parallax2']");
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
        <div id = "art-component" style= {{minHeight: "230vh"}}>
          <div class='layer-bg layer' data-depth='-0.5' data-type='parallax2'></div>
          <div class='layer-1 layer' data-depth='-0.6' data-type='parallax2'></div>
          <div class='layer-2 layer' data-depth='-0.4' data-type='parallax2'></div>
          <div class='layer-3 layer' data-depth='-0.1' data-type='parallax2'></div>
          <div class='layer-4 layer' data-depth='0' data-type='parallax2'></div> 
          <div className= "web-only">
            <section id = "artwork">
            <div style= {{height: "125vh", position: "relative", margin: "0 auto"}}>
              <div className = "art-title" style={{position: "absolute", top: "40vh", left: "37vw"}}>
                <div>
                  <Fade bottom duration= {5000}>
                        <NavLink href= "/art">VIEW MY PORTFOLIO</NavLink>
                  </Fade>
                </div>
              </div> 
            </div>
            </section>  
            <section id= "blog">
              <div style= {{height: "105vh", position: "relative", margin: "0 auto"}}>
                <div className = "art-title" style={{position: "absolute", top: "40vh", left: "37vw"}}>
                  <div>
                  <Fade bottom duration= {5000}>
                        <NavLink href= "/blog">VIEW MY BLOG</NavLink>
                  </Fade>
                  </div>
                </div> 
              </div>  
            </section> 
          </div>  
          <div className= "mobile-only">
            <section id = "artwork">
            <div style= {{height: "125vh", position: "relative", margin: "0 auto"}}>
              <div className = "art-title" style={{position: "absolute", top: "50vh", left: "8vw"}}>
                <div>
                  <Fade bottom duration= {5000}>
                        <NavLink href= "/art">VIEW MY PORTFOLIO</NavLink>
                  </Fade>
                </div>
              </div> 
            </div>
            </section>  
            <section id= "blog">
              <div style= {{height: "105vh", position: "relative", margin: "0 auto"}}>
                <div className = "art-title" style={{position: "absolute", top: "40vh", left: "8vw"}}>
                  <div>
                  <Fade bottom duration= {5000}>
                        <NavLink href= "/blog">VIEW MY BLOG</NavLink>
                  </Fade>
                  </div>
                </div> 
              </div>  
            </section>  
          </div>  

        </div>
        <div id='hero-mobile'></div>
    </div>
    );
  }
}

export default ArtComponent;
