import React, { Component } from 'react';

class Parallax extends Component {
    constructor(props){
        super(props); 
        this.items = this.props.items;
    }
  
    componentDidMount(){
        const name = this.items.name;
        let offsetTop = 0;
        
        if (document.getElementById(name)){
            offsetTop = document.getElementById(name).offsetTop;
        }
        
        window.addEventListener('scroll', function(event) {
            let xdepth, xmovement, ydepth, i, layer, layers, len, ymovement, topDistance, translate3d;
            topDistance = this.pageYOffset;
            const elementDistance = topDistance - offsetTop;
            layers = document.querySelectorAll("[data-type='parallax-" + name + "']");
            
            for (i = 0, len = layers.length; i < len; i++) {
                layer = layers[i];
                ydepth = layer.getAttribute('ydepth');
                ymovement = -1 * (topDistance + elementDistance * ydepth);
                xdepth = layer.getAttribute('xdepth');
                xmovement = elementDistance * xdepth;
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
        const { name, background, backgrounddepth } = this.items;
        const layers = this.items.layers.map((layer, index) => (
            <div 
                key={index}
                className={'layer ' + layer.name}
                xdepth={layer.xdepth}
                ydepth={layer.ydepth} 
                data-type={'parallax-'+name} 
                style={{ backgroundImage: "url(" + layer.image + ")"}}
            />
        ));
        
        return (
            <div className="hero">
                <div id={name} style={{minHeight: "100vh"}}> 
                    <div 
                        className="layer layer-bg" 
                        ydepth={backgrounddepth} 
                        data-type={'parallax-'+name} 
                        style={{backgroundImage: background, zIndex:"-1"}}
                    />
                    {layers}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Parallax;
