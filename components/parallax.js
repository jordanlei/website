import React, { Component } from 'react';

class Parallax extends Component {
    constructor(props){
        super(props); 
        this.items = this.props.items;
    }
  
    componentDidMount(){
        var name  = this.items.name;
        // console.log(document.getElementById(name).offsetTop)
        var offsetTop = 0
        if (document.getElementById(name)){
          offsetTop = document.getElementById(name).offsetTop
        }
        window.addEventListener('scroll', function(event) {
            var xdepth, xmovement, ydepth, i, layer, layers, len, ymovement, topDistance, translate3d;
            topDistance = this.pageYOffset;
            var elementDistance = topDistance - offsetTop
            layers = document.querySelectorAll("[data-type='parallax-" + name + "']");
            for (i = 0, len = layers.length; i < len; i++) {
              layer = layers[i];
              ydepth = layer.getAttribute('ydepth');
              ymovement = -1 * (topDistance + elementDistance * ydepth)
              xdepth = layer.getAttribute('xdepth');
              xmovement = elementDistance * xdepth 
              translate3d = 'translate3d(' + xmovement + 'px ,' + ymovement + 'px, 0)';
              layer.style['-webkit-transform'] = translate3d;
              layer.style['-moz-transform'] = translate3d;
              layer.style['-ms-transform'] = translate3d;
              layer.style['-o-transform'] = translate3d;
              layer.style.transform = translate3d;
            }
        });   
  }
  render() {
    var name = this.items.name;
    var background = this.items.background; 
    var backgroundDepth = this.items.backgrounddepth;
    var layers = this.items.layers.map((i) => {
        return <div className={'layer ' + i.name}
                xdepth= {i.xdepth}
                ydepth= {i.ydepth} 
                data-type={'parallax-'+name} 
                style={{ backgroundImage: "url(" + i.image + ")"}}></div>
    });
    return (
    <div className= "hero">
        <div id={this.items.name} style= {{minHeight: "100vh"}}> 
        <div className= "layer layer-bg" ydepth={backgroundDepth} data-type={'parallax-'+name} style={{backgroundImage: background, zIndex:"-1"}}></div>
        {layers}
        {this.props.children}
        </div>
    </div>
    );
  }
}

export default Parallax;
